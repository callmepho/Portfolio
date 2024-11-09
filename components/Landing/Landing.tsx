import React from "react";
import classes from "./Landing.module.scss";
import Typewriter from "../Typewriter/Typewriter";

const Landing = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.name}>Minh Anthony Tat</h1>
      <div>
        <h3 className={classes.subheading}>
          <Typewriter text="Junior Software Developer" />
        </h3>
      </div>
    </div>
  );
};

export default Landing;
