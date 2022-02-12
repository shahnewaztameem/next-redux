import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

let userDetailsFromStorage = null
if (typeof window !== 'undefined') {
  userDetailsFromStorage = JSON.parse(localStorage.getItem('userDetails'))
}

const initialState = {
  userDetails: { userInfo: userDetailsFromStorage },
}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
