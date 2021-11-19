import React from "react";
import { Row, Col } from "react-bootstrap";


export function RequirementsTable(): JSX.Element {
    return(
        <div style={styles.container}>
            <Row>
                <Col style={styles.border}>
                    <Row style={styles.border}>
                        <h5>Degree Requirements</h5>
                    </Row>
                    <Row style={styles.border}>
                        <h5>Degree Requirements</h5>
                    </Row>
                    <Row style={styles.border}>
                        <h5>Degree Requirements</h5>
                    </Row>
                </Col>

                <Col style={styles.border}>
                    <Row>
                        <h5>Course Prerequisites</h5>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

const styles = {
    container: {
        //border: "3px solid",
    },
    border: {
        border: "3px solid",
    },
} as const;
