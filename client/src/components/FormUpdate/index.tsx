import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import { BoxInputs, Form, DivAlign, DivWrap, Message} from "./style";
import { useState } from "react";
import imageUpload from "../../assets/icon_user_update.png";

import InputImg from "../inputImg";
import { StyledUpdateImg } from "../IconUpdateImage/style";


const FormUpdate: React.FC = () => {
    const [selectedTimeId, setSelectedTimeId] = useState<number | string>("");

    function handleTimeChange(timeId: number) {
        setSelectedTimeId(timeId);
    }

    const [image, setImage] = useState<File | undefined>();

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        setImage(file);
    }

    return (
        <Form>
            <BoxInputs>
                <InputUser type="text">Nome:</InputUser>

                <Message>Time do coração:</Message>
                <SelectType onChange={handleTimeChange} selectedTimeId={selectedTimeId}/>

                <InputUser type="password">Senha:</InputUser>
            </BoxInputs>

            <DivAlign>
                <DivWrap>
                    {image ? <StyledUpdateImg src={URL.createObjectURL(image)} alt="Imagem" />
                           : <StyledUpdateImg src={imageUpload} alt={"foto"}></StyledUpdateImg>}
                    <InputImg change={handleImageChange}/>
                </DivWrap>

                <Button>ATUALIZAR</Button>
            </DivAlign>
        </Form>
    );
}

export default FormUpdate;