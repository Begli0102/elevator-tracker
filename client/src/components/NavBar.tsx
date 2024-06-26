import { BsJustify } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { authTokenState, sidebarState } from '../recoil/recoil'

const NavBar = () => {
  const authToken = useRecoilValue(authTokenState)
  const [openSidebarToggle, setOpenSidebarToggle] = useRecoilState(sidebarState)
  const setAuthToken = useSetRecoilState(authTokenState)
  const navigate = useNavigate()

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const logOut = () => {
    localStorage.removeItem('authToken')
    setAuthToken(null) // Update authTokenState
    navigate('/signup')
  }

  return (
    <header className='navbar'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={openSidebar} />
      </div>
      <div className='navbar-left'></div>
      <div className='navbar-right'>
        {authToken ? (
          <button className='navbar-button' onClick={logOut}>
            Log out
          </button>
        ) : (
          <button className='navbar-button'>
            <Link style={{ textDecoration: 'none' }} to='/signin'>
              Sign in
            </Link>
          </button>
        )}
      </div>
    </header>
  )
}

export default NavBar
