import { elementType, webSiteType } from "@/components/editor/types/edetorTypes"
import {atom} from "jotai"
import React from "react"

export const previewState = atom<boolean>(false)
export const editorState = atom<elementType>([])
export const refState = atom<HTMLElement|null>(null)