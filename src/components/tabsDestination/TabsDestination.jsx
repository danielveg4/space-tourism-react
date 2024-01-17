import { StyledNavLink} from './styles';

const TabsDestination = ({ tabs }) => {
  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <StyledNavLink key={index} onClick={tab.onClick} className={tab.active ? 'active' : ''}>
          {tab.label}
        </StyledNavLink>
      ))}
    </div>
  );
};

export default TabsDestination;