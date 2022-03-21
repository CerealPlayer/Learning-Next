import { Fragment } from "react";

import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";

import { fetchById, fetchFeatured } from "../../utils/database";

export default function EventDetail(props) {
  const { event } = props;

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const id = context.params.eventId;
  const event = await fetchById(id);
  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths() {
  // En una aplicación real -> muchos eventos -> solo pre renderizamos los más visitados
  const events = await fetchFeatured();
  const paths = events.map((event) => ({
    params: { eventId: event._id },
  }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
}
