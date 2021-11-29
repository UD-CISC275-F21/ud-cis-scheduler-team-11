import React, { useState } from "react";
import { NewCourseFormContainer, NewCourseButton, NewCourseInput } from "../styles";
import { useFocus } from "../utils/useFocus";


type NewCourseFormProps = {
    onAdd(text: string): void
}

export const NewCourseForm = ({ onAdd }: NewCourseFormProps): JSX.Element => {
    const [text, setText] = useState("");
    const inputRef = useFocus();
    //add enter key for create
    const handleAddText = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            onAdd(text);
        }
    };
        
    return (
        <NewCourseFormContainer>
            <NewCourseInput
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleAddText}
            />
            <NewCourseButton onClick={() => onAdd(text)}>
                Create
            </NewCourseButton>
        </NewCourseFormContainer>
    );
};
