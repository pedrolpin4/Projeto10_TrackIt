import LoginPage from "./Registration/LoginPage";
import SignUpPage from "./Registration/SignUpPage";
import HabitsPage from "./HabitsPage/HabitsPage";
import TodaysPage from "./TodaysPage/TodaysPage";
import TrackingRecordPage from "./TrackingRecordPage/TrackingRecordPage"
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
          <Route path = "/hoje" exact component = {TodaysPage} />
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
