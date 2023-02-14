import React from "react";
import "./Nav.css";
import pig from "../images/earlyLogo.gif";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: darkgreen;
  text-shadow: 3px 3px 5px white;
  font-weight: 700;
`;
export default function Nav() {
  return (
    <div className="nav--main">
      <ul className="nav--icons">
        <li>
          <Link to="/">
            <img className="nav--logo" src={pig} alt="Pigs for Peace" />
          </Link>
        </li>
        <li className="nav--group">
          <StyledLink to="/about" className="nav--icon">
            about
          </StyledLink>
          <StyledLink to="/pig" className="nav--icon">
            pigs
          </StyledLink>
          <StyledLink to="/contact" className="nav--icon">
            contact
          </StyledLink>
          <StyledLink to="/gallery" className="nav--icon">
            gallery
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
