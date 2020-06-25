import React, { createContext, useReducer } from 'react';

// Importing Reducer 
import AppReducer from './AppReducer'

///Creating an initial State
const intialState = {
    transactions: []
}

///Creating Global Context
export const GlobalContext = createContext(intialState);

// Creating a Provide for the Context
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, intialState)

    //Now we creating some dispatch function for transaction action

        //First One is for Delete Transaction
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        }

        //Second One is For Make Transaction
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }
    return (
        <GlobalContext.Provider value={
           {
               transactions: state.transactions,
               delTransaction,
               addTransaction
           } 
        }>
            {children}
        </GlobalContext.Provider>
    )
}