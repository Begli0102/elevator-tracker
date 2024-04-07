import { BsJustify } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authTokenState } from '../recoil/recoil'

interface NavbarProps {
  openSidebar: () => void
}
const NavBar = ({ openSidebar }: NavbarProps) => {
  const authToken = useRecoilValue(authTokenState)
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('authToken')
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
