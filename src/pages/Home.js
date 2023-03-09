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
    font-size: 24px;
    font-weight: 500;
    line-height: 38px;
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

  .subtitle:hover, .description:hover, .title-main:hover {
    
  }

  .description {
    font-size: 14px;
    line-height: 14px;
    font-weight: lighter;
    text-transform: uppercase;
    opacity: 0.5;
  }

  h1 {
    font-family: "Merriweather", serif;
    font-size: 34px;
    font-weight: lighter;
    text-transform: uppercase;
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
    margin-top: 24px;

    .react-activity-calendar__count {
      font-weight: lighter;
      opacity: 0.5;
    }

    rect {
      stroke: none;
    }
  }
`;

const theme = {
  level0: Theme.Colors.Background + "40",
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
        <p class="subtitle">Hello, I'm</p>
        <div class="title-main" data-text="SHRIHARI PRAKASAM">
          <h1><b>Shrihari</b> Prakasam</h1>
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
