export const reducer  = (state, action) => {
    switch(action.type){
        case "RECORD_SETS":{
            return { ...state, sets: action.payload.sets, searchedSets: action.payload.sets}
        }
        case "RECORD_FILTER_OPTION":{
            return { ...state, filterOption: action.payload }
        }
        case "RECORD_SEARCHED_SETS":{
            return { ...state, searchedSets: action.payload }
        }
        case "RECORD_ORDER_OPTION": {
            return { ...state, orderOption: action.payload }
        }
        default:
    }
    return { ...state }
}