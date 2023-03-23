import { useEffect, useRef } from "react";
import { StyledChatBoxMessages } from "./styles";

interface IPropsChat {
    children: any;
}

export default function ChatMessages(props: IPropsChat) {
    const divMessages = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (divMessages.current) {
            divMessages.current.scrollTop = divMessages.current.scrollHeight;
        }
    }, [props.children]);
    return (
        <StyledChatBoxMessages ref={divMessages}>
            {props.children}
        </StyledChatBoxMessages>
    );
}
