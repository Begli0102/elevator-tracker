import { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { isAuthenticated } from './recoil/recoil'

function App () {
  const authenticated = useRecoilState<boolean>(isAuthenticated)

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={authenticated ? <HomePage /> : <Navigate to='/signin' />}
        />
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/signup' element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
