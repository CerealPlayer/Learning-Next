import Image from "next/image";

import classes from "./PostHeader.module.css";

export default function PostHeader(props) {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt="Post image" width={500} height={500} />
    </header>
  );
}
