import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Remove RouterProvider
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'; 
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/shippingScreen';
import AdminRoute  from  './components/AdminRoute'
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderListScreen from './screens/admin/OrderListScreen';
import ProductListScreen from './screens/admin/ProductListScreen';

const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <Router> {/* Use Router directly */}
          <Routes>
            <Route path="/" element={<App />}>
              <Route path='/' element={<HomeScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              {/* Registered users */}
              <Route path='' element={<PrivateRoute />}>
                <Route path='/shipping' element={<ShippingScreen />} />
                <Route path='/payment' element={<PaymentScreen />} />
                <Route path='/placeorder' element={<PlaceOrderScreen />} />
                <Route path='/order/:id' element={<OrderScreen />} />
                <Route path='/profile' element={<ProfileScreen/>} />
              </Route>

              <Route path='' element={<AdminRoute />}>
                <Route path='/admin/orderList' element={<OrderListScreen />} />
                <Route path='/admin/productList' element={<ProductListScreen />} />

              </Route>
            </Route>
          </Routes>
        </Router>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(rootElement);

reportWebVitals();
