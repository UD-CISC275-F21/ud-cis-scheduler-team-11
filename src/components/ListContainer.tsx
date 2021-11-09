import React from "react";
import { AppContainer } from "../styles";
import { AddNewItem } from "../AddNewItem";
import { CustomDragLayer } from "../CustomDragLayer";
import { useAppState } from "../state/AppStateContext";
import { addList, deleteLists } from "../state/actions";
import { Column } from "../Column";
import { Row } from "react-bootstrap";
import { DeleteSemester } from "../DeleteSems"; 

export function ListContainer(): JSX.Element {
    const { lists, dispatch } = useAppState();
    const test = lists.map(list => 
        <Column id={list.id} text={list.text} button={list.button} key={list.id} />
    );
    return(
        <AppContainer>
            <CustomDragLayer />
            {test}
            <Row>
                <AddNewItem
                    toggleButtonText="+ Add another list"
                    onAdd={text => dispatch(addList(text))}
                />
                <DeleteSemester
                    toggleButtonText="Delete all semesters"
                    onAdd={() => dispatch(deleteLists())}
                />
            </Row>
        </AppContainer>
    );
}