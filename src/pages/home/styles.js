import styled from "styled-components";

export const StyledHomeContainer = styled.div`
    width: 1440px;
    height: 900px;
    padding-top: 150px;
    background-image: url('public/assets/home/background-home-desktop.jpg');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const StyledHomeDiv = styled.div`
    width: 445px;
    height: 500px;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 10rem;
    padding: 10rem;
    padding-bottom: 0;
`;

export const StyledSubtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1rem;
`;

export const StyledTitle = styled.h1`
    font-size: 8rem;
    font-weight: 400;
    line-height: 0rem;
`;

export const StyledText = styled.p`
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5rem;
`;

export const StyledCircle = styled.div`
    width: 274px;
    height: 274px;
    border-radius: 50%;
    background-color: white;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 2rem;
    font-weight: 600;
`;