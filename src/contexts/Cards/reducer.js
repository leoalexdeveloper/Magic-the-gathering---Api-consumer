export const reducer = (state, action) => {
    switch(action.type){
        case "RECORD_CARDS":{
            return { ...state, cards: action.payload.cards}
        }
        case "RECORD_MODAL_CARD_IMAGE":{
            return { ...state, modalContent: action.payload}
        }
        default:
    }
    return { ...state }
}