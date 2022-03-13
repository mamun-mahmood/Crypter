"use strict";(self.webpackChunkdunkswap_product=self.webpackChunkdunkswap_product||[]).push([[171],{2907:function(e,t,n){var r=n(6128),i=n(4806),a=n(184);t.Z=function(){return(0,a.jsx)("div",{className:"fixed bottom-0 left-0 right-0 flex items-center justify-center top-9 bg-black/50",children:(0,a.jsx)(i.Z,{icon:r.X_,className:"animate-spin-loader fill-white  w-[50px] h-[50px]"})})}},5662:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(4675),i=n(8125),a=n(885),l=n(2791),o=n(2506),u=n(5239),s=n(6283),c=n(5410),d=n(4402),p=n(6871),f=n(2907),m=n(184),h={label:"",description:"",tags:[],properties:[],royalties:!1,royaltyPercentage:30,unlockable:!1,unlockableContent:"",isCollaboration:!1,collaborationPartner:{walletAddress:"",percentage:30},isPhysical:!0},b=u.Ry().shape({label:u.Z_().required("Label is required"),description:u.Z_().required("Description is required"),tags:u.IX().of(u.Z_()),properties:u.IX().of(u.Ry().shape({id:u.Z_(),type:u.Z_(),value:u.Z_()})),royalties:u.O7(),royaltyPercentage:u.Rx().when("royalties",{is:!0,then:u.Rx().required("Required")}),unlockable:u.O7(),unlockableContent:u.Z_().when("unlockable",{is:!0,then:u.Z_().required("Required")}),isCollaboration:u.O7(),collaborationPartner:u.Ry().when("isCollaboration",{is:!0,then:u.Ry().shape({walletAddress:u.Z_().required("Required"),percentage:u.Rx().required("Required")}).required("Required")}),isPhysical:u.O7()}),v=function(){var e=(0,l.useState)(!1),t=(0,a.Z)(e,2),n=t[0],r=t[1],i=(0,p.s0)(),u=(0,o.TA)({initialValues:h,validationSchema:b,onSubmit:function(e){console.log(e),r(!0),setTimeout((function(){r(!1),i("/view-item")}),2e3)}});return(0,l.useEffect)((function(){u.setValues({label:"The amazing art",description:"The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped.",tags:["NIKE","AIR MAX 97","SHOES"],properties:[{id:"1",type:"Brand",value:"Nike"},{id:"2",type:"Modal",value:"Air Max 97"},{id:"3",type:"Size",value:"US 10.5"},{id:"4",type:"Atomic Number",value:85}],royalties:!1,royaltyPercentage:30,unlockable:!0,unlockableContent:"https://www.privatelink.com",isCollaboration:!1,collaborationPartner:{walletAddress:"",percentage:30},isPhysical:!1})}),[]),(0,m.jsxs)("section",{className:"space-y-12 ",children:[(0,m.jsx)(s.Z,{formik:u,index:1,edit:!0}),(0,m.jsx)(c.Z,{formik:u,index:2,edit:!0}),(0,m.jsx)(d.Z,{formik:u,index:3,edit:!0}),(0,m.jsx)("div",{className:"flex justify-center w-full ",children:(0,m.jsx)("button",{type:"button",className:"w-48 px-6 py-4 font-medium leading-4 text-white rounded-md bg-blue-dark font-madeOuterSans",onClick:u.submitForm,children:"Update"})}),n&&(0,m.jsx)(f.Z,{})]})},x=function(){return(0,m.jsxs)("div",{className:"relative w-full h-full",children:[(0,m.jsx)(i.Z,{}),(0,m.jsx)("div",{className:"flex justify-center",children:(0,m.jsxs)("div",{className:"w-full max-w-sm px-4 my-40 md:max-w-lg lg:max-w-2xl xl:max-w-4xl",children:[(0,m.jsx)("h1",{className:"text-5xl font-madeOuterSans",children:"Edit Collectible"}),(0,m.jsx)(v,{})]})}),(0,m.jsx)(r.Z,{})]})}},3723:function(e,t,n){n.d(t,{d:function(){return d},f:function(){return c}});var r=n(3235),i=n(2791),a=n(3878),l=n(3426),o=n(6278),u=(0,i.createContext)(null);function s(){var e=(0,i.useContext)(u);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,s),t}return e}function c(){var e=(0,i.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,(0,i.useMemo)((function(){return function(e){var t=(0,i.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=(0,i.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return i.createElement(u.Provider,{value:r},e.children)}}),[n])]}function d(e){var t=s(),n="headlessui-description-"+(0,o.M)();(0,l.e)((function(){return t.register(n)}),[n,t.register]);var i=e,u=(0,r.gY)({},t.props,{id:n});return(0,a.sY)({props:(0,r.gY)({},i,u),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}},2492:function(e,t,n){n.d(t,{r:function(){return v}});var r=n(3235),i=n(2791),a=n(3878),l=n(6462),o=n(5253),u=n(6935),s=n(6278),c=n(3723),d=n(106),p=n(3426),f=(0,i.createContext)(null);function m(){var e=(0,i.useContext)(f);if(null===e){var t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,m),t}return e}var h=(0,i.createContext)(null);h.displayName="GroupContext";var b=i.Fragment;function v(e){var t=e.checked,n=e.onChange,c=(0,r.gK)(e,["checked","onChange"]),p="headlessui-switch-"+(0,s.M)(),f=(0,i.useContext)(h),m=(0,i.useRef)(null),b=(0,l.T)(m,null===f?null:f.setSwitch),v=(0,i.useCallback)((function(){return n(!t)}),[n,t]),x=(0,i.useCallback)((function(e){if((0,u.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),v()}),[v]),g=(0,i.useCallback)((function(e){e.key!==o.R.Tab&&e.preventDefault(),e.key===o.R.Space&&v()}),[v]),y=(0,i.useCallback)((function(e){return e.preventDefault()}),[]),k=(0,i.useMemo)((function(){return{checked:t}}),[t]),w={id:p,ref:b,role:"switch",type:(0,d.f)(e,m),tabIndex:0,"aria-checked":t,"aria-labelledby":null==f?void 0:f.labelledby,"aria-describedby":null==f?void 0:f.describedby,onClick:x,onKeyUp:g,onKeyPress:y};return(0,a.sY)({props:(0,r.gY)({},c,w),slot:k,defaultTag:"button",name:"Switch"})}v.Group=function(e){var t=(0,i.useState)(null),n=t[0],r=t[1],l=function(){var e=(0,i.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,(0,i.useMemo)((function(){return function(e){var t=(0,i.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=(0,i.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return i.createElement(f.Provider,{value:r},e.children)}}),[n])]}(),o=l[0],u=l[1],s=(0,c.f)(),d=s[0],p=s[1],m=(0,i.useMemo)((function(){return{switch:n,setSwitch:r,labelledby:o,describedby:d}}),[n,r,o,d]);return i.createElement(p,{name:"Switch.Description"},i.createElement(u,{name:"Switch.Label",props:{onClick:function(){n&&(n.click(),n.focus({preventScroll:!0}))}}},i.createElement(h.Provider,{value:m},(0,a.sY)({props:e,defaultTag:b,name:"Switch.Group"}))))},v.Label=function(e){var t=e.passive,n=void 0!==t&&t,i=(0,r.gK)(e,["passive"]),l=m(),o="headlessui-label-"+(0,s.M)();(0,p.e)((function(){return l.register(o)}),[o,l.register]);var u=(0,r.gY)({},l.props,{id:o}),c=(0,r.gY)({},i,u);return n&&delete c.onClick,(0,a.sY)({props:c,slot:l.slot||{},defaultTag:"label",name:l.name||"Label"})},v.Description=c.d},2005:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}}}]);
//# sourceMappingURL=171.532e7730.chunk.js.map