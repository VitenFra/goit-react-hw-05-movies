"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{3148:function(e,t,n){n.d(t,{Hg:function(){return i},IQ:function(){return p},Jh:function(){return l},V0:function(){return o},rs:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"373fb4f004f8944acdbb048696a20af4"}}),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/search/movie",{params:{query:t}});case 2:return n=e.sent,e.next=5,n.data.results;case 5:return r=e.sent,console.log(r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("trending/movie/week");case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("movie/".concat(t));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("movie/".concat(t,"/credits"));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r.cast);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("movie/".concat(t,"/reviews"));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},9373:function(e,t,n){n.d(t,{Z:function(){return c}});n(2791);var r=n(6871),a=n(501),u=n(184);function c(e){var t=e.trends,n=(0,r.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:t&&t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{to:"/movie/".concat(e.id),state:n,children:e.title})},e.id)}))})})}},8733:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(885),a=n(2791),u=n(501),c=n(6871),s={searchForm:"Searchbar_searchForm__iyrvR"},o=n(184);function i(e){var t=e.onSubmit,n=(0,a.useState)(""),u=(0,r.Z)(n,2),c=u[0],i=u[1];return(0,o.jsxs)("form",{className:s.searchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),i("")):alert("\u041d\u0435\u043c\u0430\u0454 \u0437\u0430\u043f\u0438\u0442\u0456\u0432")},children:[(0,o.jsx)("button",{type:"submit",className:s.searchFormButton,"aria-label":"search",children:(0,o.jsx)("span",{className:"button-label",children:"\u041f\u043e\u0448\u0443\u043a"})}),(0,o.jsx)("input",{className:s.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"\u041f\u043e\u0448\u0443\u043a \u0444\u0456\u043b\u044c\u043c\u0443",name:"query",value:c,onChange:function(e){i(e.currentTarget.value.toLowerCase())}})]})}var f=n(3148),p=n(9373);function l(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],l=(0,a.useState)([]),h=(0,r.Z)(l,2),v=h[0],m=h[1],d=(0,c.s0)(),x=(0,u.lr)(),b=(0,r.Z)(x,1)[0];return(0,a.useEffect)((function(){console.log(n);var e=b.get("query");e&&(0,f.V0)(e).then((function(e){if(0===e.length)return m([]),void alert("We don't have any movie with that name");m(e)})).catch((function(e){return console.log(e)}))}),[n,b]),(0,o.jsxs)("div",{children:[(0,o.jsx)(i,{onSubmit:function(e){s(e),d("?query=".concat(e))}}),v&&v.length>0&&(0,o.jsx)(p.Z,{trends:v})]})}}}]);
//# sourceMappingURL=733.a78f481b.chunk.js.map