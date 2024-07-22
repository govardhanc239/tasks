//import { REGISTER_USER,LOGIN_USER,SET_FORM_DATA } from "./actionsTypes";

export const  SET_FORM_DATA ='SET_FORM_DATA';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_LOCATION = 'ADD_LOCATION';
export const ADD_EVENT = 'ADD_EVENT';
//actions
export const registerUser = (userData) => ({
    type: REGISTER_USER,
    payload: userData,
  });
  
  export const loginUser = (credentials) => ({
    type: LOGIN_USER,
    payload:credentials,
  });

  export const setFormData = (formData) => ({
    type: SET_FORM_DATA,
    payload: formData,
  });

  export const addLocation =(data)=>({
    type : ADD_LOCATION,
    payload : data,
  });

  export const addEvent =(data)=>({
    type : ADD_LOCATION,
    payload : data,
  });
   