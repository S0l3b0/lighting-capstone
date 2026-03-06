import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/Home.jsx';
import LoginForm from './login/loginForm.jsx'

function App() {
  return (
    <div className='h-screen space-y-10'>
      <Navbar />
      <Home />
      <LoginForm />
    </div>
  )
}

export default App
