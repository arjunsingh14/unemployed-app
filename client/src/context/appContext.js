import React, { useState, useContext, useReducer } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
import reducer from "./Reducer";

const initialState = {
  name: "",
  email: "",
  password: "",
  isUser: false,
  showAlert: false,
};


const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const displayAlert = () => {
        dispatch({type:DISPLAY_ALERT})
        clearAlert();
    }
    const clearAlert = () => {
        setTimeout(() => dispatch({type:CLEAR_ALERT}), 3000) 
    }
    return(
        <AppContext.Provider value={{...state, displayAlert, clearAlert}}>
            {children}
        </AppContext.Provider>
    )
} 

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, initialState, useAppContext}