import React from 'react'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    
    const token = sessionStorage.getItem('userToken')
    let auth={}
    if(token){
        auth={'token':true}
    }else{
        auth={'token':false}
    }


  return (
    auth.token? children:<Navigate tot='/login'/>
  )
}

export default PrivateRoute