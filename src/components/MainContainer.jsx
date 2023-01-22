import { Container } from "@mui/material";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Users from "./Users";

const MainContainer = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/addcontact" element={<AddContact />} />
          <Route path="/users" element={<ContactList />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </Container>
    </>
  );
};

export default MainContainer;
