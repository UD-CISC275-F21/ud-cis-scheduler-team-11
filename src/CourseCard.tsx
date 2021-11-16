import React from "react";
import { useRef } from "react";
import { CourseCardContainer } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import { isHidden } from "./utils/isHidden";
import { moveCourse } from "./state/actions";

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
        </CourseCardContainer>
    );
};
