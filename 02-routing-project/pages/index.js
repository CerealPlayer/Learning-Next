import { useRouter } from 'next/router';

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
import EventSearch from "../components/events/EventSearch";

export default function Home() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  const filterHandler = (year, month) => {
    router.push({
      pathname: '/events/[year]/[month]',
      query: {year: year, month: month}
    });
  }

  return (
    <div>
      <EventSearch onFilterEvents={filterHandler} />
      <EventList events={featuredEvents} />
    </div>
  );
}
