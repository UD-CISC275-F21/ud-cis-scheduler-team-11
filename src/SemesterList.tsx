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
import { deleteList, editList } from "./state/actions";

import {
    addTask,
    moveTask,
    moveList,
    setDraggedItem
} from "./state/actions";

type SemesterProps = {
    text: string
    id: string
    isPreview?: boolean
} 

export const Semester = ({ text, id, isPreview }: SemesterProps): JSX.Element => {
    const { draggedItem, getCoursesByListId, dispatch } = useAppState();
    const courses = getCoursesByListId(id);
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

                dispatch(moveList(draggedItem.id, id));
            } else {
                if (draggedItem.semesterId === id) {
                    return;
                }
                if (courses.length) {
                    return;
                }

                dispatch(
                    moveTask(draggedItem.id, null, draggedItem.semesterId, id)
                );
                dispatch(setDraggedItem({ ...draggedItem, semesterId: id }));
            }
        }
    });

    const { drag } = useItemDrag({ type: "SEMESTER", id, text });

    drag(drop(ref));

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
                        onAdd={(text) => dispatch(editList(text, id))}
                        dark
                    />
                </Col>
                <Col>
                    <Button style={styles.button} onClick={() => dispatch(deleteList(id))}>Delete</Button>
                </Col>
            </Row>
            {courses.map(task => 
                <CourseCard
                    id={task.id}
                    semesterId={id}
                    text={task.text}
                    key={task.id}
                />
            )}
            <AddNewCourse
                toggleButtonText="+ Add another class"
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </SemesterContainer>
    );
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
