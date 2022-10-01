(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{159:function(e,t,n){},161:function(e,t){},170:function(e,t){},227:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(35),s=n.n(r),o=n(19),i=n(39),l=n(7),j=(n(159),n(243)),d=n(66),u=1e14;function b(e){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(Object(o.a)().mark((function e(t){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyProduct({productId:n},u,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=n(238),p=n(242),h=n(240),m=n(235),f=n(245),g=n(1),w=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)(h.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(g.jsxs)(g.Fragment,{children:[n," ",Object(g.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(g.jsx)(m.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(g.jsxs)(h.a.Menu,{className:"shadow-lg border-0",children:[Object(g.jsx)(h.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(g.jsxs)(f.a,{direction:"horizontal",gap:2,children:[Object(g.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(g.jsx)("span",{className:"font-monospace",children:t})]})}),Object(g.jsx)(h.a.Divider,{}),Object(g.jsxs)(h.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(g.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},v=n(60),y=(n(165),function(){return Object(g.jsx)(v.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),N=function(e){var t=e.text;return Object(g.jsxs)("div",{children:[Object(g.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(g.jsx)("span",{className:"text-secondary mx-1",children:t})]})},C=function(e){var t=e.text;return Object(g.jsxs)("div",{children:[Object(g.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(g.jsx)("span",{className:"text-secondary mx-1",children:t})]})},k={text:""};N.defaultProps=k,C.defaultProps=k;var I=n(2),S=n(149),P=n(239),F=n(241),T=n(151),E=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),x=b[0],O=b[1],p=Object(c.useState)(""),h=Object(l.a)(p,2),m=h[0],f=h[1],w=Object(c.useState)(0),v=Object(l.a)(w,2),y=v[0],N=v[1],C=Object(c.useState)(!1),k=Object(l.a)(C,2),I=k[0],E=k[1],U=function(){return E(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S.a,{onClick:function(){return E(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(g.jsx)("i",{class:"bi bi-plus"})}),Object(g.jsxs)(P.a,{show:I,onHide:U,centered:!0,children:[Object(g.jsx)(P.a.Header,{closeButton:!0,children:Object(g.jsx)(P.a.Title,{children:"New Product"})}),Object(g.jsx)(F.a,{children:Object(g.jsxs)(P.a.Body,{children:[Object(g.jsx)(T.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(g.jsx)(F.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of product"})}),Object(g.jsx)(T.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(g.jsx)(F.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){d(e.target.value)}})}),Object(g.jsx)(T.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(g.jsx)(F.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){O(e.target.value)}})}),Object(g.jsx)(T.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(g.jsx)(F.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(g.jsx)(T.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(g.jsx)(F.a.Control,{type:"text",placeholder:"Price",onChange:function(e){N(e.target.value)}})})]})}),Object(g.jsxs)(P.a.Footer,{children:[Object(g.jsx)(S.a,{variant:"outline-secondary",onClick:U,children:"Close"}),Object(g.jsx)(S.a,{variant:"dark",disabled:!(r&&j&&x&&m&&y),onClick:function(){t({name:r,image:j,description:x,location:m,price:y}),U()},children:"Save product"})]})]})]})},U=n(59),A=n(150),L=n(244),_=n(236),B=function(e){var t=e.product,n=e.buy,c=t.id,a=t.price,r=t.name,s=t.description,o=t.sold,i=t.location,l=t.image,j=t.owner;return Object(g.jsx)(A.a,{children:Object(g.jsxs)(L.a,{className:" h-100",children:[Object(g.jsx)(L.a.Header,{children:Object(g.jsxs)(f.a,{direction:"horizontal",gap:2,children:[Object(g.jsx)("span",{className:"font-monospace text-secondary",children:j}),Object(g.jsxs)(_.a,{bg:"secondary",className:"ms-auto",children:[o," Sold"]})]})}),Object(g.jsx)("div",{className:" ratio ratio-4x3",children:Object(g.jsx)("img",{src:l,alt:r,style:{objectFit:"cover"}})}),Object(g.jsxs)(L.a.Body,{className:"d-flex  flex-column text-center",children:[Object(g.jsx)(L.a.Title,{children:r}),Object(g.jsx)(L.a.Text,{className:"flex-grow-1 ",children:s}),Object(g.jsx)(L.a.Text,{className:"text-secondary",children:Object(g.jsx)("span",{children:i})}),Object(g.jsxs)(S.a,{variant:"outline-dark",onClick:function(){n(c,a)},className:"w-100 py-3",children:["Buy for ",U.utils.format.formatNearAmount(a)," NEAR"]})]})]})},c)},H=function(){return Object(g.jsx)("div",{className:"d-flex justify-content-center",children:Object(g.jsx)(m.a,{animation:"border",role:"status",className:"opacity-25",children:Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},R=n(237),D=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),u=s[0],x=s[1],O=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.t0=a,e.next=5,window.contract.getProducts();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),p=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{x(!0),(n=t,n.id=Object(j.a)(),n.price=Object(d.parseNearAmount)(n.price+""),window.contract.setProduct({product:n})).then((function(e){O()})),Object(v.b)(Object(g.jsx)(N,{text:"Product added successfully."}))}catch(c){console.log({error:c}),Object(v.b)(Object(g.jsx)(C,{text:"Failed to create a product."}))}finally{x(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t,n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b({id:t,price:n}).then((function(e){return O()}));case 3:Object(v.b)(Object(g.jsx)(N,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(v.b)(Object(g.jsx)(C,{text:"Failed to purchase product."}));case 9:return e.prev=9,x(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[]),Object(g.jsx)(g.Fragment,{children:u?Object(g.jsx)(H,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(g.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Ife's Hot shop"}),Object(g.jsx)(E,{save:p})]}),Object(g.jsx)(R.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(g.jsx)(B,{product:Object(I.a)({},e),buy:h})}))})]})})},W=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(g.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(g.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(g.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(g.jsx)("img",{src:c,alt:""})}),Object(g.jsx)("h1",{children:t}),Object(g.jsx)("p",{children:"Please connect your wallet to continue."}),Object(g.jsx)(S.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(g.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by Ife"})]}):null};W.defaultProps={name:""};var M=W,z=n.p+"static/media/sandwich.2d312449.jpg",K=Object({NODE_ENV:"production",PUBLIC_URL:"/NEAR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"ozodimgba.testnet";var J=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:K,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:K,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}}("testnet");function q(){return(q=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.connect)(Object.assign({deps:{keyStore:new U.keyStores.BrowserLocalStorageKeyStore}},J));case 2:t=e.sent,window.walletConnection=new U.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new U.Contract(window.walletConnection.account(),J.contractName,{viewMethods:["getProduct","getProducts"],changeMethods:["buyProduct","setProduct"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return G.apply(this,arguments)}function G(){return(G=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){window.walletConnection.requestSignIn(J.contractName)}function X(){window.walletConnection.signOut(),window.location.reload()}var Y=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,V();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(y,{}),e.accountId?Object(g.jsxs)(O.a,{fluid:"md",children:[Object(g.jsx)(p.a,{className:"justify-content-end pt-3 pb-5",children:Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(w,{address:e.accountId,amount:a,symbol:"NEAR",destroy:X})})}),Object(g.jsxs)("main",{children:[" ",Object(g.jsx)(D,{})," "]})]}):Object(g.jsx)(M,{name:"Ife's Hot shop",login:Q,coverImg:z})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(228),n(225),n(226);window.nearInitPromise=function(){return q.apply(this,arguments)}().then((function(){s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(Y,{})}),document.getElementById("root"))})).catch(console.error),Z()}},[[227,1,2]]]);
//# sourceMappingURL=main.7533bddb.chunk.js.map