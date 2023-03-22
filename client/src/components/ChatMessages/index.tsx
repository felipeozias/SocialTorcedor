import { StyledChatBoxMessages, StyleMessage } from "./styles";

interface IPropsChat {
    children: any;
}

export default function ChatMessages(props: IPropsChat) {
    return (
        <StyledChatBoxMessages>
            {props.children}
            {/* <StyleMessage>
                <span>Torcedor certo:</span>
                <p>Fala mano, beleza?</p>
            </StyleMessage>

            <StyleMessage>
                <span>Novo jogador:</span>
                <p>Fala mano, eai ✌</p>
            </StyleMessage>

            <StyleMessage>
                <span>Torcedor certo:</span>
                <p>Vai ter sofrência hoje?</p>
            </StyleMessage>

            <StyleMessage>
                <span>Novo jogador:</span>
                <p>Vamos ganhar bonido 🏅🏆</p>
            </StyleMessage>

            <StyleMessage>
                <span>Torcedor certo:</span>
                <p>Acho que vai da bom também 🎉🎉🎉</p>
            </StyleMessage>

            <StyleMessage>
                <span>Novo jogador:</span>
                <p>Mais tarde rola uns memes em...</p>
            </StyleMessage>

            <StyleMessage>
                <span>Torcedor certo:</span>
                <p>Hahaa, com certeza🎞🎞</p>
            </StyleMessage>

            <StyleMessage>
                <span>Novo jogador:</span>
                <p>Me organizar aqui </p>
            </StyleMessage>

            <StyleMessage>
                <span>Torcedor certo:</span>
                <p>Cadê a galera desse grupo em???💤</p>
            </StyleMessage> */}
        </StyledChatBoxMessages>
    );
}
