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
          return <UserCard items={item} key={item?.id} />;
        })}
    </div>
  );
};

export default Users;
