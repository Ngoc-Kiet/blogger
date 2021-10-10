import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { About, List, Article } from './pages/Index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/project">
          <Article />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
