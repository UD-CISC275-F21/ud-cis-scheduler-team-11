import React, { useState} from "react";
import { EditItemButton } from "./styles";
import { NewTitleForm } from "./NewTitleForm";


type EditSemesterTitleProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
    }

export const EditSemesterTitle = (props: EditSemesterTitleProps): JSX.Element => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;
    
    if (showForm) {
        return (
            <NewTitleForm
                onAdd={text => {
                    onAdd(text);
                    setShowForm(false);
                }}
            />
        );
    }
        
    
    return (
        <EditItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </EditItemButton>
    );
};