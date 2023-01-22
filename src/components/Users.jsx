import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContaxtHook from "../hook/ContaxtHook";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

const Users = () => {
  const [UserData, setUserData] = useState();
  const { data } = useContext(ContaxtHook);
  const { id } = useParams();
  const navigate = useNavigate();

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

  if (UserData?.length === 0) {
    return navigate("/users");
  }

  return (
    <div>
      {UserData &&
        UserData.map((item) => {
          return (
            <div key={item?.id}>
              <h1>{item?.name}</h1>
              <p>{item?.phone}</p>
              <p>{item?.email}</p>
              <p>{item?.address}</p>
              <UserCard items={item} />
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
