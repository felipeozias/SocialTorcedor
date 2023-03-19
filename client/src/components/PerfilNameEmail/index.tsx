import { StyledContainer, StyledName, StyledEmail } from "./styles";

export default function NameEndEmail(data: { name: String; nickname: String }) {
    return (
        <StyledContainer>
            <StyledName>{data.name}</StyledName>
            <StyledEmail>{data.nickname}</StyledEmail>
        </StyledContainer>
    );
}
