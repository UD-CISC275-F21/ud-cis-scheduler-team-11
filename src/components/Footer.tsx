import React from "react";

export function Footer(): JSX.Element {
    return(
        <div style={styles.footer}>
            <p>Made for CISC275 at the University of Delaware</p>
            <p>&copy; 2021 Tyler Rust, Noah Trungold, James Won</p>
        </div>
    );
}

const styles = {
    footer: {
        backgroundColor: "Cyan",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
    },
} as const;