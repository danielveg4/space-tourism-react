import styled from "styled-components";

export const StyledNavLink = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid white;
    margin: 1rem;
    display: flex;
    flex-direction: column;

    &.active {
       background-color: white;
    }
`;