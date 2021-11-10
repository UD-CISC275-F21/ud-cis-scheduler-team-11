import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";


type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewTitleForm = ({ onAdd }: NewItemFormProps): JSX.Element => {
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
        <NewItemFormContainer>
            <NewItemInput
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleAddText}
            />
            <NewItemButton onClick={() => onAdd(text)}>
                Enter
            </NewItemButton>
        </NewItemFormContainer>
    );
};