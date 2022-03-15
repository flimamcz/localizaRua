import{j as f,r as c,R as x,a as y}from"./vendor.013f7b94.js";const v=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(n){if(n.ep)return;n.ep=!0;const t=r(n);fetch(n.href,t)}};v();const e=f.exports.jsx,s=f.exports.jsxs;function b(){const[p,l]=c.exports.useState(""),[r,a]=c.exports.useState(null),[n,t]=c.exports.useState(null),[o,u]=c.exports.useState(null),h=`https://viacep.com.br/ws/${p}/json/`;function N({target:i}){const d=i.value.replace("-","").replace(".","").replace(",","").trim();l(d)}async function g(i){i.preventDefault();let d,m;try{u(!0),t(null),d=await fetch(h),m=await d.json(),a(m),u(!1)}catch{a(null),t(!0)}finally{u(!1),a(m)}}return o?e("p",{className:"loading"}):e(c.exports.Fragment,{children:s("div",{className:"container",children:[s("div",{className:"content",children:[e("h1",{children:"Localiza Endere\xE7o"}),s("form",{className:"form",onSubmit:i=>{i.preventDefault()},children:[e("label",{htmlFor:"cep",className:"ident-invisible",children:"Informe seu cep:"}),e("input",{type:"text",name:"cep",id:"cep",placeholder:"ex: 57041190",value:p,onChange:N,maxLength:"8"}),e("button",{className:"button-search",onClick:g,type:"submit",children:"Localizar"})]})]}),r?e("div",{className:"content-cep",children:e("ul",{children:r&&s("div",{children:[s("li",{children:["CEP: ",e("span",{className:"span-info",children:r.cep})]}),s("li",{children:["Logradouro: ",e("span",{className:"span-info",children:r.logradouro})]}),s("li",{children:["Complemento: ",r.complemento?e("span",{className:"span-info",children:r.complemento}):e("span",{className:"span-info",children:"Inexistente"})]}),s("li",{children:["Cairro: ",e("span",{className:"span-info",children:r.bairro})]}),s("li",{children:["Cidade: ",e("span",{className:"span-info",children:r.localidade})]}),s("li",{children:["Estado: ",e("span",{className:"span-info",children:r.uf})]}),s("li",{children:["DDD: ",e("span",{className:"span-info",children:r.ddd})]})]})})}):e("p",{className:"await-cep",children:"Informe um CEP!"})]})})}x.render(e(y.StrictMode,{children:e(b,{})}),document.getElementById("root"));