import React from "react";
import DropdownBox from "react-dropdown";
//import Dropdown from "react-dropdown";
import { Button } from "react-bootstrap";


export function MajorDropdown(): JSX.Element {
    const options =["BS - Computer Science", "BS - Artificial Intelligence Concentration", "BS - Bioinformatics Concentration","BS - Cybersecurity Concentration", "BS - Data Science Concentration", "BS - High Performance Computing Concentration", "BS - Systems and Networks Concentration", "BS - Theory and Computation Concentration"];
    const defaultOption = "Click Here To Select A Major  ";
    const downArrow = String.fromCharCode(11167);
    return(
        <div>
            <Button style={styles.dropdown}> 
                <DropdownBox 
                    options={options} 

                    value={defaultOption + downArrow}
                    //placeholder="Select an option" 
                />
            </Button>
        </div>
        /*
        <DropdownButton style={styles.dropdown} id="dropdown-basic-button" title="Dropdown button">
            <DropdownBox options={options} value={defaultOption} placeholder="Select an option"/>
            <Dropdown.Course href="#/action-1">Action</Dropdown.Course>
            <Dropdown.Course href="#/action-2">Another action</Dropdown.Course>
            <Dropdown.Course href="#/action-3">Something else</Dropdown.Course>
        </DropdownButton>
    */

    //<DropdownBox options={options} value={defaultOption} placeholder="Select an option" />
    );
}

const styles = {
    dropdown: {
        width: "auto",
        //padding: "0px 0px",
        margin: "10px auto",
        background: "tan",
        borderRadius: "50px",
        display: "flex",
        flexDirection: "column",
        alignCourses: "center",
        fontSize: 20,
        border: "10px solid black",
        color: "black",
        fontWeight: 600,
        
    },
} as const;
