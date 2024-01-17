import { StyledNavLink} from './styles';

const TabsTechnology = ({ tabs }) => {
  return (
    <div>
      {tabs.map((tab, index) => (
        <StyledNavLink key={index} onClick={tab.onClick} className={tab.active ? 'active' : ''}>
        </StyledNavLink>
      ))}
    </div>
  );
};

export default TabsTechnology;