import React from "react";

export function Footer(): JSX.Element {
    return(
        <div style={styles.footer}>
            <br/>
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
        margin: "auto",
        bottom: "10",
        left: "0",
        width: "100%",
    },
} as const;
