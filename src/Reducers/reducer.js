let initialState = {
    charSheetHidden: true,
    selectedCell:null,
    homeDisplay:null,
    logURL:null,
    logTitle: null
}

export default function(state=initialState, action){
    switch(action.type){
        case "SET_CHAR_SHEET_HIDDEN":
            return {...state, charSheetHidden: action.value}
        case "SET_SELECTED_CELL":
            return {...state, selectedCell: action.value}
        case "SET_HOME_DISPLAY":
            return {...state, homeDisplay: action.value}
        case "SET_LOG_URL":
            return {...state, logURL: action.value}
        case "SET_LOG_TITLE":
            return {...state, logTitle: action.value}
        case "SET_STATE_TO_HOME":
            return {...state, homeDisplay:null, logURL:null, logTitle:null}
        default:
            return state
    }
}