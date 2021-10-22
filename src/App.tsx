import React from "react";
import "./App.css";
import { Names } from "./components/Names";
import { Welcome } from "./components/Welcome";
import { Dropdown } from "./components/CourseDropdown";
import { LoadClasses } from "./components/DragButtons";

function App(): JSX.Element {
    return (
        <>
            <Welcome></Welcome>
            <Dropdown></Dropdown>
            <LoadClasses></LoadClasses>
            <Names></Names>
        </>
    );
}

export default App;
