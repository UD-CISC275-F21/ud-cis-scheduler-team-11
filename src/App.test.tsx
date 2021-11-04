import React from "react";
import { render, screen } from "@testing-library/react";
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
    //const udCisScheduler = screen.getByText(/UD CIS/);
    expect(welcomeMessage).toBeInTheDocument();
    //expect(udCisScheduler).toBeInTheDocument();

});
