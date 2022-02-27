import { combineReducers } from "redux";
import adminReducers from "./adminReducers";
import menuReducer from "./menuReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  admins: adminReducers,
  menu: menuReducer,
  login: loginReducer,
});
