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
            text: "Degree Requirements",
            courses: [{id: "c1", text: "EGGG101 satisfies the First Year Seminar (FYS)."},{id: "c2", text: "ENGL110 is required for all students and should be taken in the first year."},{id: "c3", text: "The CAH, HCC, and SBS breadth, and Multicultural requirements are required for the College, University Breadth, and University Requirements."},{id: "c4", text: "2 science courses with lab can satisfy one laboratory science sequence."},{id: "c5", text: "One laboratory science sequence is required for the science course requirements."}]
        },
        {
            id: "1",
            text: "Course Prerequisites",
            courses: [{id: "c6", text: "CISC108 is a prerequisite for CISC181 and CISC210."},{id: "c7", text: "MATH241 is a prerequisite for MATH242."},{id: "c8", text: "CISC210 is a prerequisite for CISC220 and CISC260."},{id: "c9", text: "MATH241 and MATH242 are prerequisites for MATH210."},{id: "c10", text: "MATH242 is a prerequisite for MATH243."},{id: "c11", text: "CISC181 and CISC220 are prerequisites for CISC275."},{id: "c12", text: "MATH210 is a prerequisite for MATH205."},{id: "c13", text: "MATH243 is a prerequisite for MATH350."}]
        },
        {
            id: "2",
            text: "Required Course List",
            courses: [{id: "c14", text: "CISC108: 3 credits"},{id: "c15", text: "EGGG101: 2 credits"},{id: "c16", text: "MATH241: 4 credits"},{id: "c17", text: "ENGL110: 3 credits"},{id: "c18", text: "CAH Breadth: 3 credits"},{id: "c19", text: "CISC181: 3 credits"},{id: "c20", text: "CISC210: 3 credits"},{id: "c21", text: "MATH242: 4 credits"},{id: "c22", text: "HCC Breadth: 3 credits"},{id: "c23", text: "SBS Breadth: 3 credits"},{id: "c24", text: "CISC220: 3 credits"},{id: "c25", text: "CISC260: 3 credits"},{id: "c26", text: "MATH210: 3 credits"},{id: "c27", text: "Science w/ Lab 1: 4 credits"},{id: "c28", text: "MATH243: 4 credits"},{id: "c29", text: "CISC355: 3 credits"},{id: "c30", text: "CISC275: 3 credits"},{id: "c31", text: "MATH205: 4 credits"},{id: "c32", text: "MATH350: 3 credits"},{id: "c33", text: "Science w/ Lab 2: 4 credits"},{id: "c34", text: "Multicultural: 3 credits"}]
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
