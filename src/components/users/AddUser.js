import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [userData, setUserData] = useState([["lav", 21]]);
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData((prevData) => {
      return [...prevData, [userName, age]];
    });
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Non Empty Input Values",
      });
      setOpen(true);
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please Enter age Greater Than Zero",
      });
      setOpen(true);
    }
    props.setUserList(userData);
    console.log(userData);
    setUserName("");
    setAge("");
  };
  function handleNameChange(event) {
    setUserName(event.target.value);
  }

  return (
    <div>
      {open && (
        <ErrorModal
          message={error.message}
          title={error.title}
          handleClick={setOpen}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={userName}
            onChange={handleNameChange}
          />

          <label htmlFor="age">age (years)</label>

          <input
            type="number"
            id="age"
            placeholder="Enter Your Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />

          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
