import { IAction } from '../../interfaces/actions';
import { ActiveView } from '../../interfaces/store/activeView'
import { LIST_VIEW } from '../../constants/views'
import { CHANGE_VIEW } from '../actions/views'

const initialState = {
  activeView: LIST_VIEW
};

export default function reducer(
  state: ActiveView = initialState,
  action: IAction,
): ActiveView {
  switch (action.type) {

    case CHANGE_VIEW:
      return {
        ...state,
        activeView: action.data
      };

    default:
      return state;
  }
}
