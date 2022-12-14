import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UseStateDemo from './pages/hookDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/hookDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/hookDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/hookDemo/UseRefDemo/UseRefDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App/>}>
        <Route path='usestate' element={<UseStateDemo/>}>     
        </Route>
        <Route path='useeffect' element={<UseEffectDemo/>}>     
        </Route>
        <Route path='usecallback' element={<UseCallBackDemo/>}>     
        </Route>
        <Route path='usememodemo' element={<UseMemoDemo/>}>     
        </Route>
        <Route path='useref' element={<UseRefDemo/>}>     
        </Route>
        
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
