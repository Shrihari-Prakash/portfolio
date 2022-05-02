import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/common/Button";
import { routes } from "../routes";
import Theme from "../theme";
import BgImage from "../assets/images/home-bg.svg";

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  color: ${Theme.Colors.TextOnBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Didot", monospace;
  font-size: large;
  position: relative;
  overflow: hidden;
  user-select: none;

  .container {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 5;

    .action-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 32px 0;

      div {
        margin: 0 24px;
      }
    }
  }

  .glitch,
  .glow {
    margin: 25px;
    position: relative;
    font-size: 36px;
    animation: glitch 5s 5s infinite;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      font-size: 34px;
    }
  }

  @keyframes fudge {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(0px, 2%);
    }
  }
  .glow {
    text-shadow: 0 0 1000px #dfbfbf;
    color: transparent;
    position: absolute;
    top: 0;
  }

  .subtitle {
    font-family: "Roboto Mono";
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.8em;
    text-align: center;
    text-transform: uppercase;
    animation: glitch-2 5s 5.02s infinite;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      font-size: 10px;
    }
  }

  @keyframes glitch-2 {
    1% {
      transform: rotateX(10deg) skewX(70deg);
    }
    2% {
      transform: rotateX(0deg) skewX(0deg);
    }
  }

  h2 {
    margin: 0;
    writing-mode: vertical-lr;
    text-align: center;
    line-height: 0.9;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .texture {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.15;
    background-image: url(${BgImage});
  }
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <div class="container">
        <p class="subtitle">Hello, I'm</p>
        <div class="glitch" data-text="SHRIHARI PRAKASAM">
          <h2 class="rotate">Shrihari</h2>
          <h2>Prakasam</h2>
        </div>
        <p class="subtitle">Fullstack Engineer</p>
        <div className="action-buttons">
          <Button onClick={() => navigate(routes.ABOUT)}>About Me</Button>
          <Button onClick={() => navigate(routes.PROJECTS)}>Projects</Button>
        </div>
      </div>
      <div className="texture"></div>
      {/* <div class="scanlines"></div> */}
    </HomeWrapper>
  );
}
