import React from "react";
import Card from "./Card";
import Button from "./button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={() => props.handleClick(false)}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
