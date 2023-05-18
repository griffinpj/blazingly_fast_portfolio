import { combineReducers } from "redux";
import ProjectReducer from './ProjectReducer.js';

const RootReducer = combineReducers({
	projects: ProjectReducer
});

export default RootReducer;
