import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface UserProps {
  name: string
  surname: string
  email: string
  password: string
}
const RegisterPage = () => {
  const [user, setUser] = useState<UserProps>({
    name: '',
    surname: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, surname, email, password } = user

    if (!name || !surname || !email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      const response = await fetch(
        'https://elevator-tracker-api.onrender.com/api/users/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }
      )

      const data = await response.json()

      if (response.ok) {
        navigate('/signin')
        console.log('Sign up successful')
      } else {
        setError(data.error || 'An unexpected error occurred')
      }
    } catch (error) {
      console.error('Sign up error:', error)
      setError('Sign Up failed. Please check your connection and try again.')
    }
  }

  return (
    <div className='container'>
      {error && (
        <span className='form-error' style={{ color: 'crimson' }}>
          {error}
        </span>
      )}
      <div className='form-wrapper'>
        <h2 className='form-title'>Sign up</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input
            placeholder='Name'
            name='name'
            value={user.name}
            onChange={handleChange}
          />
          <input
            placeholder='Surname'
            name='surname'
            value={user.surname}
            onChange={handleChange}
          />
          <input
            placeholder='Email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <button className='form-button' type='submit'>
            Sign up
          </button>
          <Link
            style={{
              textDecoration: 'none',
              color: 'rgb(116, 114, 114)',
              fontWeight: 'bold'
            }}
            to='/signin'
          >
            <span>Already have an account?</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
