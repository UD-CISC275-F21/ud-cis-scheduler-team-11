(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(12),o=n.n(c),d=(n(55),n(56),n(57),n(58),n(4)),s=n(35),a=n(41),u=n(27),l=(n(59),n(1));function x(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(l.jsx)("div",{style:j.popup,children:Object(l.jsx)(a.a,{position:"top-end",className:"m-3",children:Object(l.jsxs)(s.a,{show:!n,onClose:function(){return i(!n)},children:[Object(l.jsx)(u.a,{children:Object(l.jsx)("strong",{className:"me-auto",children:"Welcome to the UD CIS Scheduler!"})}),Object(l.jsx)(s.a.Body,{children:"Please select a major to get started. Required courses will populate for you to build a schedule."})]})})})}var j={popup:{color:"blue"}};function b(){return Object(l.jsx)("div",{style:f.welcome,children:Object(l.jsx)("p",{children:"UD CIS Scheduler"})})}var f={welcome:{width:"40%",padding:"30px 0px 0px 0px",margin:"auto",background:"white",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:30}},p=n(45),O=n.n(p),g=n(79);function m(){var e=String.fromCharCode(11167);return Object(l.jsx)("div",{children:Object(l.jsx)(g.a,{style:D.dropdown,children:Object(l.jsx)(O.a,{options:["BS Computer Science","BS w/ Artificial Intelligence Concentration","BS w/ Bioinformatics Concentration","BS w/ Cybersecurity Concentration","BS w/ Data Science Concentration","BS w/ High Performance Computing Concentration","BS w/ Systems and Networks Concentration","BS w/ Theory and Computation Concentration"],value:"Click Here To Select A Major  "+e,placeholder:"Select an option"})})})}var h,S,E,C,v,y,I,w,T,k,R,A,D={dropdown:{width:"auto",margin:"10px auto",background:"tan",borderRadius:"50px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:20,border:"10px solid black",color:"black",fontWeight:600}},M=n(10),B=n(11),_=B.a.div(h||(h=Object(M.a)(["\n    align-items: flex-start;\n    background-color: #3179ba;\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    padding: 20px;\n    width: 100%;\n"]))),P=B.a.div(S||(S=Object(M.a)(["\npadding: 6px 16px 12px;\nfont-weight: bold;\n"]))),H=B.a.div(E||(E=Object(M.a)(["\n    transform: ",";\n    opacity: ",";\n"])),(function(e){return e.isPreview?"rotate(0deg)":void 0}),(function(e){return e.isHidden?0:1})),L=B.a.div.attrs((function(e){var t=e.position,n=t.x,r=t.y;return{style:{transform:"translate(".concat(n,"px, ").concat(r,"px)")}}}))(C||(C=Object(M.a)([""]))),U=Object(B.a)(H)(v||(v=Object(M.a)(["\n    background-color: #ebecf0;\n    width: 300px;\n    min-height: 40px;\n    margin-right: 20px;\n    border-radius: 3px;\n    padding: 8px 8px;\n    flex-grow: 0;\n"]))),G=Object(B.a)(H)(y||(y=Object(M.a)(["\n    background-color: #fff;\n    cursor: pointer;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    max-width: 300px;\n    border-radius: 3px;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n"]))),q=B.a.button(I||(I=Object(M.a)(["\n    background-color: #ffffff3d;\n    border-radius: 3px;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    max-width: 300px;\n    padding: 10px 12px;\n    text-align: left;\n    transition: background 85ms ease-in;\n    width: 100%;\n    &:hover {\n    background-color: #ffffff52;\n    }\n"])),(function(e){return e.dark?"#000":"#fff"})),N=B.a.button(w||(w=Object(M.a)(["\n    background-color: #3498DB;\n    border-radius: 3px;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    max-width: 300px;\n    padding: 10px 12px;\n    text-align: center;\n    transition: background 85ms ease-in;\n    width: 100%;\n    &:hover {\n    background-color: #00000000;\n    }\n"])),(function(e){return e.dark?"#000":"#fff"})),z=B.a.div(T||(T=Object(M.a)(["\n    max-width: 300px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: flex-start;\n"]))),F=B.a.button(k||(k=Object(M.a)(["\n    background-color: #5aac44;\n    border-radius: 3px;\n    border: none;\n    box-shadow: none;\n    color: #fff;\n    padding: 6px 12px;\n    text-align: center;\n"]))),V=B.a.input(R||(R=Object(M.a)(["\n    border-radius: 3px;\n    border: none;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    width: 100%;\n"]))),J=B.a.div(A||(A=Object(M.a)(["\n    height: 100%;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n"]))),W=function(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t;null===(t=e.current)||void 0===t||t.focus()}),[]),e},K=function(e){var t=e.onAdd,n=Object(r.useState)(""),i=Object(d.a)(n,2),c=i[0],o=i[1],s=W();return Object(l.jsxs)(z,{children:[Object(l.jsx)(V,{ref:s,value:c,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}),Object(l.jsx)(F,{onClick:function(){return t(c)},children:"Create"})]})},Y=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),i=n[0],c=n[1],o=e.onAdd,s=e.toggleButtonText,a=e.dark;return i?Object(l.jsx)(K,{onAdd:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){o(e),c(!1)}))}):Object(l.jsx)(q,{dark:a,onClick:function(){return c(!0)},children:s})},Q=n(75),X=n(3),Z=n(50),$=n(36),ee=n(19),te=function(e,t){return e.findIndex((function(e){return e.id===t}))},ne=function(e,t,n){var r=e[t];return function(e,t,n){return[].concat(Object(ee.a)(e.slice(0,n)),[t],Object(ee.a)(e.slice(n)))}(function(e,t){return[].concat(Object(ee.a)(e.slice(0,t)),Object(ee.a)(e.slice(t+1)))}(e,t),r,n)};var re=function(e,t){switch(t.type){case"SET_DRAGGED_ITEM":e.draggedItem=t.payload;break;case"ADD_SEMESTER":var n=Object($.a)();e.semesters.push({id:n,text:t.payload,courses:[]});break;case"EDIT_SEMESTER":var r=t.payload,i=r.text,c=r.id,o=e.semesters.findIndex((function(e){return e.id===c}));e.semesters[o].text=i;break;case"ADD_COURSE":var d=t.payload,s=d.text,a=d.semesterId,u=te(e.semesters,a);e.semesters[u].courses.push({id:Object($.a)(),text:s});break;case"DELETE_SEMESTER":var l=t.payload;e.semesters=e.semesters.filter((function(e){return e.id!==l}));break;case"DELETE_ALL_SEMESTERS":e.semesters=e.semesters.slice(0,1);break;case"MOVE_SEMESTER":var x=t.payload,j=x.draggedId,b=x.hoverId,f=te(e.semesters,j),p=te(e.semesters,b);e.semesters=ne(e.semesters,f,p);break;case"MOVE_COURSE":var O=t.payload,g=O.draggedItemId,m=O.hoveredItemId,h=O.sourceColumnId,S=O.targetColumnId,E=te(e.semesters,h),C=te(e.semesters,S),v=te(e.semesters[E].courses,g),y=m?te(e.semesters[C].courses,m):0,I=e.semesters[E].courses[v];e.semesters[E].courses.splice(v,1),e.semesters[C].courses.splice(y,0,I)}},ie=Object(r.createContext)({});var ce={draggedItem:null,semesters:[{id:"0",text:"Semester Courses",courses:[{id:"c1",text:"CISC108: 3 credits"},{id:"c2",text:"EGGG101: 2 credits"},{id:"c3",text:"MATH241: 4 credits"},{id:"c4",text:"ENGL110: 3 credits"},{id:"c5",text:"Breadth Requirement (CAH) Course: 3 credits"},{id:"c6",text:"CISC181: 3 credits"},{id:"c7",text:"CISC210: 3 credits"},{id:"c8",text:"MATH242: 4 credits"},{id:"c9",text:"Breadth Requirement (HCC) Course: 3 credits"},{id:"c10",text:"Breadth Requirement (SBS) Course: 3 credits"},{id:"c11",text:"CISC220: 3 credits"},{id:"c12",text:"CISC260: 3 credits"},{id:"c13",text:"MATH210: 3 credits"},{id:"c14",text:"Science Requirement Course 1: 4 credits"},{id:"c15",text:"MATH243: 4 credits"},{id:"c16",text:"CISC355: 3 credits"},{id:"c17",text:"CISC275: 3 credits"},{id:"c18",text:"MATH205: 4 credits"},{id:"c19",text:"MATH350: 3 credits"},{id:"c20",text:"Science Requirement Course 2: 4 credits"},{id:"c21",text:"Breadth Requirement (MC) Course: 3 credits"}]},{id:"1",text:"Year 1: Fall Semester",courses:[{id:"c22",text:"Learn TypeScript"}]},{id:"2",text:"Year 1: Spring Semester",courses:[{id:"c23",text:"Learn static typing"}]}]},oe=function(){return Object(r.useContext)(ie)},de=function(e){var t=e.children,n=Object(Z.a)(re,ce),r=Object(d.a)(n,2),i=r[0],c=r[1],o=i.draggedItem,s=i.semesters;return Object(l.jsx)(ie.Provider,{value:{draggedItem:o,semesters:s,getCoursesBySemesterId:function(e){var t;return(null===(t=s.find((function(t){return t.id===e})))||void 0===t?void 0:t.courses)||[]},dispatch:c},children:t})},se=n(77),ae=function(e,t){return{type:"ADD_COURSE",payload:{text:e,semesterId:t}}},ue=function(e,t){return{type:"EDIT_SEMESTER",payload:{text:e,id:t}}},le=function(e){return{type:"SET_DRAGGED_ITEM",payload:e}},xe=function(e,t,n,r){return{type:"MOVE_COURSE",payload:{draggedItemId:e,hoveredItemId:t,sourceColumnId:n,targetColumnId:r}}},je=n(39),be=function(e){var t=oe().dispatch,n=Object(se.a)({type:e.type,item:function(){return t(le(e)),e},end:function(){return t(le(null))}}),i=Object(d.a)(n,3),c=i[1],o=i[2];return Object(r.useEffect)((function(){o(Object(je.a)(),{captureDraggingState:!0})}),[o]),{drag:c}},fe=n(78),pe=function(e,t,n,r){return Boolean(!r&&e&&e.type===t&&e.id===n)},Oe=function(e){var t=e.text,n=e.id,i=e.semesterId,c=e.isPreview,o=oe(),s=o.draggedItem,a=o.dispatch,u=Object(r.useRef)(null),x=be({type:"COURSECARD",id:n,text:t,semesterId:i}).drag,j=Object(fe.a)({accept:"COURSECARD",hover:function(){s&&"COURSECARD"===s.type&&s.id!==n&&a(xe(s.id,n,s.semesterId,i))}});return x((0,Object(d.a)(j,2)[1])(u)),Object(l.jsx)(G,{isHidden:pe(s,"COURSECARD",n,c),isPreview:c,ref:u,children:t})},ge=function(e){var t=e.onAdd,n=Object(r.useState)(""),i=Object(d.a)(n,2),c=i[0],o=i[1],s=W();return Object(l.jsxs)(z,{children:[Object(l.jsx)(V,{ref:s,value:c,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}),Object(l.jsx)(F,{onClick:function(){return t(c)},children:"Enter"})]})},me=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),i=n[0],c=n[1],o=e.onAdd,s=e.toggleButtonText;return i?Object(l.jsx)(ge,{onAdd:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){o(e),c(!1)}))}):Object(l.jsx)(N,{dark:!1,onClick:function(){return c(!0)},children:s})},he=n(73),Se=n(74),Ee=function(e){var t=e.text,n=e.id,i=e.isPreview,c=oe(),o=c.draggedItem,s=c.getCoursesBySemesterId,a=c.dispatch,u=s(n),x=Object(r.useRef)(null),j=Object(fe.a)({accept:["SEMESTER","COURSECARD"],hover:function(){if(o)if("SEMESTER"===o.type){if(o.id===n)return;if("0"===o.id)return;if("0"===n)return;a({type:"MOVE_SEMESTER",payload:{draggedId:o.id,hoverId:n}})}else{if(o.semesterId===n)return;if(u.length)return;a(xe(o.id,null,o.semesterId,n)),a(le(Object(X.a)(Object(X.a)({},o),{},{semesterId:n})))}}}),b=Object(d.a)(j,2)[1];return(0,be({type:"SEMESTER",id:n,text:t}).drag)(b(x)),"0"===n?Object(l.jsxs)(U,{isPreview:i,ref:x,isHidden:pe(o,"SEMESTER",n,i),children:[Object(l.jsxs)(he.a,{children:[Object(l.jsx)(P,{children:t}),Object(l.jsx)(Se.a,{children:Object(l.jsx)(me,{toggleButtonText:"Edit Title",onAdd:function(e){return a(ue(e,n))},dark:!0})})]}),u.map((function(e){return Object(l.jsx)(Oe,{id:e.id,semesterId:n,text:e.text},e.id)})),Object(l.jsx)(Y,{toggleButtonText:"+ Add another course",onAdd:function(e){return a(ae(e,n))},dark:!0})]}):Object(l.jsxs)(U,{isPreview:i,ref:x,isHidden:pe(o,"SEMESTER",n,i),children:[Object(l.jsxs)(he.a,{children:[Object(l.jsx)(P,{children:t}),Object(l.jsx)(Se.a,{children:Object(l.jsx)(me,{toggleButtonText:"Edit Title",onAdd:function(e){return a(ue(e,n))},dark:!0})}),Object(l.jsx)(Se.a,{children:Object(l.jsx)(g.a,{style:Ce.button,onClick:function(){return a(function(e){return{type:"DELETE_SEMESTER",payload:e}}(n))},children:"Delete"})})]}),u.map((function(e){return Object(l.jsx)(Oe,{id:e.id,semesterId:n,text:e.text},e.id)})),Object(l.jsx)(Y,{toggleButtonText:"+ Add another course",onAdd:function(e){return a(ae(e,n))},dark:!0})]})},Ce={button:{fontColor:"red",width:"70%",margin:"2px auto 10px",background:"red",borderRadius:"40px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:18}},ve=function(){var e=oe().draggedItem,t=Object(Q.a)((function(e){return{currentOffset:e.getSourceClientOffset()}})).currentOffset;return e&&t?Object(l.jsx)(J,{children:Object(l.jsx)(L,{position:t,children:"SEMESTER"===e.type?Object(l.jsx)(Ee,{id:e.id,text:e.text,isPreview:!0}):Object(l.jsx)(Oe,{semesterId:e.semesterId,isPreview:!0,id:e.id,text:e.text})})}):null};function ye(){var e=oe(),t=e.semesters,n=e.dispatch;return Object(l.jsxs)(_,{children:[Object(l.jsx)(ve,{}),t.map((function(e){return Object(l.jsx)(Ee,{id:e.id,text:e.text},e.id)})),";",Object(l.jsxs)(he.a,{children:[Object(l.jsx)(Y,{toggleButtonText:"+ Add another semester",onAdd:function(e){return n(function(e){return{type:"ADD_SEMESTER",payload:e}}(e))}}),Object(l.jsx)(g.a,{style:Ie.deleteButton,onClick:function(){return n({type:"DELETE_ALL_SEMESTERS"})},children:"Delete all semesters"})]})]})}var Ie={deleteButton:{backgroundColor:"red",margin:"10px -50px 110px 0px",bottom:"10",left:"0",width:"100%"}};function we(){return Object(l.jsx)("div",{style:Te.footer,children:Object(l.jsxs)("p",{children:["Made for CISC275 at the University of Delaware",Object(l.jsx)("br",{}),"\xa9 2021 Tyler Rust, Noah Trungold, James Wan"]})})}var Te={footer:{backgroundColor:"lightgreen",position:"fixed",margin:"0px 0px 0px 0px",bottom:"0",left:"0",width:"100%",height:"7%",padding:"0px 0px 0px 0px",boxSizing:"inherit"}};function ke(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})}var Re=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(x,{}),Object(l.jsx)(b,{}),Object(l.jsx)(m,{}),Object(l.jsx)(ye,{}),Object(l.jsx)(we,{}),Object(l.jsx)(ke,{})]})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),c(e),o(e)}))},De=n(76),Me=n(30);o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(De.a,{backend:Me.a,children:Object(l.jsx)(de,{children:Object(l.jsx)(Re,{})})})}),document.getElementById("root")),Ae()}},[[67,1,2]]]);
//# sourceMappingURL=main.6aec1e62.chunk.js.map