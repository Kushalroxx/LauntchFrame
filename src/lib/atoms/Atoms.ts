import { elementType, webSiteType } from "@/components/editor/types/editorTypes"
import {atom} from "jotai"
import React from "react"

export const previewState = atom<boolean>(false)
export const editorState = atom<elementType>([])
export const refState = atom<HTMLElement|null>(null)
export const designState = atom<boolean>(false)
export const canvasSizeState = atom<{width:string,height:string}>({width:"1024px",height:"100%"})

