import React,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../styles/apps/inside-card.scss";

const CustomImage = styled.img`
  ${(props) =>
    props.size
      ? `height: ${props.size};
width: ${props.size};`
      : `height: 100px;
      width: 100px`};

  ${(props) =>
    props.me &&
    `height: 400px;
        width: 300px;
        border : 1px solid #000;`}

    ${props => props.height && `height : ${props.height} ;`}
    ${props => props.width && `width : ${props.width};`}

    object-fit: scale-down;
`;

const InfoDiv = styled.div`
    padding: 5px;
    position: absolute;
    border: 1px solid #000;
    bottom: 60px;
    left: 10px;
    color: #000;
  text-decoration: underline ;
`

export default function Image(props) {
  const [isVisible,setIsVisible] = useState(false)

  const toggleVisible = () => setIsVisible(!isVisible)
  const visible = isVisible ? '' : 'd-none'

  
  if (props.card) {
    return (
      <Link to={props.to}>
        <CustomImage {...props} className={`${props.className} card`} />
      </Link>
    );
  }

  if (props.link) {
    return (
      <Link to={props.to}>
        <CustomImage {...props} className={props.className} />
      </Link>
    );
  }
  if (props.anchor) {
    return (
      <a href={props.url} className=' position-relative' onMouseOver={toggleVisible} onMouseOut={toggleVisible}>
        <InfoDiv {...props} className={visible}>
            <small>{props.hoverText}</small>
        </InfoDiv>
          
        <CustomImage {...props} className={`${props.className}`} />
      </a>
    );
  }

  if(props.hover){
    return (
      <div className=' position-relative' onMouseOver={toggleVisible} onMouseOut={toggleVisible}>
        <InfoDiv {...props} className={visible}>
            <small>{props.hoverText}</small>
        </InfoDiv>
        <CustomImage {...props} className={`${props.className}`} />
      </div>
    );
  }
  return <CustomImage {...props} className={props.className} />;
}
