import React from "react";
import { AppContainer } from "../styles";
import { AddNewItem } from "../AddNewItem";
import { CustomDragLayer } from "../CustomDragLayer";
import { useAppState } from "../state/AppStateContext";
import { addList, deleteLists } from "../state/actions";
import { Column } from "../Column";
import { Button, Row } from "react-bootstrap";
//import { DeleteSemester } from "../DeleteSems"; 

export function ListContainer(): JSX.Element {
    const { lists, dispatch } = useAppState();
    return( 
        <AppContainer>
            <CustomDragLayer />
            {lists.map(list => 
                <Column key={list.id} id={list.id} text={list.text} />
            )};
            <Row>
                <AddNewItem
                    toggleButtonText="+ Add another list"
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
