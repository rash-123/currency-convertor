(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),r=n.n(a),u=n(7),o=n(2),s=(n(12),n(0));function j(e){var t=e.currencyOptions,n=e.selectedCurrency,c=e.onChangeCurrency,a=e.onChangeAmount,r=e.amount;return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"number",className:"input",value:r,onChange:a}),Object(s.jsx)("select",{value:n,onChange:c,children:t.map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))})]})}var i="http://api.exchangeratesapi.io/v1/latest?access_key=24dadb83e611b8401c4ffc2d6a5532c9";var b=function(){var e,t,n=Object(c.useState)([]),a=Object(o.a)(n,2),r=a[0],b=a[1],l=Object(c.useState)(),h=Object(o.a)(l,2),O=h[0],f=h[1],g=Object(c.useState)(),d=Object(o.a)(g,2),v=d[0],y=d[1],p=Object(c.useState)(),C=Object(o.a)(p,2),m=C[0],x=C[1],k=Object(c.useState)(1),S=Object(o.a)(k,2),E=S[0],w=S[1],A=Object(c.useState)(!0),J=Object(o.a)(A,2),N=J[0],q=J[1];function B(e){if(!e.ok)throw Error(e.statusText);return e}return N?(t=E,e=E*m):(e=E,t=E/m),Object(c.useEffect)((function(){fetch(i).then(B).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];b([e.base].concat(Object(u.a)(Object.keys(e.rates)))),f(e.base),y(t),x(e.rates[t])}))}),[]),Object(c.useEffect)((function(){null!=O&&null!=v&&fetch("".concat(i,"&base=").concat(O,"&symbols=").concat(v)).then(B).then((function(e){return e.json()})).then((function(e){console.log(v),console.log(e),x(e.rates[v])})).catch((function(e){console.log(e)}))}),[O,v]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Convert"}),Object(s.jsx)(j,{currencyOptions:r,selectedCurrency:O,onChangeCurrency:function(e){return f(e.target.value)},onChangeAmount:function(e){w(e.target.value),q(!0)},amount:t}),Object(s.jsx)("div",{className:"equals",children:"="}),Object(s.jsx)(j,{currencyOptions:r,selectedCurrency:v,onChangeCurrency:function(e){return y(e.target.value)},onChangeAmount:function(e){w(e.target.value),q(!1)},amount:e})]})};r.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.93806b92.chunk.js.map