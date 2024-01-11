import './App.css'
import React from 'react'
import TwoColumnLayout from './components/Layouts/TwoColumnLayout'
import './styles/global.css'
import ContactList from './components/Contacts/ContactList'
import DirectMessage from './components/Messages/DirectMessage'


function App() {
  return (

      <TwoColumnLayout 
        smallColumn={<ContactList />} 
        bigColumn={<DirectMessage />}>
      </TwoColumnLayout>


  )
}

export default App
