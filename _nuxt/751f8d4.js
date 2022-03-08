(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3,5],{261:function(t,e,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(104).default)("7e3c6534",content,!0,{sourceMap:!1})},262:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(104).default)("40cd6bc7",content,!0,{sourceMap:!1})},263:function(t,e,r){"use strict";r.r(e);r(265);var n={name:"CardMemory",props:{urlImg:{type:String,required:!1,default:""},id:{type:Number,required:!1,default:0},checked:{type:Boolean,required:!1,default:!1}},methods:{check:function(t){var e=t.id;this.$store.commit("memory/CHECK",{id:e,img:this.urlImg})}}},c=(r(269),r(51)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"deck",class:{disabled:t.checked},attrs:{"data-testid":"check-memory"},on:{click:function(e){return t.check({id:t.id})}}},[r("div",{staticClass:"card clickcard",class:{clicked:t.checked}},[r("div",{staticClass:"front face"}),t._v(" "),r("div",{staticClass:"back face"},[r("img",{attrs:{"data-testid":"img",src:t.urlImg,alt:""}})])])])}),[],!1,null,"043fb7ac",null);e.default=component.exports},264:function(t,e,r){"use strict";r.r(e);var n={name:"ResultGame",computed:{turns:function(){return this.$store.state.memory.turns},attempts:function(){return this.$store.state.memory.attempts},wins:function(){return this.$store.state.memory.wins}}},c=(r(271),r(51)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"results"},[r("div",{attrs:{"data-testid":"result-turns"}},[t._v("\n    TURNS: "),r("span",[t._v(t._s(t.turns))])]),t._v(" "),r("div",{attrs:{"data-testid":"result-attempts"}},[t._v("\n    ATTEMPTS: "),r("span",[t._v(t._s(t.attempts))])]),t._v(" "),r("div",{attrs:{"data-testid":"result-wins"}},[t._v("\n    WINS: "),r("span",[t._v(" "+t._s(t.wins))])])])}),[],!1,null,"92021250",null);e.default=component.exports},265:function(t,e,r){"use strict";var n=r(11),c=r(0),d=r(3),o=r(106),f=r(19),l=r(15),m=r(187),v=r(46),h=r(105),x=r(186),k=r(4),y=r(77).f,w=r(35).f,_=r(17).f,N=r(266),I=r(267).trim,E="Number",C=c.Number,M=C.prototype,S=c.TypeError,T=d("".slice),A=d("".charCodeAt),j=function(t){var e=x(t,"number");return"bigint"==typeof e?e:G(e)},G=function(t){var e,r,n,c,d,o,f,code,l=x(t,"number");if(h(l))throw S("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=I(l),43===(e=A(l,0))||45===e){if(88===(r=A(l,2))||120===r)return NaN}else if(48===e){switch(A(l,1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+l}for(o=(d=T(l,2)).length,f=0;f<o;f++)if((code=A(d,f))<48||code>c)return NaN;return parseInt(d,n)}return+l};if(o(E,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var R,$=function(t){var e=arguments.length<1?0:C(j(t)),r=this;return v(M,r)&&k((function(){N(r)}))?m(Object(e),r,$):e},O=n?y(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;O.length>F;F++)l(C,R=O[F])&&!l($,R)&&_($,R,w(C,R));$.prototype=M,M.constructor=$,f(c,E,$)}},266:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},267:function(t,e,r){var n=r(3),c=r(22),d=r(12),o=r(268),f=n("".replace),l="["+o+"]",m=RegExp("^"+l+l+"*"),v=RegExp(l+l+"*$"),h=function(t){return function(e){var r=d(c(e));return 1&t&&(r=f(r,m,"")),2&t&&(r=f(r,v,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},268:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},269:function(t,e,r){"use strict";r(261)},270:function(t,e,r){var n=r(103)(!1);n.push([t.i,'.clicked[data-v-043fb7ac]{transform:rotateY(180deg)}.clicked .front[data-v-043fb7ac]{box-shadow:0 0 0 #aaa}.clicked .back img[data-v-043fb7ac]{width:100%;height:100%}.disabled[data-v-043fb7ac]{pointer-events:none;cursor:default}@media(min-width:0px){.deck[data-v-043fb7ac]{width:22%;height:120px;position:relative;perspective:1000px;font-family:verdana;border-radius:10px;cursor:pointer}.deck .card[data-v-043fb7ac]{transform-style:preserve-3d;transition:all .5s linear}.deck .card[data-v-043fb7ac],.deck .face[data-v-043fb7ac]{width:100%;height:100%;border-radius:10px}.deck .face[data-v-043fb7ac]{position:absolute;background:url(/Memory-Card-Game/_nuxt/assets/img/jogo.png);-webkit-backface-visibility:hidden;backface-visibility:hidden;background-size:50% 80%;background-repeat:no-repeat;background-position:50%;background-color:#72e1dd}.deck .back[data-v-043fb7ac]{overflow:hidden;display:block;background:#fff!important;box-sizing:border-box}.deck .back[data-v-043fb7ac],.deck .back[data-v-043fb7ac]:before{z-index:-1;transform:rotateY(180deg)}.deck .back[data-v-043fb7ac]:before{content:"";position:absolute;width:100%;height:100%;background-size:100% 100%}}@media(min-width:850px){.deck[data-v-043fb7ac]{width:20%;height:170px}}',""]),t.exports=n},271:function(t,e,r){"use strict";r(262)},272:function(t,e,r){var n=r(103)(!1);n.push([t.i,"@media(min-width:0px){.results[data-v-92021250]{display:flex;width:100%;justify-content:space-around;margin-top:10px;margin-bottom:25px}.results div[data-v-92021250]{background:#fff;padding:10px;font-weight:bolder;font-size:18px}.results div span[data-v-92021250]{color:rgba(31,201,251,.96)}}@media(min-width:850px){.results[data-v-92021250]{width:40%;margin:0 auto}}",""]),t.exports=n},273:function(t,e,r){var content=r(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(104).default)("9f53900c",content,!0,{sourceMap:!1})},275:function(t,e,r){"use strict";r(273)},276:function(t,e,r){var n=r(103)(!1);n.push([t.i,"@media(min-width:0px){.gamer[data-v-2f0e4810]{padding:12px 0;background:#4e4c4c;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);border-radius:15px;flex-direction:column}.gamer[data-v-2f0e4810],.gamer .cards[data-v-2f0e4810]{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;grid-gap:12px;gap:12px}}@media(min-width:850px){.gamer[data-v-2f0e4810]{width:60%;align-self:center;margin:10px 0}.gamer .cards[data-v-2f0e4810]{display:flex;flex-wrap:wrap;justify-content:space-around;grid-gap:12px;gap:12px;width:100%}}",""]),t.exports=n},279:function(t,e,r){"use strict";r.r(e);var n=r(263),c=r(264),d={name:"MemoryGame",components:{CardMemory:n.default,ResultGame:c.default},props:{cards:{type:Array,default:function(){return[]}}}},o=(r(275),r(51)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gamer"},[r("result-game"),t._v(" "),r("div",{staticClass:"cards"},t._l(t.cards,(function(t,e){return r("card-memory",{key:e,attrs:{id:t.id,"data-testid":"check-memory","url-img":t.img,checked:t.checked}})})),1)],1)}),[],!1,null,"2f0e4810",null);e.default=component.exports;installComponents(component,{ResultGame:r(264).default,CardMemory:r(263).default})}}]);