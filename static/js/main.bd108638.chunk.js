(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(12),o=n.n(c),d=(n(55),n(56),n(57),n(1));function a(){return Object(d.jsx)("div",{style:s.welcome,children:Object(d.jsx)("p",{children:"UD CIS Scheduler"})})}var s={welcome:{width:"80%",padding:"0px 0px",margin:"50px auto",background:"white",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:30}},u=n(40),l=n.n(u);function x(){return Object(d.jsxs)("div",{style:b.dropdown,children:[Object(d.jsx)("h3",{children:"Major Selector"}),Object(d.jsx)(l.a,{options:["BS CS","BS w/AI Concentration","BS w/Bioinformatics Concentration","BS w/Cybersecurity Concentration","BS w/Data Science Concentration","BS w/High Performance Computing Concentration","BS w/Systems and Networks Concentration","BS w/Theory and Computation Concentration"],value:"Click Here.",placeholder:"Select an option"})]})}var b={dropdown:{width:"40%",margin:"10px auto",background:"tan",borderRadius:"111px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:20,border:"10px solid black"}},j=(n(59),n(4)),f=n(35),p=n(41),O=n(27);n(60);function g(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(d.jsx)("div",{style:h.popup,children:Object(d.jsx)(p.a,{position:"top-end",className:"m-3",children:Object(d.jsxs)(f.a,{show:!n,onClose:function(){return i(!n)},children:[Object(d.jsx)(O.a,{children:Object(d.jsx)("strong",{className:"me-auto",children:"Welcome to the UD CIS Scheduler!"})}),Object(d.jsx)(f.a.Body,{children:"Please select a major to get started. Required courses will populate for you to build a schedule."})]})})})}var h={popup:{color:"blue"}};function m(){return Object(d.jsxs)("div",{style:B.footer,children:[Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["Made for CISC275 at the University of Delaware",Object(d.jsx)("br",{}),"\xa9 2021 Tyler Rust, Noah Trungold, James Wan"]})]})}var C,v,I,S,y,w,k,T,A,D,E,L,B={footer:{backgroundColor:"lightgreen",position:"fixed",margin:"auto",bottom:"0",left:"0",width:"90%"}},M=n(10),R=n(11),_=R.a.div(C||(C=Object(M.a)(["\n    align-items: flex-start;\n    background-color: #3179ba;\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    padding: 20px;\n    width: 100%;\n"]))),P=R.a.div(v||(v=Object(M.a)(["\npadding: 6px 16px 12px;\nfont-weight: bold;\n"]))),H=R.a.div(I||(I=Object(M.a)(["\n    transform: ",";\n    opacity: ",";\n"])),(function(e){return e.isPreview?"rotate(0deg)":void 0}),(function(e){return e.isHidden?0:1})),N=R.a.div.attrs((function(e){var t=e.position,n=t.x,r=t.y;return{style:{transform:"translate(".concat(n,"px, ").concat(r,"px)")}}}))(S||(S=Object(M.a)([""]))),G=Object(R.a)(H)(y||(y=Object(M.a)(["\n    background-color: #ebecf0;\n    width: 300px;\n    min-height: 40px;\n    margin-right: 20px;\n    border-radius: 3px;\n    padding: 8px 8px;\n    flex-grow: 0;\n"]))),U=Object(R.a)(H)(w||(w=Object(M.a)(["\n    background-color: #fff;\n    cursor: pointer;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    max-width: 300px;\n    border-radius: 3px;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n"]))),q=R.a.button(k||(k=Object(M.a)(["\n    background-color: #ffffff3d;\n    border-radius: 3px;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    max-width: 300px;\n    padding: 10px 12px;\n    text-align: left;\n    transition: background 85ms ease-in;\n    width: 100%;\n    &:hover {\n    background-color: #ffffff52;\n    }\n"])),(function(e){return e.dark?"#000":"#fff"})),K=R.a.button(T||(T=Object(M.a)(["\n    background-color: #3498DB;\n    border-radius: 3px;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    max-width: 300px;\n    padding: 10px 12px;\n    text-align: center;\n    transition: background 85ms ease-in;\n    width: 100%;\n    &:hover {\n    background-color: #00000000;\n    }\n"])),(function(e){return e.dark?"#000":"#fff"})),z=R.a.div(A||(A=Object(M.a)(["\n    max-width: 300px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: flex-start;\n"]))),F=R.a.button(D||(D=Object(M.a)(["\n    background-color: #5aac44;\n    border-radius: 3px;\n    border: none;\n    box-shadow: none;\n    color: #fff;\n    padding: 6px 12px;\n    text-align: center;\n"]))),V=R.a.input(E||(E=Object(M.a)(["\n    border-radius: 3px;\n    border: none;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    width: 100%;\n"]))),J=R.a.div(L||(L=Object(M.a)(["\n    height: 100%;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n"]))),W=function(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t;null===(t=e.current)||void 0===t||t.focus()}),[]),e},Y=function(e){var t=e.onAdd,n=Object(r.useState)(""),i=Object(j.a)(n,2),c=i[0],o=i[1],a=W();return Object(d.jsxs)(z,{children:[Object(d.jsx)(V,{ref:a,value:c,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}),Object(d.jsx)(F,{onClick:function(){return t(c)},children:"Create"})]})},Q=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),i=n[0],c=n[1],o=e.onAdd,a=e.toggleButtonText,s=e.dark;return i?Object(d.jsx)(Y,{onAdd:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){o(e),c(!1)}))}):Object(d.jsx)(q,{dark:s,onClick:function(){return c(!0)},children:a})},X=n(75),Z=n(3),$=n(49),ee=n(36),te=n(19),ne=function(e,t){return e.findIndex((function(e){return e.id===t}))},re=function(e,t,n){var r=e[t];return function(e,t,n){return[].concat(Object(te.a)(e.slice(0,n)),[t],Object(te.a)(e.slice(n)))}(function(e,t){return[].concat(Object(te.a)(e.slice(0,t)),Object(te.a)(e.slice(t+1)))}(e,t),r,n)};var ie=function(e,t){switch(t.type){case"SET_DRAGGED_ITEM":e.draggedItem=t.payload;break;case"ADD_LIST":var n=Object(ee.a)();e.lists.push({id:n,text:t.payload,courses:[]});break;case"EDIT_LIST":var r=t.payload,i=r.text,c=r.id,o=e.lists.findIndex((function(e){return e.id===c}));e.lists[o].text=i;break;case"ADD_TASK":var d=t.payload,a=d.text,s=d.listId,u=ne(e.lists,s);e.lists[u].courses.push({id:Object(ee.a)(),text:a});break;case"DELETE_LIST":var l=t.payload;e.lists=e.lists.filter((function(e){return e.id!==l}));break;case"DELETE_ALL_LISTS":e.lists=e.lists.slice(0,1);break;case"MOVE_LIST":var x=t.payload,b=x.draggedId,j=x.hoverId,f=ne(e.lists,b),p=ne(e.lists,j);e.lists=re(e.lists,f,p);break;case"MOVE_TASK":var O=t.payload,g=O.draggedItemId,h=O.hoveredItemId,m=O.sourceColumnId,C=O.targetColumnId,v=ne(e.lists,m),I=ne(e.lists,C),S=ne(e.lists[v].courses,g),y=h?ne(e.lists[I].courses,h):0,w=e.lists[v].courses[S];e.lists[v].courses.splice(S,1),e.lists[I].courses.splice(y,0,w)}},ce=Object(r.createContext)({});var oe={draggedItem:null,lists:[{id:"0",text:"Course List",courses:[{id:"c1",text:"CISC108: 3 credits"},{id:"c2",text:"EGGG101: 2 credits"},{id:"c3",text:"MATH241: 4 credits"},{id:"c4",text:"ENGL110: 3 credits"},{id:"c5",text:"Breadth Requirement (CAH) Course: 3 credits"},{id:"c6",text:"CISC181: 3 credits"},{id:"c7",text:"CISC210: 3 credits"},{id:"c8",text:"MATH242: 4 credits"},{id:"c9",text:"Breadth Requirement (HCC) Course: 3 credits"},{id:"c10",text:"Breadth Requirement (SBS) Course: 3 credits"},{id:"c11",text:"CISC220: 3 credits"},{id:"c12",text:"CISC260: 3 credits"},{id:"c13",text:"MATH210: 3 credits"},{id:"c14",text:"Science Requirement Course 1: 4 credits"},{id:"c15",text:"MATH243: 4 credits"},{id:"c16",text:"CISC355: 3 credits"},{id:"c17",text:"CISC275: 3 credits"},{id:"c18",text:"MATH205: 4 credits"},{id:"c19",text:"MATH350: 3 credits"},{id:"c20",text:"Science Requirement Course 2: 4 credits"},{id:"c21",text:"Breadth Requirement (MC) Course: 3 credits"}]},{id:"1",text:"Year 1: Semester 1",courses:[{id:"c22",text:"Learn Typescript"}]},{id:"2",text:"Year 1: Semester 2",courses:[{id:"c23",text:"Begin to use static typing"}]}]},de=function(){return Object(r.useContext)(ce)},ae=function(e){var t=e.children,n=Object($.a)(ie,oe),r=Object(j.a)(n,2),i=r[0],c=r[1],o=i.draggedItem,a=i.lists;return Object(d.jsx)(ce.Provider,{value:{draggedItem:o,lists:a,getCoursesByListId:function(e){var t;return(null===(t=a.find((function(t){return t.id===e})))||void 0===t?void 0:t.courses)||[]},dispatch:c},children:t})},se=n(77),ue=function(e){return{type:"SET_DRAGGED_ITEM",payload:e}},le=function(e,t,n,r){return{type:"MOVE_TASK",payload:{draggedItemId:e,hoveredItemId:t,sourceColumnId:n,targetColumnId:r}}},xe=n(38),be=function(e){var t=de().dispatch,n=Object(se.a)({type:e.type,item:function(){return t(ue(e)),e},end:function(){return t(ue(null))}}),i=Object(j.a)(n,3),c=i[1],o=i[2];return Object(r.useEffect)((function(){o(Object(xe.a)(),{captureDraggingState:!0})}),[o]),{drag:c}},je=n(78),fe=function(e,t,n,r){return Boolean(!r&&e&&e.type===t&&e.id===n)},pe=function(e){var t=e.text,n=e.id,i=e.columnId,c=e.isPreview,o=de(),a=o.draggedItem,s=o.dispatch,u=Object(r.useRef)(null),l=be({type:"CARD",id:n,text:t,columnId:i}).drag,x=Object(je.a)({accept:"CARD",hover:function(){a&&"CARD"===a.type&&a.id!==n&&s(le(a.id,n,a.columnId,i))}});return l((0,Object(j.a)(x,2)[1])(u)),Object(d.jsx)(U,{isHidden:fe(a,"CARD",n,c),isPreview:c,ref:u,children:t})},Oe=function(e){var t=e.onAdd,n=Object(r.useState)(""),i=Object(j.a)(n,2),c=i[0],o=i[1],a=W();return Object(d.jsxs)(z,{children:[Object(d.jsx)(V,{ref:a,value:c,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}),Object(d.jsx)(F,{onClick:function(){return t(c)},children:"Enter"})]})},ge=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),i=n[0],c=n[1],o=e.onAdd,a=e.toggleButtonText,s=e.dark;return i?Object(d.jsx)(Oe,{onAdd:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){o(e),c(!1)}))}):Object(d.jsx)(K,{dark:s,onClick:function(){return c(!0)},children:a})},he=n(73),me=n(74),Ce=n(79),ve=function(e){var t=e.text,n=e.id,i=e.isPreview,c=de(),o=c.draggedItem,a=c.getCoursesByListId,s=c.dispatch,u=a(n),l=Object(r.useRef)(null),x=Object(je.a)({accept:["COLUMN","CARD"],hover:function(){if(o)if("COLUMN"===o.type){if(o.id===n)return;s({type:"MOVE_LIST",payload:{draggedId:o.id,hoverId:n}})}else{if(o.columnId===n)return;if(u.length)return;s(le(o.id,null,o.columnId,n)),s(ue(Object(Z.a)(Object(Z.a)({},o),{},{columnId:n})))}}}),b=Object(j.a)(x,2)[1];return(0,be({type:"COLUMN",id:n,text:t}).drag)(b(l)),Object(d.jsxs)(G,{isPreview:i,ref:l,isHidden:fe(o,"COLUMN",n,i),children:[Object(d.jsxs)(he.a,{children:[Object(d.jsx)(P,{children:t}),Object(d.jsx)(me.a,{children:Object(d.jsx)(ge,{toggleButtonText:"Edit Title",onAdd:function(e){return s(function(e,t){return{type:"EDIT_LIST",payload:{text:e,id:t}}}(e,n))},dark:!0})}),Object(d.jsx)(me.a,{children:Object(d.jsx)(Ce.a,{style:Ie.button,onClick:function(){return s(function(e){return{type:"DELETE_LIST",payload:e}}(n))},children:"Delete"})})]}),u.map((function(e){return Object(d.jsx)(pe,{id:e.id,columnId:n,text:e.text},e.id)})),Object(d.jsx)(Q,{toggleButtonText:"+ Add another card",onAdd:function(e){return s(function(e,t){return{type:"ADD_TASK",payload:{text:e,listId:t}}}(e,n))},dark:!0})]})},Ie={button:{fontColor:"red",width:"70%",margin:"2px auto 10px",background:"red",borderRadius:"40px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:18}},Se=function(){var e=de().draggedItem,t=Object(X.a)((function(e){return{currentOffset:e.getSourceClientOffset()}})).currentOffset;return e&&t?Object(d.jsx)(J,{children:Object(d.jsx)(N,{position:t,children:"COLUMN"===e.type?Object(d.jsx)(ve,{id:e.id,text:e.text,isPreview:!0}):Object(d.jsx)(pe,{columnId:e.columnId,isPreview:!0,id:e.id,text:e.text})})}):null};function ye(){var e=de(),t=e.lists,n=e.dispatch;return Object(d.jsxs)(_,{children:[Object(d.jsx)(Se,{}),t.map((function(e){return Object(d.jsx)(ve,{id:e.id,text:e.text},e.id)})),";",Object(d.jsxs)(he.a,{children:[Object(d.jsx)(Q,{toggleButtonText:"+ Add another list",onAdd:function(e){return n(function(e){return{type:"ADD_LIST",payload:e}}(e))}}),Object(d.jsx)(Ce.a,{style:we.deleteButton,onClick:function(){return n({type:"DELETE_ALL_LISTS"})},children:"Delete all semesters"})]})]})}var we={deleteButton:{backgroundColor:"red",margin:"10px -50px 110px 0px",bottom:"10",left:"0",width:"100%"}},ke=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{}),Object(d.jsx)(a,{}),Object(d.jsx)(x,{}),Object(d.jsx)(ye,{}),Object(d.jsx)(m,{})]})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),c(e),o(e)}))},Ae=n(76),De=n(30);o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(Ae.a,{backend:De.a,children:Object(d.jsx)(ae,{children:Object(d.jsx)(ke,{})})})}),document.getElementById("root")),Te()}},[[67,1,2]]]);
//# sourceMappingURL=main.bd108638.chunk.js.map