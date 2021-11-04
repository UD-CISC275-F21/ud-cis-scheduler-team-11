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

const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "Course List",
            tasks: [{ id: "c0", text: "Cisc 106" },{ id:"c1", text: "Cisc108"}]
        },
        {
            id: "1",
            text: "Year 1: Semester 1",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Year 1: Semester 2",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
};

type AppStateContextProps = {
    draggedItem: DragItem | null
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}
    
//making sure we can access data globally
export const useAppState = (): AppStateContextProps => {
    return useContext(AppStateContext);
};

export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);
    
    const { draggedItem, lists } = state;
    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    };
    return (
        <AppStateContext.Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};