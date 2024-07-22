import { ADD_LOCATION } from "../actions"


const initialState = {
    locations :[],
}

const locationReducer = (state = initialState,action) => {
       switch(action.type) {
        case ADD_LOCATION : 
        console.log(action.payload)
        return {
            ...state ,
            locations : [...state.locations,action.payload]
        };
        default :
        return state;
       }     
};

export default locationReducer;