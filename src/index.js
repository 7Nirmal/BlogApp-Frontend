import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/Authcontext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
<ContextProvider>
    <App />
</ContextProvider>
  </React.StrictMode>
  </BrowserRouter>
);


