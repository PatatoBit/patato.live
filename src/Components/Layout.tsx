import React from "react";
import BG from "./BG";
import Contacts from "./Contacts";
import Webring from "./Webring";

function Layout(props: any) {
  return (
    <>
      <Webring />
      {props.children}
      <BG />
      <Contacts />
    </>
  );
}

export default Layout;
