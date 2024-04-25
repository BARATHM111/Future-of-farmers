import React from 'react';
import Header from './components/Header'; // Corrected typo in 'components'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer'; // Corrected typo in 'components'
// import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
         <Outlet/>
       
  
        </Container>
      </main>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
