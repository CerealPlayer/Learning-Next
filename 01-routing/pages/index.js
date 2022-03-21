import { Fragment } from "react";
import Link from 'next/link';

const Main = () => {
  return (
    <Fragment>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Main;
