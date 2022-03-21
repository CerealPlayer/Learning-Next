import { Fragment } from 'react';
import { useRouter } from 'next/router'; 

const Client = () => {
  const router = useRouter();
  const client = router.query.id;
  const openProjectsHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id : 'juan', clientProjectId : 'hey'}
    });
  }
  return (
    <Fragment>
      <h1>Especific Client</h1>
      <p>Client id: {client}</p>
      <button onClick={openProjectsHandler}>See project</button>
    </Fragment>
  )
}

export default Client;