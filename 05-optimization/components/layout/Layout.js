import { Fragment } from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}
