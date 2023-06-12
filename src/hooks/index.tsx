import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Hooks = (props: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Hooks;
