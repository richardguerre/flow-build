import{r as T,a as o,j as c,D as b,u as S,d as g,b as v,L as C}from"./index-635bce38.js";const D=function(){var n={defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"},a={defaultValue:null,kind:"LocalArgument",name:"daysAfter"},t={defaultValue:null,kind:"LocalArgument",name:"firstDays"},l=[{kind:"Variable",name:"after",variableName:"daysAfter"},{kind:"Variable",name:"first",variableName:"firstDays"}],e={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null};return{fragment:{argumentDefinitions:[n,a,t],kind:"Fragment",metadata:null,name:"IndexViewQuery",selections:[{args:l,kind:"FragmentSpread",name:"Days_data"},{args:[{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"Lists_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,t,n],kind:"Operation",name:"IndexViewQuery",selections:[{alias:null,args:l,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[i,s,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[s,{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[s,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null}],storageKey:null}],storageKey:null},s,i],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:l,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[s,d],storageKey:null}],type:"Day",abstractKey:null},s],storageKey:null},{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"lists",plural:!0,selections:[s,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}]},params:{cacheID:"5894dbb88ca5da0107632a43af0ea8e8",id:null,metadata:{},name:"IndexViewQuery",operationKind:"query",text:`query IndexViewQuery(
  $daysAfter: ID
  $firstDays: Int
  $dayIdInFocus: ID!
) {
  ...Days_data_4vQlYY
  ...Lists_data_44J8Us
}

fragment CalendarList_data_44J8Us on Query {
  day: node(id: $dayIdInFocus) {
    __typename
    ... on Day {
      tasks {
        id
        completedAt
      }
    }
    id
  }
}

fragment DayAddTaskActionsBar_day on Day {
  date
}

fragment DayContent_day on Day {
  date
  tasks {
    __typename
    id
    status
    ...TaskCard_task
  }
}

fragment Day_day on Day {
  date
  ...DayContent_day
  ...DayAddTaskActionsBar_day
}

fragment Days_data_4vQlYY on Query {
  days(first: $firstDays, after: $daysAfter) {
    edges {
      cursor
      node {
        ...Day_day
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}

fragment Lists_data_44J8Us on Query {
  ...CalendarList_data_44J8Us
  lists {
    id
    name
  }
}

fragment RenderTaskCardActions_task on Task {
  id
  status
  durationInMinutes
  item {
    id
    isRelevant
  }
  pluginDatas {
    id
    pluginSlug
    min
  }
}

fragment RenderTaskCardDetails_task on Task {
  durationInMinutes
  item {
    id
    scheduledAt
  }
  pluginDatas {
    id
    pluginSlug
    min
  }
}

fragment TaskCardActions_task on Task {
  status
  id
  item {
    id
    isRelevant
  }
  ...TaskCardDurationButton_task
  ...RenderTaskCardActions_task
}

fragment TaskCardDurationButton_task on Task {
  id
  durationInMinutes
}

fragment TaskCard_task on Task {
  id
  date
  title
  status
  completedAt
  ...RenderTaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();D.hash="8f9fad5491adc069cff9c01f720ce21b";const F=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],a=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"}],t={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"DaysPaginationQuery",selections:[{args:a,kind:"FragmentSpread",name:"Days_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"DaysPaginationQuery",selections:[{alias:null,args:a,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[t,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[l,e,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},t,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null}],storageKey:null}],storageKey:null},e,l],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:a,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"}]},params:{cacheID:"cc710b54266744a0eefcc4d2525a8b60",id:null,metadata:{},name:"DaysPaginationQuery",operationKind:"query",text:`query DaysPaginationQuery(
  $after: ID
  $before: ID
  $first: Int
  $last: Int
) {
  ...Days_data_pbnwq
}

fragment DayAddTaskActionsBar_day on Day {
  date
}

fragment DayContent_day on Day {
  date
  tasks {
    __typename
    id
    status
    ...TaskCard_task
  }
}

fragment Day_day on Day {
  date
  ...DayContent_day
  ...DayAddTaskActionsBar_day
}

fragment Days_data_pbnwq on Query {
  days(before: $before, first: $first, after: $after, last: $last) {
    edges {
      cursor
      node {
        ...Day_day
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}

fragment RenderTaskCardActions_task on Task {
  id
  status
  durationInMinutes
  item {
    id
    isRelevant
  }
  pluginDatas {
    id
    pluginSlug
    min
  }
}

fragment RenderTaskCardDetails_task on Task {
  durationInMinutes
  item {
    id
    scheduledAt
  }
  pluginDatas {
    id
    pluginSlug
    min
  }
}

fragment TaskCardActions_task on Task {
  status
  id
  item {
    id
    isRelevant
  }
  ...TaskCardDurationButton_task
  ...RenderTaskCardActions_task
}

fragment TaskCardDurationButton_task on Task {
  id
  durationInMinutes
}

fragment TaskCard_task on Task {
  id
  date
  title
  status
  completedAt
  ...RenderTaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();F.hash="fbd843c28cd0a042c12c1a070116d70d";const _=function(){var n=["days"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"bidirectional",path:n}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:{count:"last",cursor:"before"},path:n},fragmentPathInResult:[],operation:F}},name:"Days_data",selections:[{alias:"days",args:null,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"__Days_days_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();_.hash="fbd843c28cd0a042c12c1a070116d70d";const k=256,h=n=>{const{data:a,loadPrevious:t,loadNext:l}=T.usePaginationFragment(_,n.data),[e,i]=o.useState(null),[s,d]=o.useState(!1),r=o.useRef(null);return o.useEffect(()=>{var m;(m=r.current)==null||m.addEventListener("scroll",()=>{var f,p;const u=(f=r.current)==null?void 0:f.scrollLeft,y=(p=r.current)==null?void 0:p.scrollWidth;!u||!y||(u<=k?i(u):u>=y-window.screen.width-370-k*3&&d(!0))})},[r.current]),o.useEffect(()=>{e?t(7,{onComplete:()=>{var u;(u=r.current)==null||u.scrollTo({left:e+7*k,behavior:"auto"}),i(null)}}):s&&l(7,{onComplete:()=>d(!1)})},[e,s]),c("div",{ref:r,className:"no-scrollbar flex h-full overflow-x-scroll pr-3 pt-3",children:a.days.edges.map(m=>c("div",{className:"flex-1",children:c(b,{day:m.node},void 0,!1,{fileName:"/Users/richardguerre/Projects/flow/apps/web/src/components/Days.tsx",lineNumber:79,columnNumber:11},globalThis)},m.cursor,!1,{fileName:"/Users/richardguerre/Projects/flow/apps/web/src/components/Days.tsx",lineNumber:78,columnNumber:9},globalThis))},void 0,!1,{fileName:"/Users/richardguerre/Projects/flow/apps/web/src/components/Days.tsx",lineNumber:76,columnNumber:5},globalThis)},K=function(){var n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a=[n],t={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},r=[n,{alias:null,args:null,filters:null,handle:"deleteRecord",key:"",kind:"ScalarHandle",name:"id"}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFlowNotiticationsSubscription",selections:[{alias:null,args:null,concreteType:"Notifications",kind:"LinkedField",name:"notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksUpdated",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"TaskCard_task"}],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksDeleted",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsUpdated",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"ItemCard_item"}],storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsDeleted",plural:!0,selections:a,storageKey:null}],storageKey:null}],type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useFlowNotiticationsSubscription",selections:[{alias:null,args:null,concreteType:"Notifications",kind:"LinkedField",name:"notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksUpdated",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},t,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},l,{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[n,e,i],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[n,s,d],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksDeleted",plural:!0,selections:r,storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsUpdated",plural:!0,selections:[t,l,n,e,{alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null},{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[s,d,n],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:a,storageKey:null},i,{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"list",plural:!1,selections:a,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsDeleted",plural:!0,selections:r,storageKey:null}],storageKey:null}]},params:{cacheID:"7fbf6cc3ecda07ee5efbddd8e755174e",id:null,metadata:{},name:"useFlowNotiticationsSubscription",operationKind:"subscription",text:`subscription useFlowNotiticationsSubscription {
  notifications {
    tasksUpdated {
      ...TaskCard_task
      id
    }
    tasksDeleted {
      id
    }
    itemsUpdated {
      ...ItemCard_item
      id
    }
    itemsDeleted {
      id
    }
  }
}

fragment ItemCardActions_item on Item {
  id
  pluginDatas {
    pluginSlug
    min
    id
  }
  ...RenderItemCardActions_item
}

fragment ItemCard_item on Item {
  title
  durationInMinutes
  ...ItemTitle_item
  ...RenderItemCardDetails_item
  ...ItemCardActions_item
  ...OnCreateTaskItemRecordToCreateTaskFrom_item
}

fragment ItemTitle_item on Item {
  id
  title
}

fragment OnCreateTaskItemRecordToCreateTaskFrom_item on Item {
  id
  title
  inboxPoints
  list {
    id
  }
  pluginDatas {
    pluginSlug
    min
    id
  }
}

fragment RenderItemCardActions_item on Item {
  id
  isRelevant
  pluginDatas {
    id
    pluginSlug
    min
  }
}

fragment RenderItemCardDetails_item on Item {
  scheduledAt
  inboxPoints
  durationInMinutes
  pluginDatas {
    pluginSlug
    min
    id
  }
  tasks {
    id
  }
}

fragment RenderTaskCardActions_task on Task {
  id
  status
  durationInMinutes
  item {
    id
    isRelevant
  }
  pluginDatas {
    id
    pluginSlug
    min
  }
}

fragment RenderTaskCardDetails_task on Task {
  durationInMinutes
  item {
    id
    scheduledAt
  }
  pluginDatas {
    id
    pluginSlug
    min
  }
}

fragment TaskCardActions_task on Task {
  status
  id
  item {
    id
    isRelevant
  }
  ...TaskCardDurationButton_task
  ...RenderTaskCardActions_task
}

fragment TaskCardDurationButton_task on Task {
  id
  durationInMinutes
}

fragment TaskCard_task on Task {
  id
  date
  title
  status
  completedAt
  ...RenderTaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();K.hash="df29f91c0b0a28d479f55a924d0a59da";const L=()=>{S(K)},I=D,w=()=>{const n=o.useRef(g().startOf("day").add(4,"hours")),{queryRef:a,loadQuery:t}=v(I,{daysAfter:n.current.subtract(7,"day").format("YYYY-MM-DD"),firstDays:17,dayIdInFocus:`Day_${n.current.format("YYYY-MM-DD")}`});return o.useEffect(()=>{const l=setInterval(()=>{n.current.startOf("day").add(1,"day").isAfter(g())||(n.current=g().startOf("day"),t({daysAfter:n.current.subtract(7,"day").format("YYYY-MM-DD"),firstDays:17,dayIdInFocus:`Day_${n.current.format("YYYY-MM-DD")}`},{fetchPolicy:"store-and-network"}))},36e5);return()=>clearInterval(l)},[]),a?c(A,{queryRef:a},void 0,!1,{fileName:"/Users/richardguerre/Projects/flow/apps/web/src/views/IndexView.tsx",lineNumber:43,columnNumber:10},globalThis):null},A=n=>{const a=T.usePreloadedQuery(I,n.queryRef);return L(),c("div",{className:"flex h-screen w-[calc(100%-60px)]",children:[c(h,{data:a},void 0,!1,{fileName:"/Users/richardguerre/Projects/flow/apps/web/src/views/IndexView.tsx",lineNumber:56,columnNumber:7},globalThis),c(C,{data:a},void 0,!1,{fileName:"/Users/richardguerre/Projects/flow/apps/web/src/views/IndexView.tsx",lineNumber:57,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/Users/richardguerre/Projects/flow/apps/web/src/views/IndexView.tsx",lineNumber:55,columnNumber:5},globalThis)};export{w as default};
