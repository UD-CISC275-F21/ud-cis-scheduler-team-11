import React from "react";
import DropdownBox from "react-dropdown";


export function Dropdown(): JSX.Element {
    const options =["EGGG101 - Introduction to Engineering - Credits: 3", "CISC108 - Intro to Computer Science 1 - Credits: 3", "MATH241 - Analytic Geometry & Calculus - Credits: 4","ENGL110 - Seminar in Composition - 3", "Breadth Requirement (CAH) - Humanities breadth requirement - Credits: 3"];
    const defaultOption = "Click Here.";
    return(
        <div style={styles.dropdown}>
            Major Selector
            <DropdownBox options={options} value={defaultOption} placeholder="Select an option" />
        </div>
    );
}

const styles = {
    classes: {
        width: "20%",
        padding: "0px 90px",
        margin: "50px",
        //margin: "50px auto",
        //background: "gold",
        borderRadius: "10px",
        //display: "flex",
        //flexDirection: "column",
        //alignItems: "center",
        fontSize: 20,
        border: "10px solid red",
    },
    h1: {
        marginLeft: "100px",
    },
} as const;