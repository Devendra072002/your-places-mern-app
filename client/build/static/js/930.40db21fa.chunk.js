"use strict";(self.webpackChunkmern_project=self.webpackChunkmern_project||[]).push([[930],{3373:function(e,n,s){s.d(n,{Z:function(){return t}});s(2791);var r=s(184),t=function(e){return(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},6542:function(e,n,s){s.r(n),s.d(n,{default:function(){return p}});var r=s(4165),t=s(5861),a=s(885),c=s(2791),i=s(1523),l=s(184),u=function(e){return(0,l.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:(0,l.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})},d=s(3373),o=s(5530),m=function(e){return(0,l.jsx)("li",{className:"user-item",children:(0,l.jsx)(d.Z,{className:"user-item__content",children:(0,l.jsxs)(i.rU,{to:"/".concat(e.id,"/places"),children:[(0,l.jsx)("div",{className:"user-item__image",children:(0,l.jsx)(u,{image:"".concat(o.Z,"/").concat(e.image),alt:e.name})}),(0,l.jsxs)("div",{className:"user-item__info",children:[(0,l.jsx)("h2",{children:e.name}),(0,l.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})})},h=function(e){return 0===e.items.length?(0,l.jsx)("div",{className:"center",children:(0,l.jsx)(d.Z,{children:(0,l.jsx)("h2",{children:"No users found."})})}):(0,l.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return(0,l.jsx)(m,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)}))})},x=s(5434),f=s(9895),j=s(9508),p=function(){var e=(0,j.x)(),n=e.isLoading,s=e.error,i=e.sendRequest,u=e.clearError,d=(0,c.useState)(),m=(0,a.Z)(d,2),p=m[0],v=m[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(o.Z+"/api/users");case 3:n=e.sent,v(n.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]),(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(x.Z,{error:s,onClear:u}),n&&(0,l.jsx)("div",{className:"center",children:(0,l.jsx)(f.Z,{asOverlay:!0})}),!n&&p&&(0,l.jsx)(h,{items:p})]})}}}]);
//# sourceMappingURL=930.40db21fa.chunk.js.map