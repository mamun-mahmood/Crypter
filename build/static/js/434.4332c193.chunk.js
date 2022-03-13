"use strict";(self.webpackChunkdunkswap_product=self.webpackChunkdunkswap_product||[]).push([[434],{4675:function(e,s,t){var a=t(6128),r=t(4806),l=t(6871),n=t(184);s.Z=function(){var e=(0,l.s0)();return(0,n.jsx)("footer",{className:"flex justify-center w-full border-t border-gray-100 bg-gray-100/30",children:(0,n.jsxs)("div",{className:"w-full max-w-xs px-8 lg:max-w-6xl md:max-w-xl ",children:[(0,n.jsxs)("div",{className:"flex flex-wrap py-12 gap-y-12",children:[(0,n.jsxs)("div",{className:"flex items-center justify-start w-full lg:w-1/2",children:[(0,n.jsxs)("div",{className:"relative flex items-center justify-center ",children:[(0,n.jsx)(r.Z,{icon:a.B4,className:"absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"}),(0,n.jsx)(r.Z,{icon:a.$r,className:"animate-spin-slow "})]}),(0,n.jsx)("h2",{className:"ml-6 text-2xl text-gray-900 lg:mr-20 md:ml-10 ",children:"The New Sneaker Economy."})]}),(0,n.jsxs)("div",{className:"flex w-full lg:w-1/2 ",children:[(0,n.jsxs)("div",{className:"w-full md:w-1/2",children:[(0,n.jsx)("h4",{className:"font-medium text-text-gray-900",children:"Marketplace"}),(0,n.jsxs)("div",{className:"flex flex-col mt-10 space-y-6 text-sm font-medium leading-4 text-gray-600",children:[(0,n.jsx)("button",{className:"text-left ",onClick:function(){return e("/discover")},children:"Discover"}),(0,n.jsx)("button",{className:"text-left ",onClick:function(){return e("/activity")},children:"Activity"}),(0,n.jsx)("button",{className:"text-left ",onClick:function(){return e("/discover")},children:"Mint DUNKS"})]})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/2",children:[(0,n.jsx)("h4",{className:"font-medium text-text-gray-900",children:"Support"}),(0,n.jsxs)("div",{className:"flex flex-col mt-10 space-y-6 text-sm font-medium leading-4 text-gray-600",children:[(0,n.jsx)("button",{className:"text-left ",children:"Privacy Policy"}),(0,n.jsx)("button",{className:"text-left ",children:"Terms of Service"}),(0,n.jsx)("button",{className:"text-left ",children:"Contact Us"})]})]})]})]}),(0,n.jsx)("div",{className:"w-full h-px bg-gray-300"}),(0,n.jsxs)("div",{className:"flex flex-col-reverse justify-between py-8 text-xs leading-5 md:flex-row",children:[(0,n.jsx)("span",{className:"text-gray-500",children:"\xa9 2021 - DunkSwap ,Inc"}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("p",{className:"text-gray-900 ",children:"We use \ud83c\udf6a for better service. Please"}),(0,n.jsx)("button",{className:"ml-1 font-semibold text-blue-light",children:"Allow"})]})]})]})})}},7965:function(e,s,t){t.r(s),t.d(s,{default:function(){return N}});var a=t(8125),r=t(4675),l=t(2261),n=t(2791),c=t(6660),i=t(8683),d=t(1358),o=t(6128),u=t(4806),x=t(184),m=[{events:"Transfer",unitPrice:"",quantity:"01",from:"TheAtomicHeroes",to:"34DFF6",date:"18 days ago"},{events:"Purchased",unitPrice:"0.257",quantity:"01",from:"TheAtomicHeroes",to:"34DFF6",date:"18 days ago"},{events:"Listed",unitPrice:"0.257",quantity:"01",from:"TheAtomicHeroes",to:"",date:"18 days ago"},{events:"Mint",unitPrice:"",quantity:"01",from:"NullAddress",to:"",date:"18 days ago"}],f=[{Header:"Events",accessor:"events"},{Header:"Unit Price",accessor:"unitPrice"},{Header:"Quantity",accessor:"quantity"},{Header:"From",accessor:"from",color:"blue"},{Header:"To",accessor:"to",color:"blue"},{Header:"Date",accessor:"date"}],h=function(e){switch(e){case"Transfer":return o.YC;case"Purchased":return o.bm;case"Listed":return o.$e;case"Mint":return o.P6;default:return null}},j=function(){var e=(0,n.useMemo)((function(){return m}),[]),s=(0,n.useMemo)((function(){return f}),[]),t=(0,d.useTable)({columns:s,data:e}),a=t.getTableProps,r=t.getTableBodyProps,l=t.headerGroups,c=t.rows,j=t.prepareRow;return(0,x.jsx)("div",{className:"border rounded-md ",children:(0,x.jsxs)("table",(0,i.Z)((0,i.Z)({},a()),{},{className:"w-full text-left table-auto",children:[(0,x.jsx)("thead",{className:"font-medium font-madeOuterSans ",children:l.map((function(e){return(0,x.jsx)("tr",(0,i.Z)((0,i.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,x.jsx)("th",(0,i.Z)((0,i.Z)({},e.getHeaderProps()),{},{className:"p-4",children:e.render("Header")}))}))}))}))}),(0,x.jsx)("tbody",(0,i.Z)((0,i.Z)({},r()),{},{className:"border-t ",children:c.map((function(e){return j(e),(0,x.jsx)("tr",(0,i.Z)((0,i.Z)({},e.getRowProps()),{},{className:"even:bg-blue-gray",children:e.cells.map((function(e){return(0,x.jsx)("td",(0,i.Z)((0,i.Z)({},e.getCellProps()),{},{className:"p-4  ".concat("blue"===e.column.color?"text-blue-light":""," "),children:"Events"===e.column.Header?(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)(u.Z,{icon:h(e.value)}),(0,x.jsx)("span",{className:"ml-2",children:e.render("Cell")})]}):"Unit Price"===e.column.Header?(0,x.jsxs)("div",{className:"flex items-center",children:[e.value&&(0,x.jsx)(u.Z,{icon:o.Dc,className:"w-5 h-5 fill-black"}),(0,x.jsx)("span",{className:"ml-2",children:e.render("Cell")})]}):e.render("Cell")}))}))}))}))}))]}))})},p=function(e){var s=e.review;return(0,x.jsx)("section",{className:"flex justify-center flex-1 mt-24",children:(0,x.jsxs)(c.O.Group,{as:"div",className:"flex flex-col w-full max-w-sm px-4 py-6 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl",children:[(0,x.jsxs)(c.O.List,{className:"p-1.5 border rounded-md flex gap-1 font-madeOuterSans w-full flex-wrap ",children:[(0,x.jsx)(c.O,{as:n.Fragment,children:function(e){var s=e.selected;return(0,x.jsx)("button",{className:"py-1.5 px-3 rounded-md font-madeOuterSans leading-4 text-sm font-medium ".concat(s?"bg-gray-tab text-white":"bg-white text-gray-400"),children:"Events"})}}),(0,x.jsx)(c.O,{as:n.Fragment,children:function(e){var t=e.selected;return(0,x.jsx)("button",{className:"py-1.5 px-3 rounded-md font-madeOuterSans leading-4 text-sm font-medium ".concat(t?"bg-gray-tab text-white":"bg-white text-gray-400"),disabled:s,children:"Pricing History"})}})]}),(0,x.jsxs)(c.O.Panels,{className:"mt-4",children:[(0,x.jsx)(c.O.Panel,{children:(0,x.jsx)(j,{})}),(0,x.jsx)(c.O.Panel,{})]})]})})},g=t(6871),N=function(){var e=(0,g.TH)(),s=new URLSearchParams(e.search);return(0,x.jsxs)("div",{className:"relative w-full h-full",children:[(0,x.jsx)(a.Z,{}),(0,x.jsxs)("div",{className:"my-32",children:[(0,x.jsx)(l.Z,{bid:"true"===s.get("onBid"),purchase:"true"===s.get("onSale")}),(0,x.jsx)(p,{})]}),(0,x.jsx)(r.Z,{})]})}}}]);
//# sourceMappingURL=434.4332c193.chunk.js.map