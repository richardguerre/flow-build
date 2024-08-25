import{a as I,j as n,T as g,v as c,I as b,G as P,w as d,P as j,H as k,J as F,K as U,o as y,i as m,B as p,k as S,F as N,M as V,n as u}from"./index-b60f1d3d.js";const f=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"url"}],e=[{fields:[{kind:"Variable",name:"url",variableName:"url"}],kind:"ObjectValue",name:"input"}];return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"BrowsePluginsViewInstallMutation",selections:[{alias:null,args:e,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"SettingsView_pluginInstallation"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"BrowsePluginsViewInstallMutation",selections:[{alias:null,args:e,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}]},params:{cacheID:"beb82a762abb47821e7a5320e5c2859e",id:null,metadata:{},name:"BrowsePluginsViewInstallMutation",operationKind:"mutation",text:`mutation BrowsePluginsViewInstallMutation(
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
`}}}();f.hash="8db6c006f2db5eec882c41c201f98a77";const h=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"url"}],e=[{fields:[{kind:"Literal",name:"override",value:!0},{kind:"Variable",name:"url",variableName:"url"}],kind:"ObjectValue",name:"input"}];return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"BrowsePluginsViewInstallFromUrlMutation",selections:[{alias:null,args:e,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"SettingsView_pluginInstallation"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"BrowsePluginsViewInstallFromUrlMutation",selections:[{alias:null,args:e,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}]},params:{cacheID:"cc161f5cb3b1562ceae17bd8c16f6493",id:null,metadata:{},name:"BrowsePluginsViewInstallFromUrlMutation",operationKind:"mutation",text:`mutation BrowsePluginsViewInstallFromUrlMutation(
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
`}}}();h.hash="4f4f74d2ecc6236cbafeef37e811c839";const _=[{iconUrl:"FlowIcon.svg",name:"Essentials",slug:"essentials",description:"The official and default plugin for Flow containing essential features such as a morning routine and a shutdown routine.",installUrl:"https://cdn.jsdelivr.net/gh/richardguerre/flow@c1dc94b/plugins/essentials/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]},{iconUrl:"FlowIcon.svg",name:"Repeating Tasks",slug:"repeating-tasks",description:"Official Flow plugin that allows creating repeating tasks. It's like a cron job for your tasks.",installUrl:"https://cdn.jsdelivr.net/gh/richardguerre/flow@c1dc94b/plugins/repeating-tasks/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]},{iconUrl:"https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_19_2x.png",name:"Google Calendar",slug:"google-calendar",description:"Official Google Calendar plugin for Flow.",installUrl:"https://cdn.jsdelivr.net/gh/richardguerre/flow@c1dc94b/plugins/google-calendar/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]},{iconUrl:"https://cdn-icons-png.flaticon.com/512/25/25231.png",name:"GitHub Requested Reviews",slug:"github",description:"Official GitHub plugin for Flow. It currently only gets your requested reviews and adds them as items in your inbox. More features coming soon.",installUrl:"https://cdn.jsdelivr.net/gh/richardguerre/flow@c1dc94b/plugins/github/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]},{iconUrl:"https://gitstart.com/_astro/logo_black_small.e7d67670.svg",name:"GitStart",slug:"gitstart",description:"Official GitStart plugin for Flow.",installUrl:"https://cdn.jsdelivr.net/gh/richardguerre/flow@c1dc94b/plugins/gitstart/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]},{iconUrl:"https://linear.app/favicon.ico",name:"Linear",slug:"linear",description:"Official Linear plugin for Flow, allowing you to manage your Linear issues directly from Flow.",installUrl:"https://cdn.jsdelivr.net/gh/richardguerre/flow@c1dc94b/plugins/linear/out",version:"0.1.0",authors:[{name:"Flow",avatarUrl:"FlowIcon.svg"}]}],M=()=>{const[l,e]=I.useState(!1);return n.jsxs("div",{className:"max-w-1488px mx-auto flex w-full flex-col gap-8 p-16",children:[n.jsxs("div",{className:"flex w-full flex-col gap-2",children:[n.jsx("div",{className:"w-full text-center text-3xl font-extrabold",children:"Browse plugins"}),n.jsx("div",{className:"w-full text-center text-base",children:"Sprinkle a little magic in your day"})]}),n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"bg-background-50 flex items-center justify-between gap-3 rounded-md p-3",children:[n.jsxs(g,{delayDuration:100,children:[n.jsx(c,{children:n.jsx(b,{disabled:!0,placeholder:"Search...",leftIcon:n.jsx(P,{})})}),n.jsx(d,{side:"bottom",children:"Search is not yet implemented"})]}),n.jsxs(j,{open:l,onOpenChange:e,children:[n.jsx(k,{children:n.jsxs(g,{children:[n.jsx(c,{asChild:!0,children:n.jsx("button",{className:"hover:bg-background-200 text-foreground-700 rounded p-2",children:n.jsx(F,{})})}),n.jsx(d,{side:"bottom",children:"Install a plugin from a URL"})]})}),n.jsx(U,{align:"end",className:"w-96",children:n.jsx(L,{onClose:()=>e(!1)})})]})]}),n.jsx("div",{className:"grid grid-cols-3 gap-4",children:_.map(a=>n.jsx(B,{...a}))})]})]})},B=l=>{const{plugins:e}=y(),a=!!e[l.slug],[i,s]=m(f),r=()=>{i({variables:{url:l.installUrl},onCompleted:()=>{u.success("Plugin installed")},onError:o=>{u.error(o.message)}})};return n.jsxs("div",{className:"bg-background-50 min-w-xs flex flex-col gap-2 rounded p-4 shadow-md",children:[n.jsxs("div",{className:"flex flex-col gap-1",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("img",{src:l.iconUrl,className:"h-5 w-5 rounded-1"}),n.jsx("div",{className:"text-base font-medium",children:l.name})]}),n.jsx(p,{secondary:!0,loading:s,disabled:a,onClick:r,children:a?"Installed":"Install"})]}),n.jsx("div",{className:"text-foreground-700 text-sm",children:l.description})]}),n.jsx("div",{className:"text-foreground-700 flex items-center gap-4 text-sm",children:n.jsxs("div",{className:"flex gap-2",children:["v",l.version]})}),n.jsxs("div",{className:"text-foreground-900 flex items-center gap-2 text-sm",children:[l.authors[0].avatarUrl&&n.jsx("img",{src:l.authors[0].avatarUrl,className:"ring-primary-100 inline-block h-5 w-5 rounded-full ring"}),l.authors[0].name,l.authors.length>1&&` & ${l.authors.length-1} more`]})]},l.name)},L=l=>{const{register:e,formState:a,handleSubmit:i,setError:s}=S(),[r,o]=m(h),x=w=>{r({variables:w,updater:t=>{const v=t.getPluralRootField("installPlugin");t.getRoot().setLinkedRecords(v,"installedPlugins")},onCompleted:t=>{u.success("Plugin installed"),l.onClose()},onError:t=>s("url",{message:t.message})})};return n.jsxs("form",{onSubmit:i(x),className:"flex gap-2 break-all",children:[n.jsx(N,{...e("url",{required:"A URL is required"}),placeholder:"https://cdn.jsdelivr.net/npm/package@version/dist",error:a.errors.url,fullWidth:!0}),n.jsx("div",{className:"flex-grow-0",children:n.jsx(p,{loading:o,className:"py-2.5",children:n.jsx(V,{size:"16px"})})})]})};export{M as default};
