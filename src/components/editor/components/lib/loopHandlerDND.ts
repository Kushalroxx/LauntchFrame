import { UUIDTypes } from "uuid";
import { elements, elementType } from "../../types/editorTypes";

export function loopHandlerDND(
    elements: elementType,
    dropItem: elementType[number],
    id: UUIDTypes,
    index: number) {
      const targetUpdateElement = (list:elementType|undefined, targateId:UUIDTypes,index:number,dropElement:elementType[number]):boolean=>{
        if(list){
          
          for(let i=0; i<list.length; i++){
            if(list[i].id === targateId){
              console.log("list before:",list);
          list.splice(index,0,dropElement)
          console.log("list after:",list);
          
          return true
        }else if(list[i].childElement){
          const found:boolean = targetUpdateElement(list[i].childElement,targateId,index,dropElement)
          if (found) return true
        }}
      }
      return false
      }

      targetUpdateElement(elements,id,index,dropItem)
      return
  }