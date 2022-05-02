import styled from "styled-components";
import Theme from "../../theme";

export const Page = styled.div`
  flex: 1;
  width: 100%;
  min-height: 0;
  position: relative;
  overflow: auto;
  background-color: ${Theme.Colors.Surface};
`;
