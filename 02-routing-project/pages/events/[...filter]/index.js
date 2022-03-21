import { useRouter } from "next/router";

import EventList from "../../../components/events/EventList";
import { getFilteredEvents } from "../../../dummy-data";

export default function FilteredEvents() {
  const router = useRouter();
  const filter = router.query.filter;
  if (!filter) {
    return <p className="center">Loading...</p>;
  }

  const dateFilter = {
    year: parseInt(filter[0]),
    month: parseInt(filter [1]),
  };

  const events = getFilteredEvents(dateFilter)

  console.log(events)


  return <EventList events={events} />;
}
