import React from "react";
import { useRef } from "react";
import { CourseCardContainer } from "../../styles";
import { useItemDrag } from "../../utils/useItemDrag";
import { useDrop } from "react-dnd";
import { useAppState } from "../../state/AppStateContext";
import { isHidden } from "../../utils/isHidden";
import { moveCourse, setDraggedItem } from "../../state/actions";
import { Button, Row } from "react-bootstrap";
import { deleteCourse, softDeleteCourse, editCourse } from "../../state/actions";
import { EditCourse } from "./EditCourse";

type CourseCardProps = {
    text: string
    id: string
    semesterId: string
    isPreview?: boolean
}

export const CourseCard = ({
    text,
    id,
    semesterId,
    isPreview
}: CourseCardProps): JSX.Element => {
    const { draggedItem, dispatch } = useAppState();
    const ref = useRef<HTMLDivElement>(null);
    const { drag } = useItemDrag({
        type: "COURSECARD",
        id,
        text,
        semesterId
    });
    const [, drop] = useDrop({
        accept: "COURSECARD",
        hover() {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type !== "COURSECARD") {
                return;
            }
            if (draggedItem.id === id) {
                return;
            }
            dispatch(
                moveCourse(draggedItem.id, id, draggedItem.semesterId, semesterId)
            );
            dispatch(setDraggedItem({ ...draggedItem, semesterId}));
        }
    });

    drag(drop(ref));

    return (
        <CourseCardContainer
            isHidden={isHidden(draggedItem, "COURSECARD", id, isPreview)}
            isPreview={isPreview}
            ref={ref}
        >
            {text}
            <Row>
                <EditCourse
                    toggleButtonText="Edit"
                    onAdd={(text) => dispatch(editCourse(text,semesterId, id))}
                    dark
                />
                <Button style={styles.softDeleteButton} onClick={() => dispatch(softDeleteCourse(text, semesterId, id))}>
                    Reset
                </Button>
                <Button style={styles.deleteButton} onClick={() => dispatch(deleteCourse(semesterId, id))}>
                    Delete
                </Button>
            </Row>
        </CourseCardContainer>
    );

};
const styles = {
    softDeleteButton: {
        width: "34%",
        padding: "0px 0px",
        background: "#FF7F7F",
        flexDirection: "column",
        alignItems: "center",
        float: "right",
    },
    deleteButton: {
        fontColor: "red",
        width: "33%",
        padding: "0px 0px",
        background: "red",
        flexDirection: "column",
        alignItems: "center",
        float: "right",
    },
} as const;
