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
            courses: [{id: "c0", text: "CISC106" },{id: "c1", text: "CISC108"},{id: "c2", text: "EGGG101"},{id: "c3", text: "MATH241"},{id: "c4", text: "ENGL110"},{id: "c5", text: "Breadth Requirement (CAH)"},{id: "c6", text: "CISC181"},{id: "c7", text: "CISC210"},{id: "c8", text: "MATH242"},{id: "c9", text: "CISC181"},{id: "c10", text: "Breadth Requirement (HCC)"},{id: "c11", text: "Breadth Requirement (SBS)"},{id: "c12", text: "CISC220"},{id: "c13", text: "CISC260"},{id: "c14", text: "MATH210"},{id: "c15", text: "Science Requirement 1"},{id: "c16", text: "MATH243"},{id: "c17", text: "CISC355"},{id: "c18", text: "CISC275"},{id: "c19", text: "MATH205"},{id: "c20", text: "MATH350"},{id: "c21", text: "Science Requirement 2"},{id: "c22", text: "Breadth Requirement (Multicultural)"}]
        },
        {
            id: "1",
            text: "Year 1: Semester 1",
            courses: [{ id: "c23", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Year 1: Semester 2",
            courses: [{ id: "c24", text: "Begin to use static typing" }]
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
