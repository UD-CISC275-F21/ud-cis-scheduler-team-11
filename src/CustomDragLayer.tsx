import React from "react";
import { useDragLayer } from "react-dnd";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import {
    CustomDragLayerContainer,
    DragPreviewWrapper
} from "./styles";
import { Card } from "./Card";
//import { StyledComponent } from "styled-components";


export const CustomDragLayer = (): JSX.Element | null => {
    const { draggedItem } = useAppState();
    const { currentOffset } = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }));
    return draggedItem && currentOffset ? 
        <CustomDragLayerContainer>
            <DragPreviewWrapper position={currentOffset}>
                {draggedItem.type === "COLUMN" ? 
                    <Column
                        id={draggedItem.id}
                        text={draggedItem.text}
                        isPreview
                    />
                    :
                    <Card
                        columnId={draggedItem.columnId}
                        isPreview
                        id={draggedItem.id}
                        text={draggedItem.text}
                    />
                }
            </DragPreviewWrapper>
        </CustomDragLayerContainer>
        : null;
};
