import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Header from './components/Header.jsx'
import GenInfo from './components/GenInfo.jsx'
import Contact from './components/Contact.jsx'
import './styles/_input.scss'
import './styles/_genInfo.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
)
