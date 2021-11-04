import React, { createContext, useContext, Dispatch, FC } from "react";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { Button } from "react-bootstrap";
import {
    appStateReducer,
    AppState,
    List,
    Task
} from "./appStateReducer";
import { DragItem } from "../DragItem";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

function deleteSemester(index: number) {
    appData.lists.splice(index,index);
}

const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "Course List",
            button: <Button onClick={() => deleteSemester(0)}>X</Button>,
            courses: [{ id: "c0", text: "Cisc 106" },{ id:"c1", text: "Cisc108"}]
        },
        {
            id: "1",
            text: "Year 1: Semester 1",
            button: <Button onClick={() => deleteSemester(1)}>X</Button>,
            courses: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Year 1: Semester 2",
            button: <Button onClick={() => deleteSemester(2)}>X</Button>,
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