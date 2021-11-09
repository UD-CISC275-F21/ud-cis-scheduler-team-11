import React from "react";
import { nanoid } from "nanoid";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import { DragItem } from "../DragItem";
import { Action } from "./actions";
import { Button } from "react-bootstrap";


export type Task = {
    id: string
    text: string
}

export type List = {
    id: string
    text: string
    button: JSX.Element
    courses: Task[]
}

export type AppState = {
    draggedItem: DragItem | null
    lists: List[]
}

export const appStateReducer = (
    draft: AppState,
    action: Action
): AppState | void => {
    switch (action.type) {
    case "SET_DRAGGED_ITEM": {
        draft.draggedItem = action.payload;
        break;
    }
    case "ADD_LIST": {
        const id=nanoid();
        draft.lists.push({
            id: id,
            text: action.payload,
            button: <Button onClick={() => draft.lists = draft.lists.filter((list) => list.id)}>X</Button>,
            courses: [],
        });
        break;
    }
    case "ADD_TASK": {
        const { text, listId } = action.payload;
        const targetListIndex = findItemIndexById(draft.lists, listId);
        draft.lists[targetListIndex].courses.push({
            id: nanoid(),
            text
        });
        break;
    }
    case "DELETE_ALL_LISTS": {
        break;
    }
    case "MOVE_LIST": {
        const { draggedId, hoverId } = action.payload;
        const dragIndex = findItemIndexById(draft.lists, draggedId);
        const hoverIndex = findItemIndexById(draft.lists, hoverId);
        draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
        break;
    }
    case "MOVE_TASK": {
        const {
            draggedItemId,
            hoveredItemId,
            sourceColumnId,
            targetColumnId
        } = action.payload;

        const sourceListIndex = findItemIndexById(
            draft.lists,
            sourceColumnId
        );
        const targetListIndex = findItemIndexById(
            draft.lists,
            targetColumnId
        );

        const dragIndex = findItemIndexById(
            draft.lists[sourceListIndex].courses,
            draggedItemId
        );

        const hoverIndex = hoveredItemId
            ? findItemIndexById(
                draft.lists[targetListIndex].courses,
                hoveredItemId
            )
            : 0;
        const item = draft.lists[sourceListIndex].courses[dragIndex];

        // Remove the task from the source list
        draft.lists[sourceListIndex].courses.splice(dragIndex, 1);

        // Add the task to the target list
        draft.lists[targetListIndex].courses.splice(hoverIndex, 0, item);
        break;
    }
    default: {
        break;
    }
    }
};