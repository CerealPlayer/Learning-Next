import { fetchAll } from "../../utils/database";
import EventList from "../../components/events/EventList";

export default function Events(props) {
  const { events } = props;

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await fetchAll();

  return {
    props: {
      events: events,
    },
  };
}
