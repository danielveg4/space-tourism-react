import styled from "styled-components";

export const StyledDestinationContainer = styled.div`
    width: 1440px;
    height: 900px;
    max-height: 700px;
    padding-top: 150px;
    background-image: url('public/assets/destination/background-destination-desktop.jpg');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    padding: 12rem;
`;

export const StyledTitle = styled.div`
    display: flex;
    color: white;
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    gap: 1rem;
    line-height: normal;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    margin-top: 1rem;
`;

export const StyledTitleBold = styled.p`
    font-weight: 400;
    opacity: 1;
`;

export const StyledTitleLight = styled.p`
    font-weight: 700;
    opacity: 0.25;
`;


export const StyledDestinationDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10rem;
    margin-top: 3rem;
`;

export const StyledDestinationInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    color: white;
`;

export const StyledDestinationImg = styled.img`
    width: 450px;
    height: 450px;
`;

export const StyledDestinationPlanetName = styled.h1`
    font-size: 100px;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    text-transform: uppercase;
`;

export const StyledDestinationPlanetInfo = styled.p`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; 
`;

export const StyledDestinationPlanetDates = styled.p`
    color: #D0D6F9;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase; 
`;