import { DivFile, InputImage, LabelFile } from "./style";

export default function InputImg(){

    return(    
        <DivFile>
            <LabelFile htmlFor="fileElem">Alterar Imagem</LabelFile>
            <InputImage 
                type="file" 
                accept="image/*"
                id="fileElem"
            ></InputImage>    
        </DivFile>         
        
    );
}