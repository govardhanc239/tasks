//import { REGISTER_USER,LOGIN_USER,SET_FORM_DATA } from "./actionsTypes";
export const  SET_FORM_DATA ='SET_FORM_DATA';

//action types
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
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
   