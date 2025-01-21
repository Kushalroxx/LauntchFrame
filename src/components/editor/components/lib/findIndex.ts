import { UUIDTypes } from "uuid";
import { elementType } from "../../types/editorTypes";

export const findIndex = (id:UUIDTypes,elements:elementType):number|undefined=>{
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      if (element.id === id) {
        
        return index
      }else if(element.childElement!=undefined){
        const data = findIndex(id, element.childElement)
        if (data!= undefined) {
          return data 
        }
      }
      
    }
  }