import { combineReducers } from "redux";
import ReducerBookingAddList from "./ReducerBookingAddList/ReducerBookingAddList";
import ReducerBookingForm from "./ReducerBookingForm/ReducerBookingForm";

const RootReducer=combineReducers({
    BookingForm: ReducerBookingForm,
    BookingListAdd:ReducerBookingAddList,
})
export default RootReducer