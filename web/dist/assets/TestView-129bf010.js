import{a as o,_ as a,j as t}from"./index-4b77959e.js";const r={someData:"some data"},n=()=>{const{test:e}={test:r};return o.useEffect(()=>{console.log(e),(async()=>{const s=await fetch("https://cdn.jsdelivr.net/gh/richardguerre/flow@main/test.js");console.log(s),(await a(()=>import("https://cdn.jsdelivr.net/gh/richardguerre/flow@main/test2.js"),[])).testFn()})()},[]),t("div",{children:t("h1",{children:"Hello World"})})};export{n as default,r as testData};
