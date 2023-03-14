import { StyledUpdateImg } from "./style";

export default function IconImage(data: { src: String, alt: String }) {
    return (
        <StyledUpdateImg src={data.src.toString()} alt={data.alt.toString()} />
    )
}