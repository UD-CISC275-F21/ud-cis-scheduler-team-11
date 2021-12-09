import { DragItem } from "../DragItem";

//an action now can resort to one of the forms we passed in, the semester or task
export type Action =
    | {
        type: "MOVE_COURSE"
        payload: {
            draggedItemId: string
            hoveredItemId: string | null
            sourceColumnId: string
            targetColumnId: string
        }
    }
    | {
        type: "ADD_SEMESTER"
        payload: string
    }
    | {
        type: "ADD_COURSE"
        payload: { text: string; semesterId: string }
    }
    | {
        type: "MOVE_SEMESTER"
        payload: {
            draggedId: string
            hoverId: string
        }
    }
    | {
        type: "SET_DRAGGED_ITEM"
        payload: DragItem | null
    }
    | {
        type: "DELETE_ALL_SEMESTERS"
    }
    | {
        type: "DELETE_SEMESTER"
        payload: string
    }
    | {
        type: "EDIT_SEMESTER"
        payload: {
            text: string
            id: string
        }
    }
    | {
        type: "DELETE_COURSE"
        payload: {
            text: string
            semesterId: string
            id: string
        }
    }
    | {
        type: "EDIT_COURSE"
        payload: {
            text: string
            semesterId: string
            id: string
        }
    }



/*what I had before I decided to use a discriminated union which
allows the Typescript to look at the property and understand the other fields
    interface AddSemesterAction {
        type: "ADD_SEMESTER"
        payload: string
    }

    interface AddTaskAction {
        type: "ADD_SEMESTER"
        payload: { text: string; semesterId: string }
    }

    type Action = AddSemesterAction | AddTaskAction

*/


export const addCourse = (
    text: string,
    semesterId: string,

): Action => ({
    type: "ADD_COURSE",
    payload: {
        text,
        semesterId,
    }
});

export const editCourse = (
    text: string,
    semesterId: string,
    id: string
): Action => ({
    type: "EDIT_COURSE",
    payload: {
        text,
        semesterId,
        id
    }
});

export const deleteCourse = (
    text: string,
    semesterId: string,
    id: string
): Action => ({
    type: "DELETE_COURSE",
    payload: {
        text,
        semesterId,
        id
    }
});

export const addSemester = (
    text: string,
): Action => ({
    type: "ADD_SEMESTER",
    payload: text
});

export const editSemester = (
    text: string,
    id: string,
): Action => ({
    type: "EDIT_SEMESTER",
    payload: {
        text,
        id
    }
});

export const deleteSemester = (
    id: string,
): Action => ({
    type: "DELETE_SEMESTER",
    payload: id
});

export const deleteSemesters = (): Action => ({
    type: "DELETE_ALL_SEMESTERS",
});

export const moveSemester = (
    draggedId: string,
    hoverId: string,
): Action => ({
    type: "MOVE_SEMESTER",
    payload: {
        draggedId,
        hoverId,
    }
});

export const setDraggedItem = (
    draggedItem: DragItem | null,
): Action => ({
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem
});

export const moveCourse = (
    draggedItemId: string,
    hoveredItemId: string | null,
    sourceColumnId: string,
    targetColumnId: string
): Action => ({
    type: "MOVE_COURSE",
    payload: {
        draggedItemId,
        hoveredItemId,
        sourceColumnId,
        targetColumnId
    }
});



