import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// initial state
const initialState = {
    transaction: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Action
    function deleteTrans(id) {
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        });
    }
    
    function addTrans(transaction) {
        dispatch({
            type: 'ADD_TRANS',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transaction: state.transaction,
                deleteTrans,
                addTrans
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}