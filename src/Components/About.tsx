import { Title, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { useAge } from "../hooks/useAge";

import styles from "../styles/About.module.scss";

function About() {
  const age = useAge();

  return (
    <>
      <section className="fullflex">
        <div className="container">
          <Title size="h1" className="heading">
            About me
          </Title>
          <Text className="desc" size="xl">
            Hi, I’m pat. I’m currently a
            <span className={styles.age}> {age}</span> years old developer and a
            gamer from Thailand. I do web development and actively trying to
            create fun and useful websites and side projects.
          </Text>
          <Image
            width={880}
            height={192}
            src="https://raw.githubusercontent.com/PathonScript/PathonScript/output/snake.svg"
            alt="Github Snake"
          />
        </div>
      </section>
    </>
  );
}

export default About;
