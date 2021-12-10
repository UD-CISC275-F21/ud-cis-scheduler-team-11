import React, {useState} from "react";
import { Dropdown } from "react-bootstrap";

export function MajorDropdown(): JSX.Element {
    // Declare concentration
    type concentration =
        | "Click Here To Select A Major"
        | "BS - Computer Science"
        | "BS - Artificial Intelligence and Robotics Concentration"
        | "BS - Bioinformatics Concentration"
        | "BS - Cybersecurity Concentration"
        | "BS - Data Science Concentration"
        | "BS - High Performance Computing Concentration"
        | "BS - Systems and Networks Concentration"
        | "BS - Theory and Computation Concentration"
 
    /*
    const options =["BS - Computer Science", "BS - Artificial Intelligence and Robotics Concentration", "BS - Bioinformatics Concentration","BS - Cybersecurity Concentration", "BS - Data Science Concentration", "BS - High Performance Computing Concentration", "BS - Systems and Networks Concentration", "BS - Theory and Computation Concentration"];
    const defaultOption = "Click Here To Select A Major  ";
    const downArrow = String.fromCharCode(11167);
    */
    const [conc, setConcentration] = useState<concentration>("Click Here To Select A Major");
    return(
        /*<div>
            <Button style={styles.dropdown}> 
                <DropdownBox 
                    options={options} 
                    value={defaultOption + downArrow}
                    
                />
            </Button>
        */
        <div>
            <Dropdown>
                {<Dropdown.Toggle style={styles.dropdown}>
                    {conc}
                </Dropdown.Toggle>}
                <Dropdown.Menu style={styles.box}>
                    <Dropdown.Header>Concentration</Dropdown.Header>
                    <Dropdown.Item data-testid="option" onClick={() => setConcentration("BS - Computer Science")}>Computer Science</Dropdown.Item>
                    <Dropdown.Item data-testid="option" onClick={() => setConcentration("BS - Artificial Intelligence and Robotics Concentration")}>Artificial Intelligence and Robotics</Dropdown.Item>
                    <Dropdown.Item data-testid="option" onClick={() => setConcentration("BS - Bioinformatics Concentration")}>Bioinformatics</Dropdown.Item>
                    <Dropdown.Item data-testid="option" onClick={() => setConcentration("BS - Cybersecurity Concentration")}>Cybersecurity</Dropdown.Item>
                    <Dropdown.Item data-testid="option" onClick={() => setConcentration("BS - Data Science Concentration")}>Data Science</Dropdown.Item>
                    <Dropdown.Item data-testid="option" onClick={() => setConcentration("BS - High Performance Computing Concentration")}>High Performance Computing</Dropdown.Item>
                    <Dropdown.Item data-testid="option" onClick={() => setConcentration("BS - Systems and Networks Concentration")}>Systems and Networks Concentration</Dropdown.Item>
                    <Dropdown.Item data-testid="option" onClick={() => setConcentration("BS - Theory and Computation Concentration")}>Theory and Computation</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
    box: {
        borderRadius: "10px",
        border: "3px solid black",
        background: "lightblue",
        fontSize: 20,
    },
} as const;
