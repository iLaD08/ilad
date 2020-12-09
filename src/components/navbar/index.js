import React from "react";
import { NavbarDiv, NavbarA, NavbarLi, NavbarLogo } from "./style"

const Navbar = () => (
    <NavbarDiv id="home">
         <NavbarLogo src="https://i.imgur.com/bsceKNV_d.webp?maxwidth=728&fidelity=grand" alt="Home" title="Home" />
        <ul>
            <NavbarLi><NavbarA href="#home">Home</NavbarA></NavbarLi>
            <NavbarLi><NavbarA href="#aboutme">About me</NavbarA></NavbarLi>
            <NavbarLi><NavbarA href="#projects">Projects</NavbarA></NavbarLi>
            <NavbarLi><NavbarA href="#contacts">Contact</NavbarA></NavbarLi>
        </ul>
    </NavbarDiv>
)

export default Navbar;
