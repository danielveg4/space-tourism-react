import styled from "styled-components";

export const StyledNavLink = styled.button`
    text-align: left;
    width: 80px;
    margin-right: 1.5rem;
    color: #D0D6F9;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 2.7px; 
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;

    &.active {
       background-color: red;
    }
`;