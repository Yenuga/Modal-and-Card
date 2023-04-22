import React from "react";
import Card from "../UI/Card";
import classes from "./userlist.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={Math.random()}>
            {user[0]} is {user[1]} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
