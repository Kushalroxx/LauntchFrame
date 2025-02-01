import { UUIDTypes, v4 as uuid } from "uuid"
import { elementType,elements } from "../../types/editorTypes"

export const addElement = (
    item:{id:UUIDTypes,type:elements},
    setElements:(e:(prev:elementType)=>elementType)=>void)=>{
        let newElement:elementType[number]|undefined 
        if (item.type==="card") {
            newElement = {
                id:item.id,
                style:"flex flex-col space-y-3 p-7",
                type:item.type,
                childElement:[{
                    id:uuid(),
                    type:"h1",
                    text: "title"
                },{
                    id:uuid(),
                    type:"label",
                    text: "Label"
                },{
                    id:uuid(),
                    type:"input",
                    style:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                },{
                    id:uuid(),
                    style:"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",
                    type:"button",
                    text: "Click"
                }]
            }
        }else if (item.type === "h1"){
            newElement = {
                id:item.id,
                type:item.type,
                text:"h1"
            }
        }else if(item.type === "button"){
            newElement = {
                id:item.id,
                style:"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",
                type:item.type,
                text:"click"
            }
        }else if(item.type === "input"){
            newElement = {
                id:item.id,
                type:item.type,
                style:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            }
        }else if(item.type === "label"){
            newElement = {
                id:item.id,
                type:item.type,
                text: "label"
            }
        }else if(item.type ==="div"){
            newElement = {
                id:item.id,
                style:"",
                type:item.type,
                childElement:[]
            }
        }else{       
            }
        newElement?setElements(e=>[...e, newElement]):""
    
}