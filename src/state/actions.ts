//an action now can resort to one of the forms we passed in, the list or task
export type Action =
    | {
        type: "ADD_LIST"
        payload: string
    }
    | {
        type: "ADD_TASK"
        payload: { text: string; listId: string }
    }
    | {
        type: "MOVE_LIST"
        payload: {
        draggedId: string
        hoverId: string
    }
}
    
/*what I had before I decided to use a discriminated union which
allows the Typescript to look at the property and understand the other fields
    interface AddListAction {
        type: "ADD_LIST"
        payload: string
    }

    interface AddTaskAction {
        type: "ADD_LIST"
        payload: { text: string; listId: string }
    }

    type Action = AddListAction | AddTaskAction

*/


export const addTask = (
    text: string,
    listId: string,
): Action => ({
    type: "ADD_TASK",
    payload: {
        text,
        listId
    }
});

export const addList = (
    text: string,
): Action => ({
    type: "ADD_LIST",
    payload: text
});
export const moveList = (
    draggedId: string,
    hoverId: string,
): Action => ({
    type: "MOVE_LIST",
    payload: {
        draggedId,
        hoverId,
    }
})
    