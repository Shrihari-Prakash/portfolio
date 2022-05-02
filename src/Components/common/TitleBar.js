import React from "react";
import styled from "styled-components";
import Theme from "../../theme";
import VsCodeIcon from "../../assets/images/vscode_icon.svg";

const TitleBarWrapper = styled.div`
  width: 100%;
  height: 32px;
  border-bottom: 1px solid ${Theme.Colors.Border};
  background-color: ${Theme.Colors.Surface};
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  .links {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      margin: 0 12px;
      width: 16px;
    }

    .link {
      color: ${Theme.Colors.TextOnBackground};
      background-color: ${Theme.Colors.Surface};
      padding: 0 8px;
      font-size: small;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: default;

      :hover {
        filter: brightness(1.2);
      }

      ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
        display: none;
      }
    }
  }

  .title {
    color: ${Theme.Colors.TextOnBackground};
    background-color: ${Theme.Colors.Surface};
    padding: 0 8px;
    font-size: small;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
  }

  .dummy {
    width: 404px;
    height: 100%;

    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      display: none;
    }
  }
`;

export default function TitleBar() {
  return (
    <TitleBarWrapper>
      <span className="links">
        <img src={VsCodeIcon} className="logo" alt="Icon" />
        <span className="link">File</span>
        <span className="link">Edit</span>
        <span className="link">Selection</span>
        <span className="link">View</span>
        <span className="link">Go</span>
        <span className="link">Run</span>
        <span className="link">Terminal</span>
        <span className="link">Help</span>
      </span>
      <div className="title">Portfolio - Shrihari Prakasam</div>
      <div className="dummy"></div>
    </TitleBarWrapper>
  );
}
