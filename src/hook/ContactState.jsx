import ContaxtHook from "./ContaxtHook";
import UseLocalStorage from "./UseLocalStorage";

const ContactState = (props) => {
  const [data, setdata] = UseLocalStorage("list", []);

  return (
    <ContaxtHook.Provider value={{ data, setdata }}>
      {props.children}
    </ContaxtHook.Provider>
  );
};

export default ContactState;
