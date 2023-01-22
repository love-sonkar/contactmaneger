import React from "react";
import { Button } from "@mui/material";

const Model = ({ items, heading, hide, DeleteBtn }) => {
  const CancleBtn = () => {
    hide(false);
  };

  return (
    <div className="h-full w-full z-10 inset-0 px-4 absolute backdrop-blur-md flex items-center justify-center">
      <div className="border bg-gray-300 p-5 rounded-md capitalize">
        <h1 className="my-3 ">{heading}</h1>
        <div className="flex justify-between items-center pt-4">
          <Button
            onClick={CancleBtn}
            size="small"
            variant="outlined"
            color="success"
          >
            Cancle
          </Button>
          <Button
            onClick={() => DeleteBtn(items)}
            variant="contained"
            size="small"
            color="error"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Model;
