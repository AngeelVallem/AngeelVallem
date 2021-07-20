import React from "react";
import styled from "styled-components";

const CustomImage = styled.img`
  ${(props) =>
    props.size
      ? `height: ${props.size};
width: ${props.size};`
      : `height: 100px;
      width: 100px`};
`;

export default function Image(props) {
  return <CustomImage {...props} className={props.className} />;
}
