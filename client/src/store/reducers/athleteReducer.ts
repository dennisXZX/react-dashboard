import { IAthleteState } from '../../interfaces/states';
import { LOAD_ATHLETE_DATA_SUCCESS } from '../actions/athleteActions';

const initialState = {
	athletes: []
};

const updateAthleteData = (state: IAthleteState, action: any) => {
	return {
		...state,
		athletes: action.data
	};
};

export default function reducer(state: IAthleteState = initialState, action: any): IAthleteState {
	switch (action.type) {
		case LOAD_ATHLETE_DATA_SUCCESS:
			return updateAthleteData(state, action);

		default:
			return state;
	}
}
