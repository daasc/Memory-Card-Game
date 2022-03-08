(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{261:function(t,e,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(104).default)("7e3c6534",content,!0,{sourceMap:!1})},262:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(104).default)("40cd6bc7",content,!0,{sourceMap:!1})},263:function(t,e,r){"use strict";r.r(e);r(265);var n={name:"CardMemory",props:{urlImg:{type:String,required:!1,default:""},id:{type:Number,required:!1,default:0},checked:{type:Boolean,required:!1,default:!1}},methods:{check:function(t){var e=t.id;this.$store.commit("memory/CHECK",{id:e,img:this.urlImg})}}},o=(r(269),r(51)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"deck",class:{disabled:t.checked},attrs:{"data-testid":"check-memory"},on:{click:function(e){return t.check({id:t.id})}}},[r("div",{staticClass:"card clickcard",class:{clicked:t.checked}},[r("div",{staticClass:"front face"}),t._v(" "),r("div",{staticClass:"back face"},[r("img",{attrs:{"data-testid":"img",src:t.urlImg,alt:""}})])])])}),[],!1,null,"043fb7ac",null);e.default=component.exports},264:function(t,e,r){"use strict";r.r(e);var n={name:"ResultGame",computed:{turns:function(){return this.$store.state.memory.turns},attempts:function(){return this.$store.state.memory.attempts},wins:function(){return this.$store.state.memory.wins}}},o=(r(271),r(51)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"results"},[r("div",{attrs:{"data-testid":"result-turns"}},[t._v("\n    TURNS: "),r("span",[t._v(t._s(t.turns))])]),t._v(" "),r("div",{attrs:{"data-testid":"result-attempts"}},[t._v("\n    ATTEMPTS: "),r("span",[t._v(t._s(t.attempts))])]),t._v(" "),r("div",{attrs:{"data-testid":"result-wins"}},[t._v("\n    WINS: "),r("span",[t._v(" "+t._s(t.wins))])])])}),[],!1,null,"92021250",null);e.default=component.exports},265:function(t,e,r){"use strict";var n=r(11),o=r(0),c=r(3),d=r(106),l=r(19),f=r(15),m=r(187),h=r(46),v=r(105),x=r(186),y=r(4),k=r(77).f,w=r(35).f,_=r(17).f,N=r(266),C=r(267).trim,E="Number",I=o.Number,M=I.prototype,T=o.TypeError,S=c("".slice),$=c("".charCodeAt),z=function(t){var e=x(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,n,o,c,d,l,code,f=x(t,"number");if(v(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(e=$(f,0))||45===e){if(88===(r=$(f,2))||120===r)return NaN}else if(48===e){switch($(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(d=(c=S(f,2)).length,l=0;l<d;l++)if((code=$(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(d(E,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var A,G=function(t){var e=arguments.length<1?0:I(z(t)),r=this;return h(M,r)&&y((function(){N(r)}))?m(Object(e),r,G):e},R=n?k(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),Y=0;R.length>Y;Y++)f(I,A=R[Y])&&!f(G,A)&&_(G,A,w(I,A));G.prototype=M,M.constructor=G,l(o,E,G)}},266:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},267:function(t,e,r){var n=r(3),o=r(22),c=r(12),d=r(268),l=n("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var r=c(o(e));return 1&t&&(r=l(r,m,"")),2&t&&(r=l(r,h,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},268:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},269:function(t,e,r){"use strict";r(261)},270:function(t,e,r){var n=r(103)(!1);n.push([t.i,'.clicked[data-v-043fb7ac]{transform:rotateY(180deg)}.clicked .front[data-v-043fb7ac]{box-shadow:0 0 0 #aaa}.clicked .back img[data-v-043fb7ac]{width:100%;height:100%}.disabled[data-v-043fb7ac]{pointer-events:none;cursor:default}@media(min-width:0px){.deck[data-v-043fb7ac]{width:22%;height:120px;position:relative;perspective:1000px;font-family:verdana;border-radius:10px;cursor:pointer}.deck .card[data-v-043fb7ac]{transform-style:preserve-3d;transition:all .5s linear}.deck .card[data-v-043fb7ac],.deck .face[data-v-043fb7ac]{width:100%;height:100%;border-radius:10px}.deck .face[data-v-043fb7ac]{position:absolute;background:url(/Memory-Card-Game/_nuxt/assets/img/jogo.png);-webkit-backface-visibility:hidden;backface-visibility:hidden;background-size:50% 80%;background-repeat:no-repeat;background-position:50%;background-color:#72e1dd}.deck .back[data-v-043fb7ac]{overflow:hidden;display:block;background:#fff!important;box-sizing:border-box}.deck .back[data-v-043fb7ac],.deck .back[data-v-043fb7ac]:before{z-index:-1;transform:rotateY(180deg)}.deck .back[data-v-043fb7ac]:before{content:"";position:absolute;width:100%;height:100%;background-size:100% 100%}}@media(min-width:850px){.deck[data-v-043fb7ac]{width:20%;height:170px}}',""]),t.exports=n},271:function(t,e,r){"use strict";r(262)},272:function(t,e,r){var n=r(103)(!1);n.push([t.i,"@media(min-width:0px){.results[data-v-92021250]{display:flex;width:100%;justify-content:space-around;margin-top:10px;margin-bottom:25px}.results div[data-v-92021250]{background:#fff;padding:10px;font-weight:bolder;font-size:18px}.results div span[data-v-92021250]{color:rgba(31,201,251,.96)}}@media(min-width:850px){.results[data-v-92021250]{width:40%;margin:0 auto}}",""]),t.exports=n},273:function(t,e,r){var content=r(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(104).default)("9f53900c",content,!0,{sourceMap:!1})},274:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(104).default)("5869ed44",content,!0,{sourceMap:!1})},275:function(t,e,r){"use strict";r(273)},276:function(t,e,r){var n=r(103)(!1);n.push([t.i,"@media(min-width:0px){.gamer[data-v-2f0e4810]{padding:12px 0;background:#4e4c4c;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);border-radius:15px;flex-direction:column}.gamer[data-v-2f0e4810],.gamer .cards[data-v-2f0e4810]{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;grid-gap:12px;gap:12px}}@media(min-width:850px){.gamer[data-v-2f0e4810]{width:60%;align-self:center;margin:10px 0}.gamer .cards[data-v-2f0e4810]{display:flex;flex-wrap:wrap;justify-content:space-around;grid-gap:12px;gap:12px;width:100%}}",""]),t.exports=n},277:function(t,e,r){"use strict";r(274)},278:function(t,e,r){var n=r(103)(!1);n.push([t.i,'@media(min-width:0px){.alert[data-v-9aa71eb2]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%;text-align:center;background-color:rgba(31,201,251,.96);z-index:999;opacity:1;grid-gap:20px;gap:20px;transform:translateZ(100px);transition:opacity .2s ease-out,transform 0s}.alert .title[data-v-9aa71eb2]{font-size:2.5rem;color:#fff}.alert .finally[data-v-9aa71eb2]{display:flex;grid-gap:10px;gap:10px;width:95%;justify-content:center}.alert .finally div[data-v-9aa71eb2]{background:#fff;padding:10px;font-weight:bolder;font-size:18px}.alert .finally div span[data-v-9aa71eb2]{color:rgba(31,201,251,.96)}.alert .btn[data-v-9aa71eb2]{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:40%;background-color:#fcfcfd;border-radius:4px;border-width:0;box-shadow:0 2px 4px rgba(45,35,66,.4),0 7px 13px -3px rgba(45,35,66,.3),inset 0 -3px 0 #d6d6e7;box-sizing:border-box;color:#36395a;cursor:pointer;display:inline-flex;font-family:"JetBrains Mono",monospace;height:48px;justify-content:center;line-height:1;list-style:none;overflow:hidden;padding-left:16px;padding-right:16px;position:relative;text-align:left;text-decoration:none;transition:box-shadow .15s,transform .15s;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;touch-action:manipulation;white-space:nowrap;will-change:box-shadow,transform;font-size:18px}.alert .btn[data-v-9aa71eb2]:focus{box-shadow:inset 0 0 0 1.5px #d6d6e7,0 2px 4px rgba(45,35,66,.4),0 7px 13px -3px rgba(45,35,66,.3),inset 0 -3px 0 #d6d6e7}.alert .btn[data-v-9aa71eb2]:hover{box-shadow:0 4px 8px rgba(45,35,66,.4),0 7px 13px -3px rgba(45,35,66,.3),inset 0 -3px 0 #d6d6e7;transform:translateY(-2px)}.alert .btn[data-v-9aa71eb2]:active{box-shadow:inset 0 3px 7px #d6d6e7;transform:translateY(2px)}}@media(min-width:1200px){.alert .title[data-v-9aa71eb2]{font-size:3.5rem}.alert .btn[data-v-9aa71eb2]{width:20%}}',""]),t.exports=n},279:function(t,e,r){"use strict";r.r(e);var n=r(263),o=r(264),c={name:"MemoryGame",components:{CardMemory:n.default,ResultGame:o.default},props:{cards:{type:Array,default:function(){return[]}}}},d=(r(275),r(51)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gamer"},[r("result-game"),t._v(" "),r("div",{staticClass:"cards"},t._l(t.cards,(function(t,e){return r("card-memory",{key:e,attrs:{id:t.id,"data-testid":"check-memory","url-img":t.img,checked:t.checked}})})),1)],1)}),[],!1,null,"2f0e4810",null);e.default=component.exports;installComponents(component,{ResultGame:r(264).default,CardMemory:r(263).default})},280:function(t,e,r){"use strict";r.r(e);var n={name:"AlertWins",computed:{turns:function(){return this.$store.state.memory.turns},attempts:function(){return this.$store.state.memory.attempts},wins:function(){return this.$store.state.memory.wins}},methods:{start:function(){this.$store.commit("memory/SET_ALERTWINS",!1)}}},o=(r(277),r(51)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert"},[r("h2",{staticClass:"title"},[t._v("You can do better!")]),t._v(" "),r("div",{staticClass:"finally"},[r("div",{attrs:{"data-testid":"result-turns"}},[t._v("\n      TURNS: "),r("span",[t._v(t._s(t.turns))])]),t._v(" "),r("div",{attrs:{"data-testid":"result-attempts"}},[t._v("\n      ATTEMPTS: "),r("span",[t._v(t._s(t.attempts))])]),t._v(" "),r("div",{attrs:{"data-testid":"result-wins"}},[t._v("\n      WINS: "),r("span",[t._v(t._s(t.wins))])])]),t._v(" "),r("button",{staticClass:"btn",attrs:{type:"button","data-testid":"continue"},on:{click:function(e){return t.start()}}},[t._v("\n    continue\n  ")])])}),[],!1,null,"9aa71eb2",null);e.default=component.exports},281:function(t,e,r){var content=r(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(104).default)("28f1127f",content,!0,{sourceMap:!1})},282:function(t){t.exports=JSON.parse('{"a":[{"id":1,"img":"https://i.postimg.cc/tCK3wygJ/jiraia.png","checked":false},{"id":2,"img":"https://i.postimg.cc/05HdG7Rp/levi.png","checked":false},{"id":3,"img":"https://i.postimg.cc/CxbGVtZN/naruto.png","checked":false},{"id":4,"img":"https://i.postimg.cc/BQL5mt4R/luffy.png","checked":false},{"id":5,"img":"https://i.postimg.cc/Jztbsndp/itati.png","checked":false},{"id":6,"img":"https://i.postimg.cc/7YH1yX18/saitama.png","checked":false},{"id":7,"img":"https://i.postimg.cc/qvY2yTP4/sasuke.png","checked":false},{"id":8,"img":"https://i.postimg.cc/nc34V7Ts/zoro.png","checked":false},{"id":9,"img":"https://i.postimg.cc/tCK3wygJ/jiraia.png","checked":false},{"id":10,"img":"https://i.postimg.cc/05HdG7Rp/levi.png","checked":false},{"id":11,"img":"https://i.postimg.cc/CxbGVtZN/naruto.png","checked":false},{"id":12,"img":"https://i.postimg.cc/BQL5mt4R/luffy.png","checked":false},{"id":13,"img":"https://i.postimg.cc/Jztbsndp/itati.png","checked":false},{"id":14,"img":"https://i.postimg.cc/7YH1yX18/saitama.png","checked":false},{"id":15,"img":"https://i.postimg.cc/qvY2yTP4/sasuke.png","checked":false},{"id":16,"img":"https://i.postimg.cc/nc34V7Ts/zoro.png","checked":false}]}')},283:function(t,e,r){"use strict";r(281)},284:function(t,e,r){var n=r(103)(!1);n.push([t.i,"@media(min-width:0px){.main{display:flex;flex-direction:column;height:100vh;justify-content:center}}@media(min-width:1050px){.main{height:100%}}",""]),t.exports=n},285:function(t,e,r){"use strict";r.r(e);var n=r(282),o=r(279),c=r(280),d={name:"IndexPage",components:{memoryGame:o.default,AlertWins:c.default},computed:{cards:function(){return this.$store.state.memory.mixedCard},alertWins:function(){return this.$store.state.memory.alertWins}},created:function(){this.get()},methods:{get:function(){this.$store.state.memory.mixedCard.length||this.$store.commit("memory/SET_MIXED",n.a)}}},l=(r(283),r(51)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("memory-game",{attrs:{cards:t.cards}}),t._v(" "),t.alertWins?r("alert-wins"):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MemoryGame:r(279).default,AlertWins:r(280).default})}}]);