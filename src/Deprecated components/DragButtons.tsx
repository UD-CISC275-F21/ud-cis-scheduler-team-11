export{};
/*
import React from "react";
import {useState} from "react";
import {DragDropContext, Droppable, Draggable, DropResult} from "react-beautiful-dnd";


export function LoadClasses(): JSX.Element{
    const coreClasses=[
        {
            id: "test1",
            name: "Intro to Comp Sci",
        },
        {
            id: "test2",
            name: "Intro to Comp Sci2",
        },
        {
            id: "test3",
            name: "Intro to Comp Sci3",
        },
    ];
    /*
    if(PUT SOMETHING HERE){
        const coreClasses=[ 
            {
                id: "test1",
                name: "Intro to Comp Sci",
            },
            {
                id: "test2",
                name: "Intro to Comp Sci2",
            },
            {
                id: "test3",
                name: "Intro to Comp Sci3",
            },
        ];
    }else{
        const coreClasses=[
            {
                id: "test1",
                name: "Intro to Comp Sci",
            },
            {
                id: "test2",
                name: "Intro to Comp Sci2",
            },
            {
                id: "test3",
                name: "Intro to Comp Sci3",
            },
        ];
    }
    
    const [core, updateCore] = useState(coreClasses);


    function handleOnDragEnd(result: DropResult){
        if (!result.destination) return;
    
        const Courses = Array.from(core);
        const [reorderedCourse] = Courses.splice(result.source.index, 1);
        Courses.splice(result.destination.index, 0, reorderedCourse);
    
        updateCore(Courses);
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
        //flexDirection: "Semester",
        //alignCourses: "center",
        fontSize: 20,
        border: "10px solid black",
    },
    h3: {
        marginLeft: "30px",
    },
} as const;
*/
