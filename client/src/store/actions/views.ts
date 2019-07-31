// action types

export const CHANGE_VIEW = 'CHANGE_VIEW';

// action creators

export function changeView(newView: any) {
  return {
    type: CHANGE_VIEW,
    data: newView
  };
}
