import React from "react";
import styled from "styled-components";
import Theme from "../../theme";

const ButtonWrapper = styled.div`
  button {
    background-color: ${Theme.Colors.Accent2};
    color: white;
    padding: 6px 24px;
    border: 1px solid transparent;
    font-family: "Roboto Mono";
    font-size: small;
    cursor: pointer;
    border-radius: 4px;
    white-space: nowrap;
  }
  :hover {
    filter: brightness(1.2);
  }
`;

export default function Button(props) {
  return (
    <ButtonWrapper>
      <button {...props}>{props.children}</button>
    </ButtonWrapper>
  );
}
