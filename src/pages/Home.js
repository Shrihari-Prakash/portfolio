import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubCalendar from 'react-github-calendar';
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
      width: 100%;
      margin: 32px 0;

      div {
        margin-right: 24px;
      }
    }
  }

  .title-main {
    margin: 0;
    position: relative;
    white-space: nowrap;
    display: flex;
    transition: all 0.3s ease-in-out;
  }

  .subtitle, .description {
    font-size: 20px;
    font-weight: 500;
    line-height: 50px;
    margin: 0;
    letter-spacing: 2px;
    text-align: left;
    text-transform: uppercase;
    font-family: "Merriweather", serif;
    transition: all 0.3s ease-in-out;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      font-size: 18px;
    }
  }

  .subtitle::after {
    content: "";
    width: 40px;
    height: 2px;
    display: inline-block;
    background: ${Theme.Colors.TextOnBackground};
    margin: 7px 10px;
    opacity: 0.8;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      margin: 6px 10px;
    }
  }

  .subtitle:hover, .description:hover, .title-main:hover {
    transform: translateY(-8px);
  }

  .description {
    text-transform: none;
  }

  h1 {
    font-family: "Merriweather", serif;
    font-size: 42px;
    font-weight: lighter;
    margin: 0;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      font-size: 30px;
    }
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

  .react-activity-calendar {
    margin-top: 18px;

    .react-activity-calendar__count {
      font-family: "Roboto Mono";
      font-size: 12px;
      opacity: 0.7;
    }

    rect {
      stroke: none;
    }
  }
`;

const theme = {
  level0: '#161B2200',
  level1: '#0e4429',
  level2: '#006d32',
  level3: '#26a641',
  level4: '#39d353',
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <div class="container">
        <p class="subtitle">Hello</p>
        <div class="title-main" data-text="SHRIHARI PRAKASAM">
          <h1>I'm <b>Shrihari</b> Prakasam</h1>
        </div>
        <p class="description">Fullstack Engineer</p>
        <GitHubCalendar
          username="shrihari-prakash"
          theme={theme}
          hideColorLegend
          hideMonthLabels
          blockRadius={10}
        />
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
