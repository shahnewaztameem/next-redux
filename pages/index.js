// import axios from 'axios'
// import Head from 'next/head'
// import { useEffect } from 'react'
// import Login from '../components/Login/Login'
import { useRouter } from 'next/router'
import { login } from '../store/actions/userAction'
import Login from '../components/Login/Login'
import Product from '../components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo } = userDetails
  console.log(userInfo);

  useEffect(() => {
    if (userInfo) {
      router.push('/product')
    } 
  }, [userInfo])
  return (
    <div className='container'>
      <Login />
    </div>
  )
}
