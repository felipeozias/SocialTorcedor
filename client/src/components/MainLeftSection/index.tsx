import {StyledGroupSection, StyledLeftSection, StyledP} from "./styles";
import MainUserSection from "../MainUserSection";

export default function MainLeftSection() : JSX.Element {
    
    return (
        <StyledLeftSection>
            <MainUserSection />
            <StyledGroupSection>
                <StyledP> Grupos </StyledP>
            </StyledGroupSection>
        </StyledLeftSection>
    )
}