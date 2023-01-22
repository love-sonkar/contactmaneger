import React, { useContext } from "react";
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
            <ContactListItem
              key={item.id}
              item={item}
              setdata={setdata}
              data={data}
            />
          );
        })
      )}
    </>
  );
};

export default ContactList;
