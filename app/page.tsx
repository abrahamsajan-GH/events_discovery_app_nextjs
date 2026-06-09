import EventCard from "@/components/ui/EventCard";
import ExploreButton from "@/components/ui/ExploreButton";
import { events } from "@/lib/constants";

export default function Home() {
  return (
    <section className="">
      <h1 className="text-center">
        The Hub for every Dev<br></br>Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups and Conferences, All in One Place
      </p>

      <ExploreButton />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {events.map((e) => (
            <li key={e.title}>
              <EventCard {...e} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
