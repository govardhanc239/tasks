import { ADD_EVENT } from "../actions";


const initialState = {
    events : [],
};

const eventReducer = (state = initialState,action) => {
       switch(action.type) {
        case ADD_EVENT : 
        console.log(action.payload)
        return {
            ...state,
            events : [...state.events,action.payload]
        }
        default :
        return state;
       }
};

export default eventReducer;