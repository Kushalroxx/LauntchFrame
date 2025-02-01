import { LiaCreditCard } from "react-icons/lia";
import { MdAdsClick } from "react-icons/md";
import { RiInputField } from "react-icons/ri"
import { BsBoundingBox } from "react-icons/bs";
import { TbTextCaption } from "react-icons/tb";
import { BsTypeH1 } from "react-icons/bs";

export const items = {
    card:{
      label:"Card",
      icon:<LiaCreditCard className='text-2xl' style={{strokeWidth:0.1}}/>
    },
    button:{
      label:"Button",
      icon:<MdAdsClick  className='text-2xl' style={{strokeWidth:0.1}}/>
    },
    input:{
      label:"Input",
      icon:< RiInputField className='text-2xl' style={{strokeWidth:0.1}}/>
    },
    div:{
      label:"Div",
      icon:<BsBoundingBox
      className='text-2xl' style={{strokeWidth:0.1}}/>
    },
    label:{
      label:"Label",
      icon: <TbTextCaption
      className='text-2xl' style={{strokeWidth:0.5}}/>
    },
    h1:{
      label:"H1",
      icon: <BsTypeH1
      className='text-2xl' style={{strokeWidth:0.1}}/>
    },
    
  }