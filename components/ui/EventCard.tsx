import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image
        src={image}
        width={410}
        height={300}
        alt="title"
        className="poster"
      />

      <div className="flex flex-row gap-4">
        <Image src={"/icons/pin.svg"} width={14} height={14} alt="location" />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="datetime">
        <Image src={"/icons/calendar.svg"} width={14} height={14} alt="date" />
        <p>{date}</p>
      </div>
      <div className="datetime">
        <Image src={"/icons/clock.svg"} width={14} height={14} alt="date" />
        <p>{time}</p>
      </div>
    </Link>
  );
};

export default EventCard;
