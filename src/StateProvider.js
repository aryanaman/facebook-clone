import React, { createContext, useContext, useReducer } from "react";

//preparing the datalayer
export const StateContext = createContext();

/*
Hire order component
we will be using this to wrap our app
*/
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//to pull something from datalayer
export const useStateValue = () => useContext(StateContext);
