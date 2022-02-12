import * as types from '../types'

export const userLoginReducer = (state = { }, action) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return { loading: true }

    case types.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userDetails: action.payload,
      }
    case types.USER_LOGIN_FAIL: {
      return { loading: false, error: action.payload }
    }
    default:
      return state
  }
}
