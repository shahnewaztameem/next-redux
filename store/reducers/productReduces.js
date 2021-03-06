import * as types from '../types'

// const initialState = {
//   products: [],
//   product: {},
//   loading: false,
//   error: null
// }
export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case types.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }

    case types.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      }
    case types.PRODUCT_LIST_FAIL: {
      return { loading: false, error: action.payload }
    }
    default:
      return state
  }
}
