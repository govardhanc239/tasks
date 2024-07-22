import { REGISTER_USER,LOGIN_USER } from '../actions/actionsTypes';
const initialState = {
  users: [],
  locations : [],
  loggedInUser: null,
  status : false
};
const userReducer = (state = initialState, action) => {  
  switch (action.type) {
    case REGISTER_USER:
      console.log('REGISTER_USER action dispatched'); 
      console.log(action.payload); 
      return{
        ...state,
       users : [...state.users, action.payload]
      } 
      case LOGIN_USER :
        const {email,password} = action.payload;
        const user = state.users.find(user=>user.email===email && user.password===password)
        console.log("user is",user)
        console.log("users" ,state.users)
        return {
          ...state,
          loggedInUser : user ? user : null,
          status : !!user
        }  
      
    default:
      return state;
  }
};

export default userReducer;
