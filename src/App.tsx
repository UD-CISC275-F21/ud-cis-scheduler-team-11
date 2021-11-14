import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Welcome } from "./components/Welcome";
import { Dropdown } from "./components/MajorDropdown";
import "./components/Message.css";
import { Message } from "./components/Message";
import { Footer } from "./components/Footer";
import { SemesterContainer } from "./components/SemesterContainer";

export const App = ():JSX.Element  => {
    return (
        <div className = "App">
            <Message />
            <Welcome />
            <Dropdown />
            <SemesterContainer />
            <Footer />
        </div>
    );
};
