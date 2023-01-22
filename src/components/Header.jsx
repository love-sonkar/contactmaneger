import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-500 p-2 text-center ">
      <p className="text-2xl text-white pointer">logo</p>
      <div className="flex gap-2 capitalize text-white">
        <Link to="/addcontact">addcontact</Link>
        <Link to="/users">list</Link>
      </div>
    </div>
  );
};

export default Header;
