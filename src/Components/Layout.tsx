import React from "react";
import BG from "./BG";

function Layout(props: any) {
  return (
    <>
      {props.children}
      <BG />
    </>
  );
}

export default Layout;
