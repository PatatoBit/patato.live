import Link from "next/link";
import Image from "next/image";
import React from "react";
import Projects from "./Projects";

import styles from "../styles/Card.module.scss";
import {
  ActionIcon,
  Card,
  Group,
  Title,
  Text,
  Button,
  Badge,
} from "@mantine/core";
import { IconCode, IconBrandGithub } from "@tabler/icons";
import styled from "styled-components";

interface Project {
  title: string;
  description: string;
  imageURL: string;
  status: string;
  url?: string;
  github?: string;
}

function ProjectCard(props: Project) {
  return (
    <div className={styles.container}>
      <Card
        shadow="xl"
        p="lg"
        radius="md"
        withBorder
        className={styles.container}
      >
        <Card.Section>
          <Image
            src={props.imageURL}
            className={styles.image}
            width={382}
            height={160}
            alt={props.title}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{props.title}</Text>
          <Badge color="blue" variant="outline">
            {props.status}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {props.description}
        </Text>
      </Card>

      <div className={styles.buttons}>
        <Group spacing="xs">
          {props.url && (
            <ActionIcon
              variant="filled"
              size={30}
              component="a"
              href={props.url}
              target="_blank"
            >
              <IconCode size={20} />
            </ActionIcon>
          )}

          {props.github && (
            <ActionIcon
              variant="filled"
              size={30}
              component="a"
              href={props.github}
              target="_blank"
            >
              <IconBrandGithub size={20} />
            </ActionIcon>
          )}
        </Group>
      </div>
    </div>
  );
}

export default ProjectCard;
