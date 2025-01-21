import React,{Children, createContext,useReducer} from "react";
import AppReducer from './AppReducer'
//intial state
const initialState={
    transactions:[//an array of objects
    ]
}
//creating context
//This context will be shared with all components that need access to the transactions data.
export const GlobalContext=createContext(initialState);

//creating provider for wrapping components
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    //actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }
    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}