import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// console.log('hello world!')
// console.log(document.getElementById('root'))

// const greeting = "Hello World!"
// const idValue = "greet"
// const h1Class = "bestClassEver"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <App />
      {/* {App("apple", "lemonade")} */}

      {/* <App /> */}
      {/* <h1 id={idValue} className={h1Class}>Hello there {greeting}</h1> */}
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
