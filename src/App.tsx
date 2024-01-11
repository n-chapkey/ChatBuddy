import './App.css'
import React from 'react'
import TwoColumnLayout from './components/TwoColumnLayout'
import './styles/global.css'
import ContactList from './components/ContactList'
import DirectMessage from './components/DirectMessage'

function App() {
  return (

      <TwoColumnLayout 
        smallColumn={<ContactList />} 
        bigColumn={<DirectMessage sender='Bob' message='Hello World'/>}>
      </TwoColumnLayout>


  )
}

export default App
