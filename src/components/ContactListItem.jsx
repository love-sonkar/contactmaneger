import { Avatar, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import Model from "./models/Model";

const ContactListItem = ({ item, setdata, data }) => {
  const [IsShowing, setIsShowing] = useState(false);

  const Open = () => {
    setIsShowing(true);
  };

  const DeleteBtn = (item) => {
    setdata(() => {
      return data.filter((e) => {
        return e !== item;
      });
    });
    setIsShowing(false);
  };

  return (
    <div>
      {IsShowing && (
        <Model
          DeleteBtn={DeleteBtn}
          items={item}
          hide={setIsShowing}
          heading="Are You Sure You Want To Delete"
        />
      )}
      <div className="flex items-center justify-between my-2 border-b-2 border-gray-100 py-1 w-full hover:bg-gray-100 rounded">
        <Link
          to={"/users/" + item.id}
          className="flex items-center px-1 w-full"
        >
          <Avatar className="mr-2 capitalize">{item.name.slice(0, 1)}</Avatar>
          <div>
            <h1 className="text-base capitalize break-all">{item.name}</h1>
            <p className="text-xs mt-1 ">{item.phone}</p>
          </div>
        </Link>
        <Tooltip title="Delete">
          <IconButton onClick={Open}>
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default ContactListItem;
