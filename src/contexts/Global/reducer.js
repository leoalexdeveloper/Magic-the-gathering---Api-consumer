export const reducer = (state, action) => {
    switch (action.type) {
        case "RECORD_MOBILE_OPTION": {
            return { ...state, mobile: action.payload }
        }
        case "RECORD_SCROLLING_POINT": {
            return { ...state, scrollingPoint: action.payload }
        }
        default:
    }
    return { ...state }
}