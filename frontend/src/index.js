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
import ProductEditScreen  from './screens/admin/ProductEditScreen';
import UserListScreen from './screens/admin/UserListScreen'
import UserEditScreen from './screens/admin/UserEditScreen';
import { HelmetProvider } from 'react-helmet-async';
const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <Router> {/* Use Router directly */}
          <Routes>
            <Route path="/" element={<App />}>
            <Route index={true} path='/' element={<HomeScreen />} />
              <Route path='/' element={<HomeScreen />} />
              <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route path='/search/keyword/page/:pageNumber'element={<HomeScreen />}/>

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
                <Route path='/admin/productList/:pageNumber' element={<ProductListScreen />} />
                <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
                <Route path='/admin/userList' element={<UserListScreen />} />
                <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </PayPalScriptProvider>
    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(rootElement);

reportWebVitals();
