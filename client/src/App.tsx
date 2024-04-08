import { Route, Routes, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { authTokenState } from './recoil/recoil'

function App () {
  const authToken = useRecoilValue(authTokenState)

  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={authToken ? <HomePage /> : <Navigate to='/signup' />}
        />
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/signup' element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
