import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';

const basename = import.meta.env.PROD ? "/SRC9" : "";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
) 