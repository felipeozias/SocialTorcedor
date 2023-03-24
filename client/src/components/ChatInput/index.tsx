import { BoxInput, ButtonChat, InputBox, StyledChatContainer } from "./styles";
import { useRef, useState } from "react";
import { sendMessage } from "../../services/chat";
import ModalAlert from "../ModalAlert";

interface IProps {
    id: string;
}

export default function ChatInput(props: IProps) {
    const [modalAlert, setModalAlert] = useState({ content: ``, color: "", times: 2, });
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const postChat = () => {
        if (value && value.trim() !== "") {

            let validation = false;

            const valueContent = value.split(' ');
            valueContent.forEach((value) => {
                if (value.length > 18) {
                    validation = true
                }
            })

            if (validation) {
                setModalAlert({ content: `Cada palavra pode conter até 18 caracteres!`, color: 'red', times: 2 });
            } else {
                sendMessage(props.id, value);
                const input = inputRef.current;

                if (input) {
                    input.value = "";
                    input.focus();
                    setValue("");
                }
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
                    onKeyUp={(e) => {
                        if (e.code === "Enter" || e.code === "NumpadEnter") {
                            postChat();
                        }
                    }}
                />
                <ButtonChat onClick={postChat}>Enviar</ButtonChat>
            </BoxInput>
            <ModalAlert>{modalAlert}</ModalAlert>
        </StyledChatContainer>
    );
}
