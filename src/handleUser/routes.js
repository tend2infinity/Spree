import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../context/authContext";


export function PrivateRoute({ component: Component , ...rest }) {
    const { currentUser } = useAuth()
    console.log("it worked")
    return (
      <Route
        {...rest}
        render={props => {
          return currentUser ? <Component {...props} /> : <Redirect
           to="/" />
        }}
      />
    )
  }
export function UserRedirect({ component: Component , ...rest }) {
    const { currentUser } = useAuth()
    console.log("user redirect")
    return (
      <Route
        {...rest}
        render={props => {
          return currentUser ? <Redirect
          to="/browse" /> : <Component {...props} /> 
        }}
      />
    )
  }
    
