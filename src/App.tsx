import React from "react";
import "./App.css";
import { Names } from "./components/Names";
import { Welcome } from "./components/Welcome";
import Column from './components/Column';
import {DragDropContext} from 'react-beautiful-dnd'
function App(): JSX.Element {
    const list = ['Item 1', 'Item 2', 'Item 3']
    const onDragEnd = () => null
    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          margin: '24px auto',
          width: '80%',
          gap: '8px'
        }}
      >
        <Column list={list} />
      </div>
      </DragDropContext>
    )
}

export default App;
