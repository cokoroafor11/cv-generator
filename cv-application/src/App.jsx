import {useEffect, useState} from 'react';

import Header from './components/Header.jsx'
import GenInfo from './components/GenInfo.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import './styles/_input.scss';

function App() {

  const genInfo = {
    firstName: '',
    lastName: '',
    occupation: '',
    summary: ''
  }

  const handleChange = (e) => {

  }

  return (
    
    <>
      <Header/>
      <Education/>
    </>
  )
}

export default App
