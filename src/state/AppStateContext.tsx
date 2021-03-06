import React, { createContext, useContext, Dispatch, FC } from "react";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import {
    appStateReducer,
    AppState,
    Semester,
    Course
} from "./appStateReducer";
import { DragItem } from "../components/DragAndDrop/DragItem";

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
            courses: [{id: "c1", text: "CISC220: 3 credits"},{id: "c2", text: "CISC260: 3 credits"},{id: "c3", text: "CISC275: 3 credits"},{id: "c4", text: "CISC303: 3 credits"},{id: "c5", text: "CISC320: 3 credits"},{id: "c6", text: "CISC361: 3 credits"},{id: "c7", text: "CISC372: 3 credits"},{id: "c8", text: "MATH210: 3 credits"},{id: "c9", text: "MATH243: 4 credits"},{id: "c10", text: "MATH205: 4 credits"},{id: "c11", text: "MATH350: 3 credits"},{id: "c12", text: "Science and Lab 1: 4 credits"},{id: "c13", text: "Science and Lab 2: 4 credits"},{id: "c14", text: "ENGL312: 3 credits"},{id: "c15", text: "ENGL410: 3 credits"}]
        },
        {
            id: "1",
            text: "Year 1: Fall Semester",
            courses: [{id: "c16", text: "CISC108: 3 credits"},{id: "c17", text: "EGGG101: 2 credits"},{id: "c18", text: "MATH241: 4 credits"},{id: "c19", text: "ENGL110: 3 credits"},{id: "c20", text: "CAH: 3 credits"},{id: "c21", text: "Multicultural: 3 credits"}]
        },
        {
            id: "2",
            text: "Year 1: Spring Semester",
            courses: [{id: "c22", text: "CISC181: 3 credits"},{id: "c23", text: "CISC210: 3 credits"},{id: "c24", text: "MATH242: 4 credits"},{id: "c25", text: "HCC: 3 credits"},{id: "c26", text: "SBS: 3 credits"},{id: "c27", text: "CISC355: 3 credits"}]
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
