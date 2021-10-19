import React from "react";
import "./App.css";
import { Names } from "./components/Names";
import { Welcome } from "./components/Welcome";
import { Dropdown } from "./components/CourseDropdown";

function App(): JSX.Element {
    return (
        <>
            <Welcome></Welcome>
            <Dropdown></Dropdown>
            <Names></Names>
        </>
    );
}

export default App;
