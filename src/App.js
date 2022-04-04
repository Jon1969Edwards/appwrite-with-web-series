import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Router>
      <Switch>
    
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/forgot-password">
         <ForgotPassword/>
        </Route>
        <Route path="/reset-password">
         <ResetPassword/>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;