import React from "react";
import { AppContainer } from "../styles";
import { AddNewCourse } from "./AddNewCourse";
import { CustomDragLayer } from "./CustomDragLayer";
import { useAppState } from "../state/AppStateContext";
import { addSemester, deleteSemesters } from "../state/actions";
import { Semester } from "./SemesterList";
import { Button, Row } from "react-bootstrap";
//import { DeleteSemester } from "../DeleteSems"; 

export function SemesterContainer(): JSX.Element {
    const { semesters, dispatch } = useAppState();
    return( 
        <AppContainer>
            <CustomDragLayer />
            {semesters.map(semester => 
                <Semester key={semester.id} id={semester.id} text={semester.text} />
            )}
            <Row>
                <AddNewCourse
                    toggleButtonText="+ Add another semester"
                    onAdd={text => dispatch(addSemester(text))}
                />
                <Button style={styles.deleteButton} onClick={() => dispatch(deleteSemesters())}>
                    Delete all semesters
                </Button>
            </Row>
        </AppContainer>
    );
}
const styles = {
    deleteButton: {
        backgroundColor: "red",
        margin: "10px -50px 110px 0px",
        bottom: "10",
        left: "0",
        width: "100%",
    },
} as const;
