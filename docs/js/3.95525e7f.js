(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"410d":function(t,a,e){"use strict";e("de1d")},ad6da:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content q-pt-md"},[e("q-toolbar",{staticClass:"justify-center text-bold"},[t._v("채팅하기\n  ")]),e("div",{staticClass:"row"},[e("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/detail"}},[e("q-btn",{attrs:{flat:"",label:"< Back"}})],1),e("q-space"),e("q-btn",{attrs:{flat:"",icon:"mdi-magnify"}})],1),e("hr"),e("div",{staticClass:"q-pa-md row justify-center",staticStyle:{height:"450px"}},[e("div",{staticStyle:{width:"100%","max-width":"400px"}},[e("q-chat-message",{attrs:{name:"나",text:["안녕하세요~"],sent:""}}),e("q-chat-message",{attrs:{name:"나",text:["아직 구매 가능한가요??"],sent:""}}),e("q-chat-message",{attrs:{name:"판매자",text:["네, 가능합니다 !!"]}})],1)]),e("hr"),e("div",{staticClass:"row justify-center"},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"detail"}},[e("q-btn",{staticClass:"chat__btn text-bold",attrs:{label:"상품창"}})],1),e("q-btn",{staticClass:"chat__btn text-bold",attrs:{label:"예약하기"},on:{click:t.alert}})],1)],1)},n=[],i={name:"Chatting",data:function(){return{}},methods:{alert:function(){var t=this;this.$q.dialog({title:"예약하기",message:"예약이 성공적으로 완료되었습니다.",ok:!0}).onOk((function(){t.$router.push("/detail")}))}}},c=i,l=(e("410d"),e("2877")),o=e("65c6"),r=e("9c40"),d=e("2c91"),u=e("8169"),b=e("eebe"),h=e.n(b),m=Object(l["a"])(c,s,n,!1,null,null,null);a["default"]=m.exports;h()(m,"components",{QToolbar:o["a"],QBtn:r["a"],QSpace:d["a"],QChatMessage:u["a"]})},de1d:function(t,a,e){}}]);