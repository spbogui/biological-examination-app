import React from "react";
import "./main.css";
import {
  AppShell,
  Container,
  Header,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
import { Outlet } from "react-router-dom";

export type MainProps = {};

const Main = ({}: MainProps) => {
  const theme = useMantineTheme();
  return (
    <AppShell
      padding={"xs"}
      navbar={
        <Navbar width={{ base: 250 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header
          height={60}
          p="xs"
          style={{
            backgroundColor: theme.colors.blue[9],
            color: "white",
          }}
        >
          {/* Header content */}
        </Header>
      }
    >
      <Container fluid={true} style={{}}>
        <Outlet />
      </Container>
    </AppShell>
  );
};

export default Main;
