/** action types */

export const CHANGE_VIEW = 'CHANGE_VIEW';

/** action creators */

export const changeView = (newView: any) => ({
	type: CHANGE_VIEW,
	data: newView
});
