(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(e,t,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(104).default)("46eb2e18",content,!0,{sourceMap:!1})},263:function(e,t,r){"use strict";r.r(t);r(265);var d={name:"CardMemory",props:{urlImg:{type:String,required:!1,default:""},id:{type:Number,required:!1,default:0},checked:{type:Boolean,required:!1,default:!1}},methods:{check:function(e){var t=e.id;this.$store.commit("memory/CHECK",{id:t,img:this.urlImg})}}},n=(r(269),r(51)),component=Object(n.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"deck",class:{disabled:e.checked},attrs:{"data-testid":"check-memory"},on:{click:function(t){return e.check({id:e.id})}}},[r("div",{staticClass:"card clickcard",class:{clicked:e.checked}},[r("div",{staticClass:"front face"}),e._v(" "),r("div",{staticClass:"back face"},[r("img",{attrs:{"data-testid":"img",src:e.urlImg,alt:""}})])])])}),[],!1,null,"42d28952",null);t.default=component.exports},265:function(e,t,r){"use strict";var d=r(11),n=r(0),c=r(3),o=r(106),f=r(19),l=r(15),k=r(187),v=r(46),h=r(105),m=r(186),N=r(4),I=r(77).f,x=r(35).f,w=r(17).f,y=r(266),E=r(267).trim,_="Number",C=n.Number,A=C.prototype,S=n.TypeError,M=c("".slice),T=c("".charCodeAt),F=function(e){var t=m(e,"number");return"bigint"==typeof t?t:O(t)},O=function(e){var t,r,d,n,c,o,f,code,l=m(e,"number");if(h(l))throw S("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=E(l),43===(t=T(l,0))||45===t){if(88===(r=T(l,2))||120===r)return NaN}else if(48===t){switch(T(l,1)){case 66:case 98:d=2,n=49;break;case 79:case 111:d=8,n=55;break;default:return+l}for(o=(c=M(l,2)).length,f=0;f<o;f++)if((code=T(c,f))<48||code>n)return NaN;return parseInt(c,d)}return+l};if(o(_,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var Y,z=function(e){var t=arguments.length<1?0:C(F(e)),r=this;return v(A,r)&&N((function(){y(r)}))?k(Object(t),r,z):t},R=d?I(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;R.length>V;V++)l(C,Y=R[V])&&!l(z,Y)&&w(z,Y,x(C,Y));z.prototype=A,A.constructor=z,f(n,_,z)}},266:function(e,t,r){var d=r(3);e.exports=d(1..valueOf)},267:function(e,t,r){var d=r(3),n=r(22),c=r(12),o=r(268),f=d("".replace),l="["+o+"]",k=RegExp("^"+l+l+"*"),v=RegExp(l+l+"*$"),h=function(e){return function(t){var r=c(n(t));return 1&e&&(r=f(r,k,"")),2&e&&(r=f(r,v,"")),r}};e.exports={start:h(1),end:h(2),trim:h(3)}},268:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},269:function(e,t,r){"use strict";r(261)},270:function(e,t,r){var d=r(103)(!1);d.push([e.i,'.clicked[data-v-42d28952]{transform:rotateY(180deg)}.clicked .front[data-v-42d28952]{box-shadow:0 0 0 #aaa}.clicked .back img[data-v-42d28952]{width:100%;height:100%}.disabled[data-v-42d28952]{pointer-events:none;cursor:default}@media(min-width:0px){.deck[data-v-42d28952]{width:22%;height:120px;position:relative;perspective:1000px;font-family:verdana;border-radius:10px;cursor:pointer}.deck .card[data-v-42d28952]{transform-style:preserve-3d;transition:all .5s linear}.deck .card[data-v-42d28952],.deck .face[data-v-42d28952]{width:100%;height:100%;border-radius:10px}.deck .face[data-v-42d28952]{position:absolute;background:url(https://i.postimg.cc/fWt20NpY/jogo.png);-webkit-backface-visibility:hidden;backface-visibility:hidden;background-size:50% 80%;background-repeat:no-repeat;background-position:50%;background-color:#72e1dd}.deck .back[data-v-42d28952]{overflow:hidden;display:block;background:#fff!important;box-sizing:border-box}.deck .back[data-v-42d28952],.deck .back[data-v-42d28952]:before{z-index:-1;transform:rotateY(180deg)}.deck .back[data-v-42d28952]:before{content:"";position:absolute;width:100%;height:100%;background-size:100% 100%}}@media(min-width:850px){.deck[data-v-42d28952]{width:20%;height:170px}}',""]),e.exports=d}}]);