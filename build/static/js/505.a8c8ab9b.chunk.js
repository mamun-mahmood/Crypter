"use strict";(self.webpackChunkdunkswap_product=self.webpackChunkdunkswap_product||[]).push([[505],{3723:function(e,n,r){r.d(n,{d:function(){return f},f:function(){return s}});var t=r(3235),o=r(2791),i=r(3878),a=r(3426),u=r(6278),c=(0,o.createContext)(null);function l(){var e=(0,o.useContext)(c);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,l),n}return e}function s(){var e=(0,o.useState)([]),n=e[0],r=e[1];return[n.length>0?n.join(" "):void 0,(0,o.useMemo)((function(){return function(e){var n=(0,o.useCallback)((function(e){return r((function(n){return[].concat(n,[e])})),function(){return r((function(n){var r=n.slice(),t=r.indexOf(e);return-1!==t&&r.splice(t,1),r}))}}),[]),t=(0,o.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return o.createElement(c.Provider,{value:t},e.children)}}),[r])]}function f(e){var n=l(),r="headlessui-description-"+(0,u.M)();(0,a.e)((function(){return n.register(r)}),[r,n.register]);var o=e,c=(0,t.gY)({},n.props,{id:r});return(0,i.sY)({props:(0,t.gY)({},o,c),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}},2492:function(e,n,r){r.d(n,{r:function(){return m}});var t=r(3235),o=r(2791),i=r(3878),a=r(6462),u=r(5253),c=r(6935),l=r(6278),s=r(3723),f=r(106),p=r(3426),d=(0,o.createContext)(null);function v(){var e=(0,o.useContext)(d);if(null===e){var n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,v),n}return e}var g=(0,o.createContext)(null);g.displayName="GroupContext";var y=o.Fragment;function m(e){var n=e.checked,r=e.onChange,s=(0,t.gK)(e,["checked","onChange"]),p="headlessui-switch-"+(0,l.M)(),d=(0,o.useContext)(g),v=(0,o.useRef)(null),y=(0,a.T)(v,null===d?null:d.setSwitch),m=(0,o.useCallback)((function(){return r(!n)}),[r,n]),b=(0,o.useCallback)((function(e){if((0,c.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),m()}),[m]),h=(0,o.useCallback)((function(e){e.key!==u.R.Tab&&e.preventDefault(),e.key===u.R.Space&&m()}),[m]),D=(0,o.useCallback)((function(e){return e.preventDefault()}),[]),w=(0,o.useMemo)((function(){return{checked:n}}),[n]),k={id:p,ref:y,role:"switch",type:(0,f.f)(e,v),tabIndex:0,"aria-checked":n,"aria-labelledby":null==d?void 0:d.labelledby,"aria-describedby":null==d?void 0:d.describedby,onClick:b,onKeyUp:h,onKeyPress:D};return(0,i.sY)({props:(0,t.gY)({},s,k),slot:w,defaultTag:"button",name:"Switch"})}m.Group=function(e){var n=(0,o.useState)(null),r=n[0],t=n[1],a=function(){var e=(0,o.useState)([]),n=e[0],r=e[1];return[n.length>0?n.join(" "):void 0,(0,o.useMemo)((function(){return function(e){var n=(0,o.useCallback)((function(e){return r((function(n){return[].concat(n,[e])})),function(){return r((function(n){var r=n.slice(),t=r.indexOf(e);return-1!==t&&r.splice(t,1),r}))}}),[]),t=(0,o.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return o.createElement(d.Provider,{value:t},e.children)}}),[r])]}(),u=a[0],c=a[1],l=(0,s.f)(),f=l[0],p=l[1],v=(0,o.useMemo)((function(){return{switch:r,setSwitch:t,labelledby:u,describedby:f}}),[r,t,u,f]);return o.createElement(p,{name:"Switch.Description"},o.createElement(c,{name:"Switch.Label",props:{onClick:function(){r&&(r.click(),r.focus({preventScroll:!0}))}}},o.createElement(g.Provider,{value:v},(0,i.sY)({props:e,defaultTag:y,name:"Switch.Group"}))))},m.Label=function(e){var n=e.passive,r=void 0!==n&&n,o=(0,t.gK)(e,["passive"]),a=v(),u="headlessui-label-"+(0,l.M)();(0,p.e)((function(){return a.register(u)}),[u,a.register]);var c=(0,t.gY)({},a.props,{id:u}),s=(0,t.gY)({},o,c);return r&&delete s.onClick,(0,i.sY)({props:s,slot:a.slot||{},defaultTag:"label",name:a.name||"Label"})},m.Description=s.d},9998:function(e,n){n.Z=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),t=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?t.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},5532:function(e,n,r){r.d(n,{uI:function(){return ie}});var t=r(2791),o=r(2007),i=r.n(o);function a(e,n,r,t){return new(r||(r=Promise))((function(o,i){function a(e){try{c(t.next(e))}catch(n){i(n)}}function u(e){try{c(t.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,u)}c((t=t.apply(e,n||[])).next())}))}function u(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(u){i=[6,u],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}Object.create;function c(e,n){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,i=r.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)a.push(t.value)}catch(u){o={error:u}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}Object.create;var l=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function s(e,n){var r=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var r=n.split(".").pop().toLowerCase(),t=l.get(r);t&&Object.defineProperty(e,"type",{value:t,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var t=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof n?n:"string"===typeof t&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var f=[".DS_Store","Thumbs.db"];function p(e){return(null!==e.target&&e.target.files?g(e.target.files):[]).map((function(e){return s(e)}))}function d(e,n){return a(this,void 0,void 0,(function(){var r;return u(this,(function(t){switch(t.label){case 0:return e.items?(r=g(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,r]:[4,Promise.all(r.map(y))]):[3,2];case 1:return[2,v(m(t.sent()))];case 2:return[2,v(g(e.files).map((function(e){return s(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===f.indexOf(e.name)}))}function g(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];n.push(t)}return n}function y(e){if("function"!==typeof e.webkitGetAsEntry)return b(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?D(n):b(e)}function m(e){return e.reduce((function(e,n){return function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(c(arguments[n]));return e}(e,Array.isArray(n)?m(n):[n])}),[])}function b(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=s(n);return Promise.resolve(r)}function h(e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,e.isDirectory?D(e):w(e)]}))}))}function D(e){var n=e.createReader();return new Promise((function(e,r){var t=[];!function o(){var i=this;n.readEntries((function(n){return a(i,void 0,void 0,(function(){var i,a,c;return u(this,(function(u){switch(u.label){case 0:if(n.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(t)];case 2:return i=u.sent(),e(i),[3,4];case 3:return a=u.sent(),r(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(h)),t.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function w(e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,new Promise((function(n,r){e.file((function(r){var t=s(r,e.fullPath);n(t)}),(function(e){r(e)}))}))]}))}))}var k=r(9998);function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return O(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var S="file-invalid-type",F="file-too-large",E="file-too-small",x="too-many-files",A=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:S,message:"File type must be ".concat(n)}},j=function(e){return{code:F,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},P=function(e){return{code:E,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},T={code:x,message:"Too many files"};function R(e,n){var r="application/x-moz-file"===e.type||(0,k.Z)(e,n);return[r,r?null:A(n)]}function z(e,n,r){if(L(e.size))if(L(n)&&L(r)){if(e.size>r)return[!1,j(r)];if(e.size<n)return[!1,P(n)]}else{if(L(n)&&e.size<n)return[!1,P(n)];if(L(r)&&e.size>r)return[!1,j(r)]}return[!0,null]}function L(e){return void 0!==e&&null!==e}function I(e){var n=e.files,r=e.accept,t=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=C(R(e,r),1)[0],i=C(z(e,t,o),1)[0];return n&&i}))}function M(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function K(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Y(e){e.preventDefault()}function B(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function G(e){return-1!==e.indexOf("Edge/")}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return B(e)||G(e)}function $(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n.some((function(n){return!M(e)&&n&&n.apply(void 0,[e].concat(t)),M(e)}))}}var _=["children"],N=["open"],q=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],W=["refKey","onChange","onClick"];function Z(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||V(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,n)||V(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,n){if(e){if("string"===typeof e)return J(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,n):void 0}}function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function Q(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function X(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(r),!0).forEach((function(n){ee(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function ee(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ne(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var re=(0,t.forwardRef)((function(e,n){var r=e.children,o=ie(ne(e,_)),i=o.open,a=ne(o,N);return(0,t.useImperativeHandle)(n,(function(){return{open:i}}),[i]),t.createElement(t.Fragment,null,r(X(X({},a),{},{open:i})))}));re.displayName="Dropzone";var te={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,(r=e,r.dataTransfer&&e.dataTransfer?d(e.dataTransfer,e.type):p(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};re.defaultProps=te,re.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var oe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=X(X({},te),e),r=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,u=n.minSize,c=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,g=n.onDropRejected,y=n.onFileDialogCancel,m=n.onFileDialogOpen,b=n.preventDropOnDocument,h=n.noClick,D=n.noKeyboard,w=n.noDrag,k=n.noDragEventsBubbling,C=n.validator,O=(0,t.useRef)(null),S=(0,t.useRef)(null),F=(0,t.useReducer)(ae,oe),E=H(F,2),x=E[0],A=E[1],j=x.isFocused,P=x.isFileDialogActive,L=x.draggedFiles,B=(0,t.useCallback)((function(){S.current&&(A({type:"openDialog"}),"function"===typeof m&&m(),S.current.value=null,S.current.click())}),[A,m]),G=function(){P&&setTimeout((function(){S.current&&(S.current.files.length||(A({type:"closeDialog"}),"function"===typeof y&&y()))}),300)};(0,t.useEffect)((function(){return window.addEventListener("focus",G,!1),function(){window.removeEventListener("focus",G,!1)}}),[S,P,y]);var _=(0,t.useCallback)((function(e){O.current&&O.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),B()))}),[O,S,B]),N=(0,t.useCallback)((function(){A({type:"focus"})}),[]),V=(0,t.useCallback)((function(){A({type:"blur"})}),[]),J=(0,t.useCallback)((function(){h||(U()?setTimeout(B,0):B())}),[S,h,B]),Q=(0,t.useRef)([]),re=function(e){O.current&&O.current.contains(e.target)||(e.preventDefault(),Q.current=[])};(0,t.useEffect)((function(){return b&&(document.addEventListener("dragover",Y,!1),document.addEventListener("drop",re,!1)),function(){b&&(document.removeEventListener("dragover",Y),document.removeEventListener("drop",re))}}),[O,b]);var ie=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),de(e),Q.current=[].concat(Z(Q.current),[e.target]),K(e)&&Promise.resolve(i(e)).then((function(n){M(e)&&!k||(A({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,k]),ue=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),de(e);var n=K(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return n&&p&&p(e),!1}),[p,k]),ce=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),de(e);var n=Q.current.filter((function(e){return O.current&&O.current.contains(e)})),r=n.indexOf(e.target);-1!==r&&n.splice(r,1),Q.current=n,n.length>0||(A({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),K(e)&&f&&f(e))}),[O,f,k]),le=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),de(e),Q.current=[],K(e)&&Promise.resolve(i(e)).then((function(n){if(!M(e)||k){var t=[],o=[];n.forEach((function(e){var n=H(R(e,r),2),i=n[0],c=n[1],l=H(z(e,u,a),2),s=l[0],f=l[1],p=C?C(e):null;if(i&&s&&!p)t.push(e);else{var d=[c,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!c&&t.length>1||c&&l>=1&&t.length>l)&&(t.forEach((function(e){o.push({file:e,errors:[T]})})),t.splice(0)),A({acceptedFiles:t,fileRejections:o,type:"setFiles"}),d&&d(t,o,e),o.length>0&&g&&g(o,e),t.length>0&&v&&v(t,e)}})),A({type:"reset"})}),[c,r,u,a,l,i,d,v,g,k,C]),se=function(e){return o?null:e},fe=function(e){return D?null:se(e)},pe=function(e){return w?null:se(e)},de=function(e){k&&e.stopPropagation()},ve=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,t=e.onKeyDown,i=e.onFocus,a=e.onBlur,u=e.onClick,c=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=ne(e,q);return X(X(ee({onKeyDown:fe($(t,_)),onFocus:fe($(i,N)),onBlur:fe($(a,V)),onClick:se($(u,J)),onDragEnter:pe($(c,ie)),onDragOver:pe($(l,ue)),onDragLeave:pe($(s,ce)),onDrop:pe($(f,le))},r,O),o||D?{}:{tabIndex:0}),p)}}),[O,_,N,V,J,ie,ue,ce,le,D,w,o]),ge=(0,t.useCallback)((function(e){e.stopPropagation()}),[]),ye=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=ne(e,W),u=ee({accept:r,multiple:c,type:"file",style:{display:"none"},onChange:se($(o,le)),onClick:se($(i,ge)),autoComplete:"off",tabIndex:-1},t,S);return X(X({},u),a)}}),[S,r,c,le,o]),me=L.length,be=me>0&&I({files:L,accept:r,minSize:u,maxSize:a,multiple:c,maxFiles:l}),he=me>0&&!be;return X(X({},x),{},{isDragAccept:be,isDragReject:he,isFocused:j&&!o,getRootProps:ve,getInputProps:ye,rootRef:O,inputRef:S,open:se(B)})}function ae(e,n){switch(n.type){case"focus":return X(X({},e),{},{isFocused:!0});case"blur":return X(X({},e),{},{isFocused:!1});case"openDialog":return X(X({},e),{},{isFileDialogActive:!0});case"closeDialog":return X(X({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=n.isDragActive,t=n.draggedFiles;return X(X({},e),{},{draggedFiles:t,isDragActive:r});case"setFiles":return X(X({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return X({},oe);default:return e}}},2005:function(e,n,r){r.d(n,{x0:function(){return t}});var t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",r=crypto.getRandomValues(new Uint8Array(e));e--;){var t=63&r[e];n+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return n}}}]);
//# sourceMappingURL=505.a8c8ab9b.chunk.js.map