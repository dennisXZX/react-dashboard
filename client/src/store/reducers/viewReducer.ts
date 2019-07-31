import { IAction } from '../../interfaces/actions';
import { IViewState } from '../../interfaces/store';
import { LIST_VIEW } from '../../constants/views';
import { CHANGE_VIEW } from '../actions/viewActions';

const initialState = {
	activeView: LIST_VIEW
};

const changeView = (state: IViewState, action: IAction) => {
	return {
		...state,
		activeView: action.data
	};
};

export default function reducer(state: IViewState = initialState, action: IAction): IViewState {
	switch (action.type) {
		case CHANGE_VIEW:
			return changeView(state, action);

		default:
			return state;
	}
}
