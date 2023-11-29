import{c as l,j as n,ai as k}from"./index-9d9fa201.js";import{d as b}from"./index-d3fc9829.js";const S=b(s=>{const i=s.React,u=s.components,p=()=>{var v,x;const a=s.operations.useLazyQuery({operationName:"calendars"}),c=new Set(((v=a==null?void 0:a.data)==null?void 0:v.flatMap(e=>e.calendars).filter(e=>e.connected&&!!e.id).map(e=>e.id))??[]),[t,o]=i.useState(c),[r,m]=s.hooks.useDebounce(t,1e3),[h,g]=i.useState(!1),C=e=>{t.has(e)?t.delete(e):t.add(e),o(new Set(t))};s.hooks.useAsyncEffect(async()=>{r.size===c.size&&Array.from(r).every(e=>c.has(e))||(g(!0),await s.operations.mutation({operationName:"connectCalendars",input:{calendarIds:Array.from(r)}}),g(!1))},[r]);let d="Saved";return m&&!h?d="Not saved yet...":!m&&h?d="Saving...":d="Saved",l("div",{className:"flex flex-col gap-2",children:[(x=a==null?void 0:a.data)==null?void 0:x.map(e=>l("div",{className:"flex flex-col gap-2 rounded w-full bg-background-50 shadow px-4 py-2",children:[n("div",{className:"font-semibold",children:e.account}),n("div",{className:"flex flex-col gap-2",children:e.calendars.map(f=>n(u.CheckboxWithLabel,{label:f.summary??"Unknown calendar",checked:t.has(f.id),onCheckedChange:()=>C(f.id)}))})]})),n("div",{className:"italic text-sm text-foreground-700",children:d})]})};return{name:"Google Calendar",settings:{"connect-account":{type:"custom",render:()=>l("div",{className:"flex flex-col gap-2",children:[n("a",{href:`${s.serverOrigin}/api/plugin/google-calendar/auth`,children:n(u.Button,{children:"Connect an account"})}),n(u.ErrorBoundary,{fallbackRender:({error:a})=>{var c,t,o;return((o=(t=(c=a.cause)==null?void 0:c[0])==null?void 0:t.extensions)==null?void 0:o.code)==="NOT_AUTHENTICATED"?n(k,{}):n("p",{className:"text-sm text-negative-600",children:a.message})},children:n(i.Suspense,{fallback:"Loading connected accounts...",children:n(p,{})})})]})}},routineSteps:{"create-tasks-from-events":{name:"Create tasks from events",description:"Create tasks from events in your connected Google Calendars.",component:a=>n("div",{children:l("div",{children:[n(a.BackButton,{}),n(a.NextButton,{})]})})}}}});export{S as default};
