import { StyledCrewCharge, StyledDestinationPlanetInfo, StyledDestinationPlanetName, StyledDestinationInfo, StyledDestinationImg, StyledDestinationDiv, StyledTitleBold, StyledTitleLight, StyledCrewTitle, StyledCrewContainer } from './styles';
import TabsCrew from '../../components/tabsCrew/TabsCrew';
import { PERSONAL } from '../../constants/personal';
import { useState } from 'react';

const Crew = () => {
    const [activePerson, setActivePerson] = useState(PERSONAL[0]);
  
    const handleTabChange = (person) => {
        setActivePerson(person);
    };
  
    const personTabs = PERSONAL.map((person) => ({
      label: person.name,
      onClick: () => handleTabChange(person),
    }));
  
    return (
      <StyledCrewContainer>
        <StyledCrewTitle>
            <StyledTitleLight>02</StyledTitleLight>
            <StyledTitleBold>Meet your crew</StyledTitleBold>
        </StyledCrewTitle>
        <StyledDestinationDiv>
            <StyledDestinationImg src={activePerson.image} alt={activePerson.name} />
            <StyledDestinationInfo>
                <StyledCrewCharge>{activePerson.charge}</StyledCrewCharge>
                <StyledDestinationPlanetName>{activePerson.name}</StyledDestinationPlanetName>
                <StyledDestinationPlanetInfo>{activePerson.description}</StyledDestinationPlanetInfo>
                <TabsCrew tabs={personTabs} />
            </StyledDestinationInfo>
        </StyledDestinationDiv>
      </StyledCrewContainer>
    );
  };

export default Crew;