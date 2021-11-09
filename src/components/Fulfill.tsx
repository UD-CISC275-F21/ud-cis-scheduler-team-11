import React from "react";
import {useState} from "react";
import {DragDropContext, Droppable, Draggable, DropResult} from "react-beautiful-dnd";


export function LoadClasses(): JSX.Element{
    const coreClasses=[
        {
            id: "test1",
            text: "EGGG101 satisfies the First Year Seminar (FYS).",
        },
        {
            id: "test2",
            text: "ENGL110 is required for all students and should be taken in the first year.",
        },
        {
            id: "test3",
            text: "The CAH, HCC, and SBS breadth requirements are required for the College, University Breadth, and University Requirements.",
        },
        {
            id: "test4",
            text: "2 science courses with lab can satisfy one laboratory science sequence.",
        },
        {
            id: "test5",
            text: "2 science courses with lab are required for the science course requirements.",
        },
        {  
            id: "test6",
            text: "The Multicultural requirement is required for the University Requirements.",
        },  
    ];
    /*
    if(PUT SOMETHING HERE){
        const coreClasses=[ 
            {
                id: "test1",
                text: "EGGG101 satisfies the First Year Seminar (FYS).",
            },
            {
                id: "test2",
                text: "ENGL110 is required for all students and should be taken in the first year.",
            },
            {
                id: "test3",
                text: "The CAH, HCC, and SBS breadth requirements are required for the College, University Breadth, and University Requirements.",
            },
            {
                id: "test4",
                text: "2 science courses with lab can satisfy one laboratory science sequence.",
            },
            {
                id: "test5",
                text: "2 science courses with lab are required for the science course requirements.",
            },
            {  
                id: "test6",
                text: "The Multicultural requirement is required for the University Requirements.",
            },
        ];
    }else{
        const coreClasses=[
            {
                id: "test1",
                text: "EGGG101 satisfies the First Year Seminar (FYS).",
            },
            {
                id: "test2",
                text: "ENGL110 is required for all students and should be taken in the first year.",
            },
            {
                id: "test3",
                text: "The CAH, HCC, and SBS breadth requirements are required for the College, University Breadth, and University Requirements.",
            },
            {
                id: "test4",
                text: "2 science courses with lab can satisfy one laboratory science sequence.",
            },
            {
                id: "test5",
                text: "2 science courses with lab are required for the science course requirements.",
            },
            {  
                id: "test6",
                text: "The Multicultural requirement is required for the University Requirements.",
            },
        ];
    }
    */
    const [core, updateCore] = useState(coreClasses);


    function handleOnDragEnd(result: DropResult){
        if (!result.destination) return;
    
        const items = Array.from(core);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        updateCore(items);
    }
    
    return (
        <div style={styles.classes}>
            <h3 style={styles.h3}>Course List</h3>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="core">
                    {provided => 
                        <ul className="core" {...provided.droppableProps} ref={provided.innerRef}>
                            {core.map(({id, name, }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {provided => 
                                            <ul ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <p>
                                                    { name }
                                                </p>
                                            </ul>
                                        }
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                    }
                </Droppable>
            </DragDropContext>
        </div>
    );
}

const styles = {
    classes: {
        width: "20%",
        padding: "0px 80px",
        margin: "50px",
        //margin: "50px auto",
        //background: "tan",
        borderRadius: "10px",
        //display: "flex",
        //flexDirection: "column",
        //alignItems: "center",
        fontSize: 20,
        border: "10px solid black",
    },
    h3: {
        marginLeft: "30px",
    },
} as const;
    