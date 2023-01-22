import React, { useState } from "react";
import { Button, TextField, Alert } from "@mui/material";
import { useContext } from "react";
import ContaxtHook from "../hook/ContaxtHook";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [test, settest] = useState(false);
  const { data, setdata } = useContext(ContaxtHook);

  const navigate = useNavigate();

  const ResetFields = () => {
    setname("");
    setnumber("");
    setemail("");
    setaddress("");
  };

  const submitButton = (name, number) => {
    if (name === "" || number === "") {
      settest(true);
      return;
    }
    const newData = {
      id: nanoid(),
      name: name,
      email: email,
      phone: number,
      address: address,
    };
    setdata([...data, newData]);
    ResetFields();
    navigate("/users");
  };

  return (
    <div className="gap-4 grid grid-cols-none sm:grid-cols-2 py-2">
      {test && (
        <Alert className="sm:col-span-2" variant="outlined" severity="error">
          Please fill properly
        </Alert>
      )}

      <TextField
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
        id="standard-basic"
        label="Enter Name"
        variant="filled"
      />
      <TextField
        value={email}
        onChange={(e) => setemail(e.target.value)}
        type="email"
        label="Enter Email"
        variant="filled"
      />

      <TextField
        value={number}
        onChange={(e) => setnumber(e.target.value)}
        type="number"
        id="standard-basic"
        label="Enter Number"
        variant="filled"
        maxLength={10}
        InputProps={{ inputProps: { min: 0, max: 10 } }}
      />
      <TextField
        value={address}
        onChange={(e) => setaddress(e.target.value)}
        type="text"
        label="Enter Address"
        variant="filled"
      />

      <Button
        className="sm:col-span-2"
        onClick={() => submitButton(name, number)}
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
};

export default AddContact;
