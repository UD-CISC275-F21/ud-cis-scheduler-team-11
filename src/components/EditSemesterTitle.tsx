import React, { useState} from "react";
import { EditSemesterButton } from "../styles";
import { NewTitleForm } from "./NewSemesterTitleForm";

type EditSemesterTitleProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
    }

export const EditSemesterTitle = (props: EditSemesterTitleProps): JSX.Element => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText} = props;
    
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
        <EditSemesterButton dark={false} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </EditSemesterButton>
    );
};
