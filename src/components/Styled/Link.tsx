import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkBookBtn = styled(Link) `
  font-weight: 600;
  font-size: 1.6rem;
  border: 5px solid #FECB4B;
  background-color: #1F2D32;
  padding: 0.8rem;
  margin-bottom: 2rem;
  color: #FECB4B;
  text-decoration: none;
  transition: all 0.3s;

  &:hover{
    background-color: #FECB4B;
    color: #1F2D32;
  }
`

export const LinkBookBtnHome = styled(LinkBookBtn)`
  bottom: 17rem;
  position: absolute;
`

export const LinkSmallBookBtn = styled(LinkBookBtn)`
  font-size: 1.2rem;
  border: 2px solid #FECB4B;
  padding: 0.6rem;
  width: fit-content;
  align-self: center;
`

export const LinkNav = styled(NavLink)`
  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;

  &:hover{
    color: #c2931d;
  }

  &[class*='active'] {
  color: #FECB4B;
`

export const LinkAdmin = styled(Link)`
  font-family: 'Courier New', serif;
  font-size: 1.2rem;
  color: #FBEDD4;
  text-decoration: none;
  border-bottom: 1px solid;
  width: fit-content;
  align-self: center;

  &:hover{
    color:white;
  }
`