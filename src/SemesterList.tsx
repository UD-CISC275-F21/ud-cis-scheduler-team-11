import React, { useRef} from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { Card } from "./CourseCard";
import { AddNewItem } from "./AddNewItem";
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

type ColumnProps = {
    text: string
    id: string
    isPreview?: boolean
} 

export const Column = ({ text, id, isPreview }: ColumnProps): JSX.Element => {
    const { draggedItem, getCoursesByListId, dispatch } = useAppState();
    const courses = getCoursesByListId(id);
    const ref = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
        accept: ["COLUMN", "CARD"],
        hover() {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type === "COLUMN") {
                if (draggedItem.id === id) {
                    return;
                }

                dispatch(moveList(draggedItem.id, id));
            } else {
                if (draggedItem.columnId === id) {
                    return;
                }
                if (courses.length) {
                    return;
                }

                dispatch(
                    moveTask(draggedItem.id, null, draggedItem.columnId, id)
                );
                dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
            }
        }
    });

    const { drag } = useItemDrag({ type: "COLUMN", id, text });

    drag(drop(ref));

    return (
        <ColumnContainer
            isPreview={isPreview}
            ref={ref}
            isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
        >
            <Row>
                <ColumnTitle>{text}</ColumnTitle>
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
                <Card
                    id={task.id}
                    columnId={id}
                    text={task.text}
                    key={task.id}
                />
            )}
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
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
