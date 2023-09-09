import React, { useEffect } from "react";
import styled from "styled-components";
import TagCloud from "../Components/common/TagCloud";
import Theme from "../theme";
import Me from "../assets/images/me.jpg";

function calculateExperience(startDate) {
  return Math.round(((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) / 365);
}

const AboutWrapper = styled.div`
  height: calc(100% - 32px);
  width: calc(100% - 32px);
  overflow: auto;
  padding: 16px;
  color: ${Theme.Colors.TextOnBackground};
  text-align: left;
  cursor: default;

  .about-wrapper {
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;

    #skills {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .intro {
      text-align: center;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 50%;

      ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
        width: 100%;
      }
    }

    img {
      height: 180px;
      width: 180px;
      border-radius: 100%;
    }

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      flex-direction: column;
    }
  }

  .tagcloud--item {
    padding: 2px 4px;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
  }

  h2,
  h3,
  h4 {
    color: ${Theme.Colors.Accent};
    text-align: center;
  }

  h3,
  h4,
  .soft-text {
    color: ${Theme.Colors.TextOnBackground};
    text-align: left;
    margin: 0;

    i {
      margin: 0 4px;
    }
  }

  h2 {
    font-family: "DM Sans", serif;
    font-size: 20px;
    line-height: 38px;
    text-transform: uppercase;
    font-size: 1rem;
  }

  .org-name {
    margin-top: 36px;
    margin-bottom: 12px;
  }

  .soft-text {
    margin-bottom: 18px;
    font-size: small;
    opacity: 0.8;
  }

  .job-description {
    margin: 18px 0;
    font-size: normal;
    opacity: 0.8;
  }

  .description {
    text-align: left;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      text-align: center;
    }
  }
`;

export default function About() {
  useEffect(() => {
    const container = "#skills";
    const texts = [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "MariaDB",
      "MongoDB",
      "Git",
      "ioredis",
      "Socket.IO",
      "CSS/SCSS",
      "HTML",
      "CometD",
      "Microsoft Graph REST",
    ];
    const options = {
      radius: window.screen.availWidth < 500 ? 150 : 180,
    };

    const tagcloud = TagCloud(container, texts, options);

    return () => {
      tagcloud.destroy();
    };
  }, []);

  return (
    <AboutWrapper>
      <div className="about-wrapper">
        <div className="intro">
          <h2 class="about-heading">About</h2>
          <img src={Me} alt="Me"></img>
          <p className="description">
            I build microservices that scale and frontends that feel native like
            for the web. I'm a fullstack engineer with&nbsp;
            {calculateExperience(new Date(2019, 11, 27, 0, 0, 0, 0))} years of
            experience. My skills include JavaScript Core, Node.js, React, MySQL, Redis
            and a few other web technologies.
          </p>
        </div>
        <div>
          <h2>Skills</h2>
          <div id="skills"> </div>
        </div>
      </div>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <h3 class="org-name">Genesys Telecom Labs</h3>
          <h4>
            Software Engineer
            <i class="devicon-typescript-plain"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-redis-plain"></i>
            <i class="devicon-backbonejs-plain"></i>
            <i class="devicon-docker-plain"></i>
            <i class="devicon-azure-plain"></i>
          </h4>
          <p class="soft-text">June 2021 - Present</p>
          <p class="job-description">
            My contributions here include building a microservice based on Node.js to enable Genesys contact centers operate on third party voice end points like Microsoft Teams.
            I've also maintained product integrations with Salesforce.
          </p>
          <p class="job-description">
            Awards:
            <ul>
              <li>All Star (2023) - Genesys Telecom Labs</li>
              <li>All Star (2022) - Genesys Telecom Labs</li>
              <li>Popular Speaker - Genesys Chennai Micro-Talks</li>
            </ul>
          </p>
        </li>
        <li>
          <h3 class="org-name">Inqutec Labs</h3>
          <h4>
            Software Engineer
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-sass-original"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-socketio-original"></i>
            <i class="devicon-mysql-plain"></i>
            <i class="devicon-php-plain"></i>
          </h4>
          <p class="soft-text">May 2020 - June 2021</p>
          <p class="job-description">
            I've built quite a lot of web solutions here for the pharma industry brand marketing. One of them is an AI based interactive E-Deailing platform for busy doctors who cannot meet salesreps regularly.
            I also built a large part of a video conferencing platform that is tailored for medical conferences.
          </p>
          <h4>Associate Software Engineer</h4>
          <p class="soft-text">November 2019 - May 2020</p>
        </li>
        <li>
          <h3 class="org-name">Rayappa Productions PVT. LTD</h3>
          <h4>
            Software Engineer - Part Time
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-mongodb-plain"></i>
          </h4>
          <p class="soft-text">May 2019 - November 2019</p>
          <p class="job-description">
            I've developed a song upload and music catalog management portal based on TypeScript, Node.js, MongoDB and React JS that lets independent music artists release songs on mainstream music platforms like Spotify and  Apple Music.
          </p>
        </li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          <h3 class="org-name">PERI Institute of Technology</h3>
          <h4>BE - Computer Science and Engineering</h4>
          <p class="soft-text">2015 - 2019</p>
        </li>
      </ul>
    </AboutWrapper>
  );
}
