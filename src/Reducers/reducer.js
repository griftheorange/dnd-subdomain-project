let initialState = {
    charSheetHidden: true,
    selectedCell:null
}

export default function(state=initialState, action){
    switch(action.type){
        case "SET_CHAR_SHEET_HIDDEN":
            return {...state, charSheetHidden: action.value}
        case "SET_SELECTED_CELL":
            return {...state, selectedCell: action.value}
        default:
            return state
    }
}