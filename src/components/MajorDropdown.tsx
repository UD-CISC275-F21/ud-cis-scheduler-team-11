import React from "react";
import DropdownBox from "react-dropdown";
//import Dropdown from "react-dropdown";
import { Button } from "react-bootstrap";


export function MajorDropdown(): JSX.Element {
    const options =["BS CS", "BS w/AI Concentration", "BS w/Bioinformatics Concentration","BS w/Cybersecurity Concentration", "BS w/Data Science Concentration", "BS w/High Performance Computing Concentration", "BS w/Systems and Networks Concentration", "BS w/Theory and Computation Concentration"];
    const defaultOption = "Click Here To Select A Major  ";
    const test = String.fromCharCode(11167);
    return(
        <div>
            <Button style={styles.dropdown}> 
                <DropdownBox 
                    options={options} 

                    value={defaultOption + test}
                    placeholder="Select an option" 
                />
            </Button>
        </div>
        /*
        <DropdownButton style={styles.dropdown} id="dropdown-basic-button" title="Dropdown button">
            <DropdownBox options={options} value={defaultOption} placeholder="Select an option" />
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
        alignItems: "center",
        fontSize: 20,
        border: "10px solid black",
        color: "black",
        fontWeight: 600,
        
    },
} as const;
