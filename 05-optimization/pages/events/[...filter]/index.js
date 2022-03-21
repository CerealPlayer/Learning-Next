import EventList from "../../../components/events/EventList";
import { fetchFiltered } from "../../../utils/database";

export default function FilteredEvents(props) {
  return <EventList events={props.events} />;
}

export async function getStaticProps(context) {
  const filter = {
    year: parseInt(context.params.filter[0]),
    month: parseInt(context.params.filter[1]),
  };
  const events = await fetchFiltered(filter);
  return {
    props: {
      events: events,
    },
  };
}

// Tiene más sentido SSR con getServerSideProps -> solo pre renderizamos una página -> 
// existen muchos filtros -> la mayoría están siendo generados para cada request.

export function getStaticPaths() {
  return {
    paths: [
      {
        params: { filter: ["2021", "5"] },
      },
    ],
    fallback: 'blocking',
  };
}
