import React from "react";
import { AppContainer } from "../styles";
import { AddNewItem } from "../AddNewItem";
import { CustomDragLayer } from "../CustomDragLayer";
import { useAppState } from "../state/AppStateContext";
import { addList } from "../state/actions";
import { Column } from "../Column";

export function ListContainer(): JSX.Element {
    const { lists, dispatch } = useAppState();
    const test = lists.map(list => 
        <Column id={list.id} text={list.text} key={list.id} />
    );
    return(
        <AppContainer>
            <CustomDragLayer />
            {test}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={text => dispatch(addList(text))}
            />
        </AppContainer>
    );
}