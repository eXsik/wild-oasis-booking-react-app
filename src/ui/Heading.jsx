import styled, { css } from "styled-components";

const Heading = styled.h1`
  /* ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 20px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 14px;
      font-weight: 600;
    `}

  line-height: 1.4; */
`;

export default Heading;
