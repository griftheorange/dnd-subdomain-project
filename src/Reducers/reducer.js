let initialState = {
    charSheetHidden: true
}

export default function(state=initialState, action){
    switch(action.type){
        case "SET_CHAR_SHEET_HIDDEN":
            return {...state, charSheetHidden: action.value}
        default:
            return state
    }
}