import { elementType } from "../../types/editorTypes";

export const deepCopy = (elements: elementType):elementType =>
  elements.map((el) => ({
    ...el,
    children: el.childElement ? deepCopy(el.childElement) : undefined,
  }));