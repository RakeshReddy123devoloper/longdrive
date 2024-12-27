import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import App1 from './cars/maincom/scrool';
// import Menu from './cars/menu/index';
import App2 from './cars/maincom/index';
import App3 from "./cars/searchpage/index"

import CardSlider from './cars/animi/index';
import Mobile1 from './cars/mobile1/index';
import Choose from './cars/choose/index';
import BasicExample from './cars/accordian/index';
import ContactUs from './cars/contactus/index';
import App4 from './cars/bookingrouter/index';
import Footer2 from './cars/foo/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App1 />
    <App2/>
  {/* <Home/> */}
    <App3/>
    <CardSlider/>
 <Mobile1/> 
<Choose/>
<BasicExample/>
<ContactUs/>
<App4/>
<Footer2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
