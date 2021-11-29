import React, { useState} from "react";
import { AddCourseButton } from "../styles";
import { NewCourseForm } from "./NewCourseForm";


type AddNewCourseProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
    }

export const AddNewCourse = (props: AddNewCourseProps): JSX.Element => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;
    
    if (showForm) {
        return (
            <NewCourseForm
                onAdd={text => {
                    onAdd(text);
                    setShowForm(false);
                }}
            />
        );
    }
        
    
    return (
        <AddCourseButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddCourseButton>
    );
};
