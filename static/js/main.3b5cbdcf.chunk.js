(this.webpackJsonpict_swissskills_challenge_2=this.webpackJsonpict_swissskills_challenge_2||[]).push([[0],{44:function(e){e.exports=JSON.parse('{"trades":{"17":{"Speed Hibernate (easy)":{"page":"speedHibernateEasy"},"Speed Hibernate (hard)":{"page":"speedHibernateHard"}},"19":{}}}')},52:function(e,t,n){},54:function(e,t,n){},62:function(e,t,n){var a={"./pages/home2.md":[67,4]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=62,e.exports=r},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(20),c=n.n(r),s=(n(52),n(53),n(54),n(12)),i=n(13),o=n(15),u=n(14),l=n(74),h=n(75),j=n(73),d=n(3),b=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(j.a,{title:"Trade "+this.props.trade,id:"NavBarDropdownTrade"+this.props.trade,children:this.generateChallenges()})}},{key:"generateChallenges",value:function(){var e=[],t=this.props.data;for(var n in t){var a=t[n].page;e.push(Object(d.jsx)(j.a.Item,{href:a,children:n}))}return e}}]),n}(a.Component),p=n(44),O=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(l.a,{bg:"dark",variant:"dark",sticky:"top",children:[Object(d.jsx)(l.a.Brand,{href:"/",children:"ICT Swiss Skills"}),Object(d.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsx)(h.a,{className:"me-auto",children:this.generateTrades()})})]})}},{key:"generateTrades",value:function(){var e=[],t=p.trades;for(var n in t)e.push(Object(d.jsx)(b,{trade:n,data:t[n]}));return e}}]),n}(a.Component),f=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(l.a,{fixed:"bottom",bg:"dark",variant:"dark",className:"justify-content-center",children:Object(d.jsx)(l.a.Text,{children:"\xa9Bissbert"})})}}]),n}(a.Component),v=n(7),x=n(38),m=n.n(x),k=n(45),g=n(46),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={markdown:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.markdown;return Object(d.jsx)("div",{className:"article",children:Object(d.jsx)(g.a,{children:e})})}},{key:"componentWillMount",value:function(){this.loadMarkdown()}},{key:"loadMarkdown",value:function(){var e=Object(k.a)(m.a.mark((function e(){var t,a,r=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location,e.prev=1,console.log("location: ".concat(t.pathname)),e.next=5,n(62)("./pages".concat(t.pathname,".md"));case 5:return a=e.sent,e.next=8,fetch(a.default);case 8:e.sent.text().then((function(e){return r.setState({markdown:e})})).catch((function(e){return console.log(e)})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.setState({markdown:"#There is no file for the challenge with the name ***".concat(t.pathname,"***\n\n---\n\nPlease select the challenges from the Navigation")});case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()}]),a}(a.Component),w=Object(v.g)(y),C=n(72),_=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return null}}]),n}(a.Component),T=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{id:"content",children:Object(d.jsxs)(v.d,{children:[Object(d.jsx)(v.b,{exact:!0,path:"/",children:Object(d.jsx)(v.a,{to:"/home"})}),Object(d.jsx)(v.b,{path:"/home",children:Object(d.jsx)(_,{})}),Object(d.jsx)(v.b,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(w,{})})})]})})}}]),n}(a.Component);var N=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsx)(T,{}),Object(d.jsx)(f,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},B=n(29);c.a.render(Object(d.jsx)(B.a,{basename:"".concat("/ict_swissskills_challenge_2","/ict_swissskills_challenge_2"),children:Object(d.jsx)(N,{})}),document.getElementById("root")),S()}},[[66,1,2]]]);
//# sourceMappingURL=main.3b5cbdcf.chunk.js.map