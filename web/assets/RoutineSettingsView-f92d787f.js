import{o as O,r as h,a as y,p as x,j as e,q as P,s as Y,t as F,B,n as f,C as Q,T as b,v,w,k as z,x as W,F as K,y as H,z as j,A as G,E as J}from"./index-b60f1d3d.js";const A=function(){var n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewQuery",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[n,t,i,{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewActiveCheckbox_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewRepeats_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewDetailed_routine"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"RoutineSettingsViewQuery",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[n,t,i,{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"24512f11c8b387c9d385350bc3a29d25",id:null,metadata:{},name:"RoutineSettingsViewQuery",operationKind:"query",text:`query RoutineSettingsViewQuery {
  routines {
    id
    name
    time
    ...RoutineSettingsViewActiveCheckbox_routine
    ...RoutineSettingsViewRepeats_routine
    ...RoutineSettingsViewDetailed_routine
  }
}

fragment RoutineSettingsViewActiveCheckbox_routine on Routine {
  id
  isActive
}

fragment RoutineSettingsViewDetailed_routine on Routine {
  id
  name
  time
  actionName
  steps {
    pluginSlug
    stepSlug
    shouldSkip
  }
  ...RoutineSettingsViewActiveCheckbox_routine
  ...RoutineSettingsViewRepeats_routine
}

fragment RoutineSettingsViewRepeats_routine on Routine {
  id
  repeats
}
`}}}();A.hash="753c5cd9a52c45b0a329d54d0e939883";const X=A,_=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{kind:"Variable",name:"input",variableName:"input"}],i={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsViewCreateRoutineMutation",selections:[{alias:null,args:t,concreteType:"Routine",kind:"LinkedField",name:"createRoutine",plural:!1,selections:[i,{args:null,kind:"FragmentSpread",name:"RoutineSettingsView_routine"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsViewCreateRoutineMutation",selections:[{alias:null,args:t,concreteType:"Routine",kind:"LinkedField",name:"createRoutine",plural:!1,selections:[i,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"1a8e7315d5f645914f5b3019571534d6",id:null,metadata:{},name:"RoutineSettingsViewCreateRoutineMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewCreateRoutineMutation(
  $input: MutationCreateRoutineInput!
) {
  createRoutine(input: $input) {
    id
    ...RoutineSettingsView_routine
  }
}

fragment RoutineSettingsViewActiveCheckbox_routine on Routine {
  id
  isActive
}

fragment RoutineSettingsViewDetailed_routine on Routine {
  id
  name
  time
  actionName
  steps {
    pluginSlug
    stepSlug
    shouldSkip
  }
  ...RoutineSettingsViewActiveCheckbox_routine
  ...RoutineSettingsViewRepeats_routine
}

fragment RoutineSettingsViewRepeats_routine on Routine {
  id
  repeats
}

fragment RoutineSettingsView_routine on Routine {
  id
  name
  time
  ...RoutineSettingsViewActiveCheckbox_routine
  ...RoutineSettingsViewRepeats_routine
  ...RoutineSettingsViewDetailed_routine
}
`}}}();_.hash="02bdd80c6832d40de2f3b0f56844c2f8";const D={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewActiveCheckbox_routine",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],type:"Routine",abstractKey:null};D.hash="1dc31f036dc1e1c019f5285a84bd0fc4";const C=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateActiveMutation",selections:t,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsViewUpdateActiveMutation",selections:t},params:{cacheID:"a68600f2493b65c56566091e4c6ba8a0",id:null,metadata:{},name:"RoutineSettingsViewUpdateActiveMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateActiveMutation(
  $input: MutationUpdateRoutineInput!
) {
  updateRoutine(input: $input) {
    id
    isActive
  }
}
`}}}();C.hash="1c0d9dc92314b633c08bd6cee0ab3e91";const M={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewRepeats_routine",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],type:"Routine",abstractKey:null};M.hash="883bdb2c013197954eafcbac59a7eb44";const L=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateRepeatsMutation",selections:t,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsViewUpdateRepeatsMutation",selections:t},params:{cacheID:"64a299e42219212189f74449bf1c9051",id:null,metadata:{},name:"RoutineSettingsViewUpdateRepeatsMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateRepeatsMutation(
  $input: MutationUpdateRoutineInput!
) {
  updateRoutine(input: $input) {
    id
    repeats
  }
}
`}}}();L.hash="71c0b7af79205dfed9d2505d00a94ac5";const U={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewDetailed_routine",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewActiveCheckbox_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewRepeats_routine"}],type:"Routine",abstractKey:null};U.hash="b8856520ac4ca2227119bab4c6f95103";const $=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{kind:"Variable",name:"input",variableName:"input"}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateRoutineMutation",selections:[{alias:null,args:t,concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewDetailed_routine"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsViewUpdateRoutineMutation",selections:[{alias:null,args:t,concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],storageKey:null}]},params:{cacheID:"fccd455af2cc0abb8d167be1b0e64980",id:null,metadata:{},name:"RoutineSettingsViewUpdateRoutineMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateRoutineMutation(
  $input: MutationUpdateRoutineInput!
) {
  updateRoutine(input: $input) {
    ...RoutineSettingsViewDetailed_routine
    id
  }
}

fragment RoutineSettingsViewActiveCheckbox_routine on Routine {
  id
  isActive
}

fragment RoutineSettingsViewDetailed_routine on Routine {
  id
  name
  time
  actionName
  steps {
    pluginSlug
    stepSlug
    shouldSkip
  }
  ...RoutineSettingsViewActiveCheckbox_routine
  ...RoutineSettingsViewRepeats_routine
}

fragment RoutineSettingsViewRepeats_routine on Routine {
  id
  repeats
}
`}}}();$.hash="447e3d96ba8804af5a76b6a78a8f0476";const te=()=>{var r;const{plugins:n}=O(),t=h.useLazyLoadQuery(X,{}),[i,u]=y.useState(((r=t.routines[0])==null?void 0:r.id)??null),[l]=x(_),o=async()=>{const d=await f.promise(l({variables:{input:{name:"New routine",actionName:"Plan",repeats:[],steps:[],time:"08:00"}},optimisticUpdater:S=>{const c=S.create(`client:newRoutine${new Date}`,"Routine");c.setValue("New routine","name"),c.setValue("Plan","actionName"),c.setValue("08:00","time"),c.setValue(!1,"isActive"),c.setValue([],"repeats"),c.setValue([],"steps");const R=S.getRoot(),k=R.getLinkedRecords("routines");R.setLinkedRecords([...k??[],c],"routines")}}),{loading:"Creating new routine...",success:"Routine created!",error:"Failed to create routine. Please try again."});u(d.createRoutine.id)};return e.jsxs("div",{className:"bg-background-50 flex max-h-screen w-full flex-col gap-4 overflow-auto p-8",children:[e.jsx("h1",{className:"text-xl font-medium",children:"Routines"}),e.jsxs("div",{className:"grid grid-cols-[minmax(0,_576px)_minmax(0,_1fr)] gap-4",children:[e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[t.routines.map(d=>e.jsxs("button",{className:"hover:bg-background-100 flex w-full justify-between gap-4 rounded-md px-4 py-2 transition-colors",onClick:()=>u(d.id),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(T,{routine:d}),d.name]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{routine:d}),e.jsx(P,{className:"bg-gray-200 text-gray-600",children:d.time}),e.jsx(Y,{className:F(i===d.id?"text-foreground-900":"text-foreground-700")})]})]})),e.jsx(B,{tertiary:!0,sm:!0,onClick:o,children:"New routine"})]}),i&&e.jsx(ee,{routine:t.routines.find(d=>d.id===i),plugins:n})]})]})},T=n=>{const t=h.useFragment(D,n.routine),[i]=x(C),u=(l,o)=>{f.promise(i({variables:{input:{routineId:l,isActive:o}},optimisticResponse:{updateRoutine:{id:l,isActive:o}}}),{loading:"Updating routine...",success:"Routine updated!",error:"Failed to update routine. Please try again."})};return e.jsx(Q,{checked:t.isActive,onCheckedChange:l=>u(t.id,!!l)})},Z=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],I=n=>{const t=h.useFragment(M,n.routine),[i]=x(L),u=l=>{const o=t.repeats.includes(l)?t.repeats.filter(r=>r!==l):[...t.repeats,l];f.promise(i({variables:{input:{routineId:t.id,repeats:o}},optimisticResponse:{updateRoutine:{id:t.id,repeats:o}}}),{loading:"Updating routine...",success:"Routine updated!",error:"Failed to update routine. Please try again."})};return e.jsx("div",{className:"flex gap-1",children:Z.map(l=>e.jsxs(b,{children:[e.jsx(v,{asChild:!0,children:e.jsx("button",{onClick:()=>u(l),type:"button",className:F("flex h-7 w-7 appearance-none items-center justify-center rounded-full text-xs",t.repeats.includes(l)?"bg-primary-100 text-primary-600":"bg-gray-200 text-gray-600"),children:l[0]})}),e.jsx(w,{children:l[0]+l.slice(1).toLowerCase()})]}))})},ee=n=>{const t=h.useFragment(U,n.routine),[i]=x($),{register:u,control:l,handleSubmit:o,formState:r,watch:d,reset:S}=z({mode:"onChange"}),c=d(),[,,R]=W({values:c,isDirty:r.isDirty,isValid:r.isValid},1e3,({values:a,isDirty:s,isValid:g})=>{!s||!g||k(a)}),k=a=>{R(),f.promise(i({variables:{input:{routineId:t.id,name:a.name,time:a.time,actionName:a.actionName,steps:a.steps.map(s=>({pluginSlug:s.pluginSlug,stepSlug:s.stepSlug,shouldSkip:s.shouldSkip}))}}}),{loading:"Updating routine...",success:"Routine updated!",error:"Failed to update routine. Please try again."})},V=y.useMemo(()=>Object.entries(n.plugins).flatMap(([a,s])=>Object.keys(s.routineSteps??{}).map(g=>({id:`${a}_${g}_${Math.random()}`,pluginSlug:a,stepSlug:g,shouldSkip:!1}))),[n.plugins]);return y.useEffect(()=>{const a=t.steps.map(s=>({id:`${s.pluginSlug}_${s.stepSlug}_${Math.random()}`,...s}));S({name:t.name,time:t.time,actionName:t.actionName,steps:a})},[t.name,t.actionName,t.time,t.steps]),e.jsxs("form",{onSubmit:o(k),className:"bg-background-50 flex w-full flex-col gap-4 rounded-md p-6 shadow",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(T,{routine:t}),e.jsx("input",{className:"hover:text-primary-500 w-fit appearance-none rounded bg-transparent text-2xl font-semibold focus:outline-none active:outline-none",defaultValue:t.name,...u("name",{required:!0})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{routine:t}),e.jsx(K,{type:"time",defaultValue:t.time,...u("time",{required:!0})})]}),e.jsx(K,{label:"Action label",description:"Label of the button shown in the Kanban view to start the routine.",className:"max-w-xs",defaultValue:t.actionName,...u("actionName",{required:!0})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h2",{className:"text-foreground-900 text-base font-medium",children:"Steps"}),e.jsx("div",{className:"text-foreground-700",children:"Steps are executed in the order they are listed. Drag and drop to reorder them."}),e.jsx(H,{name:"steps",control:l,defaultValue:[],render:({field:a})=>e.jsx(j.ReactSortable,{className:"max-h-70 min-h-8 overflow-auto",list:a.value,setList:a.onChange,group:"shared",children:a.value.map(s=>e.jsx(N,{step:s,plugins:n.plugins,withActions:!0,onSkipChange:(g,p)=>{const m=a.value.findIndex(E=>E.id===g);if(m===-1)return;const q={...a.value[m],shouldSkip:p};a.onChange([...a.value.slice(0,m),q,...a.value.slice(m+1)])},onRemove:g=>{const p=a.value.findIndex(m=>m.id===g);p!==-1&&a.onChange([...a.value.slice(0,p),...a.value.slice(p+1)])}},s.id))})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h2",{className:"text-foreground-900 text-base font-medium",children:"Add steps"}),e.jsx("div",{className:"text-foreground-700",children:"Add steps to your routine by dragging them from the list below to the list above."}),e.jsx(j.ReactSortable,{className:"max-h-66 overflow-auto",list:V,setList:()=>{},group:"shared",children:V.map(a=>e.jsx(N,{step:a,plugins:n.plugins},a.id))})]})]})},N=n=>{var l,o;const t=e.jsxs("div",{className:"bg-background-50 absolute right-0 flex items-center justify-end gap-4 px-4",children:[e.jsxs(b,{children:[e.jsx(v,{asChild:!0,children:e.jsx("button",{className:F("flex h-6 w-6 items-center justify-center rounded-full",n.step.shouldSkip?"bg-primary-100 text-primary-600":"bg-gray-200 text-gray-600"),onClick:()=>{var r;return(r=n.onSkipChange)==null?void 0:r.call(n,n.step.id,!n.step.shouldSkip)},children:e.jsx(G,{size:"16"})})}),e.jsxs(w,{className:"max-w-sm p-3",children:["Whether to skip the step if the routine preceding this routine was done.",e.jsx("br",{}),e.jsx("br",{}),"For example, skip retroing on yesterday if you already did a retro yesterday."]})]}),e.jsxs(b,{children:[e.jsx(v,{asChild:!0,children:e.jsx("button",{className:"bg-negative-100 text-negative-600 flex h-6 w-6 items-center justify-center rounded-full",onClick:()=>{var r;return(r=n.onRemove)==null?void 0:r.call(n,n.step.id)},children:e.jsx(J,{size:"16"})})}),e.jsx(w,{children:"Remove step"})]})]}),i=n.plugins[n.step.pluginSlug];if(!((l=i==null?void 0:i.routineSteps)!=null&&l[n.step.stepSlug]))return e.jsxs("div",{id:n.step.id,className:"relative",children:[n.step.stepSlug," ",n.step.pluginSlug," (plugin not installed anymore)",n.withActions&&t]});const u=(o=i.routineSteps)==null?void 0:o[n.step.stepSlug];return e.jsxs("div",{id:n.step.id,className:"bg-background-50 relative flex cursor-grab items-center gap-2 rounded px-4 py-2",children:[e.jsx("div",{className:"shrink-0 font-medium",children:u.name}),e.jsxs("div",{className:"text-foreground-700 shrink-0 text-sm",children:["(",i.name,")"]}),e.jsx("div",{className:"text-foreground-700 truncate text-sm",children:u.description}),n.withActions&&t]})};export{te as default};
