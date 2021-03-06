import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/WelcomePopup.css";
import { WelcomePopup } from "./components/WelcomePopup";
import { Welcome } from "./components/Welcome";
import { MajorDropdown } from "./components/MajorDropdown";
import { SemesterContainer } from "./components/Semesters/SemesterContainer";
import { Footer } from "./components/Footer";
import { Space } from "./components/SpaceBetweenBodyandFooter";
import { RequirementsTable } from "./components/RequirementsTable";

export const App = ():JSX.Element  => {
    return (
        <div className = "App">
            <WelcomePopup />
            <Welcome />
            <MajorDropdown />
            <RequirementsTable />
            <SemesterContainer />
            <Footer />
            <Space />
        </div>
    );
};
