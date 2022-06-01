import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
    if (action.type===DISPLAY_ALERT){
        return {
            ...state,
            showAlert:true,
            alertType: 'danger',
            alertText: 'please provide all values!' 
        }
    }
    else if (action.type===CLEAR_ALERT){
        return {...state, showAlert:false, alertType: '', alertText: ''}
    }
    throw new Error(`no such action: ${action}`)
}

export default reducer;