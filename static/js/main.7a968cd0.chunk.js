(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{55:function(t,e,n){},56:function(t,e,n){},59:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),c=n(12),o=n.n(c),a=(n(55),n(56),n(57),n(1));function d(){return Object(a.jsx)("div",{style:s.welcome,children:Object(a.jsx)("p",{children:"UD CIS Scheduler"})})}var s={welcome:{width:"80%",padding:"0px 0px",margin:"50px auto",background:"white",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:30}},u=n(41),l=n.n(u);function b(){return Object(a.jsxs)("div",{style:j.dropdown,children:[Object(a.jsx)("h3",{children:"Major Selector"}),Object(a.jsx)(l.a,{options:["BS CS","BS w/AI Concentration","BS w/Bioinformatics Concentration","BS w/Cybersecurity Concentration","BS w/Data Science Concentration","BS w/High Performance Computing Concentration","BS w/Systems and Networks Concentration","BS w/Theory and Computation Concentration"],value:"Click Here.",placeholder:"Select an option"})]})}var j={dropdown:{width:"40%",margin:"10px auto",background:"tan",borderRadius:"111px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:20,border:"10px solid black"}},f=(n(59),n(5)),x=n(36),p=n(42),O=n(27);n(60);function g(){var t=Object(r.useState)(!1),e=Object(f.a)(t,2),n=e[0],i=e[1];return Object(a.jsx)("div",{style:h.popup,children:Object(a.jsx)(p.a,{position:"top-end",className:"m-3",children:Object(a.jsxs)(x.a,{show:!n,onClose:function(){return i(!n)},children:[Object(a.jsx)(O.a,{children:Object(a.jsx)("strong",{className:"me-auto",children:"Welcome to the UD CIS Scheduler!"})}),Object(a.jsx)(x.a.Body,{children:"Please select a major to get started. Required courses will populate for you to build a schedule."})]})})})}var h={popup:{color:"blue"}};function m(){return Object(a.jsxs)("div",{style:B.footer,children:[Object(a.jsx)("p",{children:"Made for CISC275 at the University of Delaware"}),Object(a.jsx)("p",{children:"\xa9 2021 Tyler Rust, Noah Trungold, James Wan"})]})}var v,y,C,I,w,S,k,D,A,T,L,B={footer:{backgroundColor:"Cyan",position:"fixed",bottom:"0",left:"0",width:"100%"}},E=n(10),_=n(11),M=_.a.div(v||(v=Object(E.a)(["\n    align-items: flex-start;\n    background-color: #3179ba;\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    padding: 20px;\n    width: 100%;\n"]))),R=_.a.div(y||(y=Object(E.a)(["\npadding: 6px 16px 12px;\nfont-weight: bold;\n"]))),P=_.a.div(C||(C=Object(E.a)(["\n    transform: ",";\n    opacity: ",";\n"])),(function(t){return t.isPreview?"rotate(5deg)":void 0}),(function(t){return t.isHidden?0:1})),N=_.a.div.attrs((function(t){var e=t.position,n=e.x,r=e.y;return{style:{transform:"translate(".concat(n,"px, ").concat(r,"px)")}}}))(I||(I=Object(E.a)([""]))),U=Object(_.a)(P)(w||(w=Object(E.a)(["\n    background-color: #ebecf0;\n    width: 300px;\n    min-height: 40px;\n    margin-right: 20px;\n    border-radius: 3px;\n    padding: 8px 8px;\n    flex-grow: 0;\n"]))),H=Object(_.a)(P)(S||(S=Object(E.a)(["\n    background-color: #fff;\n    cursor: pointer;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    max-width: 300px;\n    border-radius: 3px;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n"]))),K=_.a.button(k||(k=Object(E.a)(["\n    background-color: #ffffff3d;\n    border-radius: 3px;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    max-width: 300px;\n    padding: 10px 12px;\n    text-align: left;\n    transition: background 85ms ease-in;\n    width: 100%;\n    &:hover {\n    background-color: #ffffff52;\n    }\n"])),(function(t){return t.dark?"#000":"#fff"})),F=_.a.div(D||(D=Object(E.a)(["\n    max-width: 300px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: flex-start;\n"]))),G=_.a.button(A||(A=Object(E.a)(["\n    background-color: #5aac44;\n    border-radius: 3px;\n    border: none;\n    box-shadow: none;\n    color: #fff;\n    padding: 6px 12px;\n    text-align: center;\n"]))),V=_.a.input(T||(T=Object(E.a)(["\n    border-radius: 3px;\n    border: none;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    width: 100%;\n"]))),X=_.a.div(L||(L=Object(E.a)(["\n    height: 100%;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n"]))),z=function(t){var e=t.onAdd,n=Object(r.useState)(""),i=Object(f.a)(n,2),c=i[0],o=i[1],d=function(){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.focus()}),[]),t}();return Object(a.jsxs)(F,{children:[Object(a.jsx)(V,{ref:d,value:c,onChange:function(t){return o(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&e(c)}}),Object(a.jsx)(G,{onClick:function(){return e(c)},children:"Create"})]})},J=function(t){var e=Object(r.useState)(!1),n=Object(f.a)(e,2),i=n[0],c=n[1],o=t.onAdd,d=t.toggleButtonText,s=t.dark;return i?Object(a.jsx)(z,{onAdd:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){o(t),c(!1)}))}):Object(a.jsx)(K,{dark:s,onClick:function(){return c(!0)},children:d})},W=n(74),Y=n(3),q=n(50),Q=n(78),Z=n(37),$=n(19),tt=function(t,e){return t.findIndex((function(t){return t.id===e}))},et=function(t,e,n){var r=t[e];return function(t,e,n){return[].concat(Object($.a)(t.slice(0,n)),[e],Object($.a)(t.slice(n)))}(function(t,e){return[].concat(Object($.a)(t.slice(0,e)),Object($.a)(t.slice(e+1)))}(t,e),r,n)};var nt=function(t,e){switch(e.type){case"SET_DRAGGED_ITEM":t.draggedItem=e.payload;break;case"ADD_LIST":var n=Object(Z.a)();t.lists.push({id:n,text:e.payload,button:Object(a.jsx)(Q.a,{onClick:function(){return t.lists=t.lists.filter((function(t){return t.id}))},children:"X"}),courses:[]});break;case"ADD_TASK":var r=e.payload,i=r.text,c=r.listId,o=tt(t.lists,c);t.lists[o].courses.push({id:Object(Z.a)(),text:i});break;case"DELETE_ALL_LISTS":alert("wtf");break;case"MOVE_LIST":var d=e.payload,s=d.draggedId,u=d.hoverId,l=tt(t.lists,s),b=tt(t.lists,u);t.lists=et(t.lists,l,b);break;case"MOVE_TASK":var j=e.payload,f=j.draggedItemId,x=j.hoveredItemId,p=j.sourceColumnId,O=j.targetColumnId,g=tt(t.lists,p),h=tt(t.lists,O),m=tt(t.lists[g].courses,f),v=x?tt(t.lists[h].courses,x):0,y=t.lists[g].courses[m];t.lists[g].courses.splice(m,1),t.lists[h].courses.splice(v,0,y)}},rt=Object(r.createContext)({});function it(t){var e=ct.lists.filter((function(e){return e.id!==t}));ct.lists=e}var ct={draggedItem:null,lists:[{id:"0",text:"Course List",button:Object(a.jsx)(Q.a,{onClick:function(){return it("0")},children:"X"}),courses:[{id:"c0",text:"Cisc 106"},{id:"c1",text:"Cisc108"}]},{id:"1",text:"Year 1: Semester 1",button:Object(a.jsx)(Q.a,{onClick:function(){return it("1")},children:"X"}),courses:[{id:"c2",text:"Learn Typescript"}]},{id:"2",text:"Year 1: Semester 2",button:Object(a.jsx)(Q.a,{onClick:function(){return it("2")},children:"X"}),courses:[{id:"c3",text:"Begin to use static typing"}]}]},ot=function(){return Object(r.useContext)(rt)},at=function(t){var e=t.children,n=Object(q.a)(nt,ct),r=Object(f.a)(n,2),i=r[0],c=r[1],o=i.draggedItem,d=i.lists;return Object(a.jsx)(rt.Provider,{value:{draggedItem:o,lists:d,getCoursesByListId:function(t){var e;return(null===(e=d.find((function(e){return e.id===t})))||void 0===e?void 0:e.courses)||[]},dispatch:c},children:e})},dt=n(76),st=function(t){return{type:"SET_DRAGGED_ITEM",payload:t}},ut=function(t,e,n,r){return{type:"MOVE_TASK",payload:{draggedItemId:t,hoveredItemId:e,sourceColumnId:n,targetColumnId:r}}},lt=n(39),bt=function(t){var e=ot().dispatch,n=Object(dt.a)({type:t.type,item:function(){return e(st(t)),t},end:function(){return e(st(null))}}),i=Object(f.a)(n,3),c=i[1],o=i[2];return Object(r.useEffect)((function(){o(Object(lt.a)(),{captureDraggingState:!0})}),[o]),{drag:c}},jt=n(77),ft=function(t,e,n,r){return Boolean(!r&&t&&t.type===e&&t.id===n)},xt=function(t){var e=t.text,n=t.id,i=t.columnId,c=t.isPreview,o=ot(),d=o.draggedItem,s=o.dispatch,u=Object(r.useRef)(null),l=bt({type:"CARD",id:n,text:e,columnId:i}).drag,b=Object(jt.a)({accept:"CARD",hover:function(){d&&"CARD"===d.type&&d.id!==n&&s(ut(d.id,n,d.columnId,i))}});return l((0,Object(f.a)(b,2)[1])(u)),Object(a.jsx)(H,{isHidden:ft(d,"CARD",n,c),isPreview:c,ref:u,children:e})},pt=n(73),Ot=function(t){var e=t.text,n=t.id,i=t.button,c=t.isPreview,o=ot(),d=o.draggedItem,s=o.getCoursesByListId,u=o.dispatch,l=s(n),b=Object(r.useRef)(null),j=Object(jt.a)({accept:["COLUMN","CARD"],hover:function(){if(d)if("COLUMN"===d.type){if(d.id===n)return;u({type:"MOVE_LIST",payload:{draggedId:d.id,hoverId:n}})}else{if(d.columnId===n)return;if(l.length)return;u(ut(d.id,null,d.columnId,n)),u(st(Object(Y.a)(Object(Y.a)({},d),{},{columnId:n})))}}}),x=Object(f.a)(j,2)[1];return(0,bt({type:"COLUMN",id:n,button:i,text:e}).drag)(x(b)),Object(a.jsxs)(U,{isPreview:c,ref:b,isHidden:ft(d,"COLUMN",n,c),children:[Object(a.jsx)(pt.a,{children:Object(a.jsx)(R,{children:[e,i]})}),l.map((function(t){return Object(a.jsx)(xt,{id:t.id,columnId:n,text:t.text},t.id)})),Object(a.jsx)(J,{toggleButtonText:"+ Add another card",onAdd:function(t){return u(function(t,e){return{type:"ADD_TASK",payload:{text:t,listId:e}}}(t,n))},dark:!0})]})},gt=function(){var t=ot().draggedItem,e=Object(W.a)((function(t){return{currentOffset:t.getSourceClientOffset()}})).currentOffset;return t&&e?Object(a.jsx)(X,{children:Object(a.jsx)(N,{position:e,children:"COLUMN"===t.type?Object(a.jsx)(Ot,{id:t.id,text:t.text,button:t.button,isPreview:!0}):Object(a.jsx)(xt,{columnId:t.columnId,isPreview:!0,id:t.id,text:t.text})})}):null},ht=function(t){var e=t.toggleButtonText,n=t.dark;return Object(a.jsx)(K,{dark:n,onClick:function(){return ct.lists.splice(1)},children:e})};function mt(){var t=ot(),e=t.lists,n=t.dispatch,r=e.map((function(t){return Object(a.jsx)(Ot,{id:t.id,text:t.text,button:t.button},t.id)}));return Object(a.jsxs)(M,{children:[Object(a.jsx)(gt,{}),r,Object(a.jsxs)(pt.a,{children:[Object(a.jsx)(J,{toggleButtonText:"+ Add another list",onAdd:function(t){return n(function(t){return{type:"ADD_LIST",payload:t}}(t))}}),Object(a.jsx)(ht,{toggleButtonText:"Delete all semesters",onAdd:function(){return n({type:"DELETE_ALL_LISTS"})}})]})]})}var vt=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(g,{}),Object(a.jsx)(d,{}),Object(a.jsx)(b,{}),Object(a.jsx)(mt,{}),Object(a.jsx)(m,{})]})},yt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),i(t),c(t),o(t)}))},Ct=n(75),It=n(31);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Ct.a,{backend:It.a,children:Object(a.jsx)(at,{children:Object(a.jsx)(vt,{})})})}),document.getElementById("root")),yt()}},[[67,1,2]]]);
//# sourceMappingURL=main.7a968cd0.chunk.js.map