import{b as g,j as n,r as o,c as a,V as d,S as c,O as m,e as f,f as y,t as h,g as p,h as b}from"./index-2daf20c7.js";const r=function(){var e={alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[e,{args:null,kind:"FragmentSpread",name:"PluginSettingsView_pluginInstallation"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"SettingsViewQuery",selections:[{alias:null,args:null,concreteType:"PluginInstallation",kind:"LinkedField",name:"installedPlugins",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}]},params:{cacheID:"169ee327bcecb935b78f5c02348575e2",id:null,metadata:{},name:"SettingsViewQuery",operationKind:"query",text:`query SettingsViewQuery {
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
`}}}();r.hash="d797a1ad478fef6dfddf23a01caab468";const u=r,x=()=>{const{queryRef:e}=g(u,{},{fetchPolicy:"store-and-network"});return e?n(w,{queryRef:e}):null},w=e=>{const l=o.usePreloadedQuery(u,e.queryRef);return a("div",{className:"flex w-full",children:[a("div",{className:"bg-background-50 w-63 z-10 flex flex-shrink-0 flex-col gap-4 p-4 shadow-xl",children:[n("div",{className:"text-base font-semibold",children:"Settings"}),a("div",{className:"flex flex-col gap-2",children:[n(t,{to:"/settings/general",children:"General"}),n(t,{to:"/settings/routines",children:"Routines"}),n(t,{to:"/settings/browse-plugins",children:"Browse plugins"})]}),a("div",{className:"flex flex-col gap-2",children:[n("div",{className:"text-base font-semibold",children:"Plugin settings"}),l.installedPlugins.map(i=>n(P,{slug:i.slug},i.slug))]})]}),n(d,{children:n(c,{children:n(m,{context:l})})})]})},t=e=>{const l=f({to:e.to,level:e.level??2});return n(y,{to:e.to,className:h("text-foreground-700 hover:bg-background-200 rounded-md bg-transparent p-2",l&&"bg-primary-100 text-primary-600 hover:bg-primary-100"),children:e.children})},P=e=>{const[l,i]=p(async()=>b({pluginSlug:e.slug})),s=`/settings/plugin/${e.slug}`;return i?n(t,{to:s,level:3,children:e.slug}):l?"_error"in l?(console.log("SettingViewPluginTab error",l),null):n(t,{to:s,level:3,children:l.name}):null};export{x as default};
