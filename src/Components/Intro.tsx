import React from "react";

import styles from "../styles/Intro.module.scss";
import { Title, Text, Image, Group } from "@mantine/core";

function Intro() {
  function scrollToAbout() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }

  return (
    <>
      <main className="fullflex">
        <section className="container">
          <Group position="apart">
            <div>
              <Title className={styles.intro}>Hi, my name is</Title>
              <Title className={styles.name} size="h1" color="#ffa64a">
                Pat <span className={styles.subname}>( Patato )</span>
              </Title>
            </div>
            <div className={styles.pfpimage}>
              <div className={styles.pfpcontainer}>
                <Image
                  style={{ alignItems: "center" }}
                  width={150}
                  height={150}
                  src="/pfp.jpg"
                  alt="Profile Picture"
                  radius="md"
                />
              </div>
            </div>
          </Group>

          <Text className={styles.desc} size="xl">
            I’m a full-stack developer who likes creating fun software and
            websites
          </Text>
        </section>
      </main>
    </>
  );
}

export default Intro;
