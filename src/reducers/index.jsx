import { combineReducers } from "redux";
import adminReducers from "./adminReducers";
import menuReducer from "./menuReducer";
import loginReducer from "./loginReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
  admins: adminReducers,
  menu: menuReducer,
  login: loginReducer,
  token: tokenReducer,
});
