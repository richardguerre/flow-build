import{j as i,c as a}from"./index-1b55009a.js";import{d as p}from"./index-d3fc9829.js";const d=p(l=>{const c=l.components;l.React;const g=i("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:i("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})});return{name:"GitHub",renderItemCardDetails:async({item:o})=>{const t=o.pluginDatas.find(u=>u.pluginSlug===l.pluginSlug);if(!t)return null;const s=t.min,[,n,r,e]=s.url.match(/https:\/\/(?:api\.)?github\.com\/(?:repos\/)?([^/]+)\/([^/]+)\/pull(?:s)?\/([^/]+)/);return!n||!r?null:[{fullWidth:!0,component:()=>i("a",{href:`https://github.com/${n}/${r}${e?`/pull/${e}`:""}`,target:"_blank",rel:"noopener noreferrer",children:a(c.Badge,{className:"flex w-fit items-center gap-1 bg-gray-200 text-gray-600",children:[g,a("span",{className:"hover:underline",children:[n,"/",r,e?`#${e}`:""]})]})})}]},renderTaskCardDetails:async({task:o})=>{const t=o.pluginDatas.find(u=>u.pluginSlug===l.pluginSlug);if(!t)return null;const s=t.min,[,n,r,e]=s.url.match(/https:\/\/(?:api\.)?github\.com\/(?:repos\/)?([^/]+)\/([^/]+)\/pull(?:s)?\/([^/]+)/);return[{fullWidth:!0,component:()=>i("a",{href:`https://github.com/${n}/${r}${e?`/pull/${e}`:""}`,target:"_blank",rel:"noopener noreferrer",children:a(c.Badge,{className:"flex w-fit items-center gap-1 bg-gray-200 text-gray-600",children:[g,a("span",{className:"hover:underline",children:[n,"/",r,e?`#${e}`:""]})]})})}]}}});export{d as default};
