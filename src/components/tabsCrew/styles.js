import styled from "styled-components";

export const StyledNavLink = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;

    &.active {
       background-color: red;
    }
`;