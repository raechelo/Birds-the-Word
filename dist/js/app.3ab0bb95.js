(function(t){function r(r){for(var n,a,i=r[0],c=r[1],d=r[2],l=0,f=[];l<i.length;l++)a=i[l],o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(r);while(f.length)f.shift()();return s.push.apply(s,d||[]),e()}function e(){for(var t,r=0;r<s.length;r++){for(var e=s[r],n=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(n=!1)}n&&(s.splice(r--,1),t=a(a.s=e[0]))}return t}var n={},o={app:0},s=[];function a(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=n,a.d=function(t,r,e){a.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,r){if(1&r&&(t=a(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)a.d(e,n,function(r){return t[r]}.bind(null,n));return e},a.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(r,"a",r),r},a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var d=0;d<i.length;d++)r(i[d]);var u=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"02cb":function(t,r,e){t.exports=e.p+"img/bird.769de31a.svg"},"034f":function(t,r,e){"use strict";var n=e("64a9"),o=e.n(n);o.a},"05e7":function(t,r,e){"use strict";var n=e("800f"),o=e.n(n);o.a},3913:function(t,r,e){"use strict";var n=e("4770"),o=e.n(n);o.a},4770:function(t,r,e){},"4a7a":function(t,r,e){t.exports=e.p+"img/owl.4ce2284e.svg"},"4f2d":function(t,r,e){},"56d7":function(t,r,e){"use strict";e.r(r);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("Header"),e("Form",{on:{"search-word":t.searchWord}}),e("SearchedWord",{attrs:{word:t.searchedWord}}),t._l(t.words,function(r){return e("div",{key:r.uuid,staticClass:"results"},[e("Word",{attrs:{word:r},on:{"search-word":t.searchWord}})],1)})],2)},s=[],a=e("7618"),i="e410f607-1212-4abe-8ffa-738a1eb1dd5e",c=i,d=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("header",[n("img",{staticClass:"header-bird",attrs:{src:e("02cb"),alt:"bird"}}),n("img",{staticClass:"header-bird",attrs:{src:e("8457"),alt:"flamingo"}}),n("img",{staticClass:"header-bird",attrs:{src:e("79a7"),alt:"toucan"}}),n("h1",{staticClass:"header"},[t._v("Bird's the Word")]),n("img",{staticClass:"header-bird",attrs:{src:e("9d0d"),alt:"penguin"}}),n("img",{staticClass:"header-bird",attrs:{src:e("ee76"),alt:"humming-bird"}}),n("img",{staticClass:"header-bird",attrs:{src:e("4a7a"),alt:"owl"}})])}],l={name:"Header"},f=l,p=(e("8b1e"),e("2877")),m=Object(p["a"])(f,d,u,!1,null,"3949853b",null),h=m.exports,w=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("form",{staticClass:"Form",on:{submit:t.searchWord}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],staticClass:"form-input",attrs:{type:"text",name:"word",placeholder:"find synonyms..."},domProps:{value:t.word},on:{input:function(r){r.target.composing||(t.word=r.target.value)}}}),e("input",{staticClass:"form-submit",attrs:{type:"submit"}})])},v=[],b={name:"Form",data:function(){return{word:""}},methods:{searchWord:function(t){t.preventDefault(),this.$emit("search-word",this.word),this.word=""}}},y=b,g=(e("05e7"),Object(p["a"])(y,w,v,!1,null,"4269773e",null)),_=g.exports,x=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h3",[t._v(t._s(t.word))])])},j=[],C={name:"SearchedWord",props:["word"]},O=C,W=Object(p["a"])(O,x,j,!1,null,"06bf5026",null),$=W.exports,S=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"word"},[e("article",{staticClass:"word-info"},[e("span",{staticClass:"indiv-word",on:{click:function(r){return t.$emit("search-word",t.word)}}},[t._v(t._s(t.word.word))]),e("span",{staticClass:"word-type"},[t._v("["+t._s(t.word.type)+"]")]),e("span",{staticClass:"word-def"},[t._v(t._s(t.word.def[0]))])]),t._l(t.word.syns,function(r){return e("article",{key:r.id,staticClass:"word-syns"},[e("Synonyms",{attrs:{synonym:r},on:{"search-word":function(e){return t.$emit("search-word",r.word)}}})],1)})],2)},k=[],E=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("span",{staticClass:"syns"},[e("span",{staticClass:"syn",on:{click:function(r){return t.$emit("search-word",t.synonym.word)}}},[t._v(t._s(t.synonym.word))])])},P=[],F={name:"Synonyms",props:["synonym"]},M=F,H=(e("3913"),Object(p["a"])(M,E,P,!1,null,"699f06d2",null)),T=H.exports,I={name:"Word",components:{Synonyms:T},props:["word"]},J=I,B=(e("c959"),Object(p["a"])(J,S,k,!1,null,null,null)),D=B.exports,N=e("11c1"),q=e.n(N),z={name:"app",components:{Header:h,Form:_,SearchedWord:$,Word:D},data:function(){return{searchedWord:"",words:[]}},props:["word"],methods:{searchWord:function(t){var r=this;console.log(Object(a["a"])(t)),t="object"===Object(a["a"])(t)?t.word:t,this.searchedWord=t,fetch("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/".concat(t,"?key=").concat(c)).then(function(t){return t.json()}).then(function(t){return r.words=t}).then(function(t){return r.addId()}).catch(function(t){return console.log(t)})},addId:function(){this.words=this.words.map(function(t){return{word:t.hwi.hw,def:t.shortdef,type:t.fl,syns:t.meta.syns.flat().map(function(t){return{word:t,id:q.a.v4()}})}})}}},A=z,G=(e("034f"),Object(p["a"])(A,o,s,!1,null,null,null)),K=G.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(K)}}).$mount("#app")},"64a9":function(t,r,e){},"79a7":function(t,r,e){t.exports=e.p+"img/toucan.0cd968a5.svg"},"800f":function(t,r,e){},8457:function(t,r,e){t.exports=e.p+"img/flamingo.64b233d0.svg"},"8b1e":function(t,r,e){"use strict";var n=e("4f2d"),o=e.n(n);o.a},"8fc9":function(t,r,e){},"9d0d":function(t,r,e){t.exports=e.p+"img/penguin.4b1d8009.svg"},c959:function(t,r,e){"use strict";var n=e("8fc9"),o=e.n(n);o.a},ee76:function(t,r,e){t.exports=e.p+"img/humming-bird.f920a262.svg"}});
//# sourceMappingURL=app.3ab0bb95.js.map