import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/WelcomePopup.css";
import { WelcomePopup } from "./components/WelcomePopup";
import { Welcome } from "./components/Welcome";
import { MajorDropdown } from "./components/MajorDropdown";
import { SemesterContainer } from "./components/SemesterContainer";
import { Footer } from "./components/Footer";
import { Space } from "./components/SpaceBetweenBodyandFooter";
import { Modal } from "./PopupTutorial/Modal";
export const App = ():JSX.Element  => {
    return (
        <div className = "App">
            <WelcomePopup />
            <Welcome />
            <MajorDropdown />
            <Modal />
            <SemesterContainer />
            <Footer />
            <Space />
        </div>
    );
};
