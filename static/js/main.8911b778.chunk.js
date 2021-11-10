(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(12),o=n.n(c),a=(n(55),n(56),n(57),n(1));function d(){return Object(a.jsx)("div",{style:s.welcome,children:Object(a.jsx)("p",{children:"UD CIS Scheduler"})})}var s={welcome:{width:"80%",padding:"0px 0px",margin:"50px auto",background:"white",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:30}},u=n(40),l=n.n(u);function x(){return Object(a.jsxs)("div",{style:b.dropdown,children:[Object(a.jsx)("h3",{children:"Major Selector"}),Object(a.jsx)(l.a,{options:["BS CS","BS w/AI Concentration","BS w/Bioinformatics Concentration","BS w/Cybersecurity Concentration","BS w/Data Science Concentration","BS w/High Performance Computing Concentration","BS w/Systems and Networks Concentration","BS w/Theory and Computation Concentration"],value:"Click Here.",placeholder:"Select an option"})]})}var b={dropdown:{width:"40%",margin:"10px auto",background:"tan",borderRadius:"111px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:20,border:"10px solid black"}},f=(n(59),n(6)),j=n(35),p=n(41),O=n(27);n(60);function g(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),n=t[0],i=t[1];return Object(a.jsx)("div",{style:h.popup,children:Object(a.jsx)(p.a,{position:"top-end",className:"m-3",children:Object(a.jsxs)(j.a,{show:!n,onClose:function(){return i(!n)},children:[Object(a.jsx)(O.a,{children:Object(a.jsx)("strong",{className:"me-auto",children:"Welcome to the UD CIS Scheduler!"})}),Object(a.jsx)(j.a.Body,{children:"Please select a major to get started. Required courses will populate for you to build a schedule."})]})})})}var h={popup:{color:"blue"}};function m(){return Object(a.jsxs)("div",{style:E.footer,children:[Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Made for CISC275 at the University of Delaware",Object(a.jsx)("br",{}),"\xa9 2021 Tyler Rust, Noah Trungold, James Wan"]})]})}var v,y,I,C,S,w,k,D,T,L,A,E={footer:{backgroundColor:"lightgreen",position:"fixed",margin:"auto",bottom:"10",left:"0",width:"100%"}},B=n(10),_=n(11),R=_.a.div(v||(v=Object(B.a)(["\n    align-items: flex-start;\n    background-color: #3179ba;\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    padding: 20px;\n    width: 100%;\n"]))),M=_.a.div(y||(y=Object(B.a)(["\npadding: 6px 16px 12px;\nfont-weight: bold;\n"]))),P=_.a.div(I||(I=Object(B.a)(["\n    transform: ",";\n    opacity: ",";\n"])),(function(e){return e.isPreview?"rotate(5deg)":void 0}),(function(e){return e.isHidden?0:1})),N=_.a.div.attrs((function(e){var t=e.position,n=t.x,r=t.y;return{style:{transform:"translate(".concat(n,"px, ").concat(r,"px)")}}}))(C||(C=Object(B.a)([""]))),U=Object(_.a)(P)(S||(S=Object(B.a)(["\n    background-color: #ebecf0;\n    width: 300px;\n    min-height: 40px;\n    margin-right: 20px;\n    border-radius: 3px;\n    padding: 8px 8px;\n    flex-grow: 0;\n"]))),H=Object(_.a)(P)(w||(w=Object(B.a)(["\n    background-color: #fff;\n    cursor: pointer;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    max-width: 300px;\n    border-radius: 3px;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n"]))),K=_.a.button(k||(k=Object(B.a)(["\n    background-color: #ffffff3d;\n    border-radius: 3px;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    max-width: 300px;\n    padding: 10px 12px;\n    text-align: left;\n    transition: background 85ms ease-in;\n    width: 100%;\n    &:hover {\n    background-color: #ffffff52;\n    }\n"])),(function(e){return e.dark?"#000":"#fff"})),z=_.a.div(D||(D=Object(B.a)(["\n    max-width: 300px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: flex-start;\n"]))),F=_.a.button(T||(T=Object(B.a)(["\n    background-color: #5aac44;\n    border-radius: 3px;\n    border: none;\n    box-shadow: none;\n    color: #fff;\n    padding: 6px 12px;\n    text-align: center;\n"]))),G=_.a.input(L||(L=Object(B.a)(["\n    border-radius: 3px;\n    border: none;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    width: 100%;\n"]))),V=_.a.div(A||(A=Object(B.a)(["\n    height: 100%;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n"]))),J=function(e){var t=e.onAdd,n=Object(r.useState)(""),i=Object(f.a)(n,2),c=i[0],o=i[1],d=function(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t;null===(t=e.current)||void 0===t||t.focus()}),[]),e}();return Object(a.jsxs)(z,{children:[Object(a.jsx)(G,{ref:d,value:c,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}),Object(a.jsx)(F,{onClick:function(){return t(c)},children:"Create"})]})},W=function(e){var t=Object(r.useState)(!1),n=Object(f.a)(t,2),i=n[0],c=n[1],o=e.onAdd,d=e.toggleButtonText,s=e.dark;return i?Object(a.jsx)(J,{onAdd:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){o(e),c(!1)}))}):Object(a.jsx)(K,{dark:s,onClick:function(){return c(!0)},children:d})},Y=n(74),q=n(3),Q=n(49),X=n(36),Z=n(19),$=function(e,t){return e.findIndex((function(e){return e.id===t}))},ee=function(e,t,n){var r=e[t];return function(e,t,n){return[].concat(Object(Z.a)(e.slice(0,n)),[t],Object(Z.a)(e.slice(n)))}(function(e,t){return[].concat(Object(Z.a)(e.slice(0,t)),Object(Z.a)(e.slice(t+1)))}(e,t),r,n)};var te=function(e,t){switch(t.type){case"SET_DRAGGED_ITEM":e.draggedItem=t.payload;break;case"ADD_LIST":var n=Object(X.a)();e.lists.push({id:n,text:t.payload,courses:[]});break;case"ADD_TASK":var r=t.payload,i=r.text,c=r.listId,o=$(e.lists,c);e.lists[o].courses.push({id:Object(X.a)(),text:i});break;case"DELETE_LIST":var a=t.payload;e.lists=e.lists.filter((function(e){return e.id!==a}));break;case"DELETE_ALL_LISTS":e.lists=e.lists.slice(0,1);break;case"MOVE_LIST":var d=t.payload,s=d.draggedId,u=d.hoverId,l=$(e.lists,s),x=$(e.lists,u);e.lists=ee(e.lists,l,x);break;case"MOVE_TASK":var b=t.payload,f=b.draggedItemId,j=b.hoveredItemId,p=b.sourceColumnId,O=b.targetColumnId,g=$(e.lists,p),h=$(e.lists,O),m=$(e.lists[g].courses,f),v=j?$(e.lists[h].courses,j):0,y=e.lists[g].courses[m];e.lists[g].courses.splice(m,1),e.lists[h].courses.splice(v,0,y)}},ne=Object(r.createContext)({});var re={draggedItem:null,lists:[{id:"0",text:"Course List",courses:[{id:"c0",text:"Cisc 106"},{id:"c1",text:"Cisc108"}]},{id:"1",text:"Year 1: Semester 1",courses:[{id:"c2",text:"Learn Typescript"}]},{id:"2",text:"Year 1: Semester 2",courses:[{id:"c3",text:"Begin to use static typing"}]}]},ie=function(){return Object(r.useContext)(ne)},ce=function(e){var t=e.children,n=Object(Q.a)(te,re),r=Object(f.a)(n,2),i=r[0],c=r[1],o=i.draggedItem,d=i.lists;return Object(a.jsx)(ne.Provider,{value:{draggedItem:o,lists:d,getCoursesByListId:function(e){var t;return(null===(t=d.find((function(t){return t.id===e})))||void 0===t?void 0:t.courses)||[]},dispatch:c},children:t})},oe=n(77),ae=function(e){return{type:"SET_DRAGGED_ITEM",payload:e}},de=function(e,t,n,r){return{type:"MOVE_TASK",payload:{draggedItemId:e,hoveredItemId:t,sourceColumnId:n,targetColumnId:r}}},se=n(38),ue=function(e){var t=ie().dispatch,n=Object(oe.a)({type:e.type,item:function(){return t(ae(e)),e},end:function(){return t(ae(null))}}),i=Object(f.a)(n,3),c=i[1],o=i[2];return Object(r.useEffect)((function(){o(Object(se.a)(),{captureDraggingState:!0})}),[o]),{drag:c}},le=n(78),xe=function(e,t,n,r){return Boolean(!r&&e&&e.type===t&&e.id===n)},be=function(e){var t=e.text,n=e.id,i=e.columnId,c=e.isPreview,o=ie(),d=o.draggedItem,s=o.dispatch,u=Object(r.useRef)(null),l=ue({type:"CARD",id:n,text:t,columnId:i}).drag,x=Object(le.a)({accept:"CARD",hover:function(){d&&"CARD"===d.type&&d.id!==n&&s(de(d.id,n,d.columnId,i))}});return l((0,Object(f.a)(x,2)[1])(u)),Object(a.jsx)(H,{isHidden:xe(d,"CARD",n,c),isPreview:c,ref:u,children:t})},fe=n(73),je=n(79),pe=function(e){var t=e.text,n=e.id,i=e.isPreview,c=ie(),o=c.draggedItem,d=c.getCoursesByListId,s=c.dispatch,u=d(n),l=Object(r.useRef)(null),x=Object(le.a)({accept:["COLUMN","CARD"],hover:function(){if(o)if("COLUMN"===o.type){if(o.id===n)return;s({type:"MOVE_LIST",payload:{draggedId:o.id,hoverId:n}})}else{if(o.columnId===n)return;if(u.length)return;s(de(o.id,null,o.columnId,n)),s(ae(Object(q.a)(Object(q.a)({},o),{},{columnId:n})))}}}),b=Object(f.a)(x,2)[1];return(0,ue({type:"COLUMN",id:n,text:t}).drag)(b(l)),Object(a.jsxs)(U,{isPreview:i,ref:l,isHidden:xe(o,"COLUMN",n,i),children:[Object(a.jsxs)(fe.a,{children:[Object(a.jsx)(M,{children:t}),Object(a.jsx)(je.a,{style:Oe.button,onClick:function(){return s(function(e){return{type:"DELETE_LIST",payload:e}}(n))},children:"Delete"})]}),u.map((function(e){return Object(a.jsx)(be,{id:e.id,columnId:n,text:e.text},e.id)})),Object(a.jsx)(W,{toggleButtonText:"+ Add another card",onAdd:function(e){return s(function(e,t){return{type:"ADD_TASK",payload:{text:e,listId:t}}}(e,n))},dark:!0})]})},Oe={button:{fontColor:"red",width:"40%",margin:"2px auto 10px",background:"red",borderRadius:"40px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:18}},ge=function(){var e=ie().draggedItem,t=Object(Y.a)((function(e){return{currentOffset:e.getSourceClientOffset()}})).currentOffset;return e&&t?Object(a.jsx)(V,{children:Object(a.jsx)(N,{position:t,children:"COLUMN"===e.type?Object(a.jsx)(pe,{id:e.id,text:e.text,isPreview:!0}):Object(a.jsx)(be,{columnId:e.columnId,isPreview:!0,id:e.id,text:e.text})})}):null},he=n(75);function me(){var e=ie(),t=e.lists,n=e.dispatch;return Object(a.jsxs)(R,{children:[Object(a.jsx)(ge,{}),t.map((function(e){return Object(a.jsx)(pe,{id:e.id,text:e.text},e.id)})),";",Object(a.jsxs)(he.a,{children:[Object(a.jsx)(W,{toggleButtonText:"+ Add another list",onAdd:function(e){return n(function(e){return{type:"ADD_LIST",payload:e}}(e))}}),Object(a.jsx)(je.a,{style:ve.deleteButton,onClick:function(){return n({type:"DELETE_ALL_LISTS"})},children:"Delete all semesters"})]})]})}var ve={deleteButton:{backgroundColor:"red",margin:"10px -50px 110px 0px",bottom:"10",left:"0",width:"100%"}},ye=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(g,{}),Object(a.jsx)(d,{}),Object(a.jsx)(x,{}),Object(a.jsx)(me,{}),Object(a.jsx)(m,{})]})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),c(e),o(e)}))},Ce=n(76),Se=n(30);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Ce.a,{backend:Se.a,children:Object(a.jsx)(ce,{children:Object(a.jsx)(ye,{})})})}),document.getElementById("root")),Ie()}},[[67,1,2]]]);
//# sourceMappingURL=main.8911b778.chunk.js.map