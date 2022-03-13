"use strict";(self.webpackChunkdunkswap_product=self.webpackChunkdunkswap_product||[]).push([[865],{4580:function(e,s,a){var t=a(6128),l=a(4806),r=a(7892),n=a.n(r),i=a(6871),c=a(184);s.Z=function(e){var s=e.item,a=e.button,r=s.id,d=s.price,o=s.likes,m=s.image,x=s.creator,u=s.title,h=s.endTime,f=s.info,g=s.onBid,p=s.onSale,v=(0,i.s0)();return(0,c.jsxs)("div",{className:"w-full max-w-[340px] rounded-lg px-3.5 py-2 border border-gray-100 shadow transition ".concat(a?"cursor-pointer hover:shadow-lg":""," "),onClick:function(){a&&v("/view-item/".concat(r,"?onBid=").concat(g,"&onSale=").concat(p))},children:[(0,c.jsxs)("div",{className:"flex items-center justify-between",children:[(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)(l.Z,{icon:t.O4,className:"w-4 h-3.5 fill-primary"}),(0,c.jsx)("span",{className:"ml-1 font-medium leading-5",children:d})]}),(0,c.jsxs)("div",{className:"flex items-center justify-center  transition bg-gray-100 rounded-full hover:shadow-sm p-2 \n              ".concat(o>0?"fill-pink":"fill-gray-500 hover:fill-gray-600","\n            "),children:[(0,c.jsx)(l.Z,{icon:t.IL,className:"w-5 h-5 "}),o>0&&(0,c.jsx)("span",{className:"ml-1 text-xs font-semibold leading-5 ",children:"27"})]})]}),(0,c.jsx)("div",{className:"mt-1 overflow-hidden rounded-md aspect-square",children:(0,c.jsx)("img",{src:m,alt:"item",className:"object-cover w-full h-full"})}),(0,c.jsxs)("div",{className:"mt-2.5",children:[(0,c.jsx)("h6",{className:"text-xs font-light leading-5 text-black/60",children:x}),(0,c.jsx)("h4",{className:"font-medium leading-5 text-gray-900 font-madeOuterSans",children:u})]}),(0,c.jsxs)("div",{className:"flex items-center justify-between mt-8 text-sm leading-4 ",children:[(0,c.jsx)("span",{children:h&&(0,c.jsxs)(c.Fragment,{children:["\u23f3"," ",(0,c.jsxs)("span",{className:"text-black/50 ",children:[n()(h).fromNow(!0)," left"]})]})}),(0,c.jsx)("span",{className:"flex items-center gap-1.5 text-gray-500",children:f&&f.label&&(0,c.jsxs)(c.Fragment,{children:[f.label," ",(0,c.jsx)(l.Z,{icon:t.vt,className:"w-4 h-3"})," ",f.value]})})]})]})}},29:function(e,s,a){a.r(s),a.d(s,{default:function(){return Z}});var t=a(4580),l=a(8125),r=a(2791),n=a(6660),i=a(8683),c=a(2492),d=a(2506),o=a(5239),m=a(6128),x=a(4806),u=a(6871),h=a(184),f={price:0,receiveOffers:!1},g=o.Ry().shape({price:o.Rx().required("Required"),receiveOffers:o.O7()}),p=function(){var e,s,a=(0,u.s0)(),t=(0,d.TA)({initialValues:f,validationSchema:g,onSubmit:function(e){console.log(e),a("/view-item")}});return(0,h.jsxs)("div",{className:"py-9",children:[(0,h.jsx)("h3",{className:"font-madeOuterSans font-medium text-lg leading-[22px] mb-5",children:"Price"}),(0,h.jsxs)("div",{className:"w-full p-6 border border-gray-200 rounded-lg bg-gray-50 ",children:[(0,h.jsxs)("div",{className:"flex gap-3",children:[(0,h.jsx)("span",{className:"flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-xl backdrop-blur-xl",children:(0,h.jsx)(x.Z,{icon:m.O4,className:"h-6 fill-primary w-7"})}),(0,h.jsxs)("div",{className:"relative flex-1 text-xl",children:[(0,h.jsx)("input",(0,i.Z)({type:"number",className:"py-2.5 px-3 w-full bg-white border border-gray-200 rounded-lg  text-gray-500\n                ".concat(t.touched.price&&t.errors.price?"border-red":"","\n              ")},t.getFieldProps("price"))),(0,h.jsx)("span",{className:"absolute font-medium text-gray-500 uppercase -translate-y-1/2 top-1/2 right-3",children:"Matic"})]})]}),(0,h.jsxs)("p",{className:"mt-3 text-sm text-gray-500 ",children:["Service fee ",2.5,"%. You will receive",(0,h.jsx)("span",{className:"mx-1 font-medium text-black",children:(s=t.values.price,.975*s)}),"MATIC ~",(0,h.jsxs)("span",{className:"mx-1 font-medium text-black",children:["$",(e=t.values.price,.975*e*1.5)]})]}),(0,h.jsx)("div",{className:"w-full h-px my-6 bg-gray-300"}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"flex items-center w-full gap-8 bg-transparent ",children:[(0,h.jsxs)("div",{className:"flex-1",children:[(0,h.jsx)("h5",{className:"text-lg text-black",children:"Recieve Offers"}),(0,h.jsx)("p",{className:"text-sm text-gray-500",children:"Increase chances of sale by receiving offers from buyers"})]}),(0,h.jsx)("div",{className:"flex-shrink-0",children:(0,h.jsxs)(c.r,{checked:t.values.receiveOffers,onChange:function(e){t.setFieldValue("receiveOffers",e)},className:"".concat(t.values.receiveOffers?"bg-primary":"bg-gray-500/70"," relative inline-flex items-center h-6 rounded-[32px] w-12\n             \n            "),children:[(0,h.jsx)("span",{className:"sr-only",children:"Recieve Offers"}),(0,h.jsx)("span",{className:"".concat(t.values.receiveOffers?"translate-x-7":"translate-x-1"," transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full")})]})})]})})]}),(0,h.jsxs)("div",{className:"text-sm text-justify text-gray-500 mt-8.5 ",children:[(0,h.jsx)("p",{children:"Please keep an eye out for email notifications if you\u2019re shipping the physical pair as well. We expect you to act promptly as the Escrow window only lasts 2 business days before the transaction is automatically cancelled and the funds (MATIC) & NFT are returned to their respective owner\u2019s wallets."}),(0,h.jsx)("p",{className:"mt-3.5",children:"*offers will be recieved in Wrapped MATIC (WMATIC)"})]}),(0,h.jsx)("div",{className:"mt-6 ",children:(0,h.jsx)("button",{className:"w-full max-w-xs p-4 font-medium leading-4 text-white transition rounded-md font-madeOuterSans bg-blue-dark hover:shadow-md",onClick:t.submitForm,children:"List item"})})]})},v=a(885),b=a(7831),j=function(e){var s,a=e.label,t=e.selected,l=e.setSelected,n=e.options,i=e.placeholder,c=(0,r.useState)(!1),d=(0,v.Z)(c,2),o=d[0],u=d[1];return(0,h.jsxs)("div",{className:"relative flex flex-col flex-1 mt-2.5",children:[(0,h.jsx)("label",{htmlFor:"range",className:"text-lg font-medium",children:a}),(0,h.jsxs)("div",{className:" flex items-center relative mt-2.5 py-2.5 px-3 min-h-[48px] font-medium text-sm w-full bg-white border border-gray-200 rounded-lg  text-gray-900",onClick:function(){return u(!o)},children:[(null===n||void 0===n||null===(s=n.find((function(e){return e.value===t})))||void 0===s?void 0:s.label)||i||" ",(0,h.jsx)("span",{className:"absolute -translate-y-1/2 top-1/2 right-3",children:(0,h.jsx)(x.Z,{icon:m.iw,className:"w-6 h-6 fill-gray-900"})})]}),(0,h.jsx)(b.u,{show:o,enter:"transition duration-100 ease-out z-40",enterFrom:"transform  opacity-0 ",enterTo:"transform  opacity-100 ",leave:"transition duration-75 ease-out z-40",leaveFrom:"transform opacity-100",leaveTo:"transform opacity-0 ",children:(0,h.jsx)("div",{className:"absolute z-40 w-full px-4 -mt-1 bg-white border border-t-0 border-gray-200 rounded-b-lg",children:null===n||void 0===n?void 0:n.filter((function(e){return e.value!==t})).map((function(e){return(0,h.jsx)("button",{className:"py-2.5 block w-full font-medium text-sm leading-6 text-gray-900 border-t border-t-200 text-left transition hover:bg-gray-50 ",onClick:function(){l(e.value),u(!1)},children:e.label},e.value)}))})})]})},y=a(7892),w=a.n(y),N=a(7161),k=(a(2978),a(666),function(e){var s=e.startDate,a=e.setStartDate,t=e.endDate,l=e.setEndDate,n=e.onClose,i=(0,r.useState)(s),c=(0,v.Z)(i,2),d=c[0],o=c[1],m=(0,r.useState)(t),x=(0,v.Z)(m,2),u=x[0],f=x[1];(0,r.useEffect)((function(){o(s),f(t)}),[s,t]);return(0,h.jsxs)("div",{className:"relative z-50 px-1 pb-2 bg-white rounded-lg shadow-xl w-fit",children:[(0,h.jsx)(N.C0,{ranges:[{startDate:d,endDate:u,key:"selection"}],onChange:function(e){o(e.selection.startDate),f(e.selection.endDate)},showMonthAndYearPickers:!1,rangeColors:[" #219653"],showDateDisplay:!1,dragSelectionEnabled:!0,className:"bg-transparent"}),(0,h.jsxs)("div",{className:"flex items-center justify-between px-6 text-sm leading-4",children:[(0,h.jsx)("button",{className:"px-4 py-3 font-bold text-gray-700 transition rounded-md hover:text-gray-800",onClick:function(){n()},children:"Cancel"}),(0,h.jsx)("button",{className:"px-8 py-3 font-bold text-gray-100 rounded-md bg-green",onClick:function(){a(d),l(u),n()},children:"Done"})]})]})}),D=[{label:"1 day",value:"1 day"},{label:"3 days",value:"3 days"},{label:"1 week",value:"1 week"},{label:"1 month",value:"1 month"},{label:"Custom",value:"custom"}],F={price:0,reservePrice:!1,reservedPrice:0,range:"1 day",startingDate:w()().toDate(),endingDate:w()().add(1,"day").toDate()},O=o.Ry().shape({price:o.Rx().required("Required"),reservePrice:o.O7(),reservedPrice:o.Rx().when("reservePrice",{is:!0,then:o.Rx().required("Required")}),range:o.Z_().required("Required"),startingDate:o.Z_().required("Required"),endingDate:o.Z_().required("Required")}),P=function(){var e,s,a=(0,r.useState)(!1),t=(0,v.Z)(a,2),l=t[0],n=t[1],o=(0,u.s0)(),f=(0,d.TA)({initialValues:F,validationSchema:O,onSubmit:function(e){console.log(e),o("/view-item")}});return(0,h.jsxs)("div",{className:"py-9",children:[(0,h.jsx)("h3",{className:"font-madeOuterSans font-medium text-lg leading-[22px] mb-5",children:"Price"}),(0,h.jsxs)("div",{className:"w-full p-6 border border-gray-200 rounded-lg bg-gray-100/50 ",children:[(0,h.jsxs)("div",{className:"flex gap-3",children:[(0,h.jsx)("span",{className:"flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-xl backdrop-blur-xl",children:(0,h.jsx)(x.Z,{icon:m.vt,className:"w-6 h-5"})}),(0,h.jsxs)("div",{className:"relative flex-1 text-xl",children:[(0,h.jsx)("input",(0,i.Z)({type:"number",className:"py-2.5 px-3 w-full bg-white border border-gray-200 rounded-lg  text-gray-500\n                ".concat(f.touched.price&&f.errors.price?"border-red":"","\n              ")},f.getFieldProps("price"))),(0,h.jsx)("span",{className:"absolute font-medium text-gray-500 uppercase -translate-y-1/2 top-1/2 right-3",children:"WMatic"})]})]}),(0,h.jsxs)("p",{className:"mt-3 text-sm text-gray-500 ",children:["Service fee ",2.5,"%. You will receive",(0,h.jsx)("span",{className:"mx-1 font-medium text-black",children:(s=f.values.price,.975*s)}),"MATIC ~",(0,h.jsxs)("span",{className:"mx-1 font-medium text-black",children:["$",(e=f.values.price,.975*e*1.5)]})]}),(0,h.jsx)("div",{className:"w-full h-px my-6 bg-gray-300"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"flex items-center w-full gap-8 bg-transparent ",children:[(0,h.jsxs)("div",{className:"flex-1",children:[(0,h.jsx)("h5",{className:"text-lg text-black",children:"Reserve Price"}),(0,h.jsx)("p",{className:"text-sm text-gray-500",children:"If you don't receive any bids equal to or greater than your reserve, the auction will end without a sale."})]}),(0,h.jsx)("div",{className:"flex-shrink-0",children:(0,h.jsxs)(c.r,{checked:f.values.reservePrice,onChange:function(e){f.setFieldValue("reservePrice",e)},className:"".concat(f.values.reservePrice?"bg-primary":"bg-gray-500/70"," relative inline-flex items-center h-6 rounded-[32px] w-12\n             \n            "),children:[(0,h.jsx)("span",{className:"sr-only",children:"Recieve Offers"}),(0,h.jsx)("span",{className:"".concat(f.values.reservePrice?"translate-x-7":"translate-x-1"," transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full")})]})})]}),(0,h.jsx)(b.u,{show:f.values.reservePrice,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0 ",enterTo:"transform scale-100 opacity-100 ",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100 ",leaveTo:"transform scale-95 opacity-0 ",children:(0,h.jsx)("div",{className:"mt-2.5",children:(0,h.jsxs)("div",{className:"relative flex-1 text-xl",children:[(0,h.jsx)("input",(0,i.Z)({type:"number",className:"py-2.5 px-3 w-full bg-white border border-gray-200 rounded-lg  text-gray-500\n                ".concat(f.touched.reservedPrice&&f.errors.reservedPrice?"border-red":"","\n              ")},f.getFieldProps("reservedPrice"))),(0,h.jsx)("span",{className:"absolute font-medium text-gray-500 uppercase -translate-y-1/2 top-1/2 right-3",children:"WMatic"})]})})})]})]}),(0,h.jsx)("h3",{className:"font-madeOuterSans font-medium text-lg leading-[22px] mb-5 mt-12",children:"Auction Period"}),(0,h.jsxs)("div",{className:"relative w-full p-6 border border-gray-200 rounded-lg bg-gray-100/50",children:[l&&(0,h.jsx)("div",{className:"absolute z-40 translate-x-full -right-2",children:(0,h.jsx)(k,{startDate:f.values.startingDate,endDate:f.values.endingDate,setStartDate:function(e){return f.setFieldValue("startingDate",e)},setEndDate:function(e){return f.setFieldValue("endingDate",e)},onClose:function(){return n(!1)}})}),(0,h.jsx)(j,{label:"Range",selected:f.values.range,options:D,setSelected:function(e){f.setFieldValue("range",e),"1 day"===e&&(f.setFieldValue("startingDate",w()().toDate()),f.setFieldValue("endingDate",w()().toDate()),n(!1)),"3 days"===e&&(f.setFieldValue("startingDate",w()().toDate()),f.setFieldValue("endingDate",w()().add(3,"days").toDate()),n(!1)),"1 week"===e&&(f.setFieldValue("startingDate",w()().toDate()),f.setFieldValue("endingDate",w()().add(1,"week").toDate()),n(!1)),"1 month"===e&&(f.setFieldValue("startingDate",w()().toDate()),f.setFieldValue("endingDate",w()().add(1,"month").toDate()),n(!1)),"custom"===e&&(f.setFieldValue("startingDate",w()().toDate()),f.setFieldValue("endingDate",w()().toDate()),n(!0))}}),(0,h.jsx)("p",{className:"mt-3 text-sm text-gray-500 ",children:"The auction starts as soon as you list the item."}),(0,h.jsx)("div",{className:"w-full h-px mt-1.5 mb-3.5 bg-gray-300"}),(0,h.jsxs)("div",{className:"flex flex-col gap-4 xl:flex-row",children:[(0,h.jsxs)("div",{className:"flex-1",children:[(0,h.jsx)("h5",{className:"text-lg font-medium",children:"Starting Date"}),(0,h.jsx)("div",{className:"relative mt-4 text-xl",children:(0,h.jsxs)("div",{className:"flex items-center relative py-2.5 px-3 min-h-[48px] font-medium text-sm w-full bg-white border border-gray-200 rounded-lg  text-gray-900\n                ".concat("custom"===f.values.range?"cursor-pointer":"opacity-80","\n              "),onClick:function(){"custom"===f.values.range&&n(!0)},children:[" ",w()(f.values.startingDate).format("MMM DD, YYYY"),(0,h.jsx)("span",{className:"absolute -translate-y-1/2 top-1/2 right-3",children:(0,h.jsx)(x.Z,{icon:m.iw,className:"w-6 h-6 fill-gray-900"})})]})})]}),(0,h.jsx)("span",{className:"hidden pt-12 text-sm font-medium xl:block ",children:"_"}),(0,h.jsxs)("div",{className:"flex-1",children:[(0,h.jsx)("h5",{className:"text-lg font-medium",children:"Ending Date"}),(0,h.jsx)("div",{className:"relative w-full mt-4 text-xl",children:(0,h.jsxs)("div",{className:"flex items-center relative py-2.5 px-3 min-h-[48px] font-medium text-sm w-full bg-white border border-gray-200 rounded-lg  text-gray-900\n                ".concat("custom"===f.values.range?"cursor-pointer":"opacity-80","\n              "),onClick:function(){"custom"===f.values.range&&n(!0)},children:[w()(f.values.endingDate).format("MMM DD, YYYY"),(0,h.jsx)("span",{className:"absolute -translate-y-1/2 top-1/2 right-3",children:(0,h.jsx)(x.Z,{icon:m.iw,className:"w-6 h-6 fill-gray-900"})})]})})]})]})]}),(0,h.jsxs)("div",{className:"text-sm text-justify text-gray-500 mt-8.5 ",children:[(0,h.jsx)("p",{children:"Please keep an eye out for email notifications if you\u2019re shipping the physical pair as well. We expect you to act promptly as the Escrow window only lasts 2 business days before the transaction is automatically cancelled and the funds (MATIC) & NFT are returned to their respective owner\u2019s wallets."}),(0,h.jsx)("p",{className:"mt-3.5",children:"*Any bid placed in the last 10 minutes extends the auction by 10 minutes."})]}),(0,h.jsx)("div",{className:"mt-6 ",children:(0,h.jsx)("button",{className:"w-full max-w-xs p-4 font-medium leading-4 text-white transition rounded-md font-madeOuterSans bg-blue-dark hover:shadow-md",onClick:f.submitForm,children:"List item"})})]})},S=function(){return(0,h.jsx)("div",{className:"w-full max-w-[400px] mx-auto md:ml-0",children:(0,h.jsxs)(n.O.Group,{children:[(0,h.jsxs)(n.O.List,{className:"flex w-full gap-1 p-2 border border-gray-200 rounded-lg bg-gray-50",children:[(0,h.jsx)(n.O,{as:r.Fragment,children:function(e){var s=e.selected;return(0,h.jsx)("button",{className:"\n              p-3.5 rounded-md font-semibold text-lg  flex-1 transition\n                ".concat(s?"bg-blue-dark/80 text-white":"bg-transparent text-black","\n                "),children:"Fixed Price"})}}),(0,h.jsx)(n.O,{as:r.Fragment,children:function(e){var s=e.selected;return(0,h.jsx)("button",{className:"\n              p-3.5 rounded-md font-semibold text-lg  flex-1 transition\n                ".concat(s?"bg-blue-dark/80 text-white":"bg-transparent text-black","\n                "),children:"Auction"})}})]}),(0,h.jsxs)(n.O.Panels,{children:[(0,h.jsx)(n.O.Panel,{children:(0,h.jsx)(p,{})}),(0,h.jsx)(n.O.Panel,{children:(0,h.jsx)(P,{})})]})]})})},C={id:"1",price:245,likes:0,creator:"DenzelWashington",image:a(5932),title:"Nike Air Jordan 1 OG"},Z=function(){return(0,h.jsxs)("div",{className:"relative w-full h-full",children:[(0,h.jsx)(l.Z,{}),(0,h.jsx)("section",{className:"flex justify-center flex-1 my-32",children:(0,h.jsxs)("div",{className:"w-full max-w-sm px-4 py-6 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl",children:[(0,h.jsx)("h1",{className:"text-5xl leading-tight font-madeOuterSans",children:"List dunks for sale"}),(0,h.jsxs)("div",{className:"flex flex-col-reverse mt-16 space-y-10 space-y-reverse md:space-y-0 md:flex-row",children:[(0,h.jsxs)("div",{className:"w-full px-2 md:w-6/12 ",children:[(0,h.jsx)("h3",{className:"font-madeOuterSans font-medium text-lg leading-[22px] mb-5",children:"Mode"}),(0,h.jsx)(S,{})]}),(0,h.jsx)("div",{className:"flex justify-center w-full md:w-6/12 ",children:(0,h.jsx)("div",{className:"flex relative flex-col md:max-w-[340px] w-full text-left",children:(0,h.jsxs)("div",{className:"sticky top-40",children:[(0,h.jsx)("h3",{className:"font-madeOuterSans font-medium text-lg leading-[22px] mb-5",children:"Preview"}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)(t.Z,{item:C})})]})})})]})]})})]})}},5932:function(e,s,a){e.exports=a.p+"static/media/card-placeholder.409e80e5530088edc0dd.png"}}]);
//# sourceMappingURL=865.f2dfef27.chunk.js.map