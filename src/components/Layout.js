import React from "react";
import { Container } from "react-bootstrap";

export function Layout(props) {
  return <Container>{props.children}</Container>;
}
