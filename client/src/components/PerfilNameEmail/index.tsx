import { StyledContainer, StyledName, StyledEmail } from "./styles";

export default function NameEndEmail(data: { name: String, email: String }) {
    return (
        <StyledContainer>
            <StyledName>{data.name}</StyledName>
            <StyledEmail>{data.email}</StyledEmail>
        </StyledContainer>
    )
}
