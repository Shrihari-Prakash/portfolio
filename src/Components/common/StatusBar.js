import {
  BellOutlined,
  BranchesOutlined,
  CloseCircleOutlined,
  MessageOutlined,
  SmileOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import Theme from "../../theme";
import ReactIcon from "../../assets/images/react_icon.svg";

const StatusBarWrapper = styled.div`
  width: 100%;
  height: 23px;
  background-color: ${Theme.Colors.Surface};
  display: flex;
  justify-content: space-between;
  position: relative;

  .left,
  .right {
    height: 100%;
    display: flex;

    .remote-window-btn {
      background-color: ${Theme.Colors.Accent2};
      height: 100%;
      width: 34px;
      border-top: 1px solid ${Theme.Colors.Border};
      color: ${Theme.Colors.TextOnBackground};
      font-size: small;
      cursor: pointer;
    }

    .status-btn {
      display: table-cell;
      padding: 0 10px;
      font-size: small;
      color: ${Theme.Colors.TextOnBackground};
      cursor: pointer;
      height: 100%;
      opacity: 0.8;
      user-select: none;

      :hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .anticon {
        vertical-align: middle;
        margin: 0 1px;
      }

      .status-icon {
        padding: 0 2px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .right {
    ${Theme.Media.Portrait}, ${Theme.Media.Mobile} {
      display: none;
    }
  }
`;

export default function StatusBar() {
  return (
    <StatusBarWrapper>
      <div className="left">
        <a
          className="remote-window-btn"
          href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          <SmileOutlined />
        </a>
        <div className="status-btn">
          <BranchesOutlined /> main
        </div>
        <div className="status-btn">
          <CloseCircleOutlined /> 0 &nbsp;
          <WarningOutlined /> 0
        </div>
      </div>
      <div className="right">
        <div className="status-btn">Spaces: 4</div>
        <div className="status-btn">UTF-8</div>
        <div className="status-btn">CRLF</div>
        <div className="status-btn">
          <div className="status-icon">
            <img src={ReactIcon} width={13} className="icon" alt="React" />
          </div>
          Powered by React
        </div>
        <div className="status-btn">
          <MessageOutlined />
        </div>
        <div className="status-btn">
          <BellOutlined />
        </div>
      </div>
    </StatusBarWrapper>
  );
}
