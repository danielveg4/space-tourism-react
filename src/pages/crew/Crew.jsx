import { StyledCrewContainer } from './styles';
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
        <div>
            <h1>02</h1>
            <h1>Meet your crew</h1>
        </div>
        <div>
            <img src={activePerson.image} alt={activePerson.name} />
            <div>
                <p>{activePerson.charge}</p>
                <p>{activePerson.name}</p>
                <p>{activePerson.description}</p>
                <TabsCrew tabs={personTabs} />
            </div>
        </div>
      </StyledCrewContainer>
    );
  };

export default Crew;