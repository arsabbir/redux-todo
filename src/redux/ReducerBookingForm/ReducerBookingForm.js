import {
  CLASS_NAME,
  DESTINATION_DATE,
  DESTINATION_FORM,
  DESTINATION_TO,
  GUESTS,
} from "./BookingFormActionType";
import { initialState } from "./initialState";

const ReducerBookingForm = (state = initialState, { type, payload }) => {
  switch (type) {
    case DESTINATION_FORM:
      return (state = {
        ...state,
        Destination_Form: payload,
      });
    case DESTINATION_TO:
      return (state = {
        ...state,
        Destination_To: payload,
      });
    case DESTINATION_DATE:
      return (state = {
        ...state,
        DDestination_Date: payload,
      });
    case GUESTS:
      return (state = {
        ...state,
        Guest: payload,
      });
    case CLASS_NAME:
      return (state = {
        ...state,
        Class_Name: payload,
      });

    default:
      return state;
  }
};

export default ReducerBookingForm;
