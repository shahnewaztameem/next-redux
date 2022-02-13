import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import withRedux, { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles.css'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap')
  // }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
