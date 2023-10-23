import{o as I,a as P,i as m,c as e,j as n,T as d,v as g,I as b,G as x,w as c,P as k,H as F,J as S,K as y,B as p,k as U,F as N,M as V,n as _}from"./index-99cc5a09.js";const f=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"url"}],t=[{fields:[{kind:"Variable",name:"url",variableName:"url"}],kind:"ObjectValue",name:"input"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"BrowsePluginsViewInstallMutation",selections:[{alias:null,args:t,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"SettingsView_pluginInstallation"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"BrowsePluginsViewInstallMutation",selections:[{alias:null,args:t,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}]},params:{cacheID:"beb82a762abb47821e7a5320e5c2859e",id:null,metadata:{},name:"BrowsePluginsViewInstallMutation",operationKind:"mutation",text:`mutation BrowsePluginsViewInstallMutation(
  $url: String!
) {
  installPlugin(input: {url: $url}) {
    ...SettingsView_pluginInstallation
  }
}

fragment PluginSettingsView_pluginInstallation on PluginInstallation {
  slug
  url
  ...UpdatePluginButton_pluginInstallation
}

fragment SettingsView_pluginInstallation on PluginInstallation {
  slug
  ...PluginSettingsView_pluginInstallation
}

fragment UpdatePluginButton_pluginInstallation on PluginInstallation {
  url
}
`}}}();f.hash="8db6c006f2db5eec882c41c201f98a77";const h=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"url"}],t=[{fields:[{kind:"Literal",name:"override",value:!0},{kind:"Variable",name:"url",variableName:"url"}],kind:"ObjectValue",name:"input"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"BrowsePluginsViewInstallFromUrlMutation",selections:[{alias:null,args:t,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"SettingsView_pluginInstallation"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"BrowsePluginsViewInstallFromUrlMutation",selections:[{alias:null,args:t,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}]},params:{cacheID:"cc161f5cb3b1562ceae17bd8c16f6493",id:null,metadata:{},name:"BrowsePluginsViewInstallFromUrlMutation",operationKind:"mutation",text:`mutation BrowsePluginsViewInstallFromUrlMutation(
  $url: String!
) {
  installPlugin(input: {url: $url, override: true}) {
    ...SettingsView_pluginInstallation
  }
}

fragment PluginSettingsView_pluginInstallation on PluginInstallation {
  slug
  url
  ...UpdatePluginButton_pluginInstallation
}

fragment SettingsView_pluginInstallation on PluginInstallation {
  slug
  ...PluginSettingsView_pluginInstallation
}

fragment UpdatePluginButton_pluginInstallation on PluginInstallation {
  url
}
`}}}();h.hash="4f4f74d2ecc6236cbafeef37e811c839";const B=[{iconUrl:"FlowIcon.svg",name:"Essentials",slug:"essentials",description:"The official and default plugin for Flow containing essential features such as a morning routine and a shutdown routine.",installUrl:"https://cdn.jsdelivr.net/npm/@flowdev/essentials@0.1.0/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]},{iconUrl:"https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_19_2x.png",name:"Google Calendar",slug:"google-calendar",description:"Official Google Calendar plugin for Flow.",installUrl:"https://cdn.jsdelivr.net/npm/@flowdev/google-calendar@0.1.0/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]},{iconUrl:"https://cdn-icons-png.flaticon.com/512/25/25231.png",name:"GitHub Requested Reviews",slug:"github",description:"Official GitHub plugin for Flow. It currently only gets your requested reviews and adds them as items in your inbox. More features coming soon.",installUrl:"https://cdn.jsdelivr.net/npm/@flowdev/github@0.1.0/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]},{iconUrl:"https://gitstart.com/_astro/logo_black_small.e7d67670.svg",name:"GitStart",slug:"gitstart",description:"Official GitStart plugin for Flow.",installUrl:"https://cdn.jsdelivr.net/npm/@flowdev/gitstart@0.1.0/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]}],C=()=>{const{plugins:a}=I(),[t,s]=P.useState(!1),[o,u]=m(f);return e("div",{className:"max-w-1488px mx-auto flex w-full flex-col gap-8 p-16",children:[e("div",{className:"flex w-full flex-col gap-2",children:[n("div",{className:"w-full text-center text-3xl font-extrabold",children:"Browse plugins"}),n("div",{className:"w-full text-center text-base",children:"Sprinkle a little magic in your day"})]}),e("div",{className:"flex flex-col gap-4",children:[e("div",{className:"bg-background-50 flex items-center justify-between gap-3 rounded-md p-3",children:[e(d,{delayDuration:100,children:[n(g,{children:n(b,{disabled:!0,placeholder:"Search...",leftIcon:n(x,{})})}),n(c,{side:"bottom",children:"Search is not yet implemented"})]}),e(k,{open:t,onOpenChange:s,children:[n(F,{children:e(d,{children:[n(g,{asChild:!0,children:n("button",{className:"hover:bg-background-200 text-foreground-700 rounded p-2",children:n(S,{})})}),n(c,{side:"bottom",children:"Install a plugin from a URL"})]})}),n(y,{align:"end",className:"w-96",children:n(K,{onClose:()=>s(!1)})})]})]}),n("div",{className:"grid grid-cols-3 gap-4",children:B.map(l=>{const r=!!a[l.slug];return e("div",{className:"bg-background-50 min-w-xs flex flex-col gap-2 rounded p-4 shadow-md",children:[e("div",{className:"flex flex-col gap-1",children:[e("div",{className:"flex items-center justify-between",children:[e("div",{className:"flex items-center gap-2",children:[n("img",{src:l.iconUrl,className:"h-5 w-5"}),n("div",{className:"text-base font-medium",children:l.name})]}),n(p,{secondary:!0,loading:u,disabled:r,onClick:()=>o({variables:{url:l.installUrl}}),children:r?"Installed":"Install"})]}),n("div",{className:"text-foreground-700 text-sm",children:l.description})]}),n("div",{className:"text-foreground-700 flex items-center gap-4 text-sm",children:e("div",{className:"flex gap-2",children:["v",l.version]})}),e("div",{className:"text-foreground-900 flex items-center gap-2 text-sm",children:[l.authors[0].avatarUrl&&n("img",{src:l.authors[0].avatarUrl,className:"ring-primary-100 inline-block h-5 w-5 rounded-full ring"}),l.authors[0].name,l.authors.length>1&&` & ${l.authors.length-1} more`]})]},l.name)})})]})]})},K=a=>{const{register:t,formState:s,handleSubmit:o,setError:u}=U(),[l,r]=m(h);return e("form",{onSubmit:o(v=>{l({variables:v,updater:i=>{const w=i.getPluralRootField("installPlugin");i.getRoot().setLinkedRecords(w,"installedPlugins")},onCompleted:i=>{_.success("Plugin installed"),a.onClose()},onError:i=>u("url",{message:i.message})})}),className:"flex gap-2 break-all",children:[n(N,{...t("url",{required:"A URL is required"}),placeholder:"https://cdn.jsdelivr.net/npm/package@version/dist",error:s.errors.url,fullWidth:!0}),n("div",{className:"flex-grow-0",children:n(p,{loading:r,className:"py-2.5",children:n(V,{size:"16px"})})})]})};export{C as default};
