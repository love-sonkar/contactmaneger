import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ContaxtHook from "../hook/ContaxtHook";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Users = () => {
  const { data, setdata } = useContext(ContaxtHook);
  const { id } = useParams();
  console.log(id);

  const fun = () => {
    data.map((items) => {
      items.filter((item) => item.id.indexOf(id) === 1);
    });

    return fun();
  };

  console.log(fun);

  return (
    <div>
      {id}
      <Button variant="contained">
        <Link to="/users">Back</Link>
      </Button>
    </div>
  );
};

export default Users;
