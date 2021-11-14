import React from "react";
import { useRef } from "react";
import { CardContainer } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import { isHidden } from "./utils/isHidden";
import { moveTask } from "./state/actions";

type CardProps = {
    text: string
    id: string
    semesterId: string
    isPreview?: boolean
}

export const Card = ({
    text,
    id,
    semesterId,
    isPreview
}: CardProps): JSX.Element => {
    const { draggedItem, dispatch } = useAppState();
    const ref = useRef<HTMLDivElement>(null);
    const { drag } = useItemDrag({
        type: "CARD",
        id,
        text,
        semesterId
    });
    const [, drop] = useDrop({
        accept: "CARD",
        hover() {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type !== "CARD") {
                return;
            }
            if (draggedItem.id === id) {
                return;
            }

            dispatch(
                moveTask(draggedItem.id, id, draggedItem.semesterId, semesterId)
            );
        }
    });

    drag(drop(ref));

    return (
        <CardContainer
            isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
            isPreview={isPreview}
            ref={ref}
        >
            {text}
        </CardContainer>
    );
};
