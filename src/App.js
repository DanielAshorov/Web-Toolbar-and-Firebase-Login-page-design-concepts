import './App.css';
import Header from './header';
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" >
          <Header />
          <Login />
        </Route>
        <Route path="/" >
          <Header />
          <Home />
        </Route>

      </Switch>
    </Router>
    /*<div className="App">
      <Header/>
    </div>*/
  );
}

export default App;
