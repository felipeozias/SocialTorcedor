import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import { BoxInputs, Form, DivAlign, DivWrap, Message, ErrorMessage} from "./style";
import { useState } from "react";
import imageUpload from "../../assets/icon_user_update.png";

import InputImg from "../inputImg";
import { StyledUpdateImg } from "../IconUpdateImage/style";
import { useForm } from "react-hook-form";


interface IProps {
    submit: (e: any) => void;
    noAuth?: boolean;    
}


const FormUpdate = ( props: IProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectedTimeId, setSelectedTimeId] = useState<number | string>("");

    function handleTimeChange(timeId: number) {
        setSelectedTimeId(timeId);
    }

    const [image, setImage] = useState<File | undefined>();

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("file");
        
        const file = event.target.files?.[0];
        console.log(file);
        setImage(file);
        
    }

    return (
        <Form onSubmit={handleSubmit(props.submit)}>
            <BoxInputs>
                <InputUser type="text"
                    name="name"
                    validates={{
                        ...register("name", {
                            required: true,
                            pattern: /^[a-zA-Zà-úÀ-Ú ]+$/,
                        }),
                    }} >Nome:</InputUser>
                    {errors.name && errors.name.type === "required" && (
                    <ErrorMessage>Preencha o campo Nome</ErrorMessage>
                )}
                {errors.name && errors.name.type === "pattern" && (
                    <ErrorMessage>
                        O Nome deve começar com maiusculas{<br />} e só deve
                        conter letras
                    </ErrorMessage>
                )}

                <Message>Time do coração:</Message>
                <SelectType 
                    name="team" 
                    selectedTimeId={selectedTimeId}
                    validates={{
                        ...register("team", {
                            required: true,
                        }),
                    }}
                />

                <InputUser
                    type="password"
                    name="password"
                    password={true}
                    validates={{
                        ...register("password", {
                            required: true,
                        }),
                    }}
                >
                    Senha:
                </InputUser>
                {errors.password && errors.password.type === "required" && (
                    <ErrorMessage>Preencha o campo Password</ErrorMessage>
                )}
                <InputUser
                    type="password"
                    name="confirm-password"
                    password={true}
                    validates={{
                        ...register("password", {
                            required: true,
                        }),
                    }}
                >
                    Confimar Senha:
                </InputUser>
                {errors.password && errors.password.type === "required" && (
                    <ErrorMessage>Preencha o campo Password</ErrorMessage>
                )}
            </BoxInputs>

            <DivAlign>
                <DivWrap>
                    {image ? <StyledUpdateImg src={URL.createObjectURL(image)} alt="Imagem" />
                           : <StyledUpdateImg src={imageUpload} alt={"foto"}></StyledUpdateImg>}
                    <InputImg change={handleImageChange} 
                    
                        validates={{
                            ...register("photo", {
                                required: false,
                            }),
                        }}
                    />
                </DivWrap>

                <Button>ATUALIZAR</Button>
            </DivAlign>
        </Form>
    );
}

export default FormUpdate;