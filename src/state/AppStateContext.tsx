import React, { createContext, useContext, Dispatch, FC } from "react";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import {
    appStateReducer,
    AppState,
    List,
    Task
} from "./appStateReducer";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
};

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}
    
type Task = {
    id: string
    text: string
}
type List = {
    id: string
    text: string
    tasks: Task[]
}
export type AppState = {
    lists: List[]
}
//making sure we can access data globally
export const useAppState = () => {
    return useContext(AppStateContext);
};

export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);
    
    const { lists } = state;
    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    };
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};