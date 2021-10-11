import logo from './logo.svg';
import './App.css';
import Header from './Components/Headers/Header';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Inventory from './Components/Inventory/Inventory';
import OrderReview from './Components/OrderReview/OrderReview';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
