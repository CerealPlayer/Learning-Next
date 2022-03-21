import { useRouter } from "next/router";

import EventList from "../components/events/EventList";
import EventSearch from "../components/events/EventSearch";

import { fetchFeatured } from "../utils/database";

export default function Home(props) {
  const router = useRouter();

  const filterHandler = (year, month) => {
    router.push({
      pathname: "/events/[year]/[month]",
      query: { year: year, month: month },
    });
  };

  return (
    <div>
      <EventSearch onFilterEvents={filterHandler} />
      <h1 style={{textAlign: 'center'}}>Featured</h1>
      <EventList events={props.data} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchFeatured();
  return {
    props: {
      data: data
    }
  }
}
