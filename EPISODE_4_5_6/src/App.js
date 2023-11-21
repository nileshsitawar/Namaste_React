import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"
import Shimmer from './components/Shimmer';






// * not using key gives error of not giving key to same childs (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice) //s
// 


const Footer = ()=> { 
  <div className='footer'>
    <h2>footer</h2>
  </div>
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);