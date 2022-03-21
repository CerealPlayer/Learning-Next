import { useRef, useState } from "react";

import Notification from "../ui/notification";

import classes from "./ContactForm.module.css";

export default function ContactForm() {
  const [reqStatus, setReqStatus] = useState();

  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    setReqStatus("pending");

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const msg = msgRef.current.value;

    const req = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        msg: msg,
      }),
    });

    if (req.status === 201) {
      setReqStatus("success");
    }
  };

  let notiData;

  if (reqStatus === "pending") {
    notiData = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way...",
    };
  }

  if (reqStatus === "success") {
    notiData = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Let's contact</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" ref={msgRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notiData && (
        <Notification
          status={notiData.status}
          title={notiData.title}
          message={notiData.message}
        />
      )}
    </section>
  );
}
