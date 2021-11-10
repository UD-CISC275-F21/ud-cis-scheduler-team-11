import React, { createContext, useContext, Dispatch, FC } from "react";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import {
    appStateReducer,
    AppState,
    List,
    Task
} from "./appStateReducer";
import { DragItem } from "../DragItem";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export function deleteSemester(id: string): void {
    const left = appData.lists
        .filter(list => list.id !== id);
    appData.lists= left;
}

export const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "Course List",
            courses: [{ id: "c0", text: "CISC106" },{ id:"c1", text: "CISC108"}]
        },
        {
            id: "1",
            text: "Year 1: Semester 1",
            courses: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Year 1: Semester 2",
            courses: [{ id: "c3", text: "Begin to use static typing" }]
        } 
    ]
};

type AppStateContextProps = {
    draggedItem: DragItem | null
    lists: List[]
    getCoursesByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

    
//making sure we can access data globally
export const useAppState = (): AppStateContextProps => {
    return useContext(AppStateContext);
};

export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);
    
    const { draggedItem, lists } = state;
    const getCoursesByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.courses || [];
    };
    return (
        <AppStateContext.Provider value={{ draggedItem, lists, getCoursesByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};
