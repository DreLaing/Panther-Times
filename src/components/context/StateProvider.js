import React, { useContext, createContext, useReducer} from 'react'

const StateContext = createContext()

const StateProvider = ({children, reducer, initialState}) => {

    return (
        
            <StateContext.Provider value={useReducer(reducer, initialState)}>
                {children}
            </StateContext.Provider>  
    )
}
const useStateValue = () => useContext(StateContext);

export { useStateValue, StateContext, StateProvider };
