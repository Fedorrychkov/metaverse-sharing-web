(this["webpackJsonpmetaverse-sharing-web"]=this["webpackJsonpmetaverse-sharing-web"]||[]).push([[0],{280:function(e,t,n){},294:function(e,t){},317:function(e,t){},319:function(e,t){},395:function(e,t){},397:function(e,t){},429:function(e,t){},434:function(e,t){},436:function(e,t){},443:function(e,t){},456:function(e,t){},538:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(22),s=n.n(i),o=n(32),l=n(576),d=(n(279),n(280),n(21)),b=n(55),u=n(574),j=n(578),f=n(258),h=n(573),m=n(580),x=n(571),p=n(572),O=n(25),g=n.n(O),y=n(49),v=n(58),w=n(12),k=n(152),C=n.n(k),N=new function e(){var t=this;Object(w.a)(this,e),this.web3=void 0,this.account=null,this.networkType="",this.init=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.prepareWeb3();case 2:return e.next=4,t.fetchNetworkName();case 4:case"end":return e.stop()}}),e)}))),this.addListeners=function(){window.ethereum.on("disconnect",(function(e){console.log(e,"disconnect error")})),window.ethereum.on("connect",(function(e){console.log(e,"connect error")}))},this.connectWithMetamask=function(){if(!t.ethEnabled())throw Error("Please install MetaMask to use this dApp!")},this.disconnectAccount=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts",params:[{eth_accounts:{}}]});case 2:t.account=null;case 3:case"end":return e.stop()}}),e)}))),this.ethEnabled=function(){return!!window.ethereum&&(window.ethereum.enable(),!0)},this.fetchNetworkName=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.web3;case 2:if(e.t0=e.sent,!e.t0){e.next=5;break}e.t0=t.web3.eth.net.getNetworkType();case 5:return t.networkType=e.t0,e.abrupt("return",t.networkType);case 7:case"end":return e.stop()}}),e)}))),this.fetchAccount=Object(y.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.web3,!e.t0){e.next=5;break}return e.next=4,t.web3.eth.getAccounts();case 4:e.t0=e.sent;case 5:if(!(n=e.t0)||!n.length){e.next=9;break}return t.account=n[0],e.abrupt("return",t.account);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)}))),this.hasWeb3=function(){return!!t.web3||!!window.web3||!!window.ethereum},this.getAccoount=function(){return t.account},this.getNetworkName=function(){return t.networkType},this.isMainNetwork=function(){return"main"===t.networkType},this.prepareWeb3=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=3;break}return console.error("Need web3 provider in window"),e.abrupt("return");case 3:return t.web3=new C.a(window.ethereum||C.a.givenProvider),t.addListeners(),e.abrupt("return",t.web3);case 6:case"end":return e.stop()}}),e)}))),this.init()},A=function(){var e=Object(c.useState)(!1),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(v.a)(r,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){if(N.hasWeb3())return a(!0);a(!1)}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.fetchAccount();case 2:(t=e.sent)&&o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=setInterval((function(){e()}),1e3);return function(){clearInterval(t)}}),[]),{hasWeb3:n,account:s,handleConnectWithMetamask:Object(c.useCallback)((function(){return N.connectWithMetamask()}),[]),handleDisconnectFromMetamask:Object(c.useCallback)(Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.disconnectAccount();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),[])}},W=function(e,t){return t&&t-5<e.length?"".concat(e.slice(0,t-5),"...").concat(e.slice(-4)):e},S=n(2),T=function(){var e=A(),t=e.hasWeb3,n=e.account,a=void 0===n?"":n,r=e.handleConnectWithMetamask,i=e.handleDisconnectFromMetamask,s=Object(c.useMemo)((function(){return W(a,12)}),[a]),o=I(),l=Object(c.useCallback)((function(){a?i():r()}),[a,r,i]);return t?Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(p.a,{className:"".concat(o.btn," ").concat(o.hasAccount),onClick:l,children:a?Object(S.jsx)(M,{displayedAddress:s}):"Connect wallet"})}):Object(S.jsx)(m.a,{title:"Need web3 provider",children:Object(S.jsx)(x.a,{className:o.btn,href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer",children:Object(S.jsx)(f.a,{children:"Install MetaMask"})})})},M=function(e){var t=e.displayedAddress,n=I();return Object(S.jsx)(j.a,{className:n.account,children:Object(S.jsx)(f.a,{children:t})})},I=Object(h.a)({btn:{borderRadius:0,border:"1px solid #fdff88",color:"#fdff88",padding:"14px 10px",maxWidth:182,display:"block",textAlign:"center","&:hover":{textDecoration:"none"}},hasAccount:{width:"100%",minHeight:60},account:{display:"flex",justifyContent:"center",alignItems:"center"},avatar:{borderRadius:50,marginRight:12}}),F=n.p+"static/media/logo.d2086062.svg",D=function(){var e=B(),t=Object(o.c)((function(e){return e.domains})).fetchedDomains,n=Object(c.useMemo)((function(){return t.length}),[t]),a=Object(c.useMemo)((function(){return t.filter((function(e){return e.isAvailable})).length}),[t]);return Object(S.jsx)(j.a,{component:"header",py:4,children:Object(S.jsx)(u.a,{children:Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(S.jsxs)(j.a,{flex:1,children:[Object(S.jsx)(b.b,{to:"/",children:Object(S.jsx)("img",{src:F,alt:""})}),Object(S.jsx)(f.a,{color:"primary",className:e.title,children:"#TheMetaverseFund"}),Object(S.jsxs)(j.a,{children:[Object(S.jsxs)(f.a,{color:"textPrimary",className:e.subtitle,children:[n," .crypto ","&"," .zil domains for 1-year rent."]}),Object(S.jsx)("a",{href:"/#",className:"".concat(e.subtitle," ").concat(e.link),children:Object(S.jsx)(f.a,{children:"Read the lightpaper \u2192"})})]})]}),Object(S.jsxs)(j.a,{children:[Object(S.jsx)(T,{}),Object(S.jsxs)(j.a,{textAlign:"right",pt:3,children:[Object(S.jsxs)(f.a,{color:"textPrimary",className:e.counts,children:["Available: ",a]}),Object(S.jsxs)(f.a,{color:"textPrimary",className:e.counts,children:["Locked: ",n-a]}),Object(S.jsx)(j.a,{pt:1}),Object(S.jsx)(f.a,{color:"textPrimary",className:e.counts,children:"1 BTC = 1 BTC"}),Object(S.jsx)(f.a,{color:"textPrimary",className:e.counts,children:"1 ETH = 1 ETH"})]})]})]})})})},B=Object(h.a)({title:{fontSize:36,fontWeight:700},subtitle:{fontSize:18,fontWeight:400,display:"inline"},counts:{fontSize:14,fontWeight:400},link:{color:"#fff",fontSize:18,display:"inline-block",borderBottom:"1px solid #fdff88",textDecoration:"none",marginLeft:4}}),z=function(){return Object(S.jsx)(S.Fragment,{})},E=function(e){var t=e.tabs,n=e.currentTabIndex,a=e.onChangeTab,c=P();return Object(S.jsx)(j.a,{className:c.container,children:Object(S.jsx)(u.a,{children:Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(S.jsx)(j.a,{flex:1,display:"flex",mx:"-4px",mr:1,children:t.map((function(e,t){var r=e.type,i=e.title;return Object(S.jsx)(p.a,{className:"".concat(c.tab," ").concat(t===n&&c.activeTab),onClick:function(){return a(t)},children:Object(S.jsx)(f.a,{className:c.title,children:i})},r)}))}),Object(S.jsx)(j.a,{children:Object(S.jsx)(p.a,{className:c.btn,children:"Side with the dao \u2192"})})]})})})},P=Object(h.a)({container:{background:"linear-gradient(90deg, #2BB9EC 0%, #C696C6 51.04%, #EB73A8 97.4%)"},btn:{fontSize:14,fontWeight:"bold",color:"#2a282e",border:"2px solid #2a282e",padding:"10px",maxWidth:192,whiteSpace:"nowrap",textOverflow:"elipsis",overflow:"hidden",width:"100%",textTransform:"uppercase"},tab:{flex:1,position:"relative",padding:"12px 0",margin:"0 4px"},title:{width:"100%",textAlign:"left",color:"#2a282e",fontSize:20,fontWeight:700,textTransform:"capitalize"},activeTab:{"&::after":{content:'""',position:"absolute",backgroundColor:"#fdff88",height:8,left:0,right:0,bottom:0}}}),H=function(e){var t=e.paths,n=void 0===t?[]:t,a=L();return Object(S.jsx)(j.a,{className:a.container,color:"background.default",children:Object(S.jsx)(u.a,{children:Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(S.jsx)(j.a,{className:a.content,mx:"-4px",children:n.map((function(e,t){return n.length-1===t?Object(S.jsx)(j.a,{children:Object(S.jsx)(f.a,{className:a.link,children:e.title})},t):Object(S.jsxs)(j.a,{className:a.content,children:[Object(S.jsx)(b.b,{className:a.link,to:e.url||"/",children:Object(S.jsx)(f.a,{className:a.link,children:e.title})}),Object(S.jsx)(f.a,{className:a.link,children:"\u2190"})]},t)}))}),Object(S.jsx)(j.a,{children:Object(S.jsx)(p.a,{className:a.btn,children:"Side with the dao \u2192"})})]})})})},L=Object(h.a)({container:{background:"linear-gradient(90deg, #2BB9EC 0%, #C696C6 51.04%, #EB73A8 97.4%)",padding:"2px 0"},btn:{fontSize:14,fontWeight:"bold",color:"#2a282e",border:"2px solid #2a282e",padding:"10px",maxWidth:192,whiteSpace:"nowrap",textOverflow:"elipsis",overflow:"hidden",width:"100%",textTransform:"uppercase"},link:{fontSize:20,fontWeight:700,textDecoration:"none",color:"#2a282e",margin:"0 4px",textTransform:"capitalize"},content:{display:"flex",alignItems:"center"}}),Y=[{type:"domains",title:"Domains",route:"/"},{type:"art",title:"Art",route:"/art"}],R=function(e){var t=e.children,n=e.hasTabs,a=void 0===n||n,i=e.hasBreadCrumbs,s=void 0!==i&&i,o=e.currentTabIndex,l=void 0===o?0:o,b=e.paths,u=void 0===b?[]:b,f=Object(d.g)(),h=Object(c.useCallback)((function(e){if(l!==e){var t=Y[e];f.push(t.route)}}),[f,l]);return Object(S.jsxs)(j.a,{display:"flex",flexDirection:"column",flex:1,bgcolor:"background.default",children:[Object(S.jsx)(D,{}),Object(S.jsxs)(j.a,{component:"main",flex:1,children:[a&&Object(S.jsx)(E,{tabs:Y,currentTabIndex:l,onChangeTab:h}),s&&Object(S.jsx)(H,{paths:u}),Array.isArray(t)?r.a.Children.map(t,(function(e){return Object(S.jsx)(S.Fragment,{children:e})})):t]}),Object(S.jsx)(z,{})]})},_=function(){return Object(S.jsx)(R,{currentTabIndex:1,children:Object(S.jsx)(u.a,{children:Object(S.jsx)(j.a,{display:"flex",justifyContent:"space-between",pt:2})})})},J=n(582),q=n.p+"static/media/is-mine.19da38c1.svg",K=n(46),U=n(115),$=[{name:"blockchain",categories:["infrastructure"]},{name:"hackathon",categories:["community"]},{name:"distributedlab",categories:["business"]},{name:"blockchainua",categories:["community"]},{name:"Peanut",categories:["trade","business"]},{name:"Metaverse",categories:["trade","business","community"]},{name:"MadfishSolutions",categories:["business","development"]},{name:"APYSwap",categories:["business","trade"]},{name:"Velas",categories:["business","development"]},{name:"unstoppableDomains",categories:["business","infrastructure"]},{name:"Hacken",categories:["business","infrastructure"]},{name:"JaxNetwork",categories:["business","security"]},{name:"RaymondCapital",categories:["business","finances"]},{name:"MatterLab",categories:["business","development"]},{name:"AML",categories:["business","security"]},{name:"Web3",categories:["infrastructure"]},{name:"NFT",categories:["infrastructure","asset"]},{name:"Metamask",categories:["infrastructure","business"]},{name:"TokenD",categories:["asset","business"]},{name:"FNA",categories:["business","NFT"]},{name:"SEC",categories:["regulation"]},{name:"BTC-E",categories:["business","trade"]},{name:"Bitcoin",categories:["infrastructure","asset"]},{name:"Etherium",categories:["infrastructure","asset"]},{name:"FBR",categories:["securty","infrastructure"]},{name:"FATF",categories:["securty","infrastructure"]}],Q=["Infrastructure","Community","Business","Trade","Development","Security","Finances","Asset","NFT","Regulation"].map((function(e){return{title:e,type:e,selected:!1}})),V=[{title:"In 1 month",type:"one_month"},{title:"In 6 month",type:"six_month"},{title:"In 1 hour",type:"one_hour"}].map((function(e){return Object(K.a)(Object(K.a)({},e),{},{selected:!1})})),G=function(e,t){return e.filter((function(e){return t.length?t.find((function(t){return e.categories&&e.categories.map((function(e){return e.toLowerCase()})).includes(t.toLowerCase())})):e}))},X=Object(U.b)({name:"domains",initialState:{filter:{types:Q,availabilities:V,isAvailable:!1},fetchedDomains:[],filteredDomains:[]},reducers:{setFilter:function(e,t){var n=t.payload,a=n.isAvailable,c=n.types,r=G(e.fetchedDomains,c.filter((function(e){return e.selected})).map((function(e){return e.type}))).filter((function(e){return a?e.isAvailable===a:e}));e.filteredDomains=r,e.filter.types=c,e.filter.isAvailable=a},setDomains:function(e,t){var n,a,c=(n=t.payload,a=$,n.map((function(e){var t=a.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase().replace(/.crypto|.eth|.zip/gi,"")}));return Object(K.a)(Object(K.a)({},e),t&&{categories:t.categories})}))),r=G(c,e.filter.types.filter((function(e){return e.selected})).map((function(e){return e.type})));e.fetchedDomains=c,e.filteredDomains=r}}}),Z=X.reducer,ee=X.actions,te=ee.setFilter,ne=ee.setDomains,ae=n(577),ce=n.p+"static/media/metamask-fox.cc27a5cd.svg",re=n.p+"static/media/check.835fe384.svg",ie=n.p+"static/media/validmine.81316c29.svg",se=function(e){var t=e.domain,n=oe(),a=Object(d.g)(),r=Object(c.useState)(!1),i=Object(v.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(!1),b=Object(v.a)(l,2),u=b[0],h=b[1],O=Object(c.useState)(!1),g=Object(v.a)(O,2),y=g[0],w=g[1],k=Object(c.useState)(""),C=Object(v.a)(k,2),N=C[0],T=C[1],M=A(),I=M.hasWeb3,F=M.account,D=void 0===F?"":F,B=M.handleConnectWithMetamask,z=Object(c.useMemo)((function(){return W(D,12)}),[D]),E=Object(c.useMemo)((function(){return t.associatedHash===D}),[t,D]),P=Object(c.useCallback)((function(){h(!0),o(!1),D&&I&&w(!0)}),[D,I]),H=Object(c.useCallback)((function(){if(!D)return B(),void P()}),[D,B,P]),L=Object(c.useCallback)((function(){w(!1),h(!1),T("")}),[]),Y=Object(c.useMemo)((function(){return 46===N.length&&"Qm"===N.substr(0,2)}),[N]);return E?Object(S.jsx)(j.a,{component:"aside",color:"background.default",className:"".concat(n.card," ").concat(n.validForm),children:Object(S.jsxs)(j.a,{className:n.cardInner,display:"flex",flexDirection:"column",children:[Object(S.jsxs)(j.a,{flex:1,color:"background.default",display:"flex",flexDirection:"column",justifyContent:"center",children:[Object(S.jsx)(j.a,{pb:3,display:"flex",justifyContent:"center",children:Object(S.jsx)("img",{src:ie,alt:" "})}),Object(S.jsxs)(f.a,{className:n.secured,align:"center",children:["Yay!",Object(S.jsx)("br",{}),"Secured!"]})]}),Object(S.jsx)(j.a,{display:"flex",justifyContent:"center",children:Object(S.jsx)(p.a,{className:n.btn,onClick:function(){return a.push("/")},children:"PICK ONE MORE"})})]})}):Object(S.jsx)(j.a,{component:"aside",color:"background.default",className:"".concat(n.card," ").concat(s&&n.cardHovered," ").concat(Y&&n.validForm),children:Object(S.jsxs)(j.a,{className:n.cardInner,display:"flex",flexDirection:"column",children:[!u&&Object(S.jsx)(f.a,{className:n.title,align:"center",children:"Rent this domain"}),(u||y)&&Object(S.jsxs)(j.a,{position:"relative",children:[Object(S.jsx)(p.a,{variant:"text",className:n.title,onClick:L,children:"\u2190 BACK"}),Y&&Object(S.jsx)("img",{src:re,className:n.check,alt:"check"})]}),!y&&Object(S.jsx)(j.a,{className:"".concat(n.foxCard," ").concat(u&&n.foxCardShowed),children:Object(S.jsx)("img",{src:ce,className:"".concat(n.fox," ").concat(!u&&s&&n.foxHovered," ").concat(u&&n.foxShowed),alt:"Metamask Fox"})}),y&&Object(S.jsxs)(j.a,{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between",children:[Object(S.jsx)(f.a,{className:n.title,align:"left",children:"Hash of your site on IPFS"}),Object(S.jsx)(j.a,{children:Object(S.jsx)(ae.a,{className:n.input,rowsMax:6,value:N,onChange:function(e){return T(e.target.value)},multiline:!0})})]}),Object(S.jsxs)(j.a,{display:"flex",justifyContent:"center",alignItems:"center",mt:3,children:[!u&&!y&&Object(S.jsx)(p.a,{variant:"outlined",className:n.btn,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onClick:P,children:"Rent!"}),u&&!y&&Object(S.jsx)(S.Fragment,{children:I?Object(S.jsx)(p.a,{className:n.btn,onClick:H,children:D?Object(S.jsx)(j.a,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(S.jsx)(f.a,{children:z})}):"Connect wallet"}):Object(S.jsx)(m.a,{title:"Need web3 provider",children:Object(S.jsx)(x.a,{className:n.btn,href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer",children:Object(S.jsx)(f.a,{children:"Install MetaMask"})})})}),y&&Object(S.jsx)(p.a,{className:n.btn,disabled:!Y,children:"PAY \u039e0.045"})]})]})})},oe=Object(h.a)({fox:{width:184,height:184,transform:"translateY(70%)",transition:"0.15s ease-out"},foxHovered:{transform:"translateY(35%)"},foxShowed:{transform:"translateY(0)"},title:{fontSize:16,fontWeight:700,color:"#2a282e",padding:0},secured:{fontSize:24,fontWeight:700},card:{backgroundColor:"#fff",padding:3,minHeight:320,display:"flex"},cardHovered:{backgroundColor:"#f05e2b"},validForm:{backgroundColor:"#5abe96"},cardInner:{flex:1,border:"2px solid #2a282e",padding:20},foxCard:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",borderBottom:"2px solid #2a282e"},foxCardShowed:{border:0},btn:{color:"#2a282e",backgroundColor:"transparent",border:"2px solid #2a282e","&:hover":{backgroundColor:"#2a282e",color:"#fff"},"&.MuiButton-root.Mui-disabled":{color:"#2a282e",opacity:.5}},input:{"& .MuiInputBase-root":{color:"#2a282e",borderBottom:"2px solid #2a282e","&.Mui-focused":{border:0}},"& .MuiInput-underline:after":{border:"2px solid #38b0e8"}},check:{position:"absolute",right:0,top:0}}),le=[{title:"Domains",url:"/"}],de=[{name:"unstoppableDomains.crypto",price:"\u039e0.045",isAvailable:!0,whenAvailable:"1617161963969",picture:"",color:"#38B0E8",associatedHash:"1"},{name:"blockchainua.crypto",price:"\u039e0.045",isAvailable:!1,whenAvailable:"1617161963969",picture:"",color:"#F05E2B",associatedHash:"0x68A133aeEb048c687c2e82cFb7ed7CFCD138591c"},{name:"Metaverse.eth",price:"\u039e0.045",isAvailable:!1,whenAvailable:"1617161963969",picture:"",color:"#F05E2B",associatedHash:"1"}],be=function(){var e=A().account,t=ue(),n=Object(d.h)(),a=Object(c.useMemo)((function(){return[].concat(le,[{title:n.pathname.replace(/\//gi,"")}])}),[n]),r=Object(o.c)((function(e){return e.domains})).fetchedDomains,i=Object(o.b)();Object(c.useEffect)((function(){!r.length&&i(ne(de))}),[i,r]);var s=Object(c.useMemo)((function(){return r.find((function(e){return e.name.toLowerCase()===a[a.length-1].title.toLowerCase()}))}),[r,a]),l=Object(c.useMemo)((function(){return s&&s.associatedHash===e}),[s,e]);return Object(S.jsx)(R,{hasTabs:!1,hasBreadCrumbs:!0,paths:a,children:Object(S.jsx)(u.a,{children:Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",pt:4,children:[Object(S.jsxs)(j.a,{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between",children:[s?Object(S.jsxs)(j.a,{flex:1,children:[Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",children:[Object(S.jsx)(j.a,{width:"100%",children:s.categories&&s.categories.map((function(e){return Object(S.jsx)(J.a,{label:e,className:t.category,variant:"outlined"},e)}))}),Object(S.jsx)(j.a,{minWidth:136,maxWidth:136,children:Object(S.jsx)(f.a,{className:t.perYear,color:"textPrimary",children:"Per year"})})]}),Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",children:[Object(S.jsx)(j.a,{width:"100%",children:Object(S.jsx)(f.a,{className:"".concat(t.name," ").concat(t.availableName),color:"textPrimary",children:s.name})}),Object(S.jsxs)(j.a,{minWidth:136,maxWidth:136,children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(f.a,{className:t.price,color:"textPrimary",children:s.price})}),Object(S.jsx)(j.a,{children:Object(S.jsx)(f.a,{className:t.perYear,color:"textPrimary",children:"0.0018 BTC"})}),Object(S.jsx)(j.a,{children:Object(S.jsx)(f.a,{className:t.perYear,color:"textPrimary",children:"45 US$"})})]})]}),l&&Object(S.jsxs)(j.a,{className:t.badge,color:"background.default",children:[Object(S.jsx)("img",{src:q,className:t.badgeIcon,alt:"Its yours"}),Object(S.jsxs)(f.a,{className:t.badgeText,children:["Yours",Object(S.jsx)("br",{}),"for",Object(S.jsx)("br",{}),"10 mos"]})]})]}):null,Object(S.jsx)(j.a,{children:Object(S.jsx)(f.a,{color:"textPrimary",style:{fontSize:12},children:"There\u2019ll be terms and somehting else. A really small piece of text for the first iteration, just for the  sake of the layout."})})]}),Object(S.jsx)(j.a,{minWidth:232,maxWidth:232,ml:5,children:s&&Object(S.jsx)(se,{domain:s})})]})})})},ue=Object(h.a)({category:{color:"#2a282e",borderWidth:2,borderColor:"#fdff88",backgroundColor:"#fdff88",fontSize:14,fontWeight:500,padding:"12px 8px",margin:"0 8px 8px 0"},contained:{backgroundColor:"transparent",borderColor:"#2a282e"},perYear:{fontSize:12,fontWeight:400,textAlign:"right"},name:{fontSize:36,fontWeight:700,textTransform:"uppercase"},availableName:{borderBottom:"4px solid #fdff88",display:"inline-block"},price:{fontSize:24,fontWeight:700,textAlign:"right"},badge:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:136,height:136},badgeIcon:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},badgeText:{fontSize:14,fontWeight:700,position:"relative",zIndex:1,textTransform:"uppercase",textAlign:"center"}}),je=n(575),fe=n(581),he=function(){var e=Object(o.c)((function(e){return e.domains})),t=e.filter,n=t.types,a=t.isAvailable,r=e.filteredDomains,i=Object(o.b)(),s=me(),l=Object(c.useMemo)((function(){return r.length}),[r]),d=Object(c.useCallback)((function(e){var t=n.map((function(t){return e===t.type?Object(K.a)(Object(K.a)({},t),{},{selected:!t.selected}):t}));i(te({types:t,isAvailable:a}))}),[n,a,i]),b=Object(c.useCallback)((function(){var e=n.map((function(e){return Object(K.a)(Object(K.a)({},e),{},{selected:!1})}));i(te({types:e,isAvailable:a}))}),[n,a,i]),u=Object(c.useCallback)((function(){i(te({types:n,isAvailable:!a}))}),[n,a,i]);return Object(S.jsx)(j.a,{component:"aside",display:"flex",flexDirection:"column",className:s.container,children:Object(S.jsxs)(j.a,{className:s.innerContainer,children:[Object(S.jsxs)(j.a,{px:2,pt:2,pb:1,display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(S.jsxs)(f.a,{component:"label",color:"textPrimary",children:["Filters (",l,")"]}),Object(S.jsx)(p.a,{className:s.clear,onClick:b,children:"Clear"})]}),Object(S.jsx)(j.a,{children:n.map((function(e){var t=e.type,n=e.title,a=e.selected;return Object(S.jsx)(J.a,{label:n,onClick:function(){return d(t)},className:"".concat(s.chip," ").concat(a&&s.activeChip),clickable:!0,variant:"outlined"},t)}))}),Object(S.jsx)(j.a,{px:2,pt:2,pb:2,color:"primary",children:Object(S.jsx)(je.a,{className:s.formControl,control:Object(S.jsx)(fe.a,{checked:a,className:s.switch,onChange:u,name:"available.main"}),label:"Available only"})})]})})},me=Object(h.a)({container:{border:"1px solid #fff",padding:2},formControl:{color:"#fdff88",textTransform:"uppercase"},switch:{".MuiSwitch-thumb":{backgroundColor:"transparent",border:"1px solid #fdff88"}},innerContainer:{border:"2px solid #fff"},clear:{padding:0,textTransform:"none",fontWeight:400,fontSize:12},chip:{margin:8,color:"#fdff88",borderColor:"#fdff88",borderWidth:2,fontSize:14,fontWeight:500,padding:"12px 8px"},activeChip:{color:"#2a282e",backgroundColor:"#fdff88 !important"}}),xe=n.p+"static/media/not-available.d227c044.svg",pe=function(e){var t=e.domain,n=Oe(),a=A().account,r=t.categories,i=t.name,s=t.price,o=t.isAvailable,l=t.associatedHash,d=Object(c.useMemo)((function(){return l===a}),[l,a]);return Object(S.jsx)(b.b,{className:n.link,to:"/".concat(i.toLowerCase()),children:Object(S.jsxs)(j.a,{className:n.card,style:{backgroundColor:d?"#65bd8d":t.color},mb:2,children:[Object(S.jsxs)(j.a,{className:n.cardInner,children:[Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",children:[Object(S.jsx)(j.a,{width:"100%",children:r&&r.map((function(e){return Object(S.jsx)(J.a,{label:e,className:"".concat(n.category," ").concat(d&&n.contained),variant:"outlined"},e)}))}),Object(S.jsx)(j.a,{color:"background.default",minWidth:136,maxWidth:136,children:Object(S.jsx)(f.a,{className:n.perYear,children:"Per year"})})]}),Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",children:[Object(S.jsx)(j.a,{color:"background.default",width:"100%",children:Object(S.jsx)(f.a,{className:"".concat(n.name," ").concat(o&&!d&&n.availableName),children:i})}),Object(S.jsxs)(j.a,{minWidth:136,maxWidth:136,children:[Object(S.jsx)(j.a,{color:"background.default",children:Object(S.jsx)(f.a,{className:n.price,children:s})}),Object(S.jsx)(j.a,{color:"background.default",children:Object(S.jsx)(f.a,{className:n.perYear,children:"0.0018 BTC"})}),Object(S.jsx)(j.a,{color:"background.default",children:Object(S.jsx)(f.a,{className:n.perYear,children:"45 US$"})})]})]}),!o&&!d&&Object(S.jsx)(j.a,{bgcolor:"background.default",className:n.line})]}),!o&&!d&&Object(S.jsxs)(j.a,{className:n.badge,color:"background.default",children:[Object(S.jsx)("img",{src:xe,className:n.badgeIcon,alt:"Not available"}),Object(S.jsxs)(f.a,{className:n.badgeText,children:["free",Object(S.jsx)("br",{}),"in",Object(S.jsx)("br",{}),"10 mos"]})]}),d&&Object(S.jsxs)(j.a,{className:n.badge,color:"background.default",children:[Object(S.jsx)("img",{src:q,className:n.badgeIcon,alt:"Its yours"}),Object(S.jsxs)(f.a,{className:n.badgeText,children:["Yours",Object(S.jsx)("br",{}),"for",Object(S.jsx)("br",{}),"10 mos"]})]})]})})},Oe=Object(h.a)({link:{color:"inherit",textDecoration:"none"},card:{backgroundColor:"#4f4f52",position:"relative"},cardInner:{overflow:"hidden",padding:"12px 32px",position:"relative"},category:{color:"#2a282e",borderWidth:2,borderColor:"#fdff88",backgroundColor:"#fdff88",fontSize:14,fontWeight:500,padding:"12px 8px",margin:"0 8px 8px 0"},contained:{backgroundColor:"transparent",borderColor:"#2a282e"},perYear:{fontSize:12,fontWeight:400,textAlign:"right"},name:{fontSize:36,fontWeight:700,textTransform:"uppercase"},availableName:{borderBottom:"4px solid #fdff88",display:"inline-block"},price:{fontSize:24,fontWeight:700,textAlign:"right"},line:{position:"absolute",right:"-20%",width:"140%",top:"50%",height:2,transform:"rotate(171.5deg)"},badge:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:-27,right:"20%",width:136,height:136},badgeIcon:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},badgeText:{fontSize:14,fontWeight:700,position:"relative",zIndex:1,textTransform:"uppercase",textAlign:"center"}}),ge=[{name:"unstoppableDomains.crypto",price:"\u039e0.045",isAvailable:!0,whenAvailable:"1617161963969",picture:"",color:"#38B0E8",associatedHash:"1"},{name:"blockchainua.crypto",price:"\u039e0.045",isAvailable:!1,whenAvailable:"1617161963969",picture:"",color:"#F05E2B",associatedHash:"0x68A133aeEb048c687c2e82cFb7ed7CFCD138591c"},{name:"Metaverse.eth",price:"\u039e0.045",isAvailable:!1,whenAvailable:"1617161963969",picture:"",color:"#F05E2B",associatedHash:"1"}],ye=function(){var e=Object(o.c)((function(e){return e.domains})).filteredDomains,t=Object(o.b)();return Object(c.useEffect)((function(){t(ne(ge))}),[t]),Object(S.jsx)(R,{children:Object(S.jsx)(u.a,{children:Object(S.jsxs)(j.a,{display:"flex",justifyContent:"space-between",pt:2,children:[Object(S.jsx)(j.a,{minWidth:252,maxWidth:252,mr:1,children:Object(S.jsx)(he,{})}),Object(S.jsx)(j.a,{flex:1,children:e.map((function(e){return Object(S.jsx)(pe,{domain:e},e.name)}))})]})})})},ve=Object(d.i)((function(e){var t=e.history;return Object(c.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),we=function(){return Object(S.jsxs)(b.a,{basename:"/metaverse-sharing-web",children:[Object(S.jsx)(ve,{}),Object(S.jsxs)(d.d,{children:[Object(S.jsx)(d.b,{path:"/",exact:!0,component:ye}),Object(S.jsx)(d.b,{path:"/art",exact:!0,component:_}),Object(S.jsx)(d.b,{path:"/:domain",exact:!0,component:be}),Object(S.jsx)(d.a,{to:"/"})]})]})},ke=Object(U.a)({reducer:{domains:Z}}),Ce=n(255),Ne=Object(Ce.a)({palette:{type:"dark",background:{default:"#2a292e"},primary:{main:"#fdff88"}},typography:{fontFamily:"IBM Plex Mono, monospace",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(o.a,{store:ke,children:Object(S.jsx)(l.a,{theme:Ne,children:Object(S.jsx)(we,{})})})}),document.getElementById("root")),a&&a instanceof Function&&n.e(3).then(n.bind(null,584)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;t(a),n(a),c(a),r(a),i(a)}))}},[[538,1,2]]]);
//# sourceMappingURL=main.7c01915a.chunk.js.map