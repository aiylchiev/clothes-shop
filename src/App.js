import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import Layout from './containers/layout/Layout';
function App() {
  return (
    <div className="App">
    <Layout>
          <Main/>
        </Layout>
    </div>
  );
}
export default App;