import{r as k,j as e,b as u,a as c}from"./index-4b77959e.js";import{a as v,B as y,b as K,u as B}from"./Lists-f264c4ab.js";import{u as F,g as P}from"./index-8c97bd67.js";const b=function(){var n={alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SettingsViewQuery",selections:[{args:null,kind:"FragmentSpread",name:"FlowSettings_data"},{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[n,{args:null,kind:"FragmentSpread",name:"PluginSettings_pluginInstallation"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}]},params:{cacheID:"fdf71eabbf95cb1ac16fe3c6507d8495",id:null,metadata:{},name:"SettingsViewQuery",operationKind:"query",text:`query SettingsViewQuery {
  ...FlowSettings_data
  installedPlugins {
    slug
    ...PluginSettings_pluginInstallation
  }
}

fragment FlowSettings_data on Query {
  ...RoutinesSettings_data
}

fragment PluginSettings_pluginInstallation on PluginInstallation {
  slug
  url
  ...UpdatePluginButton_pluginInstallation
}

fragment RoutineSettings_data on Routine {
  id
  name
  isActive
  repeats
  time
  steps {
    pluginSlug
    stepSlug
    shouldSkip
  }
}

fragment RoutinesSettings_data on Query {
  routines {
    id
    name
    isActive
    repeats
    time
    steps {
      pluginSlug
      stepSlug
      shouldSkip
    }
    ...RoutineSettings_data
  }
  installedPlugins {
    slug
  }
}

fragment UpdatePluginButton_pluginInstallation on PluginInstallation {
  url
}
`}}}();b.hash="2c3b2cb003d72d9d9eeb9473fb2db695";const R={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PluginSettings_pluginInstallation",selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{args:null,kind:"FragmentSpread",name:"UpdatePluginButton_pluginInstallation"}],type:"PluginInstallation",abstractKey:null};R.hash="bc6ef57e1ae039fd4b23d78ee4bf1cb9";const I=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],l=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"PluginInstallation",kind:"LinkedField",name:"uninstallPlugin",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"PluginSettingsUninstallPluginMutation",selections:l,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"PluginSettingsUninstallPluginMutation",selections:l},params:{cacheID:"3fea9dd486966f8c12f664ff5a88b8fb",id:null,metadata:{},name:"PluginSettingsUninstallPluginMutation",operationKind:"mutation",text:`mutation PluginSettingsUninstallPluginMutation(
  $input: MutationUninstallPluginInput!
) {
  uninstallPlugin(input: $input) {
    slug
  }
}
`}}}();I.hash="9e1102762b1e01c9c315f5af8cd0b045";const U={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UpdatePluginButton_pluginInstallation",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"PluginInstallation",abstractKey:null};U.hash="4f1184aecaeea8735d4c8df05106bcd6";const V=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],l=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"UpdatePluginButtonUpdatePluginMutation",selections:l,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"UpdatePluginButtonUpdatePluginMutation",selections:l},params:{cacheID:"c510b96612a525835fd97692b2f99e5c",id:null,metadata:{},name:"UpdatePluginButtonUpdatePluginMutation",operationKind:"mutation",text:`mutation UpdatePluginButtonUpdatePluginMutation(
  $input: MutationInstallPluginInput!
) {
  installPlugin(input: $input) {
    url
  }
}
`}}}();V.hash="9485852b5c3f8af60cbb9992ab30bb2f";const N=n=>{const l=k.useFragment(U,n.pluginInstallation),[a,r]=F(async()=>{if(l.url.startsWith("https://cdn.jsdelivr.net/gh/")){const[,o,d,m]=l.url.match(/https:\/\/cdn\.jsdelivr\.net\/gh\/([^/]+)\/([^/@]+)@([^/]+)/),f=await(await fetch(`https://data.jsdelivr.com/v1/packages/gh/${o}/${d}/resolved`)).json();return{currentVersion:m,latestVersion:f.version}}else if(l.url.startsWith("https://cdn.jsdelivr.net/npm/")){const[,o,d]=l.url.match(/https:\/\/cdn\.jsdelivr\.net\/npm\/([^/@]+)@([^/]+)/),p=await(await fetch(`https://data.jsdelivr.com/v1/packages/npm/${o}/resolved`)).json();return{currentVersion:d,latestVersion:p.version}}return{currentVersion:null,latestVersion:null}}),[s,t]=v(V),g=(o=l.url)=>{!(a!=null&&a.latestVersion)||!a.currentVersion||(o=l.url.replace(a.currentVersion,a.latestVersion),s({variables:{input:{url:o,override:!0}}}))};return r?e("div",{children:"Loading..."}):!(a!=null&&a.latestVersion)||!a.currentVersion?null:u("div",{className:"flex items-center gap-2",children:[u(y,{onClick:g,loading:t,children:["Update to ",a.latestVersion]}),u("span",{children:["Current version: ",a.currentVersion]})]})},j=n=>{const l=k.useFragment(R,n.pluginInstallation),[a,r]=v(I),[s,t]=F(async()=>P({pluginSlug:l.slug}));if(t)return e("div",{children:"Loading..."});if(!s)return null;if("_error"in s)return u("div",{children:["Error: ",s._error]});const g=Object.entries(s.settings??{});return u("div",{children:[e(y,{onClick:()=>{a({variables:{input:{slug:l.slug}}})},loading:r,children:"Uninstall"}),e(N,{pluginInstallation:l}),e("div",{children:g.length?g.map(([d,m])=>e("div",{children:e("label",{htmlFor:d,children:m.type==="number"})},d)):"No settings available."})]})},_={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FlowSettings_data",selections:[{args:null,kind:"FragmentSpread",name:"RoutinesSettings_data"}],type:"Query",abstractKey:null};_.hash="0b0464c7fa1bb4ee344e63f9ea6a3686";const D={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutinesSettings_data",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"RoutineSettings_data"}],storageKey:null},{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null}],storageKey:null}],type:"Query",abstractKey:null};D.hash="426a63c1ec1989fe81c37a4133a52c83";const w={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineSettings_data",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null}],type:"Routine",abstractKey:null};w.hash="29b954d0777694865bb2e22aaf31a333";const L=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],l=[{kind:"Variable",name:"input",variableName:"input"}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"RoutineSettingsUpdateRoutineStepsMutation",selections:[{alias:null,args:l,concreteType:"Routine",kind:"LinkedField",name:"updateRoutineSteps",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"RoutineSettings_data"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RoutineSettingsUpdateRoutineStepsMutation",selections:[{alias:null,args:l,concreteType:"Routine",kind:"LinkedField",name:"updateRoutineSteps",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"repeats",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"22a2aaa706c4d59b11a8c55ab6da8494",id:null,metadata:{},name:"RoutineSettingsUpdateRoutineStepsMutation",operationKind:"mutation",text:`mutation RoutineSettingsUpdateRoutineStepsMutation(
  $input: MutationUpdateRoutineStepsInput!
) {
  updateRoutineSteps(input: $input) {
    ...RoutineSettings_data
    id
  }
}

fragment RoutineSettings_data on Routine {
  id
  name
  isActive
  repeats
  time
  steps {
    pluginSlug
    stepSlug
    shouldSkip
  }
}
`}}}();L.hash="205d9a363f22aca3027b97a477a0755a";const C=n=>{const l=k.useFragment(w,n.routine),[a,r]=v(L),[s,t]=c.useState([]),[g,o]=c.useState(0),[d,m]=c.useState(structuredClone(l.steps.map(i=>({...i,id:`${i.pluginSlug}-${i.stepSlug}`})))),p=c.useRef(null);c.useEffect(()=>{for(const i of n.installedPluginSlugs)P({pluginSlug:i}).then(h=>{if(o(S=>S+1),"_error"in h)return;const $=Object.entries(h.routineSteps??{}).map(([S,T])=>({...T,id:`${i}-${S}`,key:S,pluginName:h.name}));t(S=>[...S,...$])})},[n.installedPluginSlugs]);const f=i=>{p.current&&clearTimeout(p.current),p.current=setTimeout(async()=>{a({variables:{input:{routineId:l.id,steps:d}}})},1e3)};return u("div",{children:[e(y,{onClick:n.onBack,children:"Back"}),u("div",{children:[e("div",{children:l.name}),e("div",{children:l.isActive}),e("div",{children:x(l.repeats)}),e("div",{children:l.time}),r&&e("div",{children:"Saving changes..."}),e(K.ReactSortable,{list:d,setList:m,onEnd:f,className:"bg-primary-50 flex flex-col",group:{name:"routine-steps",pull:"clone"},children:d.map(i=>u("div",{children:[e("div",{children:i.pluginSlug}),e("div",{children:i.stepSlug}),e("div",{children:i.shouldSkip})]},i.id))})]}),u("div",{className:"flex flex-col",children:[e(K.ReactSortable,{list:s,setList:t,sort:!1,group:{name:"routine-steps",put:!1},children:s.map(i=>u("div",{children:[e("div",{children:i.name}),e("div",{children:i.description}),e("div",{children:i.pluginName})]},i.id))}),g<n.installedPluginSlugs.length&&e("div",{children:"Loading..."})]})]})},E=n=>{const[l,a]=c.useState(null),r=k.useFragment(D,n.data),s=c.useMemo(()=>r.installedPlugins.map(t=>t.slug),[r.installedPlugins]);if(l){const t=r.routines.find(g=>g.id===l);return e(C,{routine:t,onBack:()=>a(null),installedPluginSlugs:s})}return e("div",{children:r.routines.map(t=>u("div",{onClick:()=>a(t.id),children:[e("div",{children:t.name}),e("div",{children:t.isActive}),e("div",{children:x(t.repeats)}),e("div",{children:t.time})]},t.id))})},x=n=>Q(n)?"Every day":A(n)?"Every weekday":n.slice(0,3).join(", "),Q=n=>A(n)&&n.includes("SATURDAY")&&n.includes("SUNDAY"),A=n=>n.includes("MONDAY")&&n.includes("TUESDAY")&&n.includes("WEDNESDAY")&&n.includes("THURSDAY")&&n.includes("FRIDAY"),O=n=>{const l=k.useFragment(_,n.data);return e("div",{className:"flex flex-col gap-8",children:e(E,{data:l})})},q=()=>e("div",{children:"Browse plugins"}),M=b,J=()=>{const{queryRef:n}=B(M,{},{fetchPolicy:"store-and-network"});return n?e(Y,{queryRef:n}):null},Y=n=>{const l=k.usePreloadedQuery(M,n.queryRef),[a,r]=c.useState(null);return u("div",{className:"flex",children:[u("div",{className:"flex flex-col gap-8",children:[e("div",{children:e(y,{onClick:()=>r(null),children:"Settings"})}),u("div",{className:"flex flex-col gap-2",children:[e("div",{children:"Installed plugins"}),l.installedPlugins.map(s=>e(W,{slug:s.slug,onClick:()=>r(s)},s.slug)),e(y,{onClick:()=>r("browse-plugins"),children:"Browse community plugins"})]})]}),e("div",{children:a?a==="browse-plugins"?e(q,{}):e(j,{pluginInstallation:a}):e(O,{data:l})})]})},W=n=>{const[l,a]=F(async()=>P({pluginSlug:n.slug}));return a?e("div",{children:"Loading..."}):l?"_error"in l?u("div",{children:["Error: ",l._error]}):e("div",{onClick:n.onClick,children:l.name}):null};export{J as default};
