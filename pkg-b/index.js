import { createContext, useContext } from "react";

const context = createContext("Hello world");

export const useMyContext = () => {
  const value = useContext(context);
  console.log(value);
};
