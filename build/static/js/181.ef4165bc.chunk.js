(self.webpackChunkdunkswap_product=self.webpackChunkdunkswap_product||[]).push([[181],{8459:function(t,e,n){"use strict";var s=n(184);e.Z=function(t){var e=t.concluded,n=t.canceled;return(0,s.jsxs)("div",{className:"w-full mt-6 rounded-md shadow-lg shadow-gray-600/10 bg-white p-0.5",children:[(0,s.jsx)("div",{className:"flex justify-between items-center p-3.5 border-b",children:(0,s.jsx)("h2",{className:"text-2xl font-bold font-madeOuterSans",children:"Trade Information"})}),(0,s.jsxs)("div",{className:"p-5",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("h4",{className:"text-lg font-semibold leading-6",children:"Price"}),(0,s.jsx)("span",{className:"px-2 py-1.5 text-sm font-bold leading-4 border rounded font-madeOuterSans text-green border-green",children:"105 MATIC"})]}),(0,s.jsx)("p",{className:"text-sm leading-[30px] text-gray-500 mt-1",children:"105 MATIC has been reserved for this trade. This includes the gas fee of 0.04 MATIC"}),(0,s.jsx)("h4",{className:"text-lg font-semibold leading-6 mt-5.5",children:"Contract Address"}),(0,s.jsx)("p",{className:"text-blue-link",children:"0x1746f86011ACa650092E8c964062CaFbe93eDFFA"}),(0,s.jsxs)("div",{className:"flex justify-between w-full mt-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h5",{className:"text-sm leading-6",children:"Escrow Id"}),(0,s.jsx)("h4",{className:"font-medium leading-6 \n              ".concat(e||n?"text-blue-link":"","\n            "),children:"1x0b8sAA082x82"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h5",{className:"text-sm leading-6",children:"Token Id"}),(0,s.jsx)("h4",{className:"font-medium leading-6 ",children:"777"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h5",{className:"text-sm leading-6",children:"Token Standard"}),(0,s.jsx)("h4",{className:"font-medium leading-6 ",children:"ERC-1155"})]})]}),e&&(0,s.jsxs)("div",{className:"flex items-center justify-between mt-10",children:[(0,s.jsx)("h4",{className:"text-lg font-semibold leading-6",children:"Trade Status"}),(0,s.jsx)("span",{className:"px-2 py-1.5 text-sm font-bold leading-4  rounded font-madeOuterSans text-white bg-green",children:"Completed"})]}),n&&(0,s.jsxs)("div",{className:"flex items-center justify-between mt-10",children:[(0,s.jsx)("h4",{className:"text-lg font-semibold leading-6",children:"Trade Status"}),(0,s.jsx)("span",{className:"px-2 py-1.5 text-sm font-bold leading-4  rounded font-madeOuterSans text-white bg-red",children:"Cancelled"})]})]})]})}},5347:function(t,e,n){"use strict";n.r(e);var s=n(8125),r=n(8459),i=n(5932),a=n(184);e.default=function(){return(0,a.jsxs)("div",{className:"relative w-full h-full",children:[(0,a.jsx)(s.Z,{}),(0,a.jsxs)("div",{className:"relative flex justify-center",children:[(0,a.jsx)("div",{className:"absolute w-screen h-screen opacity-50",children:(0,a.jsx)("img",{src:i,alt:"bg",className:"object-cover w-full h-full"})}),(0,a.jsxs)("div",{className:"relative flex flex-col flex-1 w-full max-w-sm px-4 my-40 md:max-w-lg lg:max-w-4xl xl:max-w-7xl",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold font-madeOuterSans",children:"ESCROW"}),(0,a.jsx)("div",{className:"flex items-center justify-center flex-1",children:(0,a.jsx)("div",{children:(0,a.jsx)(r.Z,{canceled:!0})})})]})]})]})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,s="millisecond",r="second",i="minute",a="hour",u="day",d="week",o="month",l="quarter",c="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},v={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(s,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(s,o),i=n-r<0,a=e.clone().add(s+(i?-1:1),o);return+(-(s+(n-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:c,w:d,d:u,D:h,h:a,m:i,s:r,ms:s,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",p={};p[y]=$;var M=function(t){return t instanceof S},w=function(t,e,n){var s;if(!t)return y;if("string"==typeof t)p[t]&&(s=t),e&&(p[t]=e,s=t);else{var r=t.name;p[r]=t,s=r}return!n&&s&&(y=s),s||!n&&y},j=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},b=v;b.l=w,b.i=M,b.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function $(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=$.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(m);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return b},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return j(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<j(t)},g.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,s=!!b.u(e)||e,l=b.p(t),f=function(t,e){var r=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?r:r.endOf(u)},m=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},x=this.$W,$=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case c:return s?f(1,0):f(31,11);case o:return s?f(1,$):f(0,$+1);case d:var y=this.$locale().weekStart||0,p=(x<y?x+7:x)-y;return f(s?g-p:g+(6-p),$);case u:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case r:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,d=b.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[u]=l+"Date",n[h]=l+"Date",n[o]=l+"Month",n[c]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[r]=l+"Seconds",n[s]=l+"Milliseconds",n)[d],m=d===u?this.$D+(e-this.$W):e;if(d===o||d===c){var x=this.clone().set(h,1);x.$d[f](m),x.init(),this.$d=x.set(h,Math.min(this.$D,x.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[b.p(t)]()},g.add=function(s,l){var h,f=this;s=Number(s);var m=b.p(l),x=function(t){var e=j(f);return b.w(e.date(e.date()+Math.round(t*s)),f)};if(m===o)return this.set(o,this.$M+s);if(m===c)return this.set(c,this.$y+s);if(m===u)return x(1);if(m===d)return x(7);var $=(h={},h[i]=e,h[a]=n,h[r]=t,h)[m]||1,g=this.$d.getTime()+s*$;return b.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),i=this.$H,a=this.$m,u=this.$M,d=n.weekdays,o=n.months,l=function(t,n,r,i){return t&&(t[n]||t(e,s))||r[n].substr(0,i)},c=function(t){return b.s(i%12||12,t,"0")},h=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:b.s(u+1,2,"0"),MMM:l(n.monthsShort,u,o,3),MMMM:l(o,u),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,d,2),ddd:l(n.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(i),HH:b.s(i,2,"0"),h:c(1),hh:c(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return s.replace(x,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(s,h,f){var m,x=b.p(h),$=j(s),g=($.utcOffset()-this.utcOffset())*e,v=this-$,y=b.m(this,$);return y=(m={},m[c]=y/12,m[o]=y,m[l]=y/3,m[d]=(v-g)/6048e5,m[u]=(v-g)/864e5,m[a]=v/n,m[i]=v/e,m[r]=v/t,m)[x]||v,f?y:b.a(y)},g.daysInMonth=function(){return this.endOf(o).$D},g.$locale=function(){return p[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=w(t,e,!0);return s&&(n.$L=s),n},g.clone=function(){return b.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},$}(),D=S.prototype;return j.prototype=D,[["$ms",s],["$s",r],["$m",i],["$H",a],["$W",u],["$M",o],["$y",c],["$D",h]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,S,j),t.$i=!0),j},j.locale=w,j.isDayjs=M,j.unix=function(t){return j(1e3*t)},j.en=p[y],j.Ls=p,j.p={},j}()},130:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var s=e.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,n,r){return s.fromToBase(t,e,n,r)}n.en.relativeTime=r,s.fromToBase=function(e,s,i,a,u){for(var d,o,l,c=i.$locale().relativeTime||r,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,m=0;m<f;m+=1){var x=h[m];x.d&&(d=a?n(e).diff(i,x.d,!0):i.diff(e,x.d,!0));var $=(t.rounding||Math.round)(Math.abs(d));if(l=d>0,$<=x.r||!x.r){$<=1&&m>0&&(x=h[m-1]);var g=c[x.l];u&&($=u(""+$)),o="string"==typeof g?g.replace("%d",$):g($,s,x.l,l);break}}if(s)return o;var v=l?c.future:c.past;return"function"==typeof v?v(o):v.replace("%s",o)},s.to=function(t,e){return i(t,e,this,!0)},s.from=function(t,e){return i(t,e,this)};var a=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(a(this),t)},s.fromNow=function(t){return this.from(a(this),t)}}}()},5932:function(t,e,n){"use strict";t.exports=n.p+"static/media/card-placeholder.409e80e5530088edc0dd.png"}}]);
//# sourceMappingURL=181.ef4165bc.chunk.js.map