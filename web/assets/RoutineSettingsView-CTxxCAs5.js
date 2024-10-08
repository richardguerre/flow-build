import{a as R,j as e,p as Q,q as z,U as H,s as W,v as G,w as J,W as X,r as k,X as _,Y as Z,Z as y,_ as ee,$ as ne,t as w,B as te,n as v,a0 as ae,T as h,H as b,J as F,k as ie,a1 as le,F as j,C as se,a2 as V,a3 as ue,a4 as re}from"./index-BVjnAyDl.js";const C=function(){var n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewQuery",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[n,t,a,{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewActiveCheckbox_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewRepeats_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewDetailed_routine"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"RoutineSettingsViewQuery",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[n,t,a,{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"config",storageKey:null},{alias:null,args:null,concreteType:"Template",kind:"LinkedField",name:"templates",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"raw",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"metadata",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"routineStepId",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"6da3f0a94339a2e152f24d19b72ddfc9",id:null,metadata:{},name:"RoutineSettingsViewQuery",operationKind:"query",text:`query RoutineSettingsViewQuery {
  routines {
    id
    name
    time
    ...RoutineSettingsViewActiveCheckbox_routine
    ...RoutineSettingsViewRepeats_routine
    ...RoutineSettingsViewDetailed_routine
  }
}

fragment RenderRoutineStepSettings_routineStep on RoutineStep {
  id
  pluginSlug
  stepSlug
  config
  templates {
    id
    slug
    raw
    metadata
    routineStepId
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
    id
    pluginSlug
    stepSlug
    shouldSkip
    ...RoutineSettingsView_routineStep
  }
  ...RoutineSettingsViewActiveCheckbox_routine
  ...RoutineSettingsViewRepeats_routine
}

fragment RoutineSettingsViewRepeats_routine on Routine {
  id
  repeats
}

fragment RoutineSettingsView_routineStep on RoutineStep {
  ...RenderRoutineStepSettings_routineStep
}
`}}}();C.hash="753c5cd9a52c45b0a329d54d0e939883";const oe=C,D=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{kind:"Variable",name:"input",variableName:"input"}],a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsViewCreateRoutineMutation",selections:[{alias:null,args:t,concreteType:"Routine",kind:"LinkedField",name:"createRoutine",plural:!1,selections:[a,{args:null,kind:"FragmentSpread",name:"RoutineSettingsView_routine"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsViewCreateRoutineMutation",selections:[{alias:null,args:t,concreteType:"Routine",kind:"LinkedField",name:"createRoutine",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"config",storageKey:null},{alias:null,args:null,concreteType:"Template",kind:"LinkedField",name:"templates",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"raw",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"metadata",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"routineStepId",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"85cf2586cfc3341e8c68e7168563c3fe",id:null,metadata:{},name:"RoutineSettingsViewCreateRoutineMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewCreateRoutineMutation(
  $input: MutationCreateRoutineInput!
) {
  createRoutine(input: $input) {
    id
    ...RoutineSettingsView_routine
  }
}

fragment RenderRoutineStepSettings_routineStep on RoutineStep {
  id
  pluginSlug
  stepSlug
  config
  templates {
    id
    slug
    raw
    metadata
    routineStepId
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
    id
    pluginSlug
    stepSlug
    shouldSkip
    ...RoutineSettingsView_routineStep
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

fragment RoutineSettingsView_routineStep on RoutineStep {
  ...RenderRoutineStepSettings_routineStep
}
`}}}();D.hash="02bdd80c6832d40de2f3b0f56844c2f8";const de=D,A={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewActiveCheckbox_routine",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],type:"Routine",abstractKey:null};A.hash="1dc31f036dc1e1c019f5285a84bd0fc4";const T=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateActiveMutation",selections:t,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsViewUpdateActiveMutation",selections:t},params:{cacheID:"a68600f2493b65c56566091e4c6ba8a0",id:null,metadata:{},name:"RoutineSettingsViewUpdateActiveMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateActiveMutation(
  $input: MutationUpdateRoutineInput!
) {
  updateRoutine(input: $input) {
    id
    isActive
  }
}
`}}}();T.hash="1c0d9dc92314b633c08bd6cee0ab3e91";const M={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewRepeats_routine",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],type:"Routine",abstractKey:null};M.hash="883bdb2c013197954eafcbac59a7eb44";const L=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateRepeatsMutation",selections:t,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsViewUpdateRepeatsMutation",selections:t},params:{cacheID:"64a299e42219212189f74449bf1c9051",id:null,metadata:{},name:"RoutineSettingsViewUpdateRepeatsMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateRepeatsMutation(
  $input: MutationUpdateRoutineInput!
) {
  updateRoutine(input: $input) {
    id
    repeats
  }
}
`}}}();L.hash="71c0b7af79205dfed9d2505d00a94ac5";const I=function(){var n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewDetailed_routine",selections:[n,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null},{args:null,kind:"FragmentSpread",name:"RoutineSettingsView_routineStep"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewActiveCheckbox_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewRepeats_routine"}],type:"Routine",abstractKey:null}}();I.hash="62f3b80b84f0e696794562eca355bbfc";const U=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],t=[{kind:"Variable",name:"input",variableName:"input"}],a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateRoutineMutation",selections:[{alias:null,args:t,concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewDetailed_routine"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsViewUpdateRoutineMutation",selections:[{alias:null,args:t,concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"config",storageKey:null},{alias:null,args:null,concreteType:"Template",kind:"LinkedField",name:"templates",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"raw",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"metadata",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"routineStepId",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],storageKey:null}]},params:{cacheID:"73a89c4ac01dc9f4c95056204b0bee91",id:null,metadata:{},name:"RoutineSettingsViewUpdateRoutineMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateRoutineMutation(
  $input: MutationUpdateRoutineInput!
) {
  updateRoutine(input: $input) {
    ...RoutineSettingsViewDetailed_routine
    id
  }
}

fragment RenderRoutineStepSettings_routineStep on RoutineStep {
  id
  pluginSlug
  stepSlug
  config
  templates {
    id
    slug
    raw
    metadata
    routineStepId
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
    id
    pluginSlug
    stepSlug
    shouldSkip
    ...RoutineSettingsView_routineStep
  }
  ...RoutineSettingsViewActiveCheckbox_routine
  ...RoutineSettingsViewRepeats_routine
}

fragment RoutineSettingsViewRepeats_routine on Routine {
  id
  repeats
}

fragment RoutineSettingsView_routineStep on RoutineStep {
  ...RenderRoutineStepSettings_routineStep
}
`}}}();U.hash="447e3d96ba8804af5a76b6a78a8f0476";const $={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsView_routineStep",selections:[{args:null,kind:"FragmentSpread",name:"RenderRoutineStepSettings_routineStep"}],type:"RoutineStep",abstractKey:null};$.hash="e83c75746f528ffeb8c7c9bfa3491431";const q=function(){var n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RenderRoutineStepSettings_routineStep",selections:[n,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"config",storageKey:null},{alias:null,args:null,concreteType:"Template",kind:"LinkedField",name:"templates",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"raw",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"metadata",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"routineStepId",storageKey:null}],storageKey:null}],type:"RoutineStep",abstractKey:null}}();q.hash="d53f9b9216488229b6c9788d8f620729";const ce=n=>{const[t,a]=R.useState(!1);return e.jsxs(Q,{open:t,onOpenChange:a,children:[e.jsx(z,{type:"button",onClick:s=>s.stopPropagation(),children:e.jsx(H,{})}),e.jsxs(W,{className:"max-w-xl",children:[e.jsx(G,{children:e.jsxs(J,{children:["Settings for ",n.stepName]})}),e.jsx(R.Suspense,{fallback:e.jsx(X,{}),children:e.jsx(ge,{...n,onClose:()=>a(!1)})})]})]})},ge=n=>{const t=k.useFragment(q,n.routineStep),{plugins:a}=_(),[s,l]=R.useState(null);if(Z(async()=>{var d,c,p;const o=a[t.pluginSlug];if(!o)return;const u=await((p=(d=o.routineSteps)==null?void 0:(c=d[t.stepSlug]).renderSettings)==null?void 0:p.call(c,{routineStep:t,onCancel:n.onClose,onClose:n.onClose}));u&&l(u)},[Object.keys(a).length,t.pluginSlug,t.stepSlug]),!s)return e.jsx("div",{className:"flex flex-col gap-4 items-center justify-center h-xs",children:e.jsx("div",{className:"text-foreground-700",children:"No settings available for this step."})});const r=s.component;return e.jsx(r,{})},Re=()=>{var o;const{plugins:n}=_(),t=k.useLazyLoadQuery(oe,{}),[a,s]=R.useState(((o=t.routines[0])==null?void 0:o.id)??null),[l]=y(de),r=async()=>{const u=await v.promise(l({variables:{input:{name:"New routine",actionName:"Plan",repeats:[],steps:[],time:"08:00"}},optimisticUpdater:d=>{const c=d.create(`client:newRoutine${new Date}`,"Routine");c.setValue("New routine","name"),c.setValue("Plan","actionName"),c.setValue("08:00","time"),c.setValue(!1,"isActive"),c.setValue([],"repeats"),c.setValue([],"steps");const p=d.getRoot(),x=p.getLinkedRecords("routines");p.setLinkedRecords([...x??[],c],"routines")}}),{loading:"Creating new routine...",success:"Routine created!",error:"Failed to create routine. Please try again."});s(u.createRoutine.id)};return e.jsxs("div",{className:"bg-background-50 flex max-h-screen w-full flex-col gap-4 overflow-auto p-8",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"Tasks"}),e.jsx("div",{className:"text-foreground-700",children:"Manage your routines"})]}),e.jsxs("div",{className:"grid grid-cols-[minmax(0,_576px)_minmax(0,_1fr)] gap-4",children:[e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[t.routines.map(u=>e.jsxs("button",{className:"hover:bg-background-100 flex w-full justify-between gap-4 rounded-md px-4 py-2 transition-colors",onClick:()=>s(u.id),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{routine:u}),u.name]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(E,{routine:u}),e.jsx(ee,{className:"bg-gray-200 text-gray-600",children:u.time}),e.jsx(ne,{className:w(a===u.id?"text-foreground-900":"text-foreground-700")})]})]})),e.jsx(te,{tertiary:!0,sm:!0,onClick:r,children:"New routine"})]}),a&&e.jsx(pe,{routine:t.routines.find(u=>u.id===a),plugins:n})]})]})},O=n=>{const t=k.useFragment(A,n.routine),[a]=y(T),s=(l,r)=>{v.promise(a({variables:{input:{routineId:l,isActive:r}},optimisticResponse:{updateRoutine:{id:l,isActive:r}}}),{loading:"Updating routine...",success:"Routine updated!",error:"Failed to update routine. Please try again."})};return e.jsx(ae,{checked:t.isActive,onCheckedChange:l=>s(t.id,!!l)})},me=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],E=n=>{const t=k.useFragment(M,n.routine),[a]=y(L),s=l=>{const r=t.repeats.includes(l)?t.repeats.filter(o=>o!==l):[...t.repeats,l];v.promise(a({variables:{input:{routineId:t.id,repeats:r}},optimisticResponse:{updateRoutine:{id:t.id,repeats:r}}}),{loading:"Updating routine...",success:"Routine updated!",error:"Failed to update routine. Please try again."})};return e.jsx("div",{className:"flex gap-1",children:me.map(l=>e.jsxs(h,{children:[e.jsx(b,{asChild:!0,children:e.jsx("button",{onClick:()=>s(l),type:"button",className:w("flex h-7 w-7 appearance-none items-center justify-center rounded-full text-xs",t.repeats.includes(l)?"bg-primary-100 text-primary-600":"bg-gray-200 text-gray-600"),children:l[0]})}),e.jsx(F,{children:l[0]+l.slice(1).toLowerCase()})]}))})},pe=n=>{const t=k.useFragment(I,n.routine),[a]=y(U),{register:s,control:l,handleSubmit:r,formState:o,watch:u,reset:d}=ie({mode:"onChange"}),c=u(),[,,p]=le({values:c,isDirty:o.isDirty,isValid:o.isValid},1e3,({values:i,isDirty:g,isValid:m})=>{!g||!m||x(i)}),x=i=>{p(),a({variables:{input:{routineId:t.id,name:i.name,time:i.time,actionName:i.actionName,steps:i.steps.map(g=>({id:g.id,pluginSlug:g.pluginSlug,stepSlug:g.stepSlug,shouldSkip:g.shouldSkip}))}}})},K=R.useMemo(()=>Object.entries(n.plugins).flatMap(([i,g])=>Object.keys(g.routineSteps??{}).map(m=>({id:`NewStep_${i}_${m}_${Math.random()}`,pluginSlug:i,stepSlug:m,shouldSkip:!1}))),[n.plugins]);R.useEffect(()=>{d({name:t.name,time:t.time,actionName:t.actionName,steps:Array.from(t.steps)})},[t.name,t.actionName,t.time,t.steps]);const P=Object.fromEntries(t.steps.map(i=>[i.id,i]));return e.jsxs("form",{onSubmit:r(x),className:"bg-background-50 flex w-full flex-col gap-4 rounded-md p-6 shadow",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{routine:t}),e.jsx("input",{className:"hover:text-primary-500 w-fit appearance-none rounded bg-transparent text-2xl font-semibold focus:outline-none active:outline-none",defaultValue:t.name,...s("name",{required:!0})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(E,{routine:t}),e.jsx(j,{type:"time",defaultValue:t.time,...s("time",{required:!0})})]}),e.jsx(j,{label:"Action label",description:"Label of the button shown in the Kanban view to start the routine.",className:"max-w-xs",defaultValue:t.actionName,...s("actionName",{required:!0})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h2",{className:"text-foreground-900 text-base font-medium",children:"Steps"}),e.jsx("div",{className:"text-foreground-700",children:"Steps are executed in the order they are listed. Drag and drop to reorder them."}),e.jsx(se,{name:"steps",control:l,defaultValue:[],render:({field:i})=>e.jsx(V.ReactSortable,{className:"max-h-70 min-h-8 overflow-auto",list:i.value,setList:i.onChange,group:"shared",children:i.value.map(g=>e.jsx(N,{step:g,plugins:n.plugins,routineStep:P[g.id],withActions:!0,onSkipChange:(m,f)=>{const S=i.value.findIndex(B=>B.id===m);if(S===-1)return;const Y={...i.value[S],shouldSkip:f};i.onChange([...i.value.slice(0,S),Y,...i.value.slice(S+1)])},onRemove:m=>{const f=i.value.findIndex(S=>S.id===m);f!==-1&&i.onChange([...i.value.slice(0,f),...i.value.slice(f+1)])}},g.id))})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h2",{className:"text-foreground-900 text-base font-medium",children:"Add steps"}),e.jsx("div",{className:"text-foreground-700",children:"Add steps to your routine by dragging them from the list below to the list above."}),e.jsx(V.ReactSortable,{className:"max-h-66 overflow-auto",list:K,setList:()=>{},group:"shared",children:K.map(i=>e.jsx(N,{step:i,plugins:n.plugins},i.id))})]})]})},N=n=>{var r,o,u;const t=k.useFragment($,n.routineStep),a=n.plugins[n.step.pluginSlug],s=e.jsxs("div",{className:"bg-background-50 absolute right-0 flex items-center justify-end gap-4 px-4",children:[e.jsxs(h,{children:[e.jsx(b,{asChild:!0,children:e.jsx("button",{className:w("flex h-6 w-6 items-center justify-center rounded-full",n.step.shouldSkip?"bg-primary-100 text-primary-600":"bg-gray-200 text-gray-600"),onClick:()=>{var d;return(d=n.onSkipChange)==null?void 0:d.call(n,n.step.id,!n.step.shouldSkip)},children:e.jsx(ue,{size:"16"})})}),e.jsxs(F,{className:"max-w-sm p-3",children:["Whether to skip the step if the routine preceding this routine was done (i.e. the user completed the step in the previous routine.)",e.jsx("br",{}),e.jsx("br",{}),"For example, skip retroing on yesterday if you already did a retro yesterday."]})]}),t&&e.jsx(ce,{routineStep:t,stepName:((r=a==null?void 0:a.routineSteps)==null?void 0:r[n.step.stepSlug].name)??"Unknown"}),e.jsxs(h,{children:[e.jsx(b,{asChild:!0,children:e.jsx("button",{className:"bg-negative-100 text-negative-600 flex h-6 w-6 items-center justify-center rounded-full",onClick:()=>{var d;return(d=n.onRemove)==null?void 0:d.call(n,n.step.id)},children:e.jsx(re,{size:"16"})})}),e.jsx(F,{children:"Remove step"})]})]});if(!((o=a==null?void 0:a.routineSteps)!=null&&o[n.step.stepSlug]))return e.jsxs("div",{id:n.step.id,className:"relative",children:[n.step.stepSlug," ",n.step.pluginSlug," (plugin not installed anymore)",n.withActions&&s]});const l=(u=a.routineSteps)==null?void 0:u[n.step.stepSlug];return e.jsxs("div",{id:n.step.id,className:"bg-background-50 relative flex cursor-grab items-center gap-2 rounded px-4 py-2",children:[e.jsx("div",{className:"shrink-0 font-medium",children:l.name}),e.jsxs("div",{className:"text-foreground-700 shrink-0 text-sm",children:["(",a.name,")"]}),e.jsx("div",{className:"text-foreground-700 truncate text-sm",children:l.description}),n.withActions&&s]})};export{Re as default};
