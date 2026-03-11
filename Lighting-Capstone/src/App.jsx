import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/Home.jsx';
import LoginForm from './login/loginForm.jsx';
import profile from './components/profile.jsx';

function App() {
  return (
    <div className='h-screen space-y-10'>
      <Navbar />
      <Home />
      <profile
        name = 'lily'
        job = 'webdesign'
        blurb ='i am lily. fear me.'>
        </profile>
      
      <profile
        name = 'sophie'
        job = 'master coder'
        blurb ='i am sophie. i know all.'>
        </profile>
      <profile
        name = 'billie'
        job = 'ideanator'
        blurb ='i am billie. i am somewhere.'>
        </profile>
      <LoginForm />
    </div>
  )
}

export default App
