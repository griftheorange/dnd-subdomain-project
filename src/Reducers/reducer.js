let initialState = {
    charSheetHidden: true,
    selectedCell:null,

    homeDisplay:null,
    homeURL:null,
    homeTitle: null,

}

export default function(state=initialState, action){
    switch(action.type){
        case "SET_CHAR_SHEET_HIDDEN":
            return {...state, charSheetHidden: action.value}
        case "SET_SELECTED_CELL":
            return {...state, selectedCell: action.value}
        case "SET_LOG":
            return {...state, homeDisplay: "log", homeURL: action.url, homeTitle: action.title}
        case "SET_NPC":
            return {...state, homeDisplay: "npc", homeURL: action.url, homeTitle: action.title}
        case "SET_AREA":
            return {...state, homeDisplay: "area", homeURL: action.url, homeTitle: action.title}
        case "SET_HOME":
            return {...state, homeDisplay:null, logURL:null, logTitle:null}
        default:
            return state
    }
}