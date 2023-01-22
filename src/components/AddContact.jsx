import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import ContaxtHook from "../hook/ContaxtHook";
import { nanoid } from "nanoid";

const AddContact = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const { data, setdata } = useContext(ContaxtHook);

  const submitButton = (name, number) => {
    if (name === "" || number === "") {
      alert("sorry please fill all");
      return;
    }
    const newData = {
      id: nanoid(),
      name: name,
      phone: number,
    };
    setdata([...data, newData]);
    setname("");
    setnumber("");
  };

  return (
    <div className="flex gap-4 flex-col py-2">
      <TextField
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
        id="standard-basic"
        label="Enter Name"
        variant="filled"
      />
      <TextField
        value={number}
        onChange={(e) => setnumber(e.target.value)}
        type="number"
        id="standard-basic"
        label="Enter Number"
        variant="filled"
        inputProps={{ maxLength: 10 }}
      />
      <Button onClick={() => submitButton(name, number)} variant="contained">
        Submit
      </Button>
    </div>
  );
};

export default AddContact;
