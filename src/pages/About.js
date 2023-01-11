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
    align-items: center;
    justify-content: space-evenly;

    #skills {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .intro {
      width: 45%;
      text-align: center;

      ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
        width: 100%;
      }
    }

    img {
      height: 160px;
      width: 160px;
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

  .org-name {
    margin-top: 36px;
    margin-bottom: 12px;
  }

  .soft-text {
    margin-bottom: 18px;
    font-size: small;
    opacity: 0.8;
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
      radius: window.screen.availWidth < 500 ? 150 : 250,
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
          <h2>About me</h2>
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
          <p class="soft-text">
            TESTIMONIALS:<br />
            <p>
              Hi Shrihari,<br /><br />
              Congratulations on receiving the All Star award!!<br />
              I take this opportunity to appreciate your contributions towards WWE right from the time you joined the team in June of last year. Please keep it up!<br /><br />
              Shrihari's Achievements:<br /><br />
              <ul>
                <li>Shrihari has been great performer from the very first day of joining Genesys.</li>
                <li>He has consistently gone above and beyond what his role required off him and has been recognised for this by the team in Brest.</li>
                <li>For the Teams Integration project, he completed multiple PoCs with great speed and quality. This involved creation of new Node.js services and communication with other exiting services in a relatively complex setup.</li>
                <li>He was adept at using several new tools and techniques for the PoCs including GraphQL, WebSocket, Redis, Kafka etc of which he had little or no prior experience.</li >
                <li>Finally, I find his unwavering dedication to work a quality that needs special mention and appreciation.</li>
              </ul>
            </p>
            - Development Manager, Genesys
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
          <h4>Associate Software Engineer</h4>
          <p class="soft-text">November 2019 - June 2021</p>
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
          <p class="soft-text">
            TESTIMONIALS:
            <p>
              "Shrihari built a web application for our business where we let
              independent artists release their music onto popular streaming
              services. With the introduction of this web application, we were
              able to automate a lot of process in the way we handle music
              releases at our label that took quite a lot of time and manual
              effort. Shrihari has also helped us expand our online presence
              greatly by making us a static business site. Wishing him good luck
              on his software engineering journey!"
            </p>
            - Rayappan Francis (Founder & CEO, Rayappa Productions)
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
