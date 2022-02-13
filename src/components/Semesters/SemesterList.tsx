import React, { useRef} from "react";
import { SemesterContainer, SemesterTitle } from "../../styles";
import { useAppState } from "../../state/AppStateContext";
import { CourseCard } from "../Courses/CourseCard";
import { AddNewCourse } from "../Courses/AddNewCourse";
import { EditSemesterTitle } from "./EditSemesterTitle";
import { useItemDrag } from "../../utils/useItemDrag";
import { useDrop } from "react-dnd";
import { isHidden } from "../../utils/isHidden";
import { Row, Col, Button } from "react-bootstrap";
import { deleteSemester, editSemester, deleteAllCourses } from "../../state/actions";

import {
    addCourse,
    moveCourse,
    moveSemester,
    setDraggedItem
} from "../../state/actions";

type SemesterProps = {
    text: string
    id: string
    isPreview?: boolean
} 

export const Semester = ({ text, id, isPreview }: SemesterProps): JSX.Element => {
    const { draggedItem, getCoursesBySemesterId, dispatch } = useAppState();
    const courses = getCoursesBySemesterId(id);
    const ref = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
        accept: ["SEMESTER", "COURSECARD"],
        hover() {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type === "SEMESTER") {
                if (draggedItem.id === id) {
                    return;
                }
                if (draggedItem.id === "0"){
                    return;
                }
                if (id==="0"){
                    return;
                }

                dispatch(moveSemester(draggedItem.id, id));
            } else if (draggedItem.type === "COURSECARD"){
                if (draggedItem.semesterId === id) {
                    return;
                }
                if (courses.length) {
                    return;
                }

                dispatch(
                    moveCourse(draggedItem.id, null, draggedItem.semesterId, id)
                );
                dispatch(setDraggedItem({ ...draggedItem, semesterId: id }));
            }
        }
    });

    const { drag } = useItemDrag({ type: "SEMESTER", id, text });

    drag(drop(ref));
    if(id==="0"){
        return (
            <SemesterContainer
                isPreview={isPreview}
                ref={ref} 
                isHidden={isHidden(draggedItem, "SEMESTER", id, isPreview)}
            >
                <SemesterTitle>{text}</SemesterTitle>
                <Row>
                    <Col>
                        <EditSemesterTitle 
                            toggleButtonText="Edit Title"
                            onAdd={(text) => dispatch(editSemester(text, id))}
                            dark
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button style={styles.deleteAllCoursesButton} onClick={() => dispatch(deleteAllCourses(id))}>
                            Delete ALL Courses
                        </Button>
                    </Col>
                </Row>
                <hr style={styles.line} />
                {courses.map(course => 
                    <CourseCard
                        id={course.id}
                        semesterId={id}
                        text={course.text}
                        key={course.id}
                    />
                )}
                <AddNewCourse 
                    toggleButtonText="+ Add another course"
                    onAdd={(text) => dispatch(addCourse(text, id))}
                    dark
                />
            </SemesterContainer>
        );
    } else{
        return(
            <SemesterContainer
                isPreview={isPreview}
                ref={ref}
                isHidden={isHidden(draggedItem, "SEMESTER", id, isPreview)}
            >
                <SemesterTitle>{text}</SemesterTitle>
                <Row>
                    <Col>
                        <EditSemesterTitle
                            toggleButtonText="Edit Title"
                            onAdd={(text) => dispatch(editSemester(text, id))}
                            dark
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button style={styles.deleteSemesterButton} onClick={() => dispatch(deleteSemester(id))}>Delete Semester</Button>
                    </Col>
                    <Col>
                        <Button style={styles.deleteAllCoursesButton} onClick={() => dispatch(deleteAllCourses(id))}>
                            Delete ALL Courses
                        </Button>
                    </Col>
                </Row>
                <hr style={styles.line} />
                {courses.map(course => 
                    <CourseCard
                        id={course.id}
                        semesterId={id}
                        text={course.text}
                        key={course.id}
                    />
                )}
                <AddNewCourse
                    toggleButtonText="+ Add another course"
                    onAdd={(text) => dispatch(addCourse(text, id))}
                    dark
                />
                
            </SemesterContainer>
        );
    }
};

const styles = {
    deleteSemesterButton: {
        width: "100%",
        margin: "2px auto 10px 0px", 
        background: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 15,
    },
    deleteAllCoursesButton: {
        width: "100%",
        margin: "2px auto 10px", 
        background: "maroon",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 15,
    },
    line: {
        height: "10px",
        color: "black",
        backgroundColor: "black",
    },
} as const;
