import React,{createContext, useState} from 'react'

export const myContext=createContext();
const GlobalContext = ({children}) => {
    const [isLogIN,setisLogIn]=useState(false)
    const [user,setuser]=useState({
        name:'',
        password:''
    })
  return (
   <myContext.Provider value={{isLogIN,setisLogIn,user,setuser}}>
    {children}
   </myContext.Provider>
  )
}

export default GlobalContext