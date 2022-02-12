import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../store/actions/userAction'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.userDetails)
  const { loading, error, userDetails } = userInfo

  // const redirect = location.search ? location.search.split('=')[1] : '/'
  useEffect(() => {
    if (userDetails) {
    }
  }, [userDetails])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div>
      {error && <div>{error}</div>}
      <form onSubmit={submitHandler}>
        <label htmlFor=''>Email</label>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
