import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HabitsPage from "./HabitsPage";
import TrackingRecordPage from "./TrackingRecordPage"
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
          <Route path = "/" exact component = {LoginPage} />
          <Route path = "/cadastro" exact component = {SignUpPage} />
          <Route path = "/habitos" exact component = {HabitsPage} />
          <Route path = "/historico" exact component = {TrackingRecordPage} />
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
