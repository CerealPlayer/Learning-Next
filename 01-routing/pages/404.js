import { Fragment } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  const takeBackHandler = () => {
    router.back();
  }
  return <Fragment>
    <h1>Error 404 : Page Not Found</h1>
    <button onClick={takeBackHandler}>Take me back</button>
  </Fragment>
}

export default NotFound;