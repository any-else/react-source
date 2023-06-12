import { ACTIONS } from "./actions";
import { IUSER } from "./types";

export const reducer = (state: IUSER, action: any) => {
  const { user } = action;
  switch (action.type) {
    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user,
      };

    default: {
      return state;
    }
  }
};
