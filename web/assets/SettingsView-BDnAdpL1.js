import{b as u,j as n,r as o,V as g,S as d,O as c,c as m,e as x,t as f,f as y,h}from"./index-CIpxgCpn.js";const i=function(){var e={alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"hasWebRuntime",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"version",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[e,l,{args:null,kind:"FragmentSpread",name:"PluginSettingsView_pluginInstallation"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[e,l,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},s,{alias:null,args:null,concreteType:"PluginVersion",kind:"LinkedField",name:"latestVersion",plural:!1,selections:[s,{alias:null,args:null,kind:"ScalarField",name:"installUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"ac92db86850641bdb7ee86bac14d322b",id:null,metadata:{},name:"SettingsViewQuery",operationKind:"query",text:`query SettingsViewQuery {
  installedPlugins {
    slug
    hasWebRuntime
    ...PluginSettingsView_pluginInstallation
  }
}

fragment PluginSettingsView_pluginInstallation on PluginInstallation {
  slug
  url
  ...UpdatePluginButton_pluginInstallation
}

fragment UpdatePluginButton_pluginInstallation on PluginInstallation {
  url
  version
  latestVersion {
    version
    installUrl
    id
  }
}
`}}}();i.hash="d797a1ad478fef6dfddf23a01caab468";const r=i,S=()=>{const{queryRef:e}=u(r,{},{fetchPolicy:"store-and-network"});return e?n.jsx(p,{queryRef:e}):null},p=e=>{const l=o.usePreloadedQuery(r,e.queryRef);return n.jsxs("div",{className:"flex w-full",children:[n.jsxs("div",{className:"bg-background-50 w-63 z-10 flex flex-shrink-0 flex-col gap-4 p-4 shadow-xl",children:[n.jsx("div",{className:"text-base font-semibold",children:"Settings"}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx(a,{to:"/settings/general",children:"General"}),n.jsx(a,{to:"/settings/tasks",children:"Tasks"}),n.jsx(a,{to:"/settings/routines",children:"Routines"}),n.jsx(a,{to:"/settings/browse-plugins",children:"Browse plugins"})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("div",{className:"text-base font-semibold",children:"Plugin settings"}),l.installedPlugins.filter(s=>s.hasWebRuntime).map(s=>n.jsx(b,{slug:s.slug},s.slug))]})]}),n.jsx(g,{children:n.jsx(d,{children:n.jsx(c,{context:l})})})]})},a=e=>{const l=m({to:e.to,level:e.level??2});return n.jsx(x,{to:e.to,className:f("text-foreground-700 hover:bg-background-200 rounded-md bg-transparent p-2",l&&"bg-primary-100 text-primary-600 hover:bg-primary-100"),children:e.children})},b=e=>{const[l,s]=y(async()=>h({pluginSlug:e.slug})),t=`/settings/plugin/${e.slug}`;return s?n.jsx(a,{to:t,level:3,children:e.slug}):l?"_error"in l?(console.log("SettingViewPluginTab error",l),null):n.jsx(a,{to:t,level:3,children:l.name}):null};export{S as default};
