// File in which we implement all the logic for the react context API 

import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const expenseTrackerContext = createContext(initialState);

// everything wrapped around this component will have access to the context
export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators:
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    // console.log(transactions);

    return (
        // value = {{}} all the data for transactions, balance, adding and deleting transactions
        <expenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
        }}>
            {children}
        </expenseTrackerContext.Provider>
    )
}