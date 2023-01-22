import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContaxtHook from "../hook/ContaxtHook";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Users = () => {
  const [UserData, setUserData] = useState();
  const { data } = useContext(ContaxtHook);
  const { id } = useParams();

  useEffect(() => {
    const FilterFun = () => {
      const filterData = data.filter((item) => {
        const Response = id === item.id;
        return Response;
      });
      setUserData(filterData);
    };
    return FilterFun();
  }, []);

  console.log(UserData, "useDta");

  return (
    <div>
      {UserData &&
        UserData.map((item) => {
          return (
            <div key={item?.id}>
              <h1>{item?.name}</h1>
              <p>{item?.phone}</p>
            </div>
          );
        })}
      <Button variant="contained">
        <Link to="/users">Back</Link>
      </Button>
    </div>
  );
};

export default Users;
