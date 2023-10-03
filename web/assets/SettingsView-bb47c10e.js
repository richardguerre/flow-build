import{b as g,j as e,r as o,c as a,V as d,S as c,O as m,e as f,f as y,t as p,g as h,h as b}from"./index-8bc38870.js";const r=function(){var n={alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[n,{args:null,kind:"FragmentSpread",name:"PluginSettingsView_pluginInstallation"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}]},params:{cacheID:"169ee327bcecb935b78f5c02348575e2",id:null,metadata:{},name:"SettingsViewQuery",operationKind:"query",text:`query SettingsViewQuery {
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
`}}}();r.hash="d797a1ad478fef6dfddf23a01caab468";const u=r,x=()=>{const{queryRef:n}=g(u,{},{fetchPolicy:"store-and-network"});return n?e(w,{queryRef:n}):null},w=n=>{const l=o.usePreloadedQuery(u,n.queryRef);return a("div",{className:"flex w-full",children:[a("div",{className:"bg-background-50 w-63 z-10 flex flex-shrink-0 flex-col gap-4 p-4 shadow-xl",children:[e("div",{className:"text-base font-semibold",children:"Settings"}),a("div",{className:"flex flex-col gap-2",children:[e(t,{to:"/settings/general",children:"General"}),e(t,{to:"/settings/routines",children:"Routines"}),e(t,{to:"/settings/browse-plugins",children:"Browse plugins"})]}),a("div",{className:"flex flex-col gap-2",children:[e("div",{className:"text-base font-semibold",children:"Plugin settings"}),l.installedPlugins.map(i=>e(P,{slug:i.slug},i.slug))]})]}),e(d,{children:e(c,{children:e(m,{context:l})})})]})},t=n=>{const l=f(n.to);return e(y,{to:n.to,className:p("text-foreground-700 hover:bg-background-200 rounded-md bg-transparent p-2",l&&"bg-primary-100 text-primary-600 hover:bg-primary-100"),children:n.children})},P=n=>{const[l,i]=h(async()=>b({pluginSlug:n.slug})),s=`plugin/${n.slug}`;return i?e(t,{to:s,children:n.slug}):l?"_error"in l?(console.log("SettingViewPluginTab error",l),null):e(t,{to:s,children:l.name}):null};export{x as default};
