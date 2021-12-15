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
                    <ul  style={styles.Courses}>
                        <p>EGGG101 satisfies the First Year Seminar.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>ENGL110 is required for all students and should be taken in the first year.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>The University Breadth courses include CAH, HCC, & SBS. These & a Multicultural course are required for the College & University requirements.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>An 8 credit lab sequence from any of the following: PHYS, CHEM, GEOL, or BISC is required for science courses.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>A minimum grade of C- is required for each of the following courses: CISC108, CISC181, CISC210, CISC220, and CISC260.</p>
                    </ul>
                </Col>

                <Col style={styles.border}>
                    <ul style={styles.title}>
                        <h5>Course Prerequisites</h5>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>CISC108 is a prerequisite for CISC181 and CISC210.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>MATH241 is a prerequisite for MATH242.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>MATH241 and MATH242 are corequisites for MATH210.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>MATH242 is a prerequisite for MATH243.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>CISC181 and CISC220 are prerequisites for CISC275.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>MATH210 is a prerequisite for MATH205.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>MATH243 is a prerequisite for MATH350.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>MATH210 and CISC220 are prerequisites for CISC303 and CISC320.</p>
                    </ul>
                    <ul  style={styles.Courses}>
                        <p>CISC220 and CISC260 are prerequisites for CISC361 and CISC372.</p>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

const styles = {
    container: {
        width: "80%",
        alignCourses: "center",
        margin: "auto",

    },
    border: {
        border: "3px solid",
        width: "80%",
        margin: "10px",
    },
    title: {
        //margin: "-10px",
        marginRight: "7%",

    },
    Courses: {
        margin: "-10px",
        marginRight: "21px",
    
    }
} as const;
