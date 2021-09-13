import LoginPage from "./Registration/LoginPage";
import SignUpPage from "./Registration/SignUpPage";
import HabitsPage from "./HabitsPage/HabitsPage";
import TodaysPage from "./TodaysPage/TodaysPage";
import TrackingRecordPage from "./TrackingRecordPage/TrackingRecordPage"
import { GlobalStyle } from "../shared/GlobalStyle";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
 } from "react-router-dom";
 import UserContext from "../contexts/UserContext"
import { useState } from "react";
import PercentageContext from "../contexts/PercentageContext";

const App = () => {
   const [user, setUser] = useState({})
   const [percentage, setPercentage] = useState(0)
   const userLogin = JSON.parse(localStorage.getItem("userLogin"))
   
  return (
    <Router>
      <GlobalStyle />
      <UserContext.Provider value = {{user, setUser}}>
        <Switch>
          <Route path = "/" exact>
             <LoginPage  userLogin = {userLogin}/>
          </Route>
          <Route path = "/cadastro" exact component = {SignUpPage} />
          <PercentageContext.Provider value = {{percentage, setPercentage}}>
            <Route path = "/habitos" exact component = {HabitsPage} />
            <Route path = "/historico" exact component = {TrackingRecordPage} />
            <Route path = "/hoje" exact component = {TodaysPage} />
          </PercentageContext.Provider>
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
