import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Names } from "./components/Names";
import { Welcome } from "./components/Welcome";
import { Dropdown } from "./components/CourseDropdown";
import { LoadClasses } from "./components/DragButtons";
import { SemesterButton } from "./components/SemesterButton";
import "./components/Message.css";
import { Message } from "./components/Message";

function App(): JSX.Element {
    return (
        <div className = "App">
            <Message />
            <Welcome></Welcome>
            <Dropdown></Dropdown>
            <div className='rowC'>
                <LoadClasses></LoadClasses>
                <SemesterButton></SemesterButton>
            </div>
        </div>
    );
}




export default App;
