import{j as e}from"./index-b60f1d3d.js";import{d as S}from"./index-d3fc9829.js";const I="gitstart-session-token",A=S(c=>{const t=c.components;c.React;const b=e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 82 81",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("ellipse",{cx:"41",cy:"40.5",rx:"41",ry:"40.5",fill:"#FCEED4"}),e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M37.9809 58.0204C47.0248 58.0204 54.3563 50.6889 54.3563 41.645C54.3563 32.6011 47.0248 25.2696 37.9809 25.2696C28.9371 25.2696 21.6056 32.6011 21.6056 41.645C21.6056 50.6889 28.9371 58.0204 37.9809 58.0204ZM37.9809 61.6884C49.0506 61.6884 58.0244 52.7147 58.0244 41.645C58.0244 30.5753 49.0506 21.6016 37.9809 21.6016C26.9113 21.6016 17.9375 30.5753 17.9375 41.645C17.9375 52.7147 26.9113 61.6884 37.9809 61.6884Z",fill:"black"}),e.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M61.7881 28.5227C62.9758 28.5227 63.9386 27.5599 63.9386 26.3722C63.9386 25.1845 62.9758 24.2216 61.7881 24.2216C60.6003 24.2216 59.6375 25.1845 59.6375 26.3722C59.6375 27.5599 60.6003 28.5227 61.7881 28.5227ZM61.7881 31.1428C64.4228 31.1428 66.5587 29.0069 66.5587 26.3722C66.5587 23.7374 64.4228 21.6016 61.7881 21.6016C59.1533 21.6016 57.0175 23.7374 57.0175 26.3722C57.0175 29.0069 59.1533 31.1428 61.7881 31.1428Z",fill:"black"})]}),p=e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:e.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),h=a=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.size??"16",height:a.size??"16",fill:"currentColor",className:a.className,viewBox:"0 0 16 16",children:e.jsx("path",{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"})});return{name:"GitStart",settings:{[I]:{type:"textfield",label:"Token",description:"You can find this in your localStorage when logged in to GitStart under the key `user_token`.",placeholder:"Paste your GitStart token here",isSecret:!0}},onCreateTask:async({task:a})=>{var r;return(r=a==null?void 0:a.item)!=null&&r.pluginDatas.some(s=>s.pluginSlug==="gitstart")?{dialogContent:({NextButton:s,BackButton:l,...d})=>{const{register:u,handleSubmit:C,formState:i,watch:j,control:N}=c.reactHookForm.useForm(),m=j(),f=n=>{d.onNext({taskOverrides:{title:n.title},actionData:{type:n.type,status:n.status}})},y=c.dayjs().isSame(a.date.value,"day"),E=c.dayjs().isAfter(a.date.value,"day");return e.jsxs("form",{onSubmit:C(f),className:"mt-4 flex flex-col gap-4",children:[e.jsx("input",{defaultValue:a.title.value,className:"ring-none placeholder:text-foreground-700 text-foreground-900 bg-transparent text-lg focus:outline-none",...u("title",{required:"The task's title is required."})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(t.FormCombobox,{name:"type",defaultValue:"CODE",control:N,rules:{required:"The task's type is required."},children:[e.jsx(t.ComboboxTrigger,{role:"combobox",children:e.jsx(t.ComboboxValue,{renderValue:n=>{const o=g[n];return e.jsx(t.Badge,{className:o.className,children:o.label})}})}),e.jsxs(t.ComboboxContent,{className:"w-50 p-0",align:"start",children:[e.jsx(t.ComboboxInput,{placeholder:"Search type..."}),e.jsx(t.ComboboxEmpty,{children:"No type found."}),e.jsx(t.ComboboxGroup,{children:Object.entries(g).map(([n,o])=>e.jsxs(t.ComboboxItem,{value:n,className:"flex items-center gap-2",children:[e.jsx(t.ComboboxSelected,{className:"opacity-0",selectedClassName:"opacity-100",children:e.jsx(h,{className:"text-foreground-900 h-6"})}),e.jsx(t.Badge,{className:o.className,children:o.label})]},n))})]})]}),e.jsxs(t.FormCombobox,{name:"status",defaultValue:y||E?"IN_PROGRESS":"TO_DO",control:N,rules:{required:"The task's status is required."},children:[e.jsx(t.ComboboxTrigger,{children:e.jsx(t.ComboboxValue,{renderValue:n=>{const o=x[n];return e.jsx(t.Badge,{className:o.className,children:o.label})}})}),e.jsxs(t.ComboboxContent,{className:"w-50 p-0",align:"start",children:[e.jsx(t.ComboboxInput,{placeholder:"Search status..."}),e.jsx(t.ComboboxEmpty,{children:"No status found."}),e.jsx(t.ComboboxGroup,{children:Object.entries(x).map(([n,o])=>e.jsxs(t.ComboboxItem,{value:n,className:"flex items-center gap-2",children:[e.jsx(t.ComboboxSelected,{className:"opacity-0",selectedClassName:"opacity-100",children:e.jsx(h,{className:"text-foreground-900 h-6"})}),e.jsx(t.Badge,{className:o.className,children:o.label})]},n))})]})]})]}),i.errors.title&&e.jsx("div",{className:"text-negative-600 text-sm",children:i.errors.title.message}),i.errors.type&&e.jsx("div",{className:"text-negative-600 text-sm",children:i.errors.type.message}),i.errors.status&&e.jsx("div",{className:"text-negative-600 text-sm",children:i.errors.status.message}),e.jsxs("div",{className:"flex gap-2 self-end",children:[e.jsx(l,{type:"button",onClick:()=>d.onBack({taskOverrides:{title:m.title},actionData:{type:m.type,status:m.status}})}),e.jsx(s,{type:"submit"})]})]})}}:null},renderTaskCardDetails:async({task:a})=>{const r=a.pluginDatas.find(u=>u.pluginSlug==="gitstart");if(!r)return null;const s=r.min,l=g[s.type],d=x[s.status];return[{component:()=>e.jsx(t.Badge,{className:l.className,children:l.label})},{component:()=>e.jsx(t.Badge,{className:d.className,children:d.label})}]},renderTaskCardActions:async({task:a})=>{const r=a.pluginDatas.find(l=>l.pluginSlug==="gitstart");if(!r)return null;const s=r.min;return[{component:()=>s.githubPrUrl?e.jsx("a",{href:s.githubPrUrl,target:"_blank",rel:"noreferrer",children:e.jsx(t.CardActionButton,{children:p})}):null},{component:()=>e.jsx("a",{href:s.ticketUrl,target:"_blank",rel:"noreferrer",children:b})}]},renderItemCardDetails:async({item:a})=>{const r=a.pluginDatas.find(l=>l.pluginSlug==="gitstart");if(!r)return null;const s=r.min;if(s.type==="pull_request"){const l=k[s.status];return[{component:()=>e.jsx(t.Badge,{className:"bg-green-100 text-green-700",children:"PR"})},{component:()=>e.jsx(t.Badge,{className:l.className,children:l.label})}]}else if(s.type==="ticket"){const l=w[s.status];return[{component:()=>e.jsx(t.Badge,{className:"bg-gray-200 text-gray-600",children:"Ticket"})},{component:()=>e.jsx(t.Badge,{className:l.className,children:l.label})}]}return null},renderItemCardActions:async({item:a})=>{const r=a.pluginDatas.find(l=>l.pluginSlug==="gitstart");if(!r)return null;const s=r.min;return[{component:()=>s.type==="pull_request"&&s.url?e.jsx("a",{href:s.url,target:"_blank",rel:"noreferrer",children:e.jsx(t.CardActionButton,{children:p})}):null},{component:()=>e.jsx("a",{href:s.ticketUrl,target:"_blank",rel:"noreferrer",children:b})}]}}}),g={SPEC:{label:"Spec",className:"bg-gray-200 text-gray-600"},CODE:{label:"Code",className:"bg-blue-100 text-blue-600"},REVIEW:{label:"Review",className:"bg-yellow-100 text-yellow-600"},QA:{label:"QA",className:"bg-purple-100 text-purple-600"},LEARNING:{label:"Learning",className:"bg-green-100 text-green-700"}},x={TO_DO:{label:"To do",className:"bg-gray-200 text-gray-600"},IN_PROGRESS:{label:"In progress",className:"bg-blue-100 text-blue-600"},FINISHED:{label:"Finished",className:"bg-green-100 text-green-700"},CANCELED:{label:"Canceled",className:"bg-red-100 text-red-600"}},k={PLANNED:{label:"Planned",className:"bg-gray-200 text-gray-600"},IN_PROGRESS:{label:"In progress",className:"bg-blue-100 text-blue-600"},INTERNAL_REVIEW:{label:"Internal review",className:"bg-yellow-100 text-yellow-600"},CLIENT_REVIEW:{label:"Client review",className:"bg-purple-100 text-purple-600"},CANCELED:{label:"Canceled",className:"bg-red-100 text-red-600"},APPROVED:{label:"Approved",className:"bg-green-100 text-green-700"},MERGED:{label:"Merged",className:"bg-green-100 text-green-700"}},w={BACKLOG:{label:"Backlog",className:"bg-gray-200 text-gray-600"},AVAILABLE:{label:"Available",className:"bg-blue-100 text-blue-600"},IN_PROGRESS:{label:"In progress",className:"bg-yellow-100 text-yellow-600"},PAUSED:{label:"Paused",className:"bg-purple-100 text-purple-600"},FINISHED:{label:"Finished",className:"bg-green-100 text-green-700"},CANCELED:{label:"Canceled",className:"bg-red-100 text-red-600"}};export{A as default};
