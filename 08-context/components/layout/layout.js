import { Fragment } from "react";
import { useContext } from "react";
import Notification from "../ui/Notification";
import MainHeader from "./main-header";

import NotiContext from "../../store/notiContext";

function Layout(props) {
  const ctx = useContext(NotiContext);

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {ctx.notification && (
        <Notification
          title={ctx.notification.title}
          message={ctx.notification.message}
          status={ctx.notification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
