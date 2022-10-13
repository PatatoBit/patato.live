import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import Intro from "../Components/Intro";
import About from "../Components/About";
import Projects from "../Components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <About />
    </>
  );
};

export default Home;
