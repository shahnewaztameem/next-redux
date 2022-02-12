import axios from 'axios'
import * as types from '../types'

export const login = (email, password) => async (dispatch) => {
  const {
    data: { result: deviceUuid },
  } = await axios.get('https://devapi.dhakai.com/api/v2/deviceuid')

  try {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
    })

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }

    const { data } = await axios.post(
      'https://devapi.dhakai.com/api/v2/login-buyer',
      {
        auth: {
          email,
          deviceUuid: deviceUuid,
        },
        password,
      }
      // config
    )
    if (data.statusCode === 400) {
      dispatch({
        type: types.USER_LOGIN_FAIL,
        payload: data.message,
      })
    } else {
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: data,
      })

      if (typeof window !== 'undefined') {
        localStorage.setItem('userDetails', JSON.stringify(data))
      }
    }

    console.log(data.message)
  } catch (error) {
    dispatch({
      type: types.USER_LOGIN_FAIL,
      payload: error,
    })
  }
}
