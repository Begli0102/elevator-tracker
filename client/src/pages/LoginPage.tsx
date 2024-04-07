import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { authTokenState } from '../recoil/recoil'

interface UserProps {
  email: string
  password: string
}
const LoginPage = () => {
  const [user, setUser] = useState<UserProps>({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const setAuthToken = useSetRecoilState(authTokenState)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, password } = user

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const data = await response.json()

      if (response.ok) {
        const { token } = data

        localStorage.setItem('authToken', token)
        setAuthToken(token)

        navigate('/')

        console.log('Sign in successful')
      } else {
        setError(data.error || 'An unexpected error occurred')
      }
    } catch (error) {
      console.error('Sign in error:', error)
      setError('Sign in failed. Please check your connection and try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <div className='container'>
      {error && (
        <span className='form-error' style={{ color: 'crimson' }}>
          {error}
        </span>
      )}
      <div className='form-wrapper'>
        <h2 className='form-title'>Sign in</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='email'
            placeholder='email'
            value={user.email}
            onChange={handleChange}
          />

          <input
            name='password'
            type='password'
            placeholder='password'
            value={user.password}
            onChange={handleChange}
          />

          <button className='form-button' type='submit'>
            Sign in
          </button>
          <span>Don't have an account?</span>
          <Link
            style={{
              textDecoration: 'none',
              color: 'rgb(116, 114, 114)',
              fontWeight: 'bold'
            }}
            to='/signup'
          >
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
