import React, { createContext, useState, useContext } from "react";
import Component2 from "./Component2";

 export const userContext = createContext();

export default function Component1() {
  let [user, setUser] = useState("Aditya kumar singh");
  return (
    <userContext.Provider value={user}>
      <h1>Hello {user} from Component1</h1>
      <Component2  />
    </userContext.Provider>
  );
}
