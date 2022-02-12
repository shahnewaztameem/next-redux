import { combineReducers } from "redux";
import { productReducer } from "./productReduces";
import { userLoginReducer } from "./userReducers";

export default combineReducers({
  products: productReducer,
  userDetails: userLoginReducer
})