(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a(48),i=a.n(c),r=(a(110),a(35)),o=a(7),l=(a(111),a.p+"static/media/logo.a508475f.png"),j=a.p+"static/media/pokedex.beda6a95.png",b=a(22);var d=function(){return Object(s.jsx)("header",{className:"header",children:Object(s.jsxs)("div",{className:"header-container",children:[Object(s.jsx)(b.a,{children:Object(s.jsx)(b.b,{to:"/",href:"",onClick:function(){window.location.assign("/")},children:Object(s.jsx)("img",{src:l,alt:"",className:"header-container-logo"})})}),Object(s.jsx)("img",{src:j,alt:"",className:"header-container-pokedex"})]})})},p=a(29),m=a.n(p),u=a.p+"static/media/400.4c4ef29a.png";a(133),a(134);var O=function(){return Object(s.jsx)("div",{className:"loader",children:Object(s.jsxs)("div",{className:"lds-ring",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})};var f=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],r=Object.keys(e.filterObj).length;return Object(n.useEffect)((function(){var t=e.filterObj,a=t.attack,s=t.hp,n=t.defense,c=t.specialAttack,o=t.specialDefense,l=t.speed,j=[];a&&j.push({attack:a}),s&&j.push({hp:s}),n&&j.push({defense:n}),c&&j.push({specialAttack:c}),o&&j.push({specialDefense:o}),l&&j.push({speed:l}),m.a.post("https://pokemonapishort.herokuapp.com/PokeApi/getPokemons",{filterOptions:[0===r?[]:{statFilter:j},{nameFilter:e.filterObj.name},{typeFilter:e.typesArray}],limit:e.limit,offset:e.currentPage}).then((function(t){i(t.data.pokemons),e.setLoading(!1),e.setPokeCount(t.data.count)})).catch((function(t){t.request&&e.setIsErr(!0)}))}),[e.currentPage,e.limit,e.filterObj]),e.isErr?Object(s.jsxs)("div",{className:"error",children:[Object(s.jsx)("img",{src:u,alt:"",className:"error-img"}),Object(s.jsx)("label",{htmlFor:"error-img",className:"error-label",children:"Error 400"}),Object(s.jsx)("label",{htmlFor:"error-img",className:"error-label",children:"This pokemons does not exist! Please try again"})]}):Object(s.jsx)("div",{children:e.loading?Object(s.jsx)(O,{}):Object(s.jsx)("div",{className:"cardbox",children:Object(s.jsx)(b.a,{children:c.map((function(e){return Object(s.jsxs)(b.b,{to:String(e.id),className:"card",href:"#",onClick:function(){window.location.assign("/".concat(e.id))},children:[Object(s.jsx)("img",{src:"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(e.id,".png?raw=true"),className:"card-img",onError:function(e){return e.target.src=u}},e.id),Object(s.jsx)("p",{className:"card-title",children:e.name},e.name)]},e._id)}))})})})},h=a(101),x=a.n(h);var g=function(e){return Object(s.jsxs)("div",{className:"limit",children:[Object(s.jsx)("label",{htmlFor:"limit-label",children:"Limit: "}),Object(s.jsx)("div",{className:"limit-buttons",children:["10","20","50"].map((function(t){return Object(s.jsxs)("button",{className:"limit-submit",onClick:function(t){e.setLimit(t.target.value),e.setLoading(!0)},value:t,children:[" ",t]},t)}))})]})};a(135);var v=function(e){return e.isErr?Object(s.jsx)("div",{}):Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(x.a,{initialPage:0,pageCount:e.pokeCount/e.limit,marginPagesDisplayed:.5,pageRangeDisplayed:4,containerClassName:"pagination",pageClassName:"pagination-page",pageLinkClassName:"pagination-link",nextLinkClassName:"pagination-next",previousLinkClassName:"pagination-prev",activeClassName:"pagination-active",breakClassName:"pagination-page",breakLinkClassName:"pagination-link",onPageChange:function(t){var a=12*t.selected;e.setCurrentPage(a),e.setLoading(!0)}}),Object(s.jsx)(g,{setLoading:e.setLoading,setLimit:e.setLimit,limit:e.limit,pokeCount:e.pokeCount})]})},k=(a(136),a(38)),N=a(237),y=a(236),S=a(239),C=a(19),A=function(e){var t=e.input,a=e.type;return Object(s.jsx)("input",Object(k.a)(Object(k.a)({},t),{},{maxLength:"3",onChange:function(e){return t.onChange(function(e){return e.target.value.replace(/\D/,"")}(e))},type:a}))},L=function(e){var t=e.input,a=e.type;return Object(s.jsx)("input",Object(k.a)(Object(k.a)({},t),{},{maxLength:"11",onChange:function(e){return t.onChange(function(e){return e.target.value.replace(/[^A-Za-z0-9-]/,"")}(e))},type:a}))},T=function(e){var t=e.handleSubmit,a=Object(C.c)((function(e){var t,a;return null===(t=e.form)||void 0===t||null===(a=t.filter)||void 0===a?void 0:a.values}));Object(n.useEffect)((function(){m.a.get("https://pokemonapishort.herokuapp.com/PokeApi/getPokemonsTypes").then((function(t){e.setTypes(t.data.types)}))}),[e.setTypes]);Object(n.useEffect)((function(){for(var t in e.filterObj)"string"!==typeof e.filterObj[t]&&(e.filterObj[t].from?e.filterObj[t].to||delete e.filterObj[t].to:(delete e.filterObj[t].from,e.filterObj[t].to||delete e.filterObj[t]));"undefined"===e.filterObj.name&&(e.filterObj.name="")}),[null===e||void 0===e?void 0:e.filterObj]);var c=Object(n.useState)(!1),i=Object(o.a)(c,2),r=i[0],l=i[1];return Object(s.jsxs)("form",{onSubmit:t((function(){e.setTypesArray([]),e.setLoading(!0),e.setOpened(!1),e.setIsErr(!1);var t=[];if(a)for(var s=0,n=Object.entries(a);s<n.length;s++){var c=Object(o.a)(n[s],2),i=c[0],r=c[1];e.types.includes(i)&&r&&(t.push(i),e.setTypesArray([].concat(t)))}e.setFilterObj({attack:e.attack,defense:e.defense,hp:e.hp,specialAttack:e.specialAttack,specialDefense:e.specialDefense,speed:e.speed,name:e.name})})),children:[["Attack","Defense","HP","Special Attack","Special Defense","Speed"].map((function(e,t){return Object(s.jsxs)("div",{className:"filter-stats-main",children:[Object(s.jsxs)("label",{htmlFor:e,children:[e,":"]}),Object(s.jsx)(N.a,{name:"".concat(e.replace(" ",""),"From"),component:A,type:"text"}),"-",Object(s.jsx)(N.a,{name:"".concat(e.replace(" ",""),"To"),component:A,type:"text"})]},t)})),Object(s.jsxs)("div",{className:"filter-stats-name",children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(s.jsx)(N.a,{name:"name",component:L,type:"text"})]}),Object(s.jsxs)("div",{className:"filter-stats-type",children:[Object(s.jsxs)("div",{className:"selector",children:[Object(s.jsx)("label",{htmlFor:"selector-text",children:"Types: "}),Object(s.jsx)("div",{name:"selector-text",type:"text",className:"selector-text",readOnly:!0,children:r?"Hide type filter":"Open type filter"}),Object(s.jsx)("div",{onClick:function(){l(!r)},className:"selector-btn",children:Object(s.jsx)("div",{className:r?"selector-btn-opened":"selector-btn-hidden"})})]}),Object(s.jsx)("div",{className:r?"dropdown-opened":"dropdown-hidden",children:e.types.map((function(e){return Object(s.jsxs)("div",{className:"dropdown-container",children:[Object(s.jsx)("label",{htmlFor:"dropdown-check",children:e},Date.now()),Object(s.jsx)(N.a,{component:"input",name:e,type:"checkbox",className:"dropdown-checkbox"},Math.random())]},e)}))})]}),Object(s.jsx)("button",{type:"submit",className:"submit",children:"Submit"})]})};T=Object(y.a)({form:"filter"})(T);var P=Object(S.a)("filter"),E=Object(C.b)((function(e){return{attack:{from:Number(P(e,"AttackFrom")),to:Number(P(e,"AttackTo"))},defense:{from:Number(P(e,"DefenseFrom")),to:Number(P(e,"DefenseTo"))},hp:{from:Number(P(e,"HPFrom")),to:Number(P(e,"HPTo"))},specialAttack:{from:Number(P(e,"SpecialAttackFrom")),to:Number(P(e,"SpecialAttackTo"))},specialDefense:{from:Number(P(e,"SpecialDefenseFrom")),to:Number(P(e,"SpecialDefenseTo"))},speed:{from:Number(P(e,"SpeedFrom")),to:Number(P(e,"SpeedTo"))},name:String(P(e,"name"))}}))(T);var D=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1];return Object(s.jsxs)("div",{className:c?"filter-opened":"filter-hidden",children:[Object(s.jsx)("div",{className:"filter-stats",children:Object(s.jsx)(E,{some:e.some,setSome:e.setSome,typesArray:e.typesArray,setTypesArray:e.setTypesArray,filterObj:e.filterObj,setFilterObj:e.setFilterObj,types:e.types,setTypes:e.setTypes,setOpened:i,setLoading:e.setLoading,setIsErr:e.setIsErr})}),Object(s.jsx)("button",{className:"filter-hide",onClick:function(){i(!c)},children:c?"Close":"Open"})]})};var F=function(){var e,t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(!0),j=Object(o.a)(l,2),b=j[0],p=j[1],m=Object(n.useState)(12),u=Object(o.a)(m,2),O=u[0],h=u[1],x=Object(n.useState)({}),g=Object(o.a)(x,2),k=g[0],N=g[1],y=Object(n.useState)(),S=Object(o.a)(y,2),C=S[0],A=S[1],L=Object(n.useState)([]),T=Object(o.a)(L,2),P=T[0],E=T[1],F=Object(n.useState)([]),w=Object(o.a)(F,2),_=w[0],I=w[1],H=Object(n.useState)(!1),X=Object(o.a)(H,2),R=X[0],B=X[1],J=Object(n.useState)({}),U=Object(o.a)(J,2),V=U[0],q=U[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(d,{}),Object(s.jsx)(D,{typesArray:_,some:V,setSome:q,setTypesArray:I,filterObj:k,setFilterObj:N,setLoading:p,types:P,setTypes:E,setIsErr:B}),Object(s.jsx)(f,(e={some:V,setSome:q,currentPage:c,isErr:R,typesArray:_,setTypesArray:I,loading:b,setLoading:p,limit:O,filterObj:k,pokeCount:C,setPokeCount:A},Object(r.a)(e,"isErr",R),Object(r.a)(e,"setIsErr",B),e)),Object(s.jsx)(v,{currentPage:c,setLoading:p,setCurrentPage:i,limit:O,setLimit:h,pokeCount:C,isErr:R})]})};a(234);var w=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)([]),l=Object(o.a)(r,2),j=l[0],b=l[1],d=window.location.pathname.replace(/\D/g,"");return Object(n.useEffect)((function(){m.a.get("https://pokemonapishort.herokuapp.com/PokeApi/getStatOf/".concat(d)).then((function(t){i(t.data),e.setLoading(!1),console.log(t.data),b([t.data.attack,t.data.defense,t.data.hp,t.data.specialAttack,t.data.specialDefense,t.data.speed])}))}),[i]),Object(s.jsx)("div",{children:e.loading?Object(s.jsx)(O,{}):Object(s.jsxs)("div",{className:"info",children:[Object(s.jsx)("img",{src:"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(c.id,".png?raw=true"),alt:"",className:"info-img"}),Object(s.jsxs)("div",{className:"info-pokestat",children:[Object(s.jsx)("div",{className:"info-pokestat-name",children:c.name}),Object(s.jsx)("div",{className:"info-pokestat-main",children:["Attack:","Defense:","HP:","Special Attack:","Special Defense:","Speed:"].map((function(e,t){return Object(s.jsxs)("div",{className:"stat",children:[e," ",j[t]," "]},e)}))}),Object(s.jsxs)("div",{className:"info-pokestat-types",children:[Object(s.jsx)("div",{className:"info-pokestat-types-title",children:"Types:"}),Object(s.jsx)("div",{className:"info-pokestat-types-container",children:c.types.map((function(e){return Object(s.jsxs)("div",{className:"type",children:[" ",e]},e)}))})]})]})]})})};var _=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),c=a[0],i=a[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(d,{}),Object(s.jsx)(w,{setLoading:i,loading:c})]})},I=a(8);var H=function(){var e=window.location.pathname.replace(/\D/g,"");return Object(s.jsx)(b.a,{children:Object(s.jsxs)(I.c,{children:[Object(s.jsx)(I.a,{exact:!0,path:"/",component:F}),Object(s.jsx)(I.a,{path:"/".concat(e),component:_})]})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,240)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))},R=a(9),B=a(238),J=Object(R.b)({form:B.a}),U=Object(R.c)(J,B.a+window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(s.jsx)(C.a,{store:U,children:Object(s.jsx)(H,{})}),document.getElementById("root")),X()}},[[235,1,2]]]);
//# sourceMappingURL=main.ad969a48.chunk.js.map