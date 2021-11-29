import React, { useState} from "react";
import { EditCourseButton } from "../styles";
import { NewCourseForm } from "./NewCourseForm";

type EditCourseProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
    }

export const EditCourse = (props: EditCourseProps): JSX.Element => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText} = props;
    
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
        <EditCourseButton dark={false} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </EditCourseButton>
    );
};