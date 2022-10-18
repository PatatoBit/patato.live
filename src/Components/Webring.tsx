import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Webring.module.scss";

function Webring() {
  return (
    <div className={styles.container}>
      <Link
        href="https://webring.wonderful.software/#/patato.live"
        target="_blank"
      >
        <Image
          src="https://webring.wonderful.software/webring.white.svg"
          alt="วงแหวนเว็บ"
          width="50px"
          height="50px"
        />
      </Link>
    </div>
  );
}

export default Webring;
