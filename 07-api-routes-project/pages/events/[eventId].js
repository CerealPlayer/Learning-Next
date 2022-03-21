import { Fragment } from 'react';
import Head from 'next/head';

import { fetchById, fetchFeatured, fetchComments } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Comments from '../../components/input/comments';

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta
          name='description'
          content={event.description}
        />
      </Head>
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
      <Comments eventId={event._id} comments={props.comments} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const fetchedComments = await fetchComments(eventId);
  const comments = fetchedComments.map(item => ({
    id: item._id.toString(),
    name: item.name,
    text: item.text,
  }))

  const event = await fetchById(eventId);

  return {
    props: {
      selectedEvent: event,
      comments: comments
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const events = await fetchFeatured();

  const paths = events.map(event => ({ params: { eventId: event._id } }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
}

export default EventDetailPage;
