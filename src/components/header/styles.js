import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    &.active {
        font-weight: 700;
        text-decoration: underline;
    }
`;

export const StyledDiv = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1385px;
    padding-left: 55px;
    position: fixed;
`;

export const StyledImg = styled.img`
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 1rem;
`;

export const StyledNav = styled.nav`
    display: flex;
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    z-index: 100;
    width: 830px;
    height: 96px;
`;

export const StyledUlNav = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    padding-left: 130px;
`;
