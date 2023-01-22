import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContaxtHook from "../hook/ContaxtHook";
import ContactListItem from "./ContactListItem";

const ContactList = () => {
  const { data, setdata } = useContext(ContaxtHook);

  return (
    <>
      {data.length === 0 ? (
        <h1 className="text-center text-base">No Contact List To Display</h1>
      ) : (
        data &&
        data.map((item) => {
          return (
            <Link to={("/users/", item.id)} key={item.id}>
              <ContactListItem item={item} setdata={setdata} data={data} />
            </Link>
          );
        })
      )}
    </>
  );
};

export default ContactList;
