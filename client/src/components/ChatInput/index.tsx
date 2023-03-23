import { BoxInput, ButtonChat, InputBox, StyledChatContainer } from "./styles";
import { useContext, useRef, useState } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";
import { sendMessage } from "../../services/chat";

interface IProps {
    id: string;
}

export default function ChatInput(props: IProps) {
    const { id } = useContext(DataUserForHeader);
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const postChat = () => {
        sendMessage(props.id /* "641a05b9e793ef2ca38b2eb0" */, value);
        const input = inputRef.current;

        if (input) {
            input.value = "";
            input.focus();
        }
    };

    return (
        <StyledChatContainer>
            <BoxInput>
                <InputBox
                    placeholder="Escreva sua mensagem!"
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    ref={inputRef}
                />
                <ButtonChat onClick={postChat}>Enviar</ButtonChat>
            </BoxInput>
            {/* <FeedBarInput
                place_hoder="Escreva sua mensagem!"
                action="Enviar"
                emotion={false}
            /> */}
        </StyledChatContainer>
    );
}
