import React from "react";
import ContactState from "./hook/ContactState";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <>
      <ContactState>
        <MainContainer />
      </ContactState>
    </>
  );
};

export default App;
