import React from "react";
import { AppContainer } from "../styles";
import { AddNewCourse } from "../AddNewCourse";
import { CustomDragLayer } from "../CustomDragLayer";
import { useAppState } from "../state/AppStateContext";
import { addList, deleteLists } from "../state/actions";
import { Semester } from "../SemesterList";
import { Button, Row } from "react-bootstrap";
//import { DeleteSemester } from "../DeleteSems"; 

export function SemesterContainer(): JSX.Element {
    const { lists, dispatch } = useAppState();
    return( 
        <AppContainer>
            <CustomDragLayer />
            {lists.map(list => 
                <Semester key={list.id} id={list.id} text={list.text} />
            )};
            <Row>
                <AddNewCourse
                    toggleButtonText="+ Add another term"
                    onAdd={text => dispatch(addList(text))}
                />
                <Button style={styles.deleteButton} onClick={() => dispatch(deleteLists())}>
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
