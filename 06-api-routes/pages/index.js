import { useRef, useState } from "react";

function HomePage() {
  const [time, setTime] = useState();
  const emailRef = useRef();
  const textRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const text = textRef.current.value;

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        text: text,
      }),
    });

    const data = await response.json();
    if (data) {
      setTime(new Date(data.date).toLocaleTimeString());
    }
  };

  return (
    <div>
      {time && <h1>Succesfully submited at {time}</h1>}
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" ref={textRef} />
        </div>
        <button>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
