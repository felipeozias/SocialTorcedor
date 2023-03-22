import { BoxInput, ButtonChat, InputBox, StyledChatContainer } from "./styles";
import FeedBarInput from "../FeedBarInput";
import { useContext, useState } from "react";
import DataUserForHeader from "../contexts/DataUserForHeader";
import { sendMessage } from "../../services/chat";

export default function ChatInput() {
    const { id } = useContext(DataUserForHeader);
    const [value, setValue] = useState("");

    const postChat = () => {
        sendMessage("6419c2fc1e6038a18e8410b2", value);
    };

    return (
        <StyledChatContainer>
            <BoxInput>
                <InputBox
                    placeholder="Escreva sua mensagem!"
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
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
