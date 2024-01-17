import { StyledDestinationPlanetInfo, StyledDestinationPlanetName, StyledDestinationImg, StyledDestinationInfo, StyledDestinationDiv, StyledTitleLight, StyledTitleBold, StyledTitle, StyledDestinationContainer } from './styles';
import { TECHNOLOGY } from '../../constants/technology';
import { useState } from 'react';
import TabsTechnology from '../../components/tabsTechnology/TabsTechnology';

const Technology = () => {
    const [activeTechnology, setActiveTechnology] = useState(TECHNOLOGY[0]);
  
    const handleTabChange = (technology) => {
      setActiveTechnology(technology);
    };
  
    const technologyTabs = TECHNOLOGY.map((technology) => ({
      label: technology.name,
      onClick: () => handleTabChange(technology),
    }));
  
    return (
      <StyledDestinationContainer>
        <StyledTitle>
            <StyledTitleLight>03</StyledTitleLight>
            <StyledTitleBold>SPACE LAUNCH 101</StyledTitleBold>
        </StyledTitle>
        <StyledDestinationDiv>
            <TabsTechnology tabs={technologyTabs} />
            <StyledDestinationInfo>
                <StyledDestinationInfo>THE TERMINOLOGY...</StyledDestinationInfo>
                <StyledDestinationPlanetName>{activeTechnology.name}</StyledDestinationPlanetName>
                <StyledDestinationPlanetInfo>{activeTechnology.description}</StyledDestinationPlanetInfo>
            </StyledDestinationInfo>
            <StyledDestinationImg src={activeTechnology.image} alt={activeTechnology.name} />
        </StyledDestinationDiv>
      </StyledDestinationContainer>
    );
};


export default Technology;