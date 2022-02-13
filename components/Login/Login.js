import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/actions/userAction'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.userDetails)
  const { loading, error, userDetails } = userInfo

  

  useEffect(() => {
    if(userDetails) {
      router.push('/product')
    }
    
  }, [userDetails])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className='login'>
      {error && <div className='text-danger'>{error}</div>}

      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label>Email address</label>
          <input
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            type='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-control'
            id='exampleInputPassword1'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
