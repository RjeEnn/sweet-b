import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ItemView from './pages/ItemView';
import CatalogView from './pages/CatalogView';
import CartView from './pages/CartView';
import AdminDashboardView from './pages/AdminDashboardView';
import CheckoutOrderView from './pages/CheckoutOrderView';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <CatalogView exact path="/" />
          <CartView exact path="/cart" />
          <ItemView exact path="/product/:id" />
          <AdminDashboardView path="/admin-dashboard" />
          <CheckoutOrderView path="/checkout" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
