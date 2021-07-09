import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import StoriesPage from './components/StoriesPage';
import PricingPage from './components/PricingPage';
import FeaturesPage from './components/FeaturesPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/stories" component={StoriesPage} />
      <Route exact path="/pricing" component={PricingPage} />      
      <Route exact path="/features" component={FeaturesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
