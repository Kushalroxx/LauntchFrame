import { UUIDTypes } from "uuid";
import { elementType } from "../../types/editorTypes";

export const removeNode = (elements: elementType, targetId: UUIDTypes): elementType[number] | undefined => {
    for (let i = 0; i < elements.length; i++) {
      const currentNode = elements[i];
      if (currentNode.id === targetId) {
        return elements.splice(i, 1)[0];
      } else if (currentNode.childElement!=undefined) {
        const result = removeNode(currentNode.childElement, targetId);
        if (result) return result;
      }
    }
    return undefined;
  };