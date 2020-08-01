let initialState = {

    appData: null,

    charSheetHidden: true,
    selectedCell:null,

    homeDisplay:null,
    homeURL:null,
    homeTitle: null,

    playerDescPicture: null

}

export default function(state=initialState, action){
    switch(action.type){
        case "SET_APP_DATA":
            return {...state, appData: action.value}
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
        case "SET_PLAYER_DESC_PICTURE":
            return {...state, playerDescPicture: action.value}
        case "RESET_PLAYER_DESC_PICTURE":
            return {...state, playerDescPicture: null}
        default:
            return state
    }
}