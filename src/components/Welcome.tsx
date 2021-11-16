import React from "react";

export function Welcome(): JSX.Element {
    return(
        <div style={styles.welcome}>
            <p>UD CIS Scheduler</p>
        </div>
    );
}

const styles = {
    welcome: {
        width: "40%",
        padding: "30px 0px 0px 0px",
        margin: "auto",
        background: "white",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 30,
    },
} as const;