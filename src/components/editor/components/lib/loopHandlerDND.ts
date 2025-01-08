import { UUIDTypes } from "uuid";
import { elements, elementType } from "../../types/editorTypes";

export function loopHandlerDND(
    elements: elementType,
    dropItem: elementType[number],
    id: UUIDTypes
  ): boolean {
    for (let index = 0; index < elements.length; index++) {
      const e = elements[index];
  
      if (e.id === id) {
        elements.splice(index, 0, dropItem);
        return true;
      }
      if (e.childElement) {
        const added = loopHandlerDND(e.childElement, dropItem, id);
        if (added) return true;
      }
    }
  
    return false; 
  }