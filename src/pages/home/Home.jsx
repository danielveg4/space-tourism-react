import { StyledCircle, StyledText, StyledTitle, StyledSubtitle, StyledHomeDiv, StyledHomeContainer } from './styles';

const Home = () => {
    return (
        <StyledHomeContainer>
            <StyledHomeDiv>
                <StyledSubtitle>SO, YOU WANT TO TRAVEL TO</StyledSubtitle>
                <StyledTitle>SPACE</StyledTitle>
                <StyledText>Lets face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because well give you a truly out of this world experience!</StyledText>
            </StyledHomeDiv>
            <StyledHomeDiv>
                <StyledCircle>EXPLORE</StyledCircle>
            </StyledHomeDiv>
        </StyledHomeContainer>
    );
}

export default Home;