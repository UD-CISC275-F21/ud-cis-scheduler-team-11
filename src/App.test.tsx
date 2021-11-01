import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const welcomeMessage = screen.getByText(/Welcome to the UD CIS Scheduler/);
    //const udCisScheduler = screen.getByText(/UD CIS/);
    expect(welcomeMessage).toBeInTheDocument();
    //expect(udCisScheduler).toBeInTheDocument();

});
