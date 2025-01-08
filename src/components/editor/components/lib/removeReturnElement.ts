import { UUIDTypes } from "uuid";
import { elementType } from "../../types/editorTypes";

export const removeReturnElement = (elements:elementType,id:UUIDTypes)=>{
    let element:elementType[number]|null = null
    elements.forEach((e, index)=>{
        if(e.id === id){
            element =  elements.splice(index,1)[0]            
            return element
        }if(e.childElement){
            const found = removeReturnElement(e.childElement, id)
            return found
        }
    })
     if(element)return element
}