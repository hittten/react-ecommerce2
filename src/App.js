import './App.css';
import Header from "./header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Products/>
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCart/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
