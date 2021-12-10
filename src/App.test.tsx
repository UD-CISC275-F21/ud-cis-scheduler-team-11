import React from "react";
import { render, screen} from "@testing-library/react";
import { App } from "./App";
import { DndProvider } from "react-dnd";
import { AppStateProvider } from "./state/AppStateContext";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

test("renders UD CIS Scheduler text", () => {
    render(<DndProvider backend={Backend}>
        <AppStateProvider>
            <App />
        </AppStateProvider>
    </DndProvider>);
    const welcomeMessage = screen.getByText(/Welcome to the UD CIS Scheduler/);
    expect(welcomeMessage).toBeInTheDocument();
});

test("renders Major Selector text", () => {
    render(<DndProvider backend={Backend}>
        <AppStateProvider>
            <App />
        </AppStateProvider>
    </DndProvider>);
    const majorSelector = screen.getByText(/Click Here To Select A Major/);
    expect(majorSelector).toBeInTheDocument();
});

test("renders dragNDrop Course Lists", () => {
    render(<DndProvider backend={Backend}>
        <AppStateProvider>
            <App />
        </AppStateProvider>
    </DndProvider>);
    const courseList = screen.getByText(/Required Course List/);
    const fallYear1 = screen.getByText(/Year 1: Fall Semester/);
    const springYear1 = screen.getByText(/Year 1: Spring Semester/);

    expect(courseList).toBeInTheDocument();
    expect(fallYear1).toBeInTheDocument();
    expect(springYear1).toBeInTheDocument();
});

describe("App", () => {
    it("renders successfully", () => {
        const { container } = render(<DndProvider backend={Backend}>
            <AppStateProvider>
                <App />
            </AppStateProvider>
        </DndProvider>);
        expect(container).toBeInTheDocument();
    });
});














    
