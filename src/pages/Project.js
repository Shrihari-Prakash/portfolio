import React from "react";
import styled from "styled-components";
import Theme from "../theme";
import Roamcalm from "../assets/images/screenshots/roamcalm.png";
import CommaMessenger from "../assets/images/screenshots/comma-messenger.png";
import RayAppRelease from "../assets/images/screenshots/rayapp-release-hub.png";
import EventFactory from "../assets/images/screenshots/event-factory.png";
import NodeOAuth from "../assets/images/screenshots/node-oauth.png";
import Nitrogen from "../assets/images/screenshots/nitrogen.png";
import TelmiAI from "../assets/images/screenshots/telmi-ai.png";
import Button from "../Components/common/Button";

const ProjectWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  cursor: default;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      margin: 1rem 2vw;
    }
  }

  .card {
    position: relative;
    display: block;
    height: 100%;
    border-radius: 0;
    overflow: hidden;
    text-decoration: none;
    border: 1px solid ${Theme.Colors.Border};
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: 0;
    background-color: ${Theme.Colors.Background};
    transform: translateY(100%);
    transition: 0.2s ease-in-out;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      transition: none;
    }
  }

  .card:hover .card__overlay {
    transform: translateY(0);
  }

  .card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 0.5em;
    border-radius: 0 0 0 0;
    background-color: ${Theme.Colors.Background}D9;
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      transition: none;
    }
  }

  .card__arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;
  }

  /* .card__arc path {
    fill: ${Theme.Colors.Background}D9;
    d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
  } */

  .card:hover .card__header {
    transform: translateY(0);
  }

  .card__thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .card__title {
    font-size: 1em;
    margin: 0 0 0.3em;
    color: ${Theme.Colors.TextOnBackground};
  }

  .card__tagline {
    display: block;
    margin: 1em 0;
    font-family: "DM Sans";
    font-size: 0.8em;
    color: ${Theme.Colors.TextOnBackground};
  }

  .card__status {
    font-size: 0.8em;
    color: ${Theme.Colors.TextOnBackground};
  }

  .card__description {
    padding: 0 2em 0.7em;
    margin: 0;
    color: ${Theme.Colors.TextOnBackground};
    font-family: "DM Sans";
    font-size: small;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card__actions {
    padding-bottom: 0.7em;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const projectList = [
  {
    name: "Roamcalm",
    thumbnail: Roamcalm,
    description:
      "Plan trips, save documents and split expenses in one place! 🌍",
    tags: ["node", "react", "mongodb", "redis", "typescript"],
    demo: "https://roamcalm.com",
  },
  {
    name: "Liquid",
    thumbnail: NodeOAuth,
    description:
      "Seamless authentication and user management APIs for your projects based on TypeScript, MongoDB and Redis. ✨",
    tags: ["NodeOAuth", "node", "mongodb"],
    source_code: "https://github.com/shrihari-prakash/liquid"
  },
  {
    name: "Nitrogen",
    thumbnail: Nitrogen,
    description:
      "Beautiful user management admin panel for your Liquid instances. ⚙️",
    tags: ["Nitrogen", "node", "mongodb"],
    source_code: "https://github.com/shrihari-prakash/liquid"
  },
  {
    name: "RayApp Release",
    thumbnail: RayAppRelease,
    description:
      "An open music release platform for independent artists to get their songs into major music platforms like Spotify and Apple Music.",
    tags: ["react", "node", "mongodb", "typescript", "ant-design"],
    demo: "https://rayapprelease.com",
  },
  {
    name: "Comma Messenger",
    thumbnail: CommaMessenger,
    description:
      "Open source text messenger based on React, Express, MongoDB, and socket.io with encryption and push notifications support",
    tags: ["react", "node", "mongodb", "expressjs", "socket.io"],
    source_code: "https://github.com/Shrihari-Prakash/comma-messenger-backend",
    demo: "https://commamessenger.netlify.app",
  },
  {
    name: "Telmi.AI",
    thumbnail: TelmiAI,
    description:
      "An intelligent virtual e-detailing sales rep designed allows pharma companies to interact with doctors who are too busy to meet human sales reps.",
    tags: ["javascript", "node", "php", "mysql", "react"],
  },
  {
    name: "Event Factory",
    thumbnail: EventFactory,
    description:
      "This package provides a event broker similar to Node JS's EventEmitter API on the browser.",
    tags: ["javascript"],
    source_code: "https://github.com/Shrihari-Prakash/event-factory",
    demo: "https://www.npmjs.com/package/event-factory",
  },
];

export default function Project() {
  return (
    <ProjectWrapper>
      <ul className="cards">
        {projectList.map((project) => (
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="card">
              <img src={project.thumbnail} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <div className="card__header-text">
                    <h3 className="card__title">{project.name}</h3>
                  </div>
                </div>
                <p className="card__description">{project.description}</p>
                <div className="card__actions">
                  {project.demo && (
                    <Button onClick={() => window.open(project.demo, "_blank")}>
                      Live
                    </Button>
                  )}
                  {project.source_code && (
                    <Button
                      onClick={() => window.open(project.source_code, "_blank")}
                    >
                      Source
                    </Button>
                  )}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </ProjectWrapper>
  );
}
