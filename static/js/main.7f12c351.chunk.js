(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),s=c(8),i=c.n(s),a=(c(32),c(33),c(34),c(1));function d(){return Object(a.jsx)("div",{style:o.welcome,children:Object(a.jsx)("p",{children:"UD CIS Scheduler"})})}var o={welcome:{width:"80%",padding:"0px 0px",margin:"50px auto",background:"white",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:30}},j=c(21),l=c.n(j);function b(){return Object(a.jsxs)("div",{style:x.dropdown,children:["Major Selector",Object(a.jsx)(l.a,{options:["BS CS","BS w/AI Concentration","BS w/Bioinformatics Concentration","BS w/Cybersecurity Concentration","BS w/Data Science Concentration","BS w/High Performance Computing Concentration","BS w/Systems and Networks Concentration","BS w/Theory and Computation Concentration"],value:"Click Here.",placeholder:"Select an option"})]})}var x={dropdown:{width:"40%",padding:"0px 90px",margin:"50px auto",background:"tan",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:30,border:"10px solid black"}},m=c(2),u=c(7),h=c(16);function O(){var e=Object(r.useState)([{id:"test1",name:"Intro to Comp Sci"},{id:"test2",name:"Intro to Comp Sci2"},{id:"test3",name:"Intro to Comp Sci3"}]),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(a.jsxs)("div",{style:p.classes,children:[Object(a.jsx)("h3",{style:p.h3,children:"Course List"}),Object(a.jsx)(h.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(c),r=t.splice(e.source.index,1),s=Object(u.a)(r,1)[0];t.splice(e.destination.index,0,s),n(t)}},children:Object(a.jsx)(h.c,{droppableId:"core",children:function(e){return Object(a.jsxs)("ul",Object(m.a)(Object(m.a)({className:"core"},e.droppableProps),{},{ref:e.innerRef,children:[c.map((function(e,t){var c=e.id,r=e.name;return Object(a.jsx)(h.b,{draggableId:c,index:t,children:function(e){return Object(a.jsx)("ul",Object(m.a)(Object(m.a)(Object(m.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(a.jsx)("p",{children:r})}))}},c)})),e.placeholder]}))}})})]})}var p={classes:{width:"20%",padding:"0px 80px",margin:"50px",borderRadius:"10px",fontSize:20,border:"10px solid black"},h3:{marginLeft:"30px"}},f=c(44),C=c(47),S=c(46),g=c(45);function v(e){var t=e.currID,c=e.currentSem,r=e.currYear,n=e.semList,s=e.setSemList,i=e.thisID,d=e.idSet,o=e.semPer;return Object(a.jsxs)(S.a,{children:[Object(a.jsx)(f.a,{children:Object(a.jsxs)("strong",{children:["Semester ",c," Year ",r]})}),Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Class ID"}),Object(a.jsx)("th",{children:"Class Name"}),Object(a.jsx)("th",{children:"Credits"})]}),[{code:"CISC106",name:"General Computer Science for Engineers",credits:3},{code:"CISC",name:"ClassName",credits:3},{code:"CISC",name:"ClassName",credits:3},{code:"CISC",name:"ClassName",credits:3},{code:"CISC",name:"ClassName",credits:3}].map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.code}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.credits})]},e.name)}))]}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(C.a,{children:"Add Course"})}),Object(a.jsx)(g.a,{children:Object(a.jsx)(C.a,{children:"Delete Course"})}),Object(a.jsx)(g.a,{children:Object(a.jsx)(C.a,{onClick:function(){var e=n;if(e.splice(t,1),e[0]){for(var c,r=t;e[r];r++)(c=e[r]).id=r,c.semester-=1,0==c.semester&&(c.year-=1,c.semester=o),e[r]=c;d(i-1),s(e)}else d(-1)},children:"Delete This Semester"})})]})]})}function I(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)([{id:c,semester:1,year:1}]),i=Object(u.a)(s,2),d=i[0],o=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(C.a,{onClick:function(){var e=c+1,t=(1+e)%2,r=Math.trunc(e/2)+1;0===t&&(t+=2),n(e);var s={id:e,semester:t,year:r},i=d;i.push(s),o(i)},className:"m-3",children:"Add Semester"})}),Object(a.jsx)(f.a,{children:Object(a.jsx)("table",{children:d.map((function(e){return Object(a.jsx)("tr",{children:Object(a.jsx)("td",{children:Object(a.jsx)(v,{currentSem:e.semester,currYear:e.year,currID:e.id,semList:d,setSemList:o,thisID:c,idSet:n,semPer:2})})},e.id)}))})}),Object(a.jsx)(C.a,{onClick:function(){n(c-1);var e=d;e.pop(),e[0]||n(-1),o(e)},className:"m-3",children:"Delete Last Semester"}),Object(a.jsx)(C.a,{onClick:function(){n(0),o([{id:0,semester:1,year:1}])},className:"m-3",children:"Start Over"})]})}c(41);var w=c(20),y=c(24),N=c(15);function D(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(a.jsx)("div",{className:"message",children:Object(a.jsx)(y.a,{position:"top-end",className:"p-3",children:Object(a.jsxs)(w.a,{show:!c,onClose:function(){return n(!c)},bg:"light",children:[Object(a.jsx)(N.a,{children:Object(a.jsx)("strong",{className:"me-auto",children:"Welcome!"})}),Object(a.jsx)(w.a.Body,{children:"Please select a major to get started."})]})})})}var k=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(D,{}),Object(a.jsx)(d,{}),Object(a.jsx)(b,{}),Object(a.jsxs)("div",{className:"rowC",children:[Object(a.jsx)(O,{}),Object(a.jsx)(I,{})]})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),B()}},[[42,1,2]]]);
//# sourceMappingURL=main.7f12c351.chunk.js.map