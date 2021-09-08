import LoginPage from "./LoginPage";
import SignInPage from "./SignInPage";
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
            <SignInPage />
          </Route>
          <Route path = "/habitos" exact>
            <HabitsPage />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
