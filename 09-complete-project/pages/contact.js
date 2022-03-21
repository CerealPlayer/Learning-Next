import Head from 'next/head';
import { Fragment } from "react";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact me!</title>
        <meta name="description" content="Contact me!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
