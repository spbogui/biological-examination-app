import React from "react";
import "./main.css";
import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export type MainProps = {};

const Main = ({}: MainProps) => {
  return (
    <Container fluid={true}>
      <Outlet />
    </Container>
  );
};

export default Main;
