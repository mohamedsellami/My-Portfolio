import './App.scss';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from './components/details/Details';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/details">
            <Details/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
