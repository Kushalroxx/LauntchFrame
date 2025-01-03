"use client"
import React from 'react'
import EditorStyleBar from './components/EditorStyleBar'
import EditorTopBar from './components/EditorTopBar'
import EditorSideBar from './components/EditorSideBar'
import Canvas from './components/Canvas'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Editor() {
  return (
    <div className='md:block hidden bg-background'>
        <EditorTopBar/>
        <div className='flex justify-between h-screen'>
        <DndProvider backend={HTML5Backend}>
        <EditorSideBar/>
        <Canvas/>
        </DndProvider>
        <EditorStyleBar/>
        </div>
    </div>
  )
}

export default Editor