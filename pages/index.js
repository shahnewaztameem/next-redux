import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'
import Login from '../components/Login/Login'
import Product from '../components/Product/Product'

export default function Home() {
  // const { data } = await axios.get('https://devapi.dhakai.com/api/v2/deviceuid')
  // if (data.statusCode === 200) {
  //   console.log(data.result.deviceUuid)
  // }
  return (
    <div className='container'>
      <Login />
      
    </div>
  )
}
