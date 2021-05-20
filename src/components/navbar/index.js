import React from "react";
import { NavbarDiv, NavbarA, NavbarLi, NavbarLogo } from "./style";

const Navbar = () => (
  <NavbarDiv id='home'>
    <NavbarLogo
      src='https://i.imgur.com/bsceKNV_d.webp?maxwidth=728&fidelity=grand'
      alt='Home'
      title='Home'
    />
    <ul>
      <NavbarLi>
        <NavbarA
          to='/'
          exact
          activeStyle={{
            color: "#a8a8a8",
          }}>
          Home
        </NavbarA>
      </NavbarLi>
      <NavbarLi>
        <NavbarA
          to='/projects'
          activeStyle={{
            color: "#a8a8a8",
          }}>
          Projects
        </NavbarA>
      </NavbarLi>
      <NavbarLi>
        <NavbarA
          to='/contact'
          activeStyle={{
            color: "#a8a8a8",
          }}>
          Contact
        </NavbarA>
      </NavbarLi>
    </ul>
  </NavbarDiv>
);

export default Navbar;
