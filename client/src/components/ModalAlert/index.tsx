import { StyledContainer } from "./style";
import { useState, useEffect } from "react";

export default function ModalAlert(props: { children: { content: string, times: number, color: string } }) {

    const [content, setContent] = useState<any>('');

    useEffect(() => {
        setContent(`${props.children.content}`)

        setTimeout(() => {
            setContent('')
        }, props.children.times * 1000);
    }, [props.children]);


    if (content !== '') {
        return (
            <StyledContainer id="MoadlAlert" color={props.children.color}>
                {content}
            </StyledContainer>
        );
    }
    return <></>;
}