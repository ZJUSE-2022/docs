"use strict";(self.webpackChunkfrontend_docs=self.webpackChunkfrontend_docs||[]).push([[920],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),c=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=c(n),k=a,u=N["".concat(d,".").concat(k)]||N[k]||o[k]||l;return n?r.createElement(u,i(i({ref:e},m),{},{components:n})):r.createElement(u,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},2502:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return o}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:3},d=void 0,c={unversionedId:"database",id:"database",title:"database",description:"E-R Model",source:"@site/docs/database.md",sourceDirName:".",slug:"/database",permalink:"/docs/database",editUrl:"https://github.com/ZJUSE-2022/docs/blob/main/docs/database.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u63a5\u53e3\u6587\u6863",permalink:"/docs/api"}},m={},o=[{value:"E-R Model",id:"e-r-model",level:2},{value:"DDL",id:"ddl",level:2},{value:"Schema",id:"schema",level:2},{value:"User--\u4e2a\u4eba\u4fe1\u606f",id:"user--\u4e2a\u4eba\u4fe1\u606f",level:3},{value:"Arrange--\u533b\u751f\u6392\u73ed\u4fe1\u606f",id:"arrange--\u533b\u751f\u6392\u73ed\u4fe1\u606f",level:3},{value:"doctorInfo--\u533b\u751f\u4fe1\u606f",id:"doctorinfo--\u533b\u751f\u4fe1\u606f",level:3}],N={toc:o};function k(t){var e=t.components,p=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},N,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,l.kt)("h2",{id:"e-r-model"},"E-R Model"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"table",src:n(7916).Z,width:"805",height:"493"})),(0,l.kt)("h2",{id:"ddl"},"DDL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table USER\n(\n    ID        INTEGER auto_increment\n        primary key,\n    REAL_NAME VARCHAR(255),\n    PASSWORD  VARCHAR(255),\n    ROLE      VARCHAR(255),\n    USER_NAME VARCHAR(255)\n        constraint UK4BAKCTVIOBMDK6DDH2NWG08C2\n            unique\n);\n\ncreate table DOCTOR_INFO\n(\n    ID         INTEGER auto_increment\n        primary key,\n    DEPARTMENT VARCHAR(255),\n    HOSPITAL   VARCHAR(255),\n    USER_ID    INTEGER,\n    constraint FK9B6UHWG0FVWHIE0IODI3SO2HQ\n        foreign key (USER_ID) references USER (ID)\n);\n\ncreate table ARRANGE\n(\n    ID         INTEGER auto_increment\n        primary key,\n    DAY_TYPE   VARCHAR(255),\n    END_TIME   TIME,\n    START_TIME TIME,\n    USER_ID    INTEGER,\n    constraint FKE3R03RG7BY376CH5IOWCCAWN6\n        foreign key (USER_ID) references USER (ID)\n);\n")),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("h3",{id:"user--\u4e2a\u4eba\u4fe1\u606f"},"User--\u4e2a\u4eba\u4fe1\u606f"),(0,l.kt)("p",null,"User(id,userName,password,realName,role)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u53ef\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u4e3b\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u552f\u4e00\u6807\u8bc6\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:"center"},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u79f0(\u552f\u4e00)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"role"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ENUM"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u7c7b\u578b\u5305\u62ec\u4e09\u79cd\u89d2\u8272")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:"center"},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"realName"),(0,l.kt)("td",{parentName:"tr",align:"center"},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u771f\u5b9e\u540d\u79f0")))),(0,l.kt)("h3",{id:"arrange--\u533b\u751f\u6392\u73ed\u4fe1\u606f"},"Arrange--\u533b\u751f\u6392\u73ed\u4fe1\u606f"),(0,l.kt)("p",null,"Arrange(id,start_time,end_time,dayType)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u53ef\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u4e3b\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"start_time"),(0,l.kt)("td",{parentName:"tr",align:"center"},"datetime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u65e5\u503c\u73ed\u5f00\u59cb\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"end_time"),(0,l.kt)("td",{parentName:"tr",align:"center"},"datetime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u65e5\u503c\u73ed\u7ed3\u675f\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"dayType"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ENUM"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u7c7b\u578b\u5305\u62ec\u5468\u4e00\u81f3\u5468\u65e5"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"doctorinfo--\u533b\u751f\u4fe1\u606f"},"doctorInfo--\u533b\u751f\u4fe1\u606f"),(0,l.kt)("p",null,"docterInfo(id,department,hospital)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u53ef\u4e3a\u7a7a"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u4e3b\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"department"),(0,l.kt)("td",{parentName:"tr",align:"center"},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u533b\u751f\u6240\u5c5e\u90e8\u95e8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"hospital"),(0,l.kt)("td",{parentName:"tr",align:"center"},"varchar(255)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u533b\u751f\u6240\u5c5e\u533b\u9662")))))}k.isMDXComponent=!0},7916:function(t,e,n){e.Z=n.p+"assets/images/table-2ff7abb833d05bb4c6fdc98b5e2be792.png"}}]);