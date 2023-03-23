import { StyledLeftSection } from "./styles";
import MainUserSection from "../MainUserSection";
import MainGroupSection from "../MainGroupSection";

interface IProps {
    click: any;
}

export default function MainLeftSection(props: IProps): JSX.Element {
    return (
        <StyledLeftSection>
            <MainUserSection />
            <MainGroupSection click={props.click} />
        </StyledLeftSection>
    );
}
