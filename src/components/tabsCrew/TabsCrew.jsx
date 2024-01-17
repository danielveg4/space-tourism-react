import { StyledNavLink} from './styles';

const TabsCrew = ({ tabs }) => {
  return (
    <div>
      {tabs.map((tab, index) => (
        <StyledNavLink key={index} onClick={tab.onClick} className={tab.active ? 'active' : ''}>
        </StyledNavLink>
      ))}
    </div>
  );
};

export default TabsCrew;