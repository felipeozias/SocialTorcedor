import { DivFile, InputImage, LabelFile } from "./style";

interface IProps{
    change:any;
    validates?:any;
}

export default function InputImg(props:IProps){


    return(    
        <DivFile>
            <LabelFile htmlFor="fileElem">Alterar Imagem</LabelFile>
            <InputImage 
                name="photo"
                type="file" 
                accept="image/*"
                id="fileElem"
                {... props.validates}
                onChange={props.change}
                
            ></InputImage>    
        </DivFile>         
        
    );
}