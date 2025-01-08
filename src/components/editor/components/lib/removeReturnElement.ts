import { UUIDTypes } from "uuid";
import { elementType } from "../../types/editorTypes";

export const removeReturnElement = (elements:elementType,id:UUIDTypes)=>{
    let removedElement:undefined|elementType
    elements.forEach((e, index)=>{
        if (removedElement)return
        if(e.id === id){
            removedElement = elements.splice(index,1)
        }else{
            e.childElement && removeReturnElement(e.childElement, id)
        }
    })
    if(removedElement){
        return removedElement[0]
    }
}