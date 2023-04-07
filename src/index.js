import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalContext from './Componets/GlobalContext';

// const h1=React.createElement('h1',null,'hello')
// const p=React.createElement('p',null,'para')
// const div =React.createElement('div',{
//   h1,p
// },'')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContext>
    <App />

  </GlobalContext>

  
 
);

