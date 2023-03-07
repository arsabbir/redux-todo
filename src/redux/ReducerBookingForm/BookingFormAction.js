import { CLASS_NAME, DESTINATION_DATE, DESTINATION_FORM, DESTINATION_TO, GUESTS } from "./BookingFormActionType";

export const DESTINATIONFORM = (value) => {
  return {
    type: DESTINATION_FORM,
    payload: value,
  };
};
export const DESTINATIONTO = (value) => {
  return {
    type: DESTINATION_TO,
    payload: value,
  };
};
export const DESTINATIONDATE = (value) => {
  return {
    type: DESTINATION_DATE,
    payload: value,
  };
};
export const GUESTS_FORM = (value) => {
  return {
    type: GUESTS,
    payload: value,
  };
};
export const CLASSNAME = (value) => {
  return {
    type: CLASS_NAME,
    payload: value,
  };
};
