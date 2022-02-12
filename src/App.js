import React from 'react'
import './App.css';
import Main from './components/main/Main';
import Layout from './containers/layout/Layout';
import { useSelector } from 'react-redux'
import Cart from './components/cart/Cart';

function App() {
  const isShow = useSelector(state => state.ui.cartIsVisible)
  return (
      <>
        {isShow && <Cart/>}
        <Layout>
              <Main/>
            </Layout>
      </>
  );
}
export default App;