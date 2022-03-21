import Image from "next/image";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/site/webpick.jpg' alt='An image showing me' width={400} height={400} />
      </div>
      <h1>Hi, I'm Juan</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
}
