import { useRef } from "react";

import classes from "./profile-form.module.css";

function ProfileForm() {
  const newRef = useRef();
  const oldRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    const newPass = newRef.current.value;
    const oldPass = oldRef.current.value;

    const req = await fetch("/api/user/change-password", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        oldPassword: oldPass,
        newPassword: newPass,
      }),
    });

    const res = await req.json();

    console.log(res);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
