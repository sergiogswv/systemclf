import { LOGIN_ERROR, LOGIN_START } from "../types";

const iniitalState = {
  error: false,
};

export default function (state = iniitalState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
