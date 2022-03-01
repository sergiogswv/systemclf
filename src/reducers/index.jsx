import { combineReducers } from "redux";
import adminReducers from "./adminReducers";
import menuReducer from "./menuReducer";
import loginReducer from "./loginReducer";
import tokenReducer from "./tokenReducer";
import profReducers from "./profReducers";
import materiaReducer from "./materiaReducer";

export default combineReducers({
  admins: adminReducers,
  menu: menuReducer,
  login: loginReducer,
  token: tokenReducer,
  profs: profReducers,
  materias: materiaReducer,
});
