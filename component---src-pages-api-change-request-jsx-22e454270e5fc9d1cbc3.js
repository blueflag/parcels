(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{375:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(369),o=t(368),p=t(9),b=t.n(p),m=t(69),r=t.n(m),N=t(79),l=t(367),d=(t(371),t(391),{_frontmatter:{}}),u="wrapper";function i(e){var a=e.components,t=r()(e,["components"]);return Object(N.b)(u,b()({},d,t,{components:a,mdxType:"MDXLayout"}),Object(N.b)("h1",{id:"changerequest"},"ChangeRequest"),Object(N.b)("p",null,"When a change occurs, ChangeRequests are used by Parcels to describe what to change and how to change it. These ChangeRequests are propagated upward to the top level Parcel."),Object(N.b)("p",null,"ChangeRequests contain an array of actions to perform."),Object(N.b)("p",null,"ChangeRequests can most often be accessed in ",Object(N.b)("inlineCode",{parentName:"p"},"handleChange")," and ",Object(N.b)("inlineCode",{parentName:"p"},"modifyUp")," functions. Most of the time these operate invisibly, and it's rare that you'll create these yourself."),Object(N.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-js"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-js"}),Object(N.b)("span",b()({parentName:"code"},{className:"token keyword"}),"import")," ChangeRequest ",Object(N.b)("span",b()({parentName:"code"},{className:"token keyword"}),"from")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token string"}),"'dataparcels/ChangeRequest'"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(N.b)("span",b()({parentName:"code"},{className:"token keyword"}),"import")," ChangeRequest ",Object(N.b)("span",b()({parentName:"code"},{className:"token keyword"}),"from")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token string"}),"'react-dataparcels/ChangeRequest'"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";")))),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),Object(N.b)("span",b()({parentName:"code"},{className:"token keyword"}),"new")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token class-name"}),"ChangeRequest"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"{"),"\n   action",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Action",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"|"),"Action",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"=")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"}"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";")))),Object(N.b)("h2",{id:"properties"},Object(N.b)(l.d,{textStyle:"weaker",mdxType:"Text"},"Properties")),Object(N.b)("h3",{id:"prevdata"},"prevData"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"prevData",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"Object")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"ParcelData",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")")))),Object(N.b)("p",null,"Returns the Parcels data before the change was applied."),Object(N.b)("h3",{id:"nextdata"},"nextData"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"nextData",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"Object")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"ParcelData",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")")))),Object(N.b)("p",null,"Returns the Parcels data after the change was applied."),Object(N.b)("h3",{id:"originid"},"originId"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"originId",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"string")))),Object(N.b)("p",null,"Returns the id of the Parcel that initiated the change request."),Object(N.b)("h3",{id:"originpath"},"originPath"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"originPath",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Array",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"<"),Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"number"),Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"|"),Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"string"),Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),">")))),Object(N.b)("p",null,"Returns the path of the Parcel that initiated the change request."),Object(N.b)("h3",{id:"actions"},"actions"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"actions",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Array",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"<"),"Action",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),">")))),Object(N.b)("p",null,"Returns the array of actions that this ChangeRequest contains. These actions are reduced onto ",Object(N.b)("inlineCode",{parentName:"p"},"prevData")," to produce ",Object(N.b)("inlineCode",{parentName:"p"},"nextData"),"."),Object(N.b)("h2",{id:"methods"},Object(N.b)(l.d,{textStyle:"weaker",mdxType:"Text"},"Methods")),Object(N.b)("h3",{id:"hasvaluechanged"},"hasValueChanged()"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"hasValueChanged"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"keyPath",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Array",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"<"),Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"string"),Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"|"),Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"number"),Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),">"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"boolean")))),Object(N.b)("p",null,"Return a boolean indicating if the value at the given ",Object(N.b)("inlineCode",{parentName:"p"},"keyPath")," has changed any of its data as a result of this ChangeRequest."),Object(N.b)("h3",{id:"hasdatachanged"},"hasDataChanged()"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"hasDataChanged"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"keyPath",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Array",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"<"),Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"string"),Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"|"),Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"number"),Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),">"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"boolean")))),Object(N.b)("p",null,"Return a boolean indicating if the value or meta at the given ",Object(N.b)("inlineCode",{parentName:"p"},"keyPath")," has changed any of its data as a result of this ChangeRequest."),Object(N.b)("h3",{id:"getdatain"},"getDataIn()"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"getDataIn"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"keyPath",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Array",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"<"),Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"string"),Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"|"),Object(N.b)("span",b()({parentName:"code"},{className:"token type tag"}),"number"),Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),">"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Object"))),Object(N.b)("p",null,"A convenience method for returning the previous and next data for a Parcel at the given ",Object(N.b)("inlineCode",{parentName:"p"},"keyPath"),"."),Object(N.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-js"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-js"}),Object(N.b)("span",b()({parentName:"code"},{className:"token keyword"}),"let")," parcel ",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"=")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token keyword"}),"new")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token class-name"}),"Parcel"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(N.b)("span",b()({parentName:"code"},{className:"token function-variable function"}),"handleChange"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(N.b)("span",b()({parentName:"code"},{className:"token parameter"}),"parcel",Object(N.b)("span",b()({parentName:"span"},{className:"token punctuation"}),",")," changeRequest"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token operator"}),"=>")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"{"),"\n        console",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"."),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"log"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"changeRequest",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"."),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"getDataIn"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),Object(N.b)("span",b()({parentName:"code"},{className:"token string"}),"'abc'"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),",")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token string"}),"'def'"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"// ^ the above logs out"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"// {"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//     prev: {"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//         value: 123,"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//         meta: {},"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//         ..."),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//     },"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//     next: {"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//         value: 456,"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//         meta: {},"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//         ..."),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"//     }"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"// }"),"\n    ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"}"),"\n    value",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"{"),"\n        abc",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"{"),"\n            def",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(N.b)("span",b()({parentName:"code"},{className:"token number"}),"123"),"\n        ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"}"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";"),"\n\nparcel\n    ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"."),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"get"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(N.b)("span",b()({parentName:"code"},{className:"token string"}),"'abc'"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"."),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"get"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(N.b)("span",b()({parentName:"code"},{className:"token string"}),"'def'"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"."),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"set"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(N.b)("span",b()({parentName:"code"},{className:"token number"}),"456"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(N.b)("span",b()({parentName:"code"},{className:"token comment"}),"// ^ sets abc.def to 456")))),Object(N.b)("h3",{id:"merge"},"merge()"),Object(N.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(N.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(N.b)("code",b()({parentName:"pre"},{className:"language-flow"}),Object(N.b)("span",b()({parentName:"code"},{className:"token function"}),"merge"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"other",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ChangeRequest",Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(N.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ChangeRequest"))),Object(N.b)("p",null,"Merges the ",Object(N.b)("inlineCode",{parentName:"p"},"other")," ChangeRequest onto this ChangeRequest. Actions from ",Object(N.b)("inlineCode",{parentName:"p"},"other")," are appended to the current ChangeRequest. As a performance boost, if two subsequent ",Object(N.b)("inlineCode",{parentName:"p"},"set")," actions with the same ",Object(N.b)("inlineCode",{parentName:"p"},"keyPath")," are merged into each other, the first will be removed."))}i.isMDXComponent=!0;var j=t(370);a.default=function(){return c.a.createElement(s.a,null,c.a.createElement(o.b,{pageTop:!0,pageBottom:!0,mdxHeading:!0,nav:j.a,pageNav:["# ChangeRequest","# Properties","prevData","nextData","originId","originPath","actions","# Methods","hasValueChanged","hasDataChanged","getDataIn","merge"]},c.a.createElement(i,null)))}},391:function(e,a,t){e.exports=t.p+"static/parcelboundary-5bba317ea1b577eed32a29c39e7dd55c.gif"}}]);
//# sourceMappingURL=component---src-pages-api-change-request-jsx-22e454270e5fc9d1cbc3.js.map