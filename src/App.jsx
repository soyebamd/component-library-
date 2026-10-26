import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Badge from "./badges/badge";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <Badge variant="primary" shape="square" some>
          Badge
        </Badge>

        <Badge variant="danger" shape="pill">
          Badge
        </Badge>

        <Badge variant="info" shape="square">
          Badge
        </Badge>

        <Badge variant="success" shape="pill">
          Badge
        </Badge>

        <Badge variant="warning" shape="square">
          Badge
        </Badge>

        <Badge variant="purple" shape="pill">
          Badge
        </Badge>
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
