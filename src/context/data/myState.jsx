import { useState } from "react";
import MyContext from "./myContext";

function myState({ children }) {
  const [mode, setMod] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      setMod("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMod("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <MyContext.Provider value={{ mode, toggleMode }}>
        {children}
      </MyContext.Provider>
    </>
  );
}
export default myState;
