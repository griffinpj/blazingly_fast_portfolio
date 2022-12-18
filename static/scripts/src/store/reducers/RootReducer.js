import { combineReducers } from "redux";
import ProjectReducer from './ProjectReducer';

const RootReducer = combineReducers({
	projects: ProjectReducer
});

export default RootReducer;
