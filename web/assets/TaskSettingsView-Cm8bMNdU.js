import{a as u,r as k,j as e,I as G,o as J,k as F,i as S,p as C,q as N,B as d,s as V,v as K,w as D,x as _,F as M,C as P,y as I,z as L,A as B,E as O,G as p,T as y,H as j,J as v,K as X,M as Y,N as Z,P as W,Q as ee,t as w,R as ae}from"./index-CIpxgCpn.js";const $=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},t={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"__id",storageKey:null}]};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TaskSettingsViewQuery",selections:[{alias:null,args:null,concreteType:"QueryTaskTagsConnection",kind:"LinkedField",name:"taskTags",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryTaskTagsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"TaskTag",kind:"LinkedField",name:"node",plural:!1,selections:[a,n,{args:null,kind:"FragmentSpread",name:"TaskSettingsView_tag"}],storageKey:null}],storageKey:null},t],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"TaskSettingsViewQuery",selections:[{alias:null,args:null,concreteType:"QueryTaskTagsConnection",kind:"LinkedField",name:"taskTags",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryTaskTagsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"TaskTag",kind:"LinkedField",name:"node",plural:!1,selections:[a,n,{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPrivate",storageKey:null}],storageKey:null}],storageKey:null},t],storageKey:null}]},params:{cacheID:"d6ddec4281d14c0789fa826a03cc8183",id:null,metadata:{},name:"TaskSettingsViewQuery",operationKind:"query",text:`query TaskSettingsViewQuery {
  taskTags {
    edges {
      node {
        id
        name
        ...TaskSettingsView_tag
      }
    }
  }
}

fragment TaskSettingsViewDeleteTagButton_tag on TaskTag {
  id
}

fragment TaskSettingsView_tag on TaskTag {
  id
  name
  color
  isPrivate
  ...TaskSettingsViewDeleteTagButton_tag
}
`}}}();$.hash="226d81d062db76ff442568df9aa21709";const ne=$,E=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"TaskSettingsViewCreateTagMutation",selections:[{alias:null,args:n,concreteType:"TaskTag",kind:"LinkedField",name:"createTaskTag",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"TaskSettingsView_tag"},{args:null,kind:"FragmentSpread",name:"TaskTagsNode_tag"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"TaskSettingsViewCreateTagMutation",selections:[{alias:null,args:n,concreteType:"TaskTag",kind:"LinkedField",name:"createTaskTag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPrivate",storageKey:null}],storageKey:null}]},params:{cacheID:"72326ee0c487915675cd5c18a7a12aa9",id:null,metadata:{},name:"TaskSettingsViewCreateTagMutation",operationKind:"mutation",text:`mutation TaskSettingsViewCreateTagMutation(
  $input: MutationCreateTaskTagInput!
) {
  createTaskTag(input: $input) {
    ...TaskSettingsView_tag
    ...TaskTagsNode_tag
    id
  }
}

fragment TaskSettingsViewDeleteTagButton_tag on TaskTag {
  id
}

fragment TaskSettingsView_tag on TaskTag {
  id
  name
  color
  isPrivate
  ...TaskSettingsViewDeleteTagButton_tag
}

fragment TaskTagsNode_tag on TaskTag {
  id
  name
  color
}
`}}}();E.hash="0c65a042f5fdd67ca6c1ebbfea651a95";const Q={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TaskSettingsView_tag",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPrivate",storageKey:null},{args:null,kind:"FragmentSpread",name:"TaskSettingsViewDeleteTagButton_tag"}],type:"TaskTag",abstractKey:null};Q.hash="576bf5032a2d7bd80b388d80a0fbef23";const R=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"TaskSettingsViewUpdateTagMutation",selections:[{alias:null,args:n,concreteType:"TaskTag",kind:"LinkedField",name:"updateTaskTag",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"TaskSettingsView_tag"},{args:null,kind:"FragmentSpread",name:"TaskTagsNode_tag"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"TaskSettingsViewUpdateTagMutation",selections:[{alias:null,args:n,concreteType:"TaskTag",kind:"LinkedField",name:"updateTaskTag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPrivate",storageKey:null}],storageKey:null}]},params:{cacheID:"f5644d5b01837eca32a2fcd24554b8ae",id:null,metadata:{},name:"TaskSettingsViewUpdateTagMutation",operationKind:"mutation",text:`mutation TaskSettingsViewUpdateTagMutation(
  $input: MutationUpdateTaskTagInput!
) {
  updateTaskTag(input: $input) {
    ...TaskSettingsView_tag
    ...TaskTagsNode_tag
    id
  }
}

fragment TaskSettingsViewDeleteTagButton_tag on TaskTag {
  id
}

fragment TaskSettingsView_tag on TaskTag {
  id
  name
  color
  isPrivate
  ...TaskSettingsViewDeleteTagButton_tag
}

fragment TaskTagsNode_tag on TaskTag {
  id
  name
  color
}
`}}}();R.hash="3a6387c2032b03886a18a01ca90eebbd";const q={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TaskSettingsViewDeleteTagButton_tag",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"TaskTag",abstractKey:null};q.hash="48228f8a52906955b8c932ba0aaad324";const A=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"TaskTag",kind:"LinkedField",name:"deleteTaskTag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"TaskSettingsViewDeleteTagMutation",selections:n,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"TaskSettingsViewDeleteTagMutation",selections:n},params:{cacheID:"d427beae130f13e32ace4e82bd51f47e",id:null,metadata:{},name:"TaskSettingsViewDeleteTagMutation",operationKind:"mutation",text:`mutation TaskSettingsViewDeleteTagMutation(
  $input: MutationDeleteTaskTagInput!
) {
  deleteTaskTag(input: $input) {
    id
  }
}
`}}}();A.hash="15c58b083680505ad052b3cff4b2c9aa";const re=()=>{const[a,n]=u.useState(""),t=k.useLazyLoadQuery(ne,{}),o=t.taskTags.edges.map(l=>l.node).filter(l=>l.name.toLowerCase().includes(a.toLowerCase()));return e.jsx("div",{className:"bg-background-50 max-h-screen w-full overflow-auto",children:e.jsxs("div",{className:"flex flex-col gap-4 max-w-3xl p-8",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"Tasks"}),e.jsx("div",{className:"text-foreground-700",children:"Manage task settings"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"text-xl font-semibold",id:"tags",children:"Tags"}),e.jsxs("div",{className:"text-foreground-700",children:["Use ",e.jsx("span",{className:"text-green-700",children:"#tags"})," to organize your tasks. Plugins can use these tags to do cool things like automations based on tags and their privacy setting."]}),e.jsx("div",{className:"text-foreground-700 mt-2",children:"Any task with a private tag will be considered private and will not be shown in"}),e.jsxs("div",{className:"mt-2 flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2 justify-between",children:[e.jsx(G,{leftIcon:e.jsx(J,{}),type:"text",placeholder:"Find your tag...",value:a,onChange:l=>n(l.target.value)}),e.jsx(te,{connectionId:t.taskTags.__id})]}),o.length===0&&e.jsx("div",{className:"text-foreground-700 text-sm w-full text-center py-6",children:a.length>0?"No tags found":"No tags yet"}),o.map(l=>e.jsx(le,{tag:l,connectionId:t.taskTags.__id},l.id))]})]})]})})},te=a=>{const[n,t]=u.useState(!1),{register:o,handleSubmit:l,control:s,formState:c}=F(),[r,m]=S(E),T=i=>{const g=i.private==="private";r({variables:{input:{name:i.name,color:i.color,isPrivate:g}},onCompleted:()=>{t(!1)},updater:f=>{const b=f.get(a.connectionId);if(!b)return;const U=f.getRootField("createTaskTag"),H=k.ConnectionHandler.createEdge(f,b,U,"QueryTaskTagsConnectionEdge");k.ConnectionHandler.insertEdgeBefore(b,H)}})},h=u.useMemo(()=>x[Math.floor(Math.random()*x.length)].color,[]);return e.jsxs(C,{open:n,onOpenChange:t,children:[e.jsx(N,{asChild:!0,children:e.jsx(d,{children:"New tag"})}),e.jsxs(V,{children:[e.jsxs(K,{children:[e.jsx(D,{children:"New tag"}),e.jsx(_,{children:"Create a new tag to organize your tasks."})]}),e.jsxs("form",{onSubmit:l(T),className:"flex flex-col items-start gap-4",children:[e.jsx(M,{...o("name"),label:"Name",placeholder:"Make it short...",error:c.errors.name}),e.jsx(P,{name:"color",control:s,defaultValue:h,render:({field:i})=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"text-foreground-900 text-base font-medium",children:"Color"}),e.jsx(z,{withLabel:!0,color:i.value,onChange:g=>i.onChange(g)})]})}),e.jsxs(I,{name:"private",control:s,error:c.errors.private,defaultValue:"private",label:"Private or public?",description:"If set to private, any task with this tag will be considered private.",children:[e.jsx(L,{className:"w-min",children:e.jsx(B,{})}),e.jsxs(O,{children:[e.jsx(p,{value:"private",children:"Private"}),e.jsx(p,{value:"public",children:"Public"})]})]}),e.jsxs("div",{className:"flex gap-2 items-center self-end",children:[e.jsx(d,{secondary:!0,type:"button",onClick:()=>t(!1),children:"Cancel"}),e.jsx(d,{type:"submit",loading:m,children:"Create"})]})]})]})]})},le=a=>{const[n,t]=u.useState(!1),{register:o,handleSubmit:l,control:s,formState:c}=F(),r=k.useFragment(Q,a.tag),[m,T]=S(R),h=i=>{const g=i.private==="private";m({variables:{input:{id:r.id,name:i.name,color:i.color,isPrivate:g}},onCompleted:()=>{t(!1)}})};return n?e.jsxs("form",{className:"flex gap-2 items-center justify-between p-2 bg-background-100",onSubmit:l(h),children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(P,{name:"color",control:s,defaultValue:r.color,render:({field:i})=>e.jsx(z,{color:i.value,onChange:g=>i.onChange(g)})}),e.jsx(M,{...o("name"),placeholder:"Name",defaultValue:r.name,error:c.errors.name}),e.jsxs(I,{name:"private",control:s,error:c.errors.private,defaultValue:r.isPrivate?"private":"public",children:[e.jsx(L,{children:e.jsx(B,{})}),e.jsxs(O,{children:[e.jsx(p,{value:"private",children:"Private"}),e.jsx(p,{value:"public",children:"Public"})]})]})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(d,{type:"button",secondary:!0,onClick:()=>t(!1),disabled:T,children:"Cancel"}),e.jsx(d,{type:"submit",loading:T,children:"Save"})]})]}):e.jsxs("div",{className:"group flex items-center gap-2 justify-between rounded-md px-4 py-1.5 bg-background-100",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:`bg-${r.color}-700 rounded-full h-2.5 w-2.5`}),r.name,r.isPrivate&&e.jsxs(y,{children:[e.jsx(j,{className:"text-foreground-700 text-sm",children:"Private"}),e.jsx(v,{children:"Any task with this tag will be considered private."})]})]}),e.jsxs("div",{className:"flex gap-2 items-center opacity-0 group-hover:opacity-100",children:[e.jsxs(y,{children:[e.jsx(j,{asChild:!0,children:e.jsx(d,{tertiary:!0,sm:!0,onClick:()=>t(!0),children:e.jsx(X,{size:12})})}),e.jsx(v,{children:"Edit tag"})]}),e.jsx(se,{tag:r,connectionId:a.connectionId})]})]})},se=a=>{const[n,t]=u.useState(!1),o=k.useFragment(q,a.tag),[l,s]=S(A),c=()=>{l({variables:{input:{id:o.id}},onCompleted:()=>t(!1),updater:r=>{const m=r.get(a.connectionId);m&&k.ConnectionHandler.deleteNode(m,o.id)}})};return e.jsxs(C,{open:n,onOpenChange:t,children:[e.jsx(N,{asChild:!0,children:e.jsx(d,{tertiary:!0,sm:!0,children:e.jsx(Y,{size:20})})}),e.jsxs(V,{children:[e.jsxs(K,{children:[e.jsx(D,{children:"Delete tag"}),e.jsx(_,{children:"Are you sure you want to delete this tag? This action cannot be undone."})]}),e.jsxs(Z,{children:[e.jsx(d,{secondary:!0,onClick:()=>t(!1),children:"Cancel"}),e.jsx(d,{danger:!0,loading:s,onClick:c,children:"Delete"})]})]})]})},x=[{color:"yellow",label:"Yellow"},{color:"amber",label:"Amber"},{color:"orange",label:"Orange"},{color:"red",label:"Red"},{color:"rose",label:"Rose"},{color:"pink",label:"Pink"},{color:"fuchsia",label:"Fuchsia"},{color:"purple",label:"Purple"},{color:"violet",label:"Violet"},{color:"indigo",label:"Indigo"},{color:"cyan",label:"Cyan"},{color:"sky",label:"Sky"},{color:"blue",label:"Blue"},{color:"emerald",label:"Emerald"},{color:"green",label:"Green"},{color:"lime",label:"Lime"},{color:"teal",label:"Teal"},{color:"gray",label:"Gray"},{color:"neutral",label:"Neutral"},{color:"zinc",label:"Zinc"},{color:"slate",label:"Slate"},{color:"stone",label:"Stone"}],z=a=>{const[n,t]=u.useState(!1),o=s=>{a.onChange(s),t(!1)},l=u.useMemo(()=>x.find(s=>s.color===a.color),[a.color]);return e.jsxs(W,{open:n,onOpenChange:t,children:[e.jsxs(ee,{className:w("flex items-center justify-center h-9 px-2 rounded border transition-colors border-background-300 hover:border-primary-300 flex items-center gap-2",a.className),children:[e.jsx("div",{className:`w-2.5 h-2.5 rounded-full bg-${a.color}-700`}),a.withLabel&&e.jsx("div",{className:"text-foreground-700",children:(l==null?void 0:l.label)??a.color})]}),e.jsx(ae,{className:"flex flex-wrap gap-1 max-w-63",align:"start",children:x.map(s=>e.jsxs(y,{children:[e.jsx(j,{className:"flex items-center gap-1",children:e.jsx("button",{className:w("flex items-center justify-center h-9 w-9 rounded border border-background-200/50 hover:border-background-300 transition-colors",a.color===s.color&&"border-background-300"),onClick:()=>o(s.color),children:e.jsx("div",{className:`w-2.5 h-2.5 rounded-full bg-${s.color}-700`})},s.color)}),e.jsx(v,{side:"bottom",children:s.label})]}))})]})};export{re as default};
