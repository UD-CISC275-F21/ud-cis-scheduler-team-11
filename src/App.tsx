import React from "react";
import "./App.css";
import { Names } from "./components/Names";
import { Welcome } from "./components/Welcome";
import { Dropdown } from "./components/CourseDropdown";
import { LoadClasses } from "./components/DragButtons";
import { SemesterButton } from "./components/SemesterButton";

function App(): JSX.Element {
    return (
        <>
            <Welcome></Welcome>
            <Dropdown></Dropdown>
            <div className='rowC'>
                <LoadClasses></LoadClasses>
                <SemesterButton></SemesterButton>
            </div>
            <Names></Names>
        </>
    );
}




export default App;
