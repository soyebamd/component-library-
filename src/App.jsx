import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Badge from "./badges/badge";
import Banner from "./banners/banner";
import "./App.css";

function App() {
  return (
    <>
      <section id="center" style={{ marginBottom: "50px" }}>
        <section id="spacer">
          <h1>Badges</h1>
        </section>
        <Badge>Default</Badge>

        <Badge variant="primary" shape="square" happy="happy" size="xs">
          Badge primary
        </Badge>

        <Badge variant="danger" shape="pill">
          Badge danger
        </Badge>

        <Badge variant="info" shape="square">
          Badge info
        </Badge>

        <Badge variant="success" shape="pill">
          Badge success
        </Badge>

        <Badge variant="warning" shape="square">
          Badge warning
        </Badge>

        <Badge variant="purple" shape="pill">
          Badge purple
        </Badge>
      </section>

      <section id="center" style={{ marginBottom: "50px" }}>
        <section id="spacer">
          <h1>Banners</h1>
        </section>

        <Banner title="Congratulations!">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>

        <Banner
          title="There is a problem with your application!!"
          variant="danger"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>

        <Banner title="Attention!" variant="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>

        <Banner title="Update available!" variant="neutral">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>

        <Banner title="Congratulations!"></Banner>

        <Banner title="Attention!" variant="danger"></Banner>

        <Banner
          title="There is a problem with your application!"
          variant="warning"
        ></Banner>

        <Banner title="Update available!" variant="neutral"></Banner>
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
