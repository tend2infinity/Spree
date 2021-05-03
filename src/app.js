import React  from 'react';
import {Home, Browse, Signin, Signup, Nomination, LeaderBoard  } from './pages'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from './handleUser/routes';
import {UserRedirect} from './handleUser/routes';

import { AuthProvider } from './context/authContext';


export function App() {
 
  return (
    
      <Router>
      <AuthProvider>
        <Switch>

        <PrivateRoute exact path="/browse" component={Browse} />
        
        <PrivateRoute exact path="/mynominations" component={Nomination} />
        
        <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />

        <UserRedirect exact path="/signin" component={Signin} />
        
        <UserRedirect exact path="/signup" component={Signup} />
          
        <UserRedirect exact path="/" component={Home} />
          
        </Switch>
      </AuthProvider>
    </Router>

   
    
  );
}


