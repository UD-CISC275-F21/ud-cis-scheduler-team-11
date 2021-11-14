import React from "react";
import { useDragLayer } from "react-dnd";
import { Semester } from "./SemesterList";
import { useAppState } from "./state/AppStateContext";
import {
    CustomDragLayerContainer,
    DragPreviewWrapper
} from "./styles";
import { Card } from "./CourseCard";
//import { StyledComponent } from "styled-components";


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
                    <Card
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
