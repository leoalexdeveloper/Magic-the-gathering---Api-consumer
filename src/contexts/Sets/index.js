import { createContext, useReducer } from "react"
import { contextData } from "./data"
import { reducer } from "./reducer"

export const Context = createContext()

export const SetsContextElement = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, contextData)
    
    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}