import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HabitsPage from "./HabitsPage";
import GlobalStyle from "../shared/GlobalStyle";
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";

 const App = () => {
  return (
     <Router>
      <GlobalStyle />
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
    </Router>
  )
}

export default App;
