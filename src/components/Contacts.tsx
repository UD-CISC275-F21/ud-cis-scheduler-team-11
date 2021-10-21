import React from "react";
import DropdownBox from "react-dropdown";


export function Dropdown(): JSX.Element {
    const options =["Parent", "Guardian", "Relative"];
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
        border: "10px solid black",
    },
} as const;