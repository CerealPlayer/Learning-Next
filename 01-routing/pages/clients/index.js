import { Fragment } from "react";
import Link from "next/link";

const Clients = () => {
  return (
    <Fragment>
      <h1>Clients</h1>
      <ul>
        <li>
          <Link href="/clients/alba">Alba</Link>
        </li>
        <li>
          <Link href="/clients/juan">Juan</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Clients;
