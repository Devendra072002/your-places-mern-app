"use strict";(self.webpackChunkmern_project=self.webpackChunkmern_project||[]).push([[684],{6925:function(e,t,n){n.r(t);var r=n(4165),i=n(5861),a=n(885),l=n(2791),u=n(4880),c=n(2810),o=n(3999),s=n(3373),d=n(291),p=n(5094),f=n(9508),v=(n(8055),n(9895)),h=n(5434),y=n(3108),m=n(184);t.default=function(){var e=(0,f.x)(),t=e.isLoading,n=e.error,x=e.sendRequest,Z=e.clearError,V=(0,l.useState)(),b=(0,a.Z)(V,2),T=b[0],j=b[1],C=(0,u.UO)().placeId,I=(0,u.k6)(),A=(0,l.useContext)(y.V),E=(0,p.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),N=(0,a.Z)(E,3),w=N[0],k=N[1],g=N[2];(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("".concat("https://yourplaces-backend-production-3612.up.railway.app/api","/places/").concat(C));case 3:t=e.sent,j(t.place),g({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[x,C,g]);var S=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x("".concat("https://yourplaces-backend-production-3612.up.railway.app/api","/places/").concat(C),"PATCH",JSON.stringify({title:w.inputs.title.value,description:w.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+A.token});case 4:I.push("/".concat(A.userId,"/places")),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return t?(0,m.jsx)("div",{className:"center",children:(0,m.jsx)(v.Z,{asOverlay:!0})}):T||n?(0,m.jsxs)(l.Fragment,{children:[(0,m.jsx)(h.Z,{error:n,onClear:Z}),!t&&T&&(0,m.jsxs)("form",{className:"place-form",onSubmit:S,children:[(0,m.jsx)(c.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,d.hg)()],errorText:"Place enter a valid title.",onInput:k,initialValue:T.title,initialValid:!0}),(0,m.jsx)(c.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,d.CP)(5)],errorText:"Place enter a valid description (min. 5 characters).",onInput:k,initialValue:T.description,initialValid:!0}),(0,m.jsx)(o.Z,{type:"submit",disabled:!w.isValid,children:"UPDATE PLACE"})]})]}):(0,m.jsx)("div",{className:"center",children:(0,m.jsx)(s.Z,{children:(0,m.jsx)("h2",{children:"Could not find place!"})})})}},2810:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(885),i=n(1413),a=n(2791),l=n(291),u=n(184),c=function(e,t){switch(t.type){case"CHANGE":return(0,i.Z)((0,i.Z)({},e),{},{value:t.val,isValid:(0,l.Gu)(t.val,t.validators)});case"TOUCH":return(0,i.Z)((0,i.Z)({},e),{},{isTouched:!0});default:return e}},o=function(e){var t=(0,a.useReducer)(c,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=(0,r.Z)(t,2),i=n[0],l=n[1],o=e.id,s=e.onInput,d=i.value,p=i.isValid;(0,a.useEffect)((function(){s(o,d,p)}),[o,d,p,s]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},h="input"===e.element?(0,u.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:i.value}):(0,u.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:i.value});return(0,u.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[(0,u.jsx)("label",{htmlFor:e.id,children:e.label}),h,!i.isValid&&i.isTouched&&(0,u.jsx)("p",{children:e.errorText})]})}},3373:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var r=n(184),i=function(e){return(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},5094:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(885),i=n(2167),a=n(1413),l=n(2791),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return(0,a.Z)((0,a.Z)({},e),{},{inputs:(0,a.Z)((0,a.Z)({},e.inputs),{},(0,i.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},c=function(e,t){var n=(0,l.useReducer)(u,{inputs:e,isValid:t}),i=(0,r.Z)(n,2),a=i[0],c=i[1];return[a,(0,l.useCallback)((function(e,t,n){c({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,l.useCallback)((function(e,t){c({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},291:function(e,t,n){n.d(t,{Ox:function(){return s},CP:function(){return o},hg:function(){return c},Gu:function(){return d}});var r=n(8192);var i="REQUIRE",a="MINLENGTH",l="MAXLENGTH",u="EMAIL",c=function(){return{type:i}},o=function(e){return{type:a,val:e}},s=function(){return{type:u}},d=function(e,t){var n,c=!0,o=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,l=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw l}}}}(t);try{for(o.s();!(n=o.n()).done;){var s=n.value;s.type===i&&(c=c&&e.trim().length>0),s.type===a&&(c=c&&e.trim().length>=s.val),s.type===l&&(c=c&&e.trim().length<=s.val),"MIN"===s.type&&(c=c&&+e>=s.val),"MAX"===s.type&&(c=c&&+e<=s.val),s.type===u&&(c=c&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){o.e(d)}finally{o.f()}return c}},8055:function(){}}]);
//# sourceMappingURL=684.a1d86dc0.chunk.js.map