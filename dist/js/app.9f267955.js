(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-04914318":"97ce6b34","chunk-2d0c898d":"0fc5969f","chunk-2d207958":"dd002fb0","chunk-33e26e3f":"f9d4c595","chunk-3f09ade2":"61978e6c","chunk-c5f39148":"c534f6f1","chunk-fecf7ac8":"e78005c9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-04914318":1,"chunk-33e26e3f":1,"chunk-3f09ade2":1,"chunk-c5f39148":1,"chunk-fecf7ac8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-04914318":"ca9a5a79","chunk-2d0c898d":"31d6cfe0","chunk-2d207958":"31d6cfe0","chunk-33e26e3f":"9ec97bad","chunk-3f09ade2":"b7daa9d6","chunk-c5f39148":"a05e3f60","chunk-fecf7ac8":"c2d4d076"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/homepage/dist/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"nav"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Lorenzo")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e._l(e.menus,(function(t){return n("b-navbar-nav",{key:t.title,staticClass:"enzo-nav-items"},[0==t.sub.length?n("b-nav-item",{attrs:{href:"#"}},[n("router-link",{attrs:{to:t.linkTo}},[e._v(e._s(e.$t(t.title)))])],1):e._e(),t.sub.length>0?n("b-nav-item-dropdown",{attrs:{text:e.$t(t.title)}},e._l(t.sub,(function(t){return n("b-dropdown-item",{key:t.title,staticClass:"enzo-nav-items-dropdown",attrs:{href:"#"}},[n("router-link",{attrs:{to:t.linkTo}},[e._v(e._s(e.$t(t.title)))])],1)})),1):e._e()],1)})),n("b-navbar-nav",{staticClass:"ml-auto"})],2)],1)],1)]),n("div",{attrs:{id:"container"}},[n("router-view")],1),n("div",{attrs:{id:"footer"}})])},o=[],u=n("a925");r["default"].use(u["a"]);var c={en:{lang:"Lang",goRepository:"Go Repository",more:"More",shortcut:"Shortcut",menuAboutMe:"About me",menuProject:"Project",menuProjectSubSmartFactory:"SmartFactory",menuProjectSubAndroid:"Android",menuStudy:"Study",menuEtc:"ETC",menuGithub:"Github",presentName:"Seonu, Kim",presentBirthday:"1988. 11. 11",presentMotto:"Motto: Let's live without regret",presentEducation:"Education",presentEducationMsg:"Dongguk Univ. Computer Engineering",presentCareer:"Career",presentCareerMsg:"2016. 11 ~ 2019. 6 Cubictek",presentProject:"Project",presentProjectMsg:"[Android] KPOP-Diary\n      <br/>[SmartFactory] SMA\n      <br/>[SmartFactory] IJS\n      <br/>[SmartFactory] NEDEC\n      <br/>[SmartFactory] DHAC\n      <br/>Windows -> Linux Server Change Setting\n      <br/>Signal acquisition used Focas library(FANUC)\n      <br/>[SmartFactory] Wonpoong\n      <br/>[SmartFactory] KOREA POLYTECHNICS Training Setting\n      <br/>Add Web Designer Responsibilities\n      <br/>[SmartFactory] JRT\n      <br/>[SmartFactory] Sungam\n      <br/>[SmartFactory] TOPIND\n      <br/>[SmartFactory] FELIX\n      <br/>[SmartFactory] DONGYANG MIRAE Univ. Training Setting\n      <br/>[Android] OverCam"},kr:{lang:"언어",goRepository:"저장소 바로가기",more:"더보기",shortcut:"바로가기",menuAboutMe:"내 정보",menuProject:"프로젝트",menuProjectSubSmartFactory:"스마트팩토리",menuProjectSubAndroid:"안드로이드",menuStudy:"연구",menuEtc:"기타",menuGithub:"Github",presentName:"김선우",presentBirthday:"1988. 11. 11",presentMotto:"좌우명: 후회없이 살자",presentEducation:"학력",presentEducationMsg:"동국대학교. 컴퓨터공학과",presentCareer:"경력",presentCareerMsg:"2016. 11 ~ 2019. 6 큐빅테크",presentProject:"프로젝트",presentProjectMsg:"[안드로이드] KPOP-Diary\n      <br/>[스마트팩토리] SMA\n      <br/>[스마트팩토리] IJS\n      <br/>[스마트팩토리] NEDEC\n      <br/>[스마트팩토리] DHAC\n      <br/>윈도우 -> 리눅스 서버 환경 구축\n      <br/>Focas 라이브러리 (FANUC)를 이용한 신호취득\n      <br/>[스마트팩토리] 원풍산업\n      <br/>[스마트팩토리] 청주폴리텍 체험환경\n      <br/>반응형 웹 디자인 정리\n      <br/>[스마트팩토리] 주강로보테크\n      <br/>[스마트팩토리] 성암기연\n      <br/>[스마트팩토리] 탑아이엔디\n      <br/>[스마트팩토리] 펠릭스테크\n      <br/>[스마트팩토리] 동양미래대학 체험환경\n      <br/>[안드로이드] 오버캠"}},i=new u["a"]({locale:"kr",fallbackLocale:"en",messages:c}),s={name:"App",data:function(){return{LoadingStatus:!1,menus:[{linkTo:"/",title:"menuAboutMe",sub:[]},{linkTo:"/project",title:"menuProject",sub:[{linkTo:"/project/smart_factory",title:"menuProjectSubSmartFactory"},{linkTo:"/project/android",title:"menuProjectSubAndroid"}]},{linkTo:"/github",title:"menuGithub",sub:[]}],languages:[{flag:"kr",language:"kr",title:"한국어"},{flag:"us",language:"en",title:"English"}]}},methods:{changeLocale:function(e){i.locale=e}}},l=s,d=(n("5c0b"),n("2877")),f=Object(d["a"])(l,a,o,!1,null,null,null),b=f.exports,p=(n("d3b7"),n("8c4f"));r["default"].use(p["a"]);var m=[{path:"/",name:"home",component:function(){return n.e("chunk-c5f39148").then(n.bind(null,"bb51"))}},{path:"/project/smart_factory",name:"sub_smartfactory",component:function(){return n.e("chunk-fecf7ac8").then(n.bind(null,"bde9"))}},{path:"/project/android",name:"sub_android",component:function(){return n.e("chunk-33e26e3f").then(n.bind(null,"a4d8"))}},{path:"/study",name:"study",component:function(){return n.e("chunk-2d0c898d").then(n.bind(null,"560f"))}},{path:"/etc",name:"etc",component:function(){return n.e("chunk-2d207958").then(n.bind(null,"a0c6"))}},{path:"/resume",name:"resume",component:function(){return n.e("chunk-3f09ade2").then(n.bind(null,"1ba2"))}},{path:"/github",name:"github",component:function(){return n.e("chunk-04914318").then(n.bind(null,"4a1b"))}}],h=new p["a"]({mode:"history",base:"/homepage/dist/",scrollBehavior:function(e,t,n){return n||{x:0,y:0}},routes:m}),g=h,v=n("2f62");r["default"].use(v["a"]);var y=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}}),k=n("d61f"),S=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(k["a"]),r["default"].use(S["a"]),r["default"].config.productionTip=!1,new r["default"]({i18n:i,router:g,store:y,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.9f267955.js.map