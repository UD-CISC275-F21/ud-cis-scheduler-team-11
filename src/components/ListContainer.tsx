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
                <Column key={list.id} id={list.id} text={list.text} button={list.button} />
            )};
            <Row>
                <AddNewItem
                    toggleButtonText="+ Add another list"
                    onAdd={text => dispatch(addList(text))}
                />
                <Button onClick={() => dispatch(deleteLists())}>
                    Delete all semesters
                </Button>
            </Row>
        </AppContainer>
    );
}
/*
<DeleteSemester
                    toggleButtonText="Delete all semesters"
                    onClick={() => dispatch(deleteLists())}
                />
                */
