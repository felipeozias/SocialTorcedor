import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import { BoxInputs, Form, DivAlign, DivWrap} from "./style";

import imageUpload from "../../assets/icon_user_update.png";

import InputImg from "../inputImg";
import { StyledUpdateImg } from "../IconUpdateImage/style";

export default function FormLogin(): JSX.Element {


    return (
        <Form>
            <BoxInputs>
                <InputUser type="text">Nome:</InputUser>
                <SelectType></SelectType>
                <InputUser type="password">Senha:</InputUser>                                                            
            </BoxInputs>

            <DivAlign>
                <DivWrap>
                    <StyledUpdateImg src={imageUpload} alt={"foto"}></StyledUpdateImg>
                    <InputImg />
                </DivWrap>   
                                 
                <Button>ATUALIZAR</Button>     
            </DivAlign>           
            
        </Form> 
    );
}