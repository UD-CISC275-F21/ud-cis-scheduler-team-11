import React from "react";
export function Names(): JSX.Element {
    return(
        <div style={styles.names}>
            <p>Tyler Rust</p>
            <p>James Wan</p>
            <p>Noah Trungold</p>
        </div>
    );
}

const styles = {
    names: {
        width: "80%",
        padding: "30px 90px",
        margin: "50px auto",
        background: "cyan",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 30,
    },
} as const;
