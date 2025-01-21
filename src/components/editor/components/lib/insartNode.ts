import { UUIDTypes } from "uuid";
import { elementType } from "../../types/editorTypes";

export const insertNode = (
    elements: elementType,
    targetId: UUIDTypes,
    nodeToInsert: elementType[number],
    targetIndex: number
  ): boolean => {
    for (let i = 0; i < elements.length; i++) {
      const currentNode = elements[i];
      if (currentNode.id === targetId && currentNode.childElement === undefined) {
        elements.splice(targetIndex,0,nodeToInsert)
        return true
      }
      else if (currentNode.childElement!=undefined) {
        if(currentNode.id === targetId){
        currentNode.childElement.splice(targetIndex, 0, nodeToInsert);
        return true;
        }
        else if (currentNode.childElement!=undefined) {
          const inserted = insertNode(currentNode.childElement, targetId, nodeToInsert, targetIndex);
          if (inserted) return true;
        }
      } 
    }
    return false;
  };