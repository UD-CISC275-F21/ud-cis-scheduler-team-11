<ListViewRenderAnother
  items={[
    {
        id: "test1",
        text: "CISC108 is a prerequisite for CISC181 and CISC210.",
    },
    {
        id: "test2",
        text: "MATH241 is a prerequisite for MATH242.",
    },
    {
        id: "test3",
        text: "CISC108 is a prerequisite for CISC210.",
    },
    {
        id: "test4",
        text: "CISC210 is a prerequisite for CISC220 and CISC260.",
    },
    {
        id: "test5",
        text: "MATH241 and MATH242 are prerequisite for MATH210.",
    },
    {
        id: "test6",
        text: "MATH242 is a prerequisite for MATH243.",
    },
    {
        id: "test7",
        text: "CISC181 and CISC220 are prerequisite for CISC275.",
    },
    {
        id: "test8",
        text: "MATH210 is a prerequisite for MATH205.",
    },
    {
        id: "test9",
        text: "MATH243 is a prerequisite for MATH350.",
    },
  ]}
  renderer={(item) => <div>{item.name}</div>}
/>
