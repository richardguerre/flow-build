import{b as u,j as e,r as g,V as o,S as d,O as c,c as m,e as x,t as f,f as y,h}from"./index-Bzviz3gH.js";const a=function(){var n={alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[n,{args:null,kind:"FragmentSpread",name:"PluginSettingsView_pluginInstallation"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}]},params:{cacheID:"169ee327bcecb935b78f5c02348575e2",id:null,metadata:{},name:"SettingsViewQuery",operationKind:"query",text:`query SettingsViewQuery {
  installedPlugins {
    slug
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
}
`}}}();a.hash="d797a1ad478fef6dfddf23a01caab468";const r=a,j=()=>{const{queryRef:n}=u(r,{},{fetchPolicy:"store-and-network"});return n?e.jsx(p,{queryRef:n}):null},p=n=>{const l=g.usePreloadedQuery(r,n.queryRef);return e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"bg-background-50 w-63 z-10 flex flex-shrink-0 flex-col gap-4 p-4 shadow-xl",children:[e.jsx("div",{className:"text-base font-semibold",children:"Settings"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{to:"/settings/general",children:"General"}),e.jsx(t,{to:"/settings/tasks",children:"Tasks"}),e.jsx(t,{to:"/settings/routines",children:"Routines"}),e.jsx(t,{to:"/settings/browse-plugins",children:"Browse plugins"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"text-base font-semibold",children:"Plugin settings"}),l.installedPlugins.map(s=>e.jsx(b,{slug:s.slug},s.slug))]})]}),e.jsx(o,{children:e.jsx(d,{children:e.jsx(c,{context:l})})})]})},t=n=>{const l=m({to:n.to,level:n.level??2});return e.jsx(x,{to:n.to,className:f("text-foreground-700 hover:bg-background-200 rounded-md bg-transparent p-2",l&&"bg-primary-100 text-primary-600 hover:bg-primary-100"),children:n.children})},b=n=>{const[l,s]=y(async()=>h({pluginSlug:n.slug})),i=`/settings/plugin/${n.slug}`;return s?e.jsx(t,{to:i,level:3,children:n.slug}):l?"_error"in l?(console.log("SettingViewPluginTab error",l),null):e.jsx(t,{to:i,level:3,children:l.name}):null};export{j as default};
