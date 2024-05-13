import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import  './langs/i18n.js'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
      <App />
    </BrowserRouter>
)