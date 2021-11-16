import React from "react";

export function Footer(): JSX.Element {
    return(
        <div style={styles.footer}>
            <p>Made for CISC275 at the University of Delaware<br/>
            &copy; 2021 Tyler Rust, Noah Trungold, James Wan
            </p>
        </div>
    );
}

const styles = {
    footer: {
        backgroundColor: "lightgreen",
        position: "fixed",
        margin: "0px 0px 0px 0px",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "8%",
        padding: "0px 0px 0px 0px",
        boxSizing: "inherit",
    },
} as const;
