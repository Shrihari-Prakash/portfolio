import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const ContactWrapper = styled.div`
  padding: 18px;
  counter-reset: line;
  color: ${Theme.Colors.TextOnBackground};
  text-align: left;
  cursor: default;

  ${Theme.Media.Mobile}, ${Theme.Media.Portrait} {
    padding: 4px;
  }

  .code-line {
    ::before {
      content: counter(line);
      counter-increment: line;
      margin-right: 1rem;
      color: grey;
    }

    a {
      color: ${Theme.Colors.Accent};
      text-decoration: none;
    }
  }
`;

export default function Contact() {
  return (
    <ContactWrapper>
      React out to me
      <br></br>
      <br></br>
      <div className="code-line">{"{"}</div>
      <div className="code-line">
        &nbsp;&nbsp;website:{" "}
        <a
          href="https://shrihari-prakash.github.io/portfolio"
          rel="noreferrer"
          target="_blank"
        >
          shrihari-prakash.github.io/portfolio
        </a>
      </div>
      <div className="code-line">
        &nbsp;&nbsp;email:{" "}
        <a href="mailto:shrihariprakasam@gmail.com">
          shrihariprakasam@gmail.com
        </a>
      </div>
      <div className="code-line">
        &nbsp;&nbsp;github:{" "}
        <a
          href="https://github.com/Shrihari-Prakash"
          rel="noreferrer"
          target="_blank"
        >
          Shrihari-Prakash
        </a>
      </div>
      <div className="code-line">
        &nbsp;&nbsp;linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/shrihari-prakasam/"
          rel="noreferrer"
          target="_blank"
        >
          shrihari-prakasam
        </a>
      </div>
      <div className="code-line">{"}"}</div>
    </ContactWrapper>
  );
}
