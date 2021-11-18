import polls from "./polls";
import autheduser from "./autheduser";
import { loadingBarReducer } from 'react-redux-loading-bar'

import users from "./users";
import { combineReducers } from "redux";

export default combineReducers({users,polls,autheduser, loadingBar: loadingBarReducer});