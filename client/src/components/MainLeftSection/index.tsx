import {StyledLeftSection} from "./styles";
import MainUserSection from "../MainUserSection";
import MainGroupSection from "../MainGroupSection";

export default function MainLeftSection() : JSX.Element {
    return (
        <StyledLeftSection>
            <MainUserSection />
            <MainGroupSection />
        </StyledLeftSection>
    )
}