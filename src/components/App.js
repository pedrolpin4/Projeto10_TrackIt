import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HabitsPage from "./HabitsPage";
import { GlobalStyle } from "../shared/GlobalStyle";
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";
 import UserContext from "../contexts/UserContext"
import { useState } from "react";

 const App = () => {
   const [user, setUser] = useState({})
  return (
     <Router>
      <GlobalStyle />
      <UserContext.Provider value = {{user, setUser}}>
        <Switch>
          <Route path = "/" exact>
            <LoginPage />
          </Route>
          <Route path = "/cadastro" exact>
            <SignUpPage />
          </Route>
          <Route path = "/habitos" exact>
            <HabitsPage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
