import { SubmitForm } from "./BookingListActionType"

const FormSubmit=(value)=>{
    return{
        type :SubmitForm,
        payload:{...value,id:Math.floor(Math.random()*1000 + 1000)
        }
    }
}
export default FormSubmit