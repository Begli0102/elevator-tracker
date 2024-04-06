import { BsJustify } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isAuthenticated } from '../recoil/recoil'

interface NavbarProps {
  openSidebar: () => void
}
const NavBar = ({ openSidebar }: NavbarProps) => {
  const [authenticated] = useRecoilState<boolean>(isAuthenticated)

  const logOut = () => {
    localStorage.removeItem('authenticated')
  }

  return (
    <header className='navbar'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={openSidebar} />
      </div>
      <div className='navbar-left'></div>
      <div className='navbar-right'>
        {authenticated ? (
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
