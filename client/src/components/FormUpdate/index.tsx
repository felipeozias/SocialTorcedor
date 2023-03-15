import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import { BoxInputs, Form, DivAlign, DivWrap} from "./style";
import { useState } from "react";
import imageUpload from "../../assets/icon_user_update.png";

import InputImg from "../inputImg";
import { StyledUpdateImg } from "../IconUpdateImage/style";

export default function FormLogin(): JSX.Element {

     const[image, setImage] = useState()

     function handleImageChange(event:any) {
        const file = event.target.files[0];
        setImage(file);
      }

    return (
        <Form>
            <BoxInputs>
                <InputUser type="text">Nome:</InputUser>
                <SelectType></SelectType>
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

