import React from "react";
import DropdownBox from "react-dropdown";


export function MajorDropdown(): JSX.Element {
    const options =["BS CS", "BS w/AI Concentration", "BS w/Bioinformatics Concentration","BS w/Cybersecurity Concentration", "BS w/Data Science Concentration", "BS w/High Performance Computing Concentration", "BS w/Systems and Networks Concentration", "BS w/Theory and Computation Concentration"];
    const defaultOption = "Click Here";
    return(
        <div style={styles.dropdown}>
            <h3>Major Selector</h3>
            <DropdownBox options={options} value={defaultOption} placeholder="Select an option" />
        </div>
    );
}

const styles = {
    dropdown: {
        width: "40%",
        //padding: "0px 0px",
        margin: "10px auto",
        background: "tan",
        borderRadius: "111px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 20,
        border: "10px solid black",
    },
} as const;
