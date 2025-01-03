import { UUIDTypes, v4 as uuid } from "uuid"
import { elementType } from "../../types/edetorTypes"

export const addElement = (
    item:{id:UUIDTypes,type:string},
    setElements:(e:(prev:elementType)=>elementType)=>void)=>{
    if (item.type==="card") {
        const newElement:elementType[number] = {
            id:item.id,
            type:item.type,
            style:"",
            childElement:[{
                id:uuid(),
                style:"",
                type:"typographyh1",
                text: "Title"
            },{
                id:uuid(),
                style:"",
                type:"label",
                text: "Label"
            },{
                id:uuid(),
                style:"",
                type:"input",
            },{
                id:uuid(),
                style:"",
                type:"button",
                text: "Click"
            }]
        }
        setElements(e=>[...e, newElement])
    }
}