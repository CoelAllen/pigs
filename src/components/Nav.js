import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: darkgreen;
  text-shadow: 3px 3px 5px white;
  font-weight: 400;
  font-size: large;
`;
export default function Nav() {
  return (
    <div className="nav--main">
      <ul className="nav--icons">
        <li className="icon--left">
          <div>dropdown</div>
          <Link to="/">Pig logo here</Link>
          <div className="title">
            <div>Pigs</div>
            <div>Peace</div>
          </div>
        </li>
        <li className="nav--group">
          <StyledLink to="/about" className="nav--icon">
            WHO WE ARE
          </StyledLink>
          <StyledLink to="/gallery" className="nav--icon">
            MEET OUR FRIENDS
          </StyledLink>
          <StyledLink to="/contact" className="nav--icon">
            COMMON QUESTIONS
          </StyledLink>
          <Link to="/volunteer" className="nav--volunteer">
            VOLUNTEER
          </Link>
          <div className="nav--donate">DONATE</div>
        </li>
      </ul>
    </div>
  );
}
