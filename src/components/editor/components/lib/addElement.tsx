import { UUIDTypes, v4 as uuid } from "uuid"
import { elementType,elements } from "../../types/editorTypes"

export const addElement = (
    item:{id:UUIDTypes,type:elements},
    setElements:(e:(prev:elementType)=>elementType)=>void)=>{
        let newElement:elementType[number]|undefined 
        if (item.type==="card") {
            newElement = {
                id:item.id,
                type:item.type,
                childElement:[{
                    id:uuid(),
                    type:"typographyh1",
                    text: "title"
                },{
                    id:uuid(),
                    type:"label",
                    text: "Label"
                },{
                    id:uuid(),
                    type:"input",
                },{
                    id:uuid(),
                    type:"button",
                    text: "Click"
                }]
            }
        }else if (item.type === "typographyh1"){
            newElement = {
                id:item.id,
                type:item.type,
                text:"h1"
            }
        }else if(item.type === "button"){
            newElement = {
                id:item.id,
                type:item.type,
                text:"click"
            }
        }else if(item.type === "input"){
            newElement = {
                id:item.id,
                type:item.type,
            }
        }else if(item.type === "label"){
            newElement = {
                id:item.id,
                type:item.type,
                text: "label"
            }
        }else{       
            }
        newElement?setElements(e=>[...e, newElement]):""
    
}