import styled from "styled-components";

export const StyledNavLink = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    border: none;
    margin: 1rem;

    &.active {
       background-color: red;
    }
`;