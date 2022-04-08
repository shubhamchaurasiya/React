import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navigation from './components/Navigation';
import SingleProduct from './components/SingleProduct';
import Cart from './pages/Cart';

const App = () => {
  return (
      <>
        <Router>
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact></Route>
      
            <Route path="/products" exact component={Products} ></Route>
            <Route path="/products/:id"  component={SingleProduct} ></Route>
            <Route path="/cart" component={Cart} ></Route>
          </Switch>
        </Router>
      </>
  );
}

export default App;
