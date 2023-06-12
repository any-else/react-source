import { ACTIONS } from "./actions";

export const updateUser = (dispatch: any, user: object) => {
  dispatch({ type: ACTIONS.UPDATE_USER, user });
};
