import AppHeader from "./components/AppHeader";
import HomePage from "./components/HomePage";
import NotFound from './components/NotFound'
import CustomSwaggerUI from './components/CustomSwaggerUI'
import { BrowserRouter, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <>
      <AppHeader title="Swagger Dashboard" />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:appName" component={CustomSwaggerUI} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>);
}

export default App;