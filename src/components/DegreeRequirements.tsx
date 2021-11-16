import React from "react";
import DropdownBox from "react-dropdown";


export function MajorDropdown(): JSX.Element {
    const options =["EGGG101 satisfies the First Year Seminar (FYS).", "ENGL110 is required for all students and should be taken in the first year.", "The CAH, HCC, and SBS breadth, and Multicultural requirements are required for the College, University Breadth, and University Requirements.", "2 science courses with labs can satisfy one laboratory science sequence.", "A laboratory science sequence is required for the science courses."];
    const defaultOption = "Click Here";
    return(
        <div style={styles.dropdown}>
            <h3>Degree Requirements</h3>
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