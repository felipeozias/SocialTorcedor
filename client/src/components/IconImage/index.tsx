import { StyledImg } from "./styles";

export default function IconImage(data: { src: String, alt: String }) {
    return (
        <StyledImg src={data.src.toString()} alt={data.alt.toString()} />
    )
}
