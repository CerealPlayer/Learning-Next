import { useRef, useState, useContext } from "react";
import notiContext from "../../store/notiContext.js";

import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const ctx = useContext(notiContext);
  const [response, setResponse] = useState("");
  const emailRef = useRef();

  async function registrationHandler(event) {
    event.preventDefault();

    ctx.showNotification({
      title: 'Enviando información',
      message: 'Estamos registrando tu email',
      status: 'pending'
    });

    // fetch user input (state or refs)

    const email = emailRef.current.value;
    // send valid data to API

    const req = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    if (req.status === 201) {
      const response = await req.json();
      setResponse(response.email);
      emailRef.current.value = "";
      ctx.showNotification({
        title: 'Éxito',
        message: 'Tu email ha sido registrado correctamente.',
        status: 'success'
      });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
