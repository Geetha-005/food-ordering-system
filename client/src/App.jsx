import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'
import { Routes ,Route} from 'react-router-dom'
import SignUpPage from './components/SignUpPage'
import { Navigate } from 'react-router-dom'

import { Toaster } from 'react-hot-toast';
function App() {
  

  return (
    <>
     <Toaster position="top-center" reverseOrder={false} toastOptions={{
        duration: 3000,
        style: {
          fontSize: '14px',
        },
      }} />
    <Routes>
    <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>

    </Routes>
      
   </>
  )
}

export default App
 