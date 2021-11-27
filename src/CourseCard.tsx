import React from "react";
import { useRef } from "react";
import { CourseCardContainer } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import { isHidden } from "./utils/isHidden";
import { moveCourse } from "./state/actions";
import { Button, Row } from "react-bootstrap";
import { deleteCourse, softDeleteCourse, editCourse } from "./state/actions";
import { EditCourse } from "./EditCourse";
import userEvent from "@testing-library/user-event";

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
                    toggleButtonText="Edit Course"
                    onAdd={(text) => dispatch(editCourse(text,semesterId, id))}
                    dark
                />
                <Button style={styles.softDeleteButton} onClick={() => dispatch(softDeleteCourse(text, semesterId, id))}>
                    Remove
                </Button>
                <Button style={styles.deleteButton} onClick={() => dispatch(deleteCourse(semesterId, id))}>
                        X
                </Button>
            </Row>
        </CourseCardContainer>
    );//<img src="https://icons.iconarchive.com/icons/designcontest/outline/16/Pencil-icon.png" alt="my image" /> 

};
const styles = {
    softDeleteButton: {
        //fontColor: "#FE941D",
        width: "40%",
        //height: "5%",
        padding: "0px 0px",
        background: "#FF7F7F",
        //borderRadius: "40px",
        flexDirection: "column",
        alignItems: "center",
        float: "right",
        //fontSize: 10,
    },
    deleteButton: {
        fontColor: "red",
        width: "10%",
        //height: "5%",
        padding: "0px 0px",
        background: "red",
        //borderRadius: "40px",
        flexDirection: "column",
        alignItems: "center",
        float: "right",
        //fontSize: 10,
    },
} as const;
