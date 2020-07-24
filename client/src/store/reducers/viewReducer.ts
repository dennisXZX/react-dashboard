import { IViewState } from '../../interfaces/IStates';
import { TABLE_VIEW } from '../../constants/views';
import { CHANGE_VIEW } from '../actions/viewActions';

const initialState = {
	activeView: TABLE_VIEW
};

const viewReducer = (state: IViewState = initialState, action: any): IViewState => {
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
