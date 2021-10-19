import React from "react";
import DropdownBox from "react-dropdown";


export function Dropdown(): JSX.Element {
    const options =["BA CS", "BS CS", "BS w/AI Concentration", "BS w/Bioinformatics Concentration","BS w/Cybersecurity Concentration", "BS w/Data Science Concentration", "BS w/High Performance Computing Concentration", "BS w/Systems and Networks Concentration", "BS w/Theory and Computation Concentration"];
    const defaultOption = "Click Here.";
    return(
        <div style={styles.dropdown}>
            Major Selector
            <DropdownBox options={options} value={defaultOption} placeholder="Select an option" />
        </div>
    );
}

const styles = {
    dropdown: {
        width: "40%",
        padding: "0px 90px",
        margin: "50px auto",
        background: "tan",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 30,
    },
} as const;