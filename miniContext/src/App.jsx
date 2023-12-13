import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './component/Profile'
import Login from './component/Login'

function App() {
  

  return (
    <UserContextProvider>
      <h1>WELCOME TO THE LOGIN PAGE</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
