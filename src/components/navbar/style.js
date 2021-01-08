import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0px;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: 4px;
    background-color: #000000;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavbarA = styled(NavLink)`
    font-size: 16px;
    color: #ffff;
    text-decoration: none;
    :hover {
        color: #a8a8a8;
        transition: all 0.3s ease 0.1s;
    }
`;

export const NavbarLi = styled.li`
    display: inline-block;
    padding: 10px 30px;
    transition: all 0.3s ease 0.1s;
`;

export const NavbarLogo = styled.img`
    cursor: pointer;
    height: 70px;
    width: 70px;
    :hover {
        transition: transform 0.4s;
        transform: scale(1.1);
    }
`;