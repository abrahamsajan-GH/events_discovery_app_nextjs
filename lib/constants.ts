export interface Event {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    image: "/images/event1.png",
    title: "Next.js Conf 2026",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA & Online",
    date: "Oct 25, 2026",
    time: "09:00 AM"
  },
  {
    image: "/images/event2.png",
    title: "React Advanced London",
    slug: "react-advanced-london-2026",
    location: "London, UK & Online",
    date: "Nov 12, 2026",
    time: "10:00 AM"
  },
  {
    image: "/images/event3.png",
    title: "JSWorld Conference 2026",
    slug: "jsworld-conference-2026",
    location: "Amsterdam, Netherlands",
    date: "Feb 18, 2026",
    time: "09:30 AM"
  },
  {
    image: "/images/event4.png",
    title: "Vercel Ship 2026",
    slug: "vercel-ship-2026",
    location: "New York, NY",
    date: "May 14, 2026",
    time: "08:30 AM"
  },
  {
    image: "/images/event5.png",
    title: "Node Congress 2026",
    slug: "node-congress-2026",
    location: "Berlin, Germany & Online",
    date: "Apr 08, 2026",
    time: "09:00 AM"
  },
  {
    image: "/images/event6.png",
    title: "DevOps World 2026",
    slug: "devops-world-2026",
    location: "Austin, TX",
    date: "Sep 17, 2026",
    time: "08:00 AM"
  }
];
