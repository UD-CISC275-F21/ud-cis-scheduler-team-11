import React from "react";
import {useState} from "react";
import {DragDropContext, Droppable, Draggable, DropResult} from "react-beautiful-dnd";


export function LoadClasses(): JSX.Element{
    const coreClasses=[
        {
            id: "test1",
            name: "CISC108 is a prerequisite for CISC181 and CISC210.",
        },
        {
            id: "test2",
            name: "MATH241 is a prerequisite for MATH242.",
        },
        {
            id: "test3",
            name: "CISC108 is a prerequisite for CISC210.",
        },
        {
            id: "test4",
            name: "CISC210 is a prerequisite for CISC220 and CISC260.",
        },
        {
            id: "test5",
            name: "MATH241 and MATH242 are prerequisite for MATH210.",
        },
        {
            id: "test6",
            name: "MATH242 is a prerequisite for MATH243.",
        },
        {
            id: "test7",
            name: "CISC181 and CISC220 are prerequisite for CISC275.",
        },
        {
            id: "test8",
            name: "MATH210 is a prerequisite for MATH205.",
        },
        {
            id: "test9",
            name: "MATH243 is a prerequisite for MATH350.",
        },
    ];
    /*
    if(PUT SOMETHING HERE){
        const coreClasses=[ 
        {
            id: "test1",
            name: "CISC108 is a prerequisite for CISC181 and CISC210.",
        },
        {
            id: "test2",
            name: "MATH241 is a prerequisite for MATH242.",
        },
        {
            id: "test3",
            name: "CISC108 is a prerequisite for CISC210.",
        },
        {
            id: "test4",
            name: "CISC210 is a prerequisite for CISC220 and CISC260.",
        },
        {
            id: "test5",
            name: "MATH241 and MATH242 are prerequisite for MATH210.",
        },
        {
            id: "test6",
            name: "MATH242 is a prerequisite for MATH243.",
        },
        {
            id: "test7",
            name: "CISC181 and CISC220 are prerequisite for CISC275.",
        },
        {
            id: "test8",
            name: "MATH210 is a prerequisite for MATH205.",
        },
        {
            id: "test9",
            name: "MATH243 is a prerequisite for MATH350.",
        },
    ];
    }else{
        const coreClasses=[
        {
            id: "test1",
            name: "CISC108 is a prerequisite for CISC181 and CISC210.",
        },
        {
            id: "test2",
            name: "MATH241 is a prerequisite for MATH242.",
        },
        {
            id: "test3",
            name: "CISC108 is a prerequisite for CISC210.",
        },
        {
            id: "test4",
            name: "CISC210 is a prerequisite for CISC220 and CISC260.",
        },
        {
            id: "test5",
            name: "MATH241 and MATH242 are prerequisite for MATH210.",
        },
        {
            id: "test6",
            name: "MATH242 is a prerequisite for MATH243.",
        },
        {
            id: "test7",
            name: "CISC181 and CISC220 are prerequisite for CISC275.",
        },
        {
            id: "test8",
            name: "MATH210 is a prerequisite for MATH205.",
        },
        {
            id: "test9",
            name: "MATH243 is a prerequisite for MATH350.",
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
        padding: "0px 90px",
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
        marginLeft: "100px",
    },
} as const;
