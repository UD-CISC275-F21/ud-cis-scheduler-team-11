import React from "react";
import { Row, Col } from "react-bootstrap";


export function RequirementsTable(): JSX.Element {
    return(
        <div style={styles.container}>
            <Row>
                <Col style={styles.border}>
                    <ul style={styles.title}>
                        <h5>Degree Requirements</h5>
                    </ul>
                    <ul  style={styles.items}>
                        <p>EGGG101 satisfies the First Year Seminar.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>ENGL110 is required for all students and should be taken in the first year.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>The CAH, HCC, & SBS breadth, & Multicultural requirements are required for the College, University Breadth, & University requirements.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>An 8 credit lab sequence from any of the following PHYS, CHEM, GEOL, BISC is required for science courses.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>ENGL110 is required for all students and should be taken in the first year.</p>
                    </ul>
                </Col>

                <Col style={styles.border}>
                    <ul style={styles.title}>
                        <h5>Course Prerequisites</h5>
                    </ul>
                    <ul  style={styles.items}>
                        <p>CISC108 is a prerequisite for CISC181 & CISC210.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>MATH241 is a prerequisite for MATH242.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>MATH241 & MATH242 are corequisites for MATH210.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>MATH242 is a prerequisite for MATH243.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>CISC181 & CISC220 are prerequisites for CISC275.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>MATH210 or MATH230 is a prerequisite for MATH205.</p>
                    </ul>
                    <ul  style={styles.items}>
                        <p>MATH243 is a prerequisite for MATH350.</p>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

const styles = {
    container: {
        width: "80%",
        alignItems: "center",
        margin: "auto",

    },
    border: {
        border: "3px solid",
        width: "80%",
        margin: "10px",
    },
    title: {
        //margin: "-10px",
    },
    items: {
        margin: "-10px",
    }
} as const;
