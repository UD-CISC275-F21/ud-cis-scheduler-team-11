<ListViewRenderFulfill
  items={[
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
        }  
    ]};
    renderer={(item) => <div>{item.name}</div>}
/>
