import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Welcome } from "./components/Welcome";
import { Dropdown } from "./components/CourseDropdown";
import "./components/Message.css";
import { Message } from "./components/Message";
import { Footer } from "./components/Footer";
import { ListContainer } from "./components/ListContainer";

export const App = ():JSX.Element  => {
    return (
        <div className = "App">
            <Message />
            <Welcome></Welcome>
            <Dropdown></Dropdown>
            <ListContainer />
            <Footer />
        </div>
    );
};
