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
            text: "Degree Requirements",
            courses: [{id: "c1", text: "CISC108 is a prerequisite for CISC181 and CISC210."},{id: "c2", text: "MATH241 is a prerequisite for MATH242."},{id: "c3", text: "CISC210 is a prerequisite for CISC220 and CISC260."},{id: "c4", text: "MATH241 and MATH242 are prerequisites for MATH210."},{id: "c5", text: "MATH242 is a prerequisite for MATH243."},{id: "c6", text: "CISC181 and CISC220 are prerequisites for CISC275."},{id: "c7", text: "MATH210 is a prerequisite for MATH205."},{id: "c8", text: "MATH243 is a prerequisite for MATH350."}]
        },
        {
            id: "1",
            text: "Course Prerequisites",
            courses: [{id: "c9", text: "EGGG101 satisfies the First Year Seminar (FYS)."},{id: "c10", text: "ENGL110 is required for all students and should be taken in the first year."},{id: "c11", text: "The CAH, HCC, and SBS breadth, and Multicultural requirements are required for the College, University Breadth, and University Requirements."},{id: "c12", text: "2 science courses with labs can satisfy one laboratory science sequence."},{id: "c13", text: "A laboratory science sequence is required for the science courses."}]
        },
        {
            id: "2",
            text: "Course List",
            courses: [{id: "c14", text: "CISC108: 3 credits"},{id: "c15", text: "EGGG101: 2 credits"},{id: "c16", text: "MATH241: 4 credits"},{id: "c17", text: "ENGL110: 3 credits"},{id: "c18", text: "Breadth Requirement (CAH) Course: 3 credits"},{id: "c19", text: "CISC181: 3 credits"},{id: "c20", text: "CISC210: 3 credits"},{id: "c21", text: "MATH242: 4 credits"},{id: "c22", text: "Breadth Requirement (HCC) Course: 3 credits"},{id: "c23", text: "Breadth Requirement (SBS) Course: 3 credits"},{id: "c24", text: "CISC220: 3 credits"},{id: "c25", text: "CISC260: 3 credits"},{id: "c26", text: "MATH210: 3 credits"},{id: "c27", text: "Science Requirement Course 1: 4 credits"},{id: "c28", text: "MATH243: 4 credits"},{id: "c29", text: "CISC355: 3 credits"},{id: "c30", text: "CISC275: 3 credits"},{id: "c31", text: "MATH205: 4 credits"},{id: "c32", text: "MATH350: 3 credits"},{id: "c33", text: "Science Requirement Course 2: 4 credits"},{id: "c34", text: "Breadth Requirement (MC) Course: 3 credits"}]
        },
        {
            id: "3",
            text: "Year 1: Fall Semester",
            courses: [{id: "c35", text: "Learn TypeScript"}]
        },
        {
            id: "4",
            text: "Year 1: Spring Semester",
            courses: [{id: "c36", text: "Learn static typing"}]
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
