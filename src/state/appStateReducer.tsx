//import React from "react";
import { nanoid } from "nanoid";
import { findCourseIndexById, moveCourse } from "../utils/arrayUtils";
import { DragItem } from "../components/DragAndDrop/DragItem";
import { Action } from "./actions";

export type Course = {
    id: string
    text: string
}

export type Semester = {
    id: string
    text: string
    courses: Course[]
}

export type AppState = {
    draggedItem: DragItem | null
    semesters: Semester[]
}

export const appStateReducer = (
    draft: AppState,
    action: Action
): AppState | void => {
    switch (action.type) {
    case "SET_DRAGGED_ITEM": {
        draft.draggedItem = action.payload;
        break;
    }
    case "ADD_SEMESTER": {
        const id=nanoid();
        draft.semesters.push({
            id: id,
            text: action.payload,
            courses: [],
        });
        break;
    }
    case "EDIT_SEMESTER": {
        const {text, id } = action.payload;
        const index = draft.semesters.findIndex(semester => semester.id === id);
        draft.semesters[index].text=text;
        break;
    }
    case "ADD_COURSE": {
        const { text, semesterId } = action.payload;
        const targetSemesterIndex = findCourseIndexById(draft.semesters, semesterId);
        draft.semesters[targetSemesterIndex].courses.push({
            id: nanoid(),
            text
        });
        break;
    }
    case "EDIT_COURSE": {
        const {text, semesterId, id} = action.payload;
        const targetSemesterIndex = findCourseIndexById(draft.semesters, semesterId);
        const index=draft.semesters[targetSemesterIndex].courses.findIndex(course => course.id === id);
        draft.semesters[targetSemesterIndex].courses[index].text=text;
        break;
    }
    case "DELETE_COURSE": {
        const {semesterId, id} = action.payload;
        const targetSemesterIndex = findCourseIndexById(draft.semesters, semesterId);
        draft.semesters[targetSemesterIndex].courses=draft.semesters[targetSemesterIndex].courses.filter(course => course.id !== id);
        break;
    }
    case "DELETE_ALL_COURSES": {
        const {semesterId} = action.payload;
        const id = "NaN";
        const targetSemesterIndex = findCourseIndexById(draft.semesters, semesterId);
        draft.semesters[targetSemesterIndex].courses=draft.semesters[targetSemesterIndex].courses.filter(course => course.id === id);
        break;
    }
    case "SOFT_DELETE_COURSE": {
        const {text, semesterId, id} = action.payload;
        const targetSemesterIndex = findCourseIndexById(draft.semesters, semesterId);
        draft.semesters[0].courses.push({
            id: nanoid(),
            text
        });
        draft.semesters[targetSemesterIndex].courses=draft.semesters[targetSemesterIndex].courses.filter(course => course.id !== id);
        //alert(draft.semesters[targetSemesterIndex].courses);
        break;
    }
    case "DELETE_SEMESTER": {
        const id = action.payload;
        draft.semesters=draft.semesters.filter(semester => semester.id !== id);
        break;
    }
    case "DELETE_ALL_SEMESTERS": {
        draft.semesters=draft.semesters.slice(0,1);
        break;
    }
    case "MOVE_SEMESTER": {
        const { draggedId, hoverId } = action.payload;
        const dragIndex = findCourseIndexById(draft.semesters, draggedId);
        const hoverIndex = findCourseIndexById(draft.semesters, hoverId);
        draft.semesters = moveCourse(draft.semesters, dragIndex, hoverIndex);
        break;
    }
    case "MOVE_COURSE": {
        const {
            draggedCourseId,
            hoveredCourseId,
            sourceSemesterId,
            targetSemesterId
        } = action.payload;

        const sourceSemesterIndex = findCourseIndexById(
            draft.semesters,
            sourceSemesterId
        );
        const targetSemesterIndex = findCourseIndexById(
            draft.semesters,
            targetSemesterId
        );

        const dragIndex = findCourseIndexById(
            draft.semesters[sourceSemesterIndex].courses,
            draggedCourseId
        );

        const hoverIndex = hoveredCourseId
            ? findCourseIndexById(
                draft.semesters[targetSemesterIndex].courses,
                hoveredCourseId
            )
            : 0;
        const Course = draft.semesters[sourceSemesterIndex].courses[dragIndex];

        // Remove the task from the source semester
        draft.semesters[sourceSemesterIndex].courses.splice(dragIndex, 1);

        // Add the task to the target semester
        draft.semesters[targetSemesterIndex].courses.splice(hoverIndex, 0, Course);
        break;
    }
    default: {
        break;
    }
    }
};
