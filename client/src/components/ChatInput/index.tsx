import { BoxInput, ButtonChat, InputBox, StyledChatContainer } from "./styles";
import { useRef, useState } from "react";
import { sendMessage } from "../../services/chat";

interface IProps {
    id: string;
}

export default function ChatInput(props: IProps) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const postChat = () => {
        if (value && value.trim() !== "") {
            sendMessage(props.id, value);
            const input = inputRef.current;

            if (input) {
                input.value = "";
                input.focus();
                setValue("");
            }
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
        </StyledChatContainer>
    );
}
