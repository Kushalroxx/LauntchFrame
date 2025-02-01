import { UUIDTypes } from "uuid"

export type webSiteType = {
  id:UUIDTypes,
  page:string,
  elements?:elementType
}[]

export type elements = "card"|"input"|"button"|"label"|"h1"

export type elementType = {
    id:UUIDTypes,
    type:elements,
    text?:string,
    style?:string,
    childElement?:{
      id:UUIDTypes,
      type:elements,
      text?:string,
      style?:string,
      childElement?:{
        id:UUIDTypes,
      type:elements,
      text?:string,
      style?:string,
      }[]
    }[]
  }[]
  export const dragAbleTypes:{
    Card:"card",
    Input:"input",
    Button:"button",
    Lable:"label",
    H1:"h1",
    Div:"div"
  } = {
    Card:"card",
    Input:"input",
    Button:"button",
    Lable:"label",
    H1:"h1",
    Div:"div"
  }
  