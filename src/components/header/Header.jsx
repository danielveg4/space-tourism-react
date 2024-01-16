import { StyledUlNav, StyledNav, StyledImg, StyledDiv, StyledNavLink } from './styles';


const Header = () => {
    return (
        <StyledDiv>
            <StyledImg src="public\assets\shared\logo.svg" alt="logo" />
            <StyledNav>
                <StyledUlNav>
                    <li>
                        <StyledNavLink to="/">00 Home</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/destination">01 Destination</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/crew">02 Crew</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/technology">03 Technology</StyledNavLink>
                    </li>
                </StyledUlNav>
            </StyledNav>
        </StyledDiv>
    );
}

export default Header;
