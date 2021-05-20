import React from "react";
import { StyledMenu, StyledBurger, StyledImg } from "./style";

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const NavLogo = () => (
  <StyledImg src='https://i.imgur.com/jvYjBZL_d.webp?maxwidth=728&fidelity=grand' />
);

const ResponsiveNavbar = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>Home</a>
      <a href='/projects'>Projects</a>
      <a href='/contact'>Contact</a>
    </StyledMenu>
  );
};

export default ResponsiveNavbar;
