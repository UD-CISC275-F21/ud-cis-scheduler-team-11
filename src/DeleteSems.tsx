import React from "react";
import { AddItemButton } from "./styles";
import { appData } from "./state/AppStateContext";


type DeleteSemesterProps = {
    toggleButtonText: string
    dark?: boolean
    onAdd(text: string): void
 }

export const DeleteSemester = (props: DeleteSemesterProps): JSX.Element => {
    //appData.lists=[];
    const { toggleButtonText, dark } = props;
    return (
        <AddItemButton dark={dark} onClick={() => appData.lists.splice(1)}>
            {toggleButtonText}
        </AddItemButton>
    );
};