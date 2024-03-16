import{c as o,j as e,ai as x}from"./index-1b55009a.js";import{d as v}from"./index-d3fc9829.js";const b=v(r=>{const d=r.React,n=r.components,h=()=>{var a;const t=r.operations.useLazyQuery({operationName:"accounts"});return e("div",{children:(a=t==null?void 0:t.data)==null?void 0:a.map(i=>{const s=r.dayjs(i.expiresAt);return o("div",{className:"flex flex-col gap-2 rounded w-full bg-background-50 shadow px-4 py-2",children:[e("div",{className:"font-semibold",children:i.email}),o("div",{children:["Expires: ",s.fromNow()]})]},i.email)})})},p=t=>{const[a,i]=d.useState(!1),{register:s,handleSubmit:m,control:c}=r.reactHookForm.useForm(),f=async l=>{console.log(l);const u=t.views.find(w=>w.id===l.viewId);u&&await r.operations.mutation({operationName:"createList",input:{listName:l.name,viewId:u.id,account:u.account}})};return e(n.Dialog,{open:a,onOpenChange:i,children:o("form",{onSubmit:m(f),children:[e(n.DialogTitle,{children:"Create List"}),o(n.DialogContent,{children:[e(n.FormInput,{...s("name",{required:"The list must be named something 😄"}),label:"Name"}),o(n.FormSelect,{name:"viewId",control:c,children:[e(n.SelectTrigger,{className:"max-w-xs",children:"Linear view"}),e(n.SelectContent,{children:t.views.map(l=>e(n.SelectItem,{value:l.id,children:l.name},l.id))})]})]}),e(n.DialogFooter,{children:e(n.Button,{children:"Create"})})]})})},g=()=>{var m;const[t,a]=d.useState(!1),i=r.operations.useLazyQuery({operationName:"lists"}),s=r.operations.useLazyQuery({operationName:"views"});return o("div",{children:[(m=i==null?void 0:i.data)==null?void 0:m.map(c=>o("div",{className:"flex flex-col gap-2 rounded w-full bg-background-50 shadow px-4 py-2",children:[e("div",{className:"font-semibold",children:c.name}),e("div",{children:c.description}),e(n.Button,{danger:!0,onClick:async()=>{await r.operations.mutation({operationName:"deleteList",input:{listId:c.id}})},children:"Remove"})]},c.name)),e(n.Button,{onClick:()=>a(!0),children:"Create List"}),t&&e(p,{views:(s==null?void 0:s.data)??[]})]})};return{name:"Linear",settings:{"connect-account":{type:"custom",render:()=>o("div",{className:"flex flex-col gap-2",children:[e("a",{href:`${r.serverOrigin}/api/plugin/linear/auth`,children:e(n.Button,{children:"Connect Linear"})}),e(n.ErrorBoundary,{fallbackRender:({error:t})=>{var a,i,s;return((s=(i=(a=t.cause)==null?void 0:a[0])==null?void 0:i.extensions)==null?void 0:s.code)==="NOT_AUTHENTICATED"?e(x,{}):e("p",{className:"text-sm text-negative-600",children:t.message})},children:e(d.Suspense,{fallback:"Loading connected accounts...",children:e(h,{})})})]})},lists:{type:"custom",render:()=>e(n.ErrorBoundary,{fallbackRender:({error:t})=>e("p",{className:"text-sm text-negative-600",children:t.message}),children:e(d.Suspense,{fallback:"Loading lists...",children:e(g,{})})})},syncAllViews:{type:"custom",render:()=>{const[t,a]=d.useState(!1);return o("div",{children:[e(n.Button,{onClick:async()=>{a(!0),await r.operations.mutation({operationName:"syncAllViews"}),a(!1)},loading:t,children:"Refresh All Lists"}),e("div",{children:"This will refresh all lists and their issues. This may take a while."})]})}}}}});export{b as default};
