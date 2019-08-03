import { IViewState } from '../../interfaces/IStates';
import { PIE_VIEW } from '../../constants/views';
import { CHANGE_VIEW } from '../actions/viewActions';

const initialState = {
	activeView: PIE_VIEW
};

const changeView = (state: IViewState, action: any) => {
	return {
		...state,
		activeView: action.data
	};
};

export default function reducer(state: IViewState = initialState, action: any): IViewState {
	switch (action.type) {
		case CHANGE_VIEW:
			return changeView(state, action);

		default:
			return state;
	}
}
