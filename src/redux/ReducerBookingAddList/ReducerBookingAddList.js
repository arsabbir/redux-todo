import { SubmitForm } from "./BookingListActionType";
import { initialState } from "./initialState";

// REDUCER BOOKING ADD LIST
 const ReducerBookingAddList = (state =initialState,{type,payload})=>{
    switch (type) {
        case SubmitForm:
            
            return (state =[...state,payload])
    
        default:
            return state
    }
}

export default ReducerBookingAddList