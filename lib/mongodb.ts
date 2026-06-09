import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Interface representing the cached Mongoose connection object.
 * Declaring global type definitions prevents TypeScript compile errors.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the global Node.js namespace to include our mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

/**
 * In development, Next.js uses hot reloading where modules are rebuilt on
 * every file save. This creates multiple concurrent database connections.
 * Caching the connection on the global object prevents this behavior.
 */
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

const cached = global.mongoose!;

async function dbConnect(): Promise<typeof mongoose> {
  // If connection is already established, return it immediately
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection promise is not already in flight, create one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    // Wait for the connection promise to resolve
    cached.conn = await cached.promise;
  } catch (error) {
    // If connection fails, clear the promise cache so the next request can retry
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default dbConnect;
