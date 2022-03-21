import Image from "next/image";

import Button from "../UI/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

import classes from "./EventItem.module.css";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedLocation = location.replace(",", "\n");

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={250} height={140} />
      {/* <img src={`/${image}`} alt={title}/> */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
            <DateIcon />
          </div>
          <div className={classes.address}>
            <address>{formatedLocation}</address>
            <AddressIcon />
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>See Details</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
