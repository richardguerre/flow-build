import{b,j as l,a as S,r as f,T as c,H as m,I as K,o as V,J as p,P as I,Q as j,a5 as U,R as B,X as L,i as y,B as k,k as N,F as T,a6 as R,n as P}from"./index-PD3g3fSV.js";const x=function(){var e={alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BrowsePluginsViewQuery",selections:[{alias:null,args:null,concreteType:"QueryPluginsConnection",kind:"LinkedField",name:"plugins",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryPluginsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Plugin",kind:"LinkedField",name:"node",plural:!1,selections:[e,{args:null,kind:"FragmentSpread",name:"BrowsePluginsViewPluginCard_plugin"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"BrowsePluginsViewQuery",selections:[{alias:null,args:null,concreteType:"QueryPluginsConnection",kind:"LinkedField",name:"plugins",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryPluginsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Plugin",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"iconUrl",storageKey:null},n,{alias:null,args:null,kind:"ScalarField",name:"shortDescription",storageKey:null},{alias:null,args:null,concreteType:"PluginVersion",kind:"LinkedField",name:"latestVersion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"version",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"installUrl",storageKey:null},a],storageKey:null},{alias:null,args:null,concreteType:"PluginAuthor",kind:"LinkedField",name:"authors",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},a],storageKey:null},a],storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"806d5c9f8fb183b14b943dda332c95da",id:null,metadata:{},name:"BrowsePluginsViewQuery",operationKind:"query",text:`query BrowsePluginsViewQuery {
  plugins {
    edges {
      node {
        slug
        ...BrowsePluginsViewPluginCard_plugin
        id
      }
    }
  }
}

fragment BrowsePluginsViewPluginCard_plugin on Plugin {
  iconUrl
  name
  slug
  shortDescription
  latestVersion {
    version
    installUrl
    id
  }
  authors {
    name
    avatarUrl
    id
  }
}
`}}}();x.hash="4d6db97d41f8c2b89f4a9db30da897d1";const h=function(){var e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BrowsePluginsViewPluginCard_plugin",selections:[{alias:null,args:null,kind:"ScalarField",name:"iconUrl",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shortDescription",storageKey:null},{alias:null,args:null,concreteType:"PluginVersion",kind:"LinkedField",name:"latestVersion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"version",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"installUrl",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PluginAuthor",kind:"LinkedField",name:"authors",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null}],storageKey:null}],type:"Plugin",abstractKey:null}}();h.hash="65e20236a87272b235b96caba6b5fb09";const w=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"url"}],n=[{fields:[{kind:"Variable",name:"url",variableName:"url"}],kind:"ObjectValue",name:"input"}],a={alias:null,args:null,kind:"ScalarField",name:"version",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"BrowsePluginsViewInstallMutation",selections:[{alias:null,args:n,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"SettingsView_pluginInstallation"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"BrowsePluginsViewInstallMutation",selections:[{alias:null,args:n,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasWebRuntime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},a,{alias:null,args:null,concreteType:"PluginVersion",kind:"LinkedField",name:"latestVersion",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"installUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"cb2d56d0735dad7fd30556aa9bd8f4fa",id:null,metadata:{},name:"BrowsePluginsViewInstallMutation",operationKind:"mutation",text:`mutation BrowsePluginsViewInstallMutation(
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
  hasWebRuntime
  ...PluginSettingsView_pluginInstallation
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
`}}}();w.hash="8db6c006f2db5eec882c41c201f98a77";const F=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"url"}],n=[{fields:[{kind:"Literal",name:"override",value:!0},{kind:"Variable",name:"url",variableName:"url"}],kind:"ObjectValue",name:"input"}],a={alias:null,args:null,kind:"ScalarField",name:"version",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"BrowsePluginsViewInstallFromUrlMutation",selections:[{alias:null,args:n,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"SettingsView_pluginInstallation"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"BrowsePluginsViewInstallFromUrlMutation",selections:[{alias:null,args:n,concreteType:"PluginInstallation",kind:"LinkedField",name:"installPlugin",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasWebRuntime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},a,{alias:null,args:null,concreteType:"PluginVersion",kind:"LinkedField",name:"latestVersion",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"installUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"d32cb62c8a0e6f4b0d172cfd7664e042",id:null,metadata:{},name:"BrowsePluginsViewInstallFromUrlMutation",operationKind:"mutation",text:`mutation BrowsePluginsViewInstallFromUrlMutation(
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
  hasWebRuntime
  ...PluginSettingsView_pluginInstallation
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
`}}}();F.hash="4f4f74d2ecc6236cbafeef37e811c839";const v=x,q=()=>{const{queryRef:e}=b(v,{},{fetchPolicy:"store-and-network"});return e?l.jsx(C,{queryRef:e}):null},C=e=>{const[n,a]=S.useState(!1),s=f.usePreloadedQuery(v,e.queryRef);return l.jsxs("div",{className:"max-w-1488px mx-auto flex w-full flex-col gap-8 p-16",children:[l.jsxs("div",{className:"flex w-full flex-col gap-2",children:[l.jsx("div",{className:"w-full text-center text-3xl font-extrabold",children:"Browse plugins"}),l.jsx("div",{className:"w-full text-center text-base",children:"Sprinkle a little magic in your day"})]}),l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsxs("div",{className:"bg-background-50 flex items-center justify-between gap-3 rounded-md p-3",children:[l.jsxs(c,{delayDuration:100,children:[l.jsx(m,{children:l.jsx(K,{disabled:!0,placeholder:"Search...",leftIcon:l.jsx(V,{})})}),l.jsx(p,{side:"bottom",children:"Search is not yet implemented"})]}),l.jsxs(I,{open:n,onOpenChange:a,children:[l.jsx(j,{children:l.jsxs(c,{children:[l.jsx(m,{asChild:!0,children:l.jsx("button",{className:"hover:bg-background-200 text-foreground-700 rounded p-2",children:l.jsx(U,{})})}),l.jsx(p,{side:"bottom",children:"Install a plugin from a URL"})]})}),l.jsx(B,{align:"end",className:"w-96",children:l.jsx(D,{onClose:()=>a(!1)})})]})]}),l.jsx("div",{className:"grid grid-cols-3 gap-4",children:s.plugins.edges.map(r=>l.jsx(_,{plugin:r.node}))})]})]})},_=e=>{var u;const n=f.useFragment(h,e.plugin),{plugins:a}=L(),s=!!a[n.slug],[r,o]=y(w),d=()=>{n.latestVersion&&r({variables:{url:n.latestVersion.installUrl},onError:t=>{P.error(t.message)},updater:t=>{const i=t.getPluralRootField("installPlugin");t.getRoot().setLinkedRecords(i,"installedPlugins")}})};return l.jsxs("div",{className:"bg-background-50 min-w-xs flex flex-col gap-2 rounded p-4 shadow-md",children:[l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("img",{src:n.iconUrl,className:"h-5 w-5 rounded-1"}),l.jsx("div",{className:"text-base font-medium",children:n.name})]}),l.jsx(k,{secondary:!0,loading:o,disabled:s||!n.latestVersion,onClick:d,children:s?"Installed":"Install"})]}),l.jsx("div",{className:"text-foreground-700 text-sm",children:n.shortDescription})]}),l.jsx("div",{className:"text-foreground-700 flex items-center gap-4 text-sm",children:l.jsxs("div",{className:"flex gap-2",children:["v",((u=n.latestVersion)==null?void 0:u.version)??"0.0.0"]})}),l.jsxs("div",{className:"text-foreground-900 flex items-center gap-2 text-sm",children:[n.authors[0].avatarUrl&&l.jsx("img",{src:n.authors[0].avatarUrl,className:"ring-primary-200 inline-block h-5 w-5 rounded-full ring-1"}),n.authors[0].name,n.authors.length>1&&` & ${n.authors.length-1} more`]})]},n.name)},D=e=>{const{register:n,formState:a,handleSubmit:s,setError:r}=N(),[o,d]=y(F),u=t=>{o({variables:t,updater:i=>{const g=i.getPluralRootField("installPlugin");i.getRoot().setLinkedRecords(g,"installedPlugins")},onCompleted:i=>{P.success("Plugin installed"),e.onClose()},onError:i=>r("url",{message:i.message})})};return l.jsxs("form",{onSubmit:s(u),className:"flex gap-2 break-all",children:[l.jsx(T,{...n("url",{required:"A URL is required"}),placeholder:"https://cdn.jsdelivr.net/npm/package@version/dist",error:a.errors.url,fullWidth:!0}),l.jsx("div",{className:"flex-grow-0",children:l.jsx(k,{loading:d,className:"py-2.5",children:l.jsx(R,{size:"16px"})})})]})};export{q as default};
