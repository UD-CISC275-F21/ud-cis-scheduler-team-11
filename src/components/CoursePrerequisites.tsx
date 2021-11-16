import React from "react";
import DropdownBox from "react-dropdown";


export function MajorDropdown(): JSX.Element {
    const options =["CISC108 is a prerequisite for CISC181 and CISC210.", "MATH241 is a prerequisite for MATH242.", "CISC210 is a prerequisite for CISC220 and CISC260.", "MATH241 and MATH242 are prerequisites for MATH210.", "MATH242 is a prerequisite for MATH243.", "CISC181 and CISC220 are prerequisites for CISC275.", "MATH210 is a prerequisite for MATH205.", "MATH243 is a prerequisite for MATH350."];
    const defaultOption = "Click Here";
    return(
        <div style={styles.dropdown}>
            <h3>Course Prerequisites</h3>
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
        borderRadius: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 15,
        border: "10px solid skyblue",
    },
} as const;
