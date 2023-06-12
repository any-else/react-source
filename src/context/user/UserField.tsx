import React from "react";
import { DEFAULT_STATE } from "./constants";
import { updateUser } from "./dispatcher";
import { reducer } from "./reducer";
import { IUSER } from "./types";

export const UserFieldContext = React.createContext<IUSER>(null!);

export const UserFieldProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    ...DEFAULT_STATE,
  });

  const setter: any = {
    updateUser: (user: object) => updateUser(dispatch, user),
  };

  const value: IUSER = { ...state, ...setter };

  return (
    <UserFieldContext.Provider value={value}>
      {children}
    </UserFieldContext.Provider>
  );
};

export default React.memo(UserFieldProvider);
