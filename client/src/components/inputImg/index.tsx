import { DivFile, InputImage, LabelFile } from "./style";

interface IProps{
    change:any;
}

export default function InputImg(props:IProps){


    return(    
        <DivFile>
            <LabelFile htmlFor="fileElem">Alterar Imagem</LabelFile>
            <InputImage 
                type="file" 
                accept="image/*"
                id="fileElem"
                onChange={props.change}
            ></InputImage>    
        </DivFile>         
        
    );
}