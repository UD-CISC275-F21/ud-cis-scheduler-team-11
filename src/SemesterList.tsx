import React, { useRef} from "react";
import { SemesterContainer, SemesterTitle } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { CourseCard } from "./CourseCard";
import { AddNewCourse } from "./AddNewCourse";
import { EditSemesterTitle } from "./EditSemesterTitle";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { isHidden } from "./utils/isHidden";
import { Row, Col, Button } from "react-bootstrap";
import { deleteSemester, editSemester } from "./state/actions";

import {
    addCourse,
    moveCourse,
    moveSemester,
    setDraggedItem
} from "./state/actions";

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

                dispatch(moveSemester(draggedItem.id, id));
            } else {
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
                <Row>
                    <SemesterTitle>{text}</SemesterTitle>
                    <Col>
                        <EditSemesterTitle
                            toggleButtonText="Edit Title"
                            onAdd={(text) => dispatch(editSemester(text, id))}
                            dark
                        />
                    </Col>
                </Row>
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
                <Row>
                    <SemesterTitle>{text}</SemesterTitle>
                    <Col>
                        <EditSemesterTitle
                            toggleButtonText="Edit Title"
                            onAdd={(text) => dispatch(editSemester(text, id))}
                            dark
                        />
                    </Col>
                    <Col>
                        <Button style={styles.button} onClick={() => dispatch(deleteSemester(id))}>Delete</Button>
                    </Col>
                </Row>
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
    button: {
        fontColor: "red",
        width: "70%",
        //padding: "0px 0px",
        margin: "2px auto 10px", 
        background: "red",
        borderRadius: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: 18,
    },
} as const;
