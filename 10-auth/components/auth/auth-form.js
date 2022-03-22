import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import classes from "./auth-form.module.css";

function AuthForm() {
  const nameRef = useRef();
  const mailRef = useRef();
  const passRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(e) {
    e.preventDefault();
    const mail = mailRef.current.value;
    const pass = passRef.current.value;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: mail,
        pass: pass,
      });

      if(!result.error) {
        router.replace('/profile');
      }

    } else {
      const name = nameRef.current.value;
      const req = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          name: name,
          pass: pass,
        }),
      });

      const res = await req.json();
      console.log(res.message);
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="name">Your Username</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={mailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
