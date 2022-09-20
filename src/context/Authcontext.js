import { useEffect, useReducer } from "react";
import { createContext } from "react"
import {Userreducer} from "./Userreducer"


const INITIAL_STATE ={
    userdetails:JSON.parse(localStorage.getItem("user")) || null,
    isfetching:false,
    token:  JSON.parse(localStorage.getItem("token")) || null,
    error:null
}


export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(Userreducer,INITIAL_STATE)
    
useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(state.userdetails))
    localStorage.setItem("token",JSON.stringify(state.token))
    },[state.userdetails])
    return(
        <Context.Provider
      value={{userdetails:state.userdetails,isfetching:state.isfetching,token:state.token,error:state.error,dispatch}}
        >
            {children}
            </Context.Provider>
    )
}