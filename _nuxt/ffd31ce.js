(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{269:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("5869ed44",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(269)},274:function(t,e,n){var r=n(103)(!1);r.push([t.i,'@media(min-width:0px){.alert[data-v-9aa71eb2]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%;text-align:center;background-color:rgba(31,201,251,.96);z-index:999;opacity:1;grid-gap:20px;gap:20px;transform:translateZ(100px);transition:opacity .2s ease-out,transform 0s}.alert .title[data-v-9aa71eb2]{font-size:2.5rem;color:#fff}.alert .finally[data-v-9aa71eb2]{display:flex;grid-gap:10px;gap:10px;width:95%;justify-content:center}.alert .finally div[data-v-9aa71eb2]{background:#fff;padding:10px;font-weight:bolder;font-size:18px}.alert .finally div span[data-v-9aa71eb2]{color:rgba(31,201,251,.96)}.alert .btn[data-v-9aa71eb2]{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:40%;background-color:#fcfcfd;border-radius:4px;border-width:0;box-shadow:0 2px 4px rgba(45,35,66,.4),0 7px 13px -3px rgba(45,35,66,.3),inset 0 -3px 0 #d6d6e7;box-sizing:border-box;color:#36395a;cursor:pointer;display:inline-flex;font-family:"JetBrains Mono",monospace;height:48px;justify-content:center;line-height:1;list-style:none;overflow:hidden;padding-left:16px;padding-right:16px;position:relative;text-align:left;text-decoration:none;transition:box-shadow .15s,transform .15s;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;touch-action:manipulation;white-space:nowrap;will-change:box-shadow,transform;font-size:18px}.alert .btn[data-v-9aa71eb2]:focus{box-shadow:inset 0 0 0 1.5px #d6d6e7,0 2px 4px rgba(45,35,66,.4),0 7px 13px -3px rgba(45,35,66,.3),inset 0 -3px 0 #d6d6e7}.alert .btn[data-v-9aa71eb2]:hover{box-shadow:0 4px 8px rgba(45,35,66,.4),0 7px 13px -3px rgba(45,35,66,.3),inset 0 -3px 0 #d6d6e7;transform:translateY(-2px)}.alert .btn[data-v-9aa71eb2]:active{box-shadow:inset 0 3px 7px #d6d6e7;transform:translateY(2px)}}@media(min-width:1200px){.alert .title[data-v-9aa71eb2]{font-size:3.5rem}.alert .btn[data-v-9aa71eb2]{width:20%}}',""]),t.exports=r},278:function(t,e,n){"use strict";n.r(e);var r={name:"AlertWins",computed:{turns:function(){return this.$store.state.memory.turns},attempts:function(){return this.$store.state.memory.attempts},wins:function(){return this.$store.state.memory.wins}},methods:{start:function(){this.$store.commit("memory/SET_ALERTWINS",!1)}}},o=(n(273),n(51)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"},[n("h2",{staticClass:"title"},[t._v("You can do better!")]),t._v(" "),n("div",{staticClass:"finally"},[n("div",{attrs:{"data-testid":"result-turns"}},[t._v("\n      TURNS: "),n("span",[t._v(t._s(t.turns))])]),t._v(" "),n("div",{attrs:{"data-testid":"result-attempts"}},[t._v("\n      ATTEMPTS: "),n("span",[t._v(t._s(t.attempts))])]),t._v(" "),n("div",{attrs:{"data-testid":"result-wins"}},[t._v("\n      WINS: "),n("span",[t._v(t._s(t.wins))])])]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button","data-testid":"continue"},on:{click:function(e){return t.start()}}},[t._v("\n    continue\n  ")])])}),[],!1,null,"9aa71eb2",null);e.default=component.exports}}]);