import React from "react";
import { useDragLayer } from "react-dnd";
import { Semester } from "../Semesters/SemesterList";
import { useAppState } from "../../state/AppStateContext";
import {
    CustomDragLayerContainer,
    DragPreviewWrapper
} from "../../styles";
import { CourseCard } from "../Courses/CourseCard";

export const CustomDragLayer = (): JSX.Element | null => {
    const { draggedItem } = useAppState();
    const { currentOffset } = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }));
    return draggedItem && currentOffset ? 
        <CustomDragLayerContainer>
            <DragPreviewWrapper position={currentOffset}>
                {draggedItem.type === "SEMESTER" ? 
                    <Semester
                        id={draggedItem.id}
                        text={draggedItem.text}
                        isPreview
                    />
                    :
                    <CourseCard
                        semesterId={draggedItem.semesterId}
                        isPreview
                        id={draggedItem.id}
                        text={draggedItem.text}
                    />
                }
            </DragPreviewWrapper>
        </CustomDragLayerContainer>
        : null;
}; 
