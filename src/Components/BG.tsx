import React from "react";

import Image from "next/image";

import styles from "../styles/Background.module.scss";

function BG() {
  return (
    <div id="background-wrap">
      <div className="x1">
        <div className="cloud"></div>
      </div>

      <div className="x2">
        <div className="cloud"></div>
      </div>

      <div className="x3">
        <div className="cloud"></div>
      </div>

      <div className="x4">
        <div className="cloud"></div>
      </div>

      <div className="x5">
        <div className="cloud"></div>
      </div>
    </div>
  );
}

export default BG;
