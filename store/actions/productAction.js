import axios from 'axios'
import * as types from '../types'

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.PRODUCT_LIST_REQUEST })
    const {
      userDetails: { userInfo },
    } = getState()

    console.log(userInfo)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.result.token}`,
      },
    }

    const { data } = await axios.get(
      'https://devapi.dhakai.com/api/v2/manufacturers',
      config
    )

    dispatch({
      type: types.PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.PRODUCT_LIST_FAIL,
      payload: error.response,
    })
  }
  // dispatch({
  //   type: types.PRODUCT_LIST_SUCCESS,
  //   payload: ['1st post', '1st post', '1st post', '1st post', '1st post'],
  // })
}
