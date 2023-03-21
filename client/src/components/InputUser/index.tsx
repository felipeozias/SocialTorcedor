import { BoxInputIcon, IconVisible, Input, LabelInput } from "./style";
import IconNoVisible from "../../assets/icon-invisível.png";
import IconV from "../../assets/icon-visível.png";
import { useState } from "react";

interface IProps {
  children: string | JSX.Element | JSX.Element[];
  type: string;
  password?: boolean | undefined;
  name: string;
  validates?: any;
  onChange?: any;
}

export default function InputUser(props: IProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState(IconNoVisible);

  const passwordVisibility = () => {
    setVisible(!visible);
    visible ? setIcon(IconNoVisible) : setIcon(IconV);
  };

  return (
    <LabelInput>
      {props.children}
      <BoxInputIcon>
        <Input
          type={!visible ? props.type : "text"}
          name={props.name}
          onChange={props.onChange}
          {...props.validates}
        />
        {props.password && (
            <IconVisible source={icon} onClick={passwordVisibility} onChange={props.onChange} />
        )}
      </BoxInputIcon>
    </LabelInput>
  );
}


















// import { BoxInputIcon, IconVisible, Input, LabelInput } from "./style";
// import IconNoVisible from "../../assets/icon-invisível.png";
// import IconV from "../../assets/icon-visível.png";
// import { useState } from "react";

// interface IProps {
//     children: string | JSX.Element | JSX.Element[];
//     type: string;
//     password?: boolean;
//     name: string;      
//     validates?: any;
//     onChange: any;
// }

// export default function InputUser(this: any, props: IProps): JSX.Element {
//     const [visible, setVisible] = useState(false);
//     const [icon, setIcon] = useState(IconNoVisible);

//     const passwordVisibility = () => {
//         setVisible(!visible);
//         visible ? setIcon(IconNoVisible) : setIcon(IconV);
//     };


//     return (
//         <LabelInput>
//             {props.children}
//             <BoxInputIcon>
//                 <Input
//                     type={!visible ? props.type : "text"}
//                     name={props.name}
//                     onChange={props.onChange}
//                     {...props.validates}
//                 />
//                 {props.password && (
//                     <IconVisible source={icon} onClick={passwordVisibility} onChange={props.onChange} />
//                 )}
//             </BoxInputIcon>
//         </LabelInput>
//     );
// }
