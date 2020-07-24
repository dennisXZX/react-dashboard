import { ViewState } from '../../interfaces/IAppStates';
import { TABLE_VIEW } from '../../constants/views';
import { CHANGE_VIEW } from '../actions/viewActions';

const initialState = {
	activeView: TABLE_VIEW
};

const viewReducer = (state: ViewState = initialState, action: any): ViewState => {
	switch (action.type) {
		case CHANGE_VIEW:
			return {
				...state,
				activeView: action.data
			};

		default:
			return state;
	}
};

export default viewReducer;
