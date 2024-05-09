import { REGISTER_USER } from "../actions";

const initialState ={
    users :[]
}
    const rootReducer =(state= initialState,action) =>{
        switch(action.type){
          case REGISTER_USER :
            return{
                ...state,
                users :[...state.users,action.payload]
            }
            default :
             return state;
        }
    }
export default rootReducer;