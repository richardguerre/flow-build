import{o as Y,r as f,a as v,p as y,c as s,j as t,q as B,s as E,t as V,B as Q,n as b,T as w,v as x,w as F,k as z,x as W,F as N,C as H,y as A,z as G,A as J}from"./index-89a1a0af.js";import{C as X}from"./Checkbox-84a8fa72.js";const C=function(){var e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewQuery",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[e,n,i,{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewActiveCheckbox_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewRepeats_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewDetailed_routine"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"RoutineSettingsViewQuery",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[e,n,i,{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"24512f11c8b387c9d385350bc3a29d25",id:null,metadata:{},name:"RoutineSettingsViewQuery",operationKind:"query",text:`query RoutineSettingsViewQuery {
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
`}}}();C.hash="753c5cd9a52c45b0a329d54d0e939883";const Z=C,D=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}],i={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"RoutineSettingsViewCreateRoutineMutation",selections:[{alias:null,args:n,concreteType:"Routine",kind:"LinkedField",name:"createRoutine",plural:!1,selections:[i,{args:null,kind:"FragmentSpread",name:"RoutineSettingsView_routine"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"RoutineSettingsViewCreateRoutineMutation",selections:[{alias:null,args:n,concreteType:"Routine",kind:"LinkedField",name:"createRoutine",plural:!1,selections:[i,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"1a8e7315d5f645914f5b3019571534d6",id:null,metadata:{},name:"RoutineSettingsViewCreateRoutineMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewCreateRoutineMutation(
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
`}}}();D.hash="02bdd80c6832d40de2f3b0f56844c2f8";const M={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewActiveCheckbox_routine",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],type:"Routine",abstractKey:null};M.hash="1dc31f036dc1e1c019f5285a84bd0fc4";const L=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateActiveMutation",selections:n,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"RoutineSettingsViewUpdateActiveMutation",selections:n},params:{cacheID:"a68600f2493b65c56566091e4c6ba8a0",id:null,metadata:{},name:"RoutineSettingsViewUpdateActiveMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateActiveMutation(
  $input: MutationUpdateRoutineInput!
) {
  updateRoutine(input: $input) {
    id
    isActive
  }
}
`}}}();L.hash="1c0d9dc92314b633c08bd6cee0ab3e91";const U={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewRepeats_routine",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],type:"Routine",abstractKey:null};U.hash="883bdb2c013197954eafcbac59a7eb44";const $=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateRepeatsMutation",selections:n,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"RoutineSettingsViewUpdateRepeatsMutation",selections:n},params:{cacheID:"64a299e42219212189f74449bf1c9051",id:null,metadata:{},name:"RoutineSettingsViewUpdateRepeatsMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateRepeatsMutation(
  $input: MutationUpdateRoutineInput!
) {
  updateRoutine(input: $input) {
    id
    repeats
  }
}
`}}}();$.hash="71c0b7af79205dfed9d2505d00a94ac5";const T={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettingsViewDetailed_routine",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewActiveCheckbox_routine"},{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewRepeats_routine"}],type:"Routine",abstractKey:null};T.hash="b8856520ac4ca2227119bab4c6f95103";const I=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"RoutineSettingsViewUpdateRoutineMutation",selections:[{alias:null,args:n,concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"RoutineSettingsViewDetailed_routine"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"RoutineSettingsViewUpdateRoutineMutation",selections:[{alias:null,args:n,concreteType:"Routine",kind:"LinkedField",name:"updateRoutine",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"actionName",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null}],storageKey:null}]},params:{cacheID:"fccd455af2cc0abb8d167be1b0e64980",id:null,metadata:{},name:"RoutineSettingsViewUpdateRoutineMutation",operationKind:"mutation",text:`mutation RoutineSettingsViewUpdateRoutineMutation(
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
`}}}();I.hash="447e3d96ba8804af5a76b6a78a8f0476";const ie=()=>{var o;const{plugins:e}=Y(),n=f.useLazyLoadQuery(Z,{}),[i,r]=v.useState(((o=n.routines[0])==null?void 0:o.id)??null),[l]=y(D),d=async()=>{const c=await b.promise(l({variables:{input:{name:"New routine",actionName:"Plan",repeats:[],steps:[],time:"08:00"}},optimisticUpdater:R=>{const g=R.create(`client:newRoutine${new Date}`,"Routine");g.setValue("New routine","name"),g.setValue("Plan","actionName"),g.setValue("08:00","time"),g.setValue(!1,"isActive"),g.setValue([],"repeats"),g.setValue([],"steps");const k=R.getRoot(),h=k.getLinkedRecords("routines");k.setLinkedRecords([...h??[],g],"routines")}}),{loading:"Creating new routine...",success:"Routine created!",error:"Failed to create routine. Please try again."});r(c.createRoutine.id)};return s("div",{className:"bg-background-50 flex max-h-screen w-full flex-col gap-4 overflow-auto p-8",children:[t("h1",{className:"text-xl font-medium",children:"Routines"}),s("div",{className:"grid grid-cols-[minmax(0,_576px)_minmax(0,_1fr)] gap-4",children:[s("div",{className:"flex flex-col items-start gap-2",children:[n.routines.map(c=>s("button",{className:"hover:bg-background-100 flex w-full justify-between gap-4 rounded-md px-4 py-2 transition-colors",onClick:()=>r(c.id),children:[s("div",{className:"flex items-center gap-2",children:[t(q,{routine:c}),c.name]}),s("div",{className:"flex items-center gap-2",children:[t(j,{routine:c}),t(B,{className:"bg-gray-200 text-gray-600",children:c.time}),t(E,{className:V(i===c.id?"text-foreground-900":"text-foreground-700")})]})]})),t(Q,{tertiary:!0,sm:!0,onClick:d,children:"New routine"})]}),i&&t(ne,{routine:n.routines.find(c=>c.id===i),plugins:e})]})]})},q=e=>{const n=f.useFragment(M,e.routine),[i]=y(L),r=(l,d)=>{b.promise(i({variables:{input:{routineId:l,isActive:d}},optimisticResponse:{updateRoutine:{id:l,isActive:d}}}),{loading:"Updating routine...",success:"Routine updated!",error:"Failed to update routine. Please try again."})};return t(X,{checked:n.isActive,onCheckedChange:l=>r(n.id,!!l)})},ee=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],j=e=>{const n=f.useFragment(U,e.routine),[i]=y($),r=l=>{const d=n.repeats.includes(l)?n.repeats.filter(o=>o!==l):[...n.repeats,l];b.promise(i({variables:{input:{routineId:n.id,repeats:d}},optimisticResponse:{updateRoutine:{id:n.id,repeats:d}}}),{loading:"Updating routine...",success:"Routine updated!",error:"Failed to update routine. Please try again."})};return t("div",{className:"flex gap-1",children:ee.map(l=>s(w,{children:[t(x,{asChild:!0,children:t("button",{onClick:()=>r(l),type:"button",className:V("flex h-7 w-7 appearance-none items-center justify-center rounded-full text-xs",n.repeats.includes(l)?"bg-primary-100 text-primary-600":"bg-gray-200 text-gray-600"),children:l[0]})}),t(F,{children:l[0]+l.slice(1).toLowerCase()})]}))})},ne=e=>{const n=f.useFragment(T,e.routine),[i]=y(I),{register:r,control:l,handleSubmit:d,formState:o,watch:c,reset:R}=z({mode:"onChange"}),g=c(),[,,k]=W({values:g,isDirty:o.isDirty,isValid:o.isValid},1e3,({values:a,isDirty:u,isValid:m})=>{!u||!m||h(a)}),h=a=>{k(),b.promise(i({variables:{input:{routineId:n.id,name:a.name,time:a.time,actionName:a.actionName,steps:a.steps.map(u=>({pluginSlug:u.pluginSlug,stepSlug:u.stepSlug,shouldSkip:u.shouldSkip}))}}}),{loading:"Updating routine...",success:"Routine updated!",error:"Failed to update routine. Please try again."})},K=v.useMemo(()=>Object.entries(e.plugins).flatMap(([a,u])=>Object.keys(u.routineSteps??{}).map(m=>({id:`${a}_${m}_${Math.random()}`,pluginSlug:a,stepSlug:m,shouldSkip:!1}))),[e.plugins]);return v.useEffect(()=>{const a=n.steps.map(u=>({id:`${u.pluginSlug}_${u.stepSlug}_${Math.random()}`,...u}));R({name:n.name,time:n.time,actionName:n.actionName,steps:a})},[n.name,n.actionName,n.time,n.steps]),s("form",{onSubmit:d(h),className:"bg-background-50 flex w-full flex-col gap-4 rounded-md p-6 shadow",children:[s("div",{className:"flex items-center gap-2",children:[t(q,{routine:n}),t("input",{className:"hover:text-primary-500 w-fit appearance-none rounded bg-transparent text-2xl font-semibold focus:outline-none active:outline-none",defaultValue:n.name,...r("name",{required:!0})})]}),s("div",{className:"flex items-center gap-2",children:[t(j,{routine:n}),t(N,{type:"time",defaultValue:n.time,...r("time",{required:!0})})]}),t(N,{label:"Action label",description:"Label of the button shown in the Kanban view to start the routine.",className:"max-w-xs",defaultValue:n.actionName,...r("actionName",{required:!0})}),s("div",{className:"flex flex-col gap-1",children:[t("h2",{className:"text-foreground-900 text-base font-medium",children:"Steps"}),t("div",{className:"text-foreground-700",children:"Steps are executed in the order they are listed. Drag and drop to reorder them."}),t(H,{name:"steps",control:l,defaultValue:[],render:({field:a})=>t(A.ReactSortable,{className:"max-h-70 min-h-8 overflow-auto",list:a.value,setList:a.onChange,group:"shared",children:a.value.map(u=>t(_,{step:u,plugins:e.plugins,withActions:!0,onSkipChange:(m,S)=>{const p=a.value.findIndex(P=>P.id===m);if(p===-1)return;const O={...a.value[p],shouldSkip:S};a.onChange([...a.value.slice(0,p),O,...a.value.slice(p+1)])},onRemove:m=>{const S=a.value.findIndex(p=>p.id===m);S!==-1&&a.onChange([...a.value.slice(0,S),...a.value.slice(S+1)])}},u.id))})})]}),s("div",{className:"flex flex-col gap-1",children:[t("h2",{className:"text-foreground-900 text-base font-medium",children:"Add steps"}),t("div",{className:"text-foreground-700",children:"Add steps to your routine by dragging them from the list below to the list above."}),t(A.ReactSortable,{className:"max-h-66 overflow-auto",list:K,setList:()=>{},group:"shared",children:K.map(a=>t(_,{step:a,plugins:e.plugins},a.id))})]})]})},_=e=>{var l,d;const n=s("div",{className:"bg-background-50 absolute right-0 flex items-center justify-end gap-4 px-4",children:[s(w,{children:[t(x,{asChild:!0,children:t("button",{className:V("flex h-6 w-6 items-center justify-center rounded-full",e.step.shouldSkip?"bg-primary-100 text-primary-600":"bg-gray-200 text-gray-600"),onClick:()=>{var o;return(o=e.onSkipChange)==null?void 0:o.call(e,e.step.id,!e.step.shouldSkip)},children:t(G,{size:"16"})})}),s(F,{className:"max-w-sm p-3",children:["Whether to skip the step if the routine preceding this routine was done.",t("br",{}),t("br",{}),"For example, skip retroing on yesterday if you already did a retro yesterday."]})]}),s(w,{children:[t(x,{asChild:!0,children:t("button",{className:"bg-negative-100 text-negative-600 flex h-6 w-6 items-center justify-center rounded-full",onClick:()=>{var o;return(o=e.onRemove)==null?void 0:o.call(e,e.step.id)},children:t(J,{size:"16"})})}),t(F,{children:"Remove step"})]})]}),i=e.plugins[e.step.pluginSlug];if(!((l=i==null?void 0:i.routineSteps)!=null&&l[e.step.stepSlug]))return s("div",{id:e.step.id,className:"relative",children:[e.step.stepSlug," ",e.step.pluginSlug," (plugin not installed anymore)",e.withActions&&n]});const r=(d=i.routineSteps)==null?void 0:d[e.step.stepSlug];return s("div",{id:e.step.id,className:"bg-background-50 relative flex cursor-grab items-center gap-2 rounded px-4 py-2",children:[t("div",{className:"shrink-0 font-medium",children:r.name}),s("div",{className:"text-foreground-700 shrink-0 text-sm",children:["(",i.name,")"]}),t("div",{className:"text-foreground-700 truncate text-sm",children:r.description}),e.withActions&&n]})};export{ie as default};
