import React, { createContext, useContext, Dispatch, FC } from "react";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import {
    appStateReducer,
    AppState,
    Semester,
    Course
} from "./appStateReducer";
import { DragItem } from "../DragItem";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export function deleteSemester(id: string): void {
    const left = appData.semesters
        .filter(semester => semester.id !== id);
    appData.semesters= left;
}

export const appData: AppState = {
    draggedItem: null,
    semesters: [
        {
            id: "0",
            text: "Required Course List",
            courses: [{id: "c1", text: "CISC108: 3 credits"},{id: "c2", text: "EGGG101: 2 credits"},{id: "c3", text: "MATH241: 4 credits"},{id: "c4", text: "ENGL110: 3 credits"},{id: "c5", text: "CAH Breadth Course: 3 credits"},{id: "c6", text: "CISC181: 3 credits"},{id: "c7", text: "CISC210: 3 credits"},{id: "c8", text: "MATH242: 4 credits"},{id: "c9", text: "HCC Breadth Course: 3 credits"},{id: "c10", text: "SBS Breadth Course: 3 credits"},{id: "c11", text: "CISC220: 3 credits"},{id: "c12", text: "CISC260: 3 credits"},{id: "c13", text: "MATH210: 3 credits"},{id: "c14", text: "Science Course 1: 4 credits"},{id: "c15", text: "MATH243: 4 credits"},{id: "c16", text: "CISC355: 3 credits"},{id: "c17", text: "CISC275: 3 credits"},{id: "c18", text: "MATH205: 4 credits"},{id: "c19", text: "MATH350: 3 credits"},{id: "c20", text: "Science Course 2: 4 credits"},{id: "c21", text: "MC Course: 3 credits"}]
        },
        {
            id: "1",
            text: "Year 1: Fall Semester",
            courses: [{id: "c22", text: "Learn TypeScript"}]
        },
        {
            id: "2",
            text: "Year 1: Spring Semester",
            courses: [{id: "c23", text: "Learn static typing"}]
        } 
    ]
};

type AppStateContextProps = {
    draggedItem: DragItem | null
    semesters: Semester[]
    getCoursesBySemesterId(id: string): Course[]
    dispatch: Dispatch<Action>
}

    
//making sure we can access data globally
export const useAppState = (): AppStateContextProps => {
    return useContext(AppStateContext);
};

export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);
    
    const { draggedItem, semesters } = state;
    const getCoursesBySemesterId = (id: string) => {
        return semesters.find((semester) => semester.id === id)?.courses || [];
    };
    return (
        <AppStateContext.Provider value={{ draggedItem, semesters, getCoursesBySemesterId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};
