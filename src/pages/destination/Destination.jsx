import { StyledDestinationPlanetDates, StyledDestinationPlanetInfo, StyledDestinationPlanetName, StyledDestinationImg, StyledDestinationInfo, StyledDestinationDiv, StyledTitleLight, StyledTitleBold, StyledTitle, StyledDestinationContainer } from './styles';
import TabsDestination from '../../components/tabsDestination/TabsDestination';
import { PLANETSDESTINATION } from '../../constants/planets';
import { useState } from 'react';


const Destination = () => {
    const [activePlanet, setActivePlanet] = useState(PLANETSDESTINATION[0]);
  
    const handleTabChange = (planet) => {
      setActivePlanet(planet);
    };
  
    const planetTabs = PLANETSDESTINATION.map((planet) => ({
      label: planet.name,
      onClick: () => handleTabChange(planet),
    }));
  
    return (
      <StyledDestinationContainer>
        <StyledTitle>
            <StyledTitleLight>01</StyledTitleLight>
            <StyledTitleBold>Pick your destination</StyledTitleBold>
        </StyledTitle>
        <StyledDestinationDiv>
            <StyledDestinationImg src={activePlanet.image} alt={activePlanet.name} />
            <StyledDestinationInfo>
                <TabsDestination tabs={planetTabs} />
                <StyledDestinationPlanetName>{activePlanet.name}</StyledDestinationPlanetName>
                <StyledDestinationPlanetInfo>{activePlanet.description}</StyledDestinationPlanetInfo>
                <StyledDestinationPlanetDates>AVG. DISTANCE: {activePlanet.distance}</StyledDestinationPlanetDates>
                <StyledDestinationPlanetDates>EST. TRAVE TIME: {activePlanet.travetime}</StyledDestinationPlanetDates>
            </StyledDestinationInfo>


        </StyledDestinationDiv>
      </StyledDestinationContainer>
    );
  };
  
export default Destination;


