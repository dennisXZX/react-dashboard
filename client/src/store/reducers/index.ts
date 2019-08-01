import { combineReducers } from 'redux';

import view from './viewReducer';
import athlete from './athleteReducer';

const rootReducer = combineReducers({
	athlete,
	view
});

export default rootReducer;
