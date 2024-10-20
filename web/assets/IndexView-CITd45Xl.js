import{r as F,a as k,j as c,D as b,u as v,g as A,b as R,d as h,L as x}from"./index-BHtjh5t7.js";const I=function(){var n={defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"},a={defaultValue:null,kind:"LocalArgument",name:"daysAfter"},t={defaultValue:null,kind:"LocalArgument",name:"firstDays"},s=[{kind:"Variable",name:"after",variableName:"daysAfter"},{kind:"Variable",name:"first",variableName:"firstDays"}],e={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null};return{fragment:{argumentDefinitions:[n,a,t],kind:"Fragment",metadata:null,name:"IndexViewQuery",selections:[{args:s,kind:"FragmentSpread",name:"Days_data"},{args:[{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"Lists_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,t,n],kind:"Operation",name:"IndexViewQuery",selections:[{alias:null,args:s,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[i,l,e,o,r,d,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"subtasks",plural:!0,selections:[l,o,r,e],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskTag",kind:"LinkedField",name:"tags",plural:!0,selections:[l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null}],storageKey:null},l,i],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:s,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"},{alias:null,args:null,kind:"ScalarField",name:"canRefreshCalendarItems",storageKey:null},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[l,d],storageKey:null}],type:"Day",abstractKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"lists",plural:!0,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}]},params:{cacheID:"bf3d5fe76cd0f04de3c0935322324300",id:null,metadata:{},name:"IndexViewQuery",operationKind:"query",text:`query IndexViewQuery(
  $daysAfter: ID
  $firstDays: Int
  $dayIdInFocus: ID!
) {
  ...Days_data_4vQlYY
  ...Lists_data_44J8Us
}

fragment CalendarListTaskCardDraggedIn_task on Task {
  id
  durationInMinutes
}

fragment CalendarList_data_44J8Us on Query {
  canRefreshCalendarItems
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

fragment OnCreateItemItemRelatedToTask_task on Task {
  item {
    id
    inboxPoints
  }
}

fragment OnCreateItemTaskRecordToCreateItemFrom_task on Task {
  id
  date
  title
  itemId
  ...OnCreateItemItemRelatedToTask_task
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

fragment TaskCardContextMenu_task on Task {
  id
  date
}

fragment TaskCardDurationButton_task on Task {
  id
  durationInMinutes
}

fragment TaskCardSubtask_task on Task {
  id
  title
  status
  date
}

fragment TaskCard_task on Task {
  id
  date
  title
  status
  completedAt
  subtasks {
    id
    ...TaskCardSubtask_task
  }
  ...RenderTaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
  ...TaskCardContextMenu_task
  ...CalendarListTaskCardDraggedIn_task
  ...OnCreateItemTaskRecordToCreateItemFrom_task
}

fragment TaskTitle_task on Task {
  id
  title
  date
  status
  durationInMinutes
  tags {
    id
  }
}
`}}}();I.hash="8f9fad5491adc069cff9c01f720ce21b";const C=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],a=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"}],t={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"DaysPaginationQuery",selections:[{args:a,kind:"FragmentSpread",name:"Days_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"DaysPaginationQuery",selections:[{alias:null,args:a,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[t,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[s,e,t,i,l,{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"subtasks",plural:!0,selections:[e,i,l,t],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskTag",kind:"LinkedField",name:"tags",plural:!0,selections:[e],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null}],storageKey:null},e,s],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:a,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"}]},params:{cacheID:"53661029971270d553981c2b4a808716",id:null,metadata:{},name:"DaysPaginationQuery",operationKind:"query",text:`query DaysPaginationQuery(
  $after: ID
  $before: ID
  $first: Int
  $last: Int
) {
  ...Days_data_pbnwq
}

fragment CalendarListTaskCardDraggedIn_task on Task {
  id
  durationInMinutes
}

fragment DayAddTaskActionsBar_day on Day {
  date
}

fragment DayContent_day on Day {
  date
  tasks {
    __typename
    id
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

fragment OnCreateItemItemRelatedToTask_task on Task {
  item {
    id
    inboxPoints
  }
}

fragment OnCreateItemTaskRecordToCreateItemFrom_task on Task {
  id
  date
  title
  itemId
  ...OnCreateItemItemRelatedToTask_task
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

fragment TaskCardContextMenu_task on Task {
  id
  date
}

fragment TaskCardDurationButton_task on Task {
  id
  durationInMinutes
}

fragment TaskCardSubtask_task on Task {
  id
  title
  status
  date
}

fragment TaskCard_task on Task {
  id
  date
  title
  status
  completedAt
  subtasks {
    id
    ...TaskCardSubtask_task
  }
  ...RenderTaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
  ...TaskCardContextMenu_task
  ...CalendarListTaskCardDraggedIn_task
  ...OnCreateItemTaskRecordToCreateItemFrom_task
}

fragment TaskTitle_task on Task {
  id
  title
  date
  status
  durationInMinutes
  tags {
    id
  }
}
`}}}();C.hash="fbd843c28cd0a042c12c1a070116d70d";const K=function(){var n=["days"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"bidirectional",path:n}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:{count:"last",cursor:"before"},path:n},fragmentPathInResult:[],operation:C}},name:"Days_data",selections:[{alias:"days",args:null,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"__Days_days_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();K.hash="fbd843c28cd0a042c12c1a070116d70d";const f=256,P=n=>{const{data:a,loadPrevious:t,loadNext:s}=F.usePaginationFragment(K,n.data),[e,i]=k.useState(null),[l,o]=k.useState(!1),r=k.useRef(null);return k.useEffect(()=>{var d;(d=r.current)==null||d.addEventListener("scroll",()=>{var m,y;const u=(m=r.current)==null?void 0:m.scrollLeft,g=(y=r.current)==null?void 0:y.scrollWidth;!u||!g||(u<=f?i(u):u>=g-window.screen.width-370-f*3&&o(!0))})},[r.current]),k.useEffect(()=>{e?t(7,{onComplete:()=>{var u;(u=r.current)==null||u.scrollTo({left:e+7*f,behavior:"auto"}),i(null)}}):l&&s(7,{onComplete:()=>o(!1)})},[e,l]),c.jsx("div",{ref:r,className:"no-scrollbar flex h-full overflow-x-scroll pr-3 pt-3",children:a.days.edges.map(d=>c.jsx(b,{day:d.node},d.cursor))})},S=function(){var n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a=[n],t={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},l={alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"subtasks",plural:!0,selections:[n,s,e,t],storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null},g={alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[n,r,d,u],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},T={alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[n,m,y],storageKey:null},p={alias:null,args:null,concreteType:"TaskTag",kind:"LinkedField",name:"tags",plural:!0,selections:a,storageKey:null},_={alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},D=[n,{alias:null,args:null,filters:null,handle:"deleteRecord",key:"",kind:"ScalarHandle",name:"id"}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFlowNotiticationsSubscription",selections:[{alias:null,args:null,concreteType:"Notifications",kind:"LinkedField",name:"notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksUpdated",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"TaskCard_task"}],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksDeleted",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsUpdated",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"ItemCard_item"}],storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsDeleted",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"daysUpdated",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"}],storageKey:null}],storageKey:null}],type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useFlowNotiticationsSubscription",selections:[{alias:null,args:null,concreteType:"Notifications",kind:"LinkedField",name:"notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksUpdated",plural:!0,selections:[n,t,s,e,i,l,o,g,T,p,_],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksDeleted",plural:!0,selections:D,storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsUpdated",plural:!0,selections:[n,s,o,u,r,{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[m,y,n],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:a,storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"listId",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsDeleted",plural:!0,selections:D,storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"daysUpdated",plural:!0,selections:[t,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},n,t,s,e,i,l,o,g,T,p,_],storageKey:null},n],storageKey:null}],storageKey:null}]},params:{cacheID:"32876bb837fab598b64cea078bdc5ef0",id:null,metadata:{},name:"useFlowNotiticationsSubscription",operationKind:"subscription",text:`subscription useFlowNotiticationsSubscription {
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
    daysUpdated {
      ...Day_day
      id
    }
  }
}

fragment CalendarListTaskCardDraggedIn_task on Task {
  id
  durationInMinutes
}

fragment DayAddTaskActionsBar_day on Day {
  date
}

fragment DayContent_day on Day {
  date
  tasks {
    __typename
    id
    ...TaskCard_task
  }
}

fragment Day_day on Day {
  date
  ...DayContent_day
  ...DayAddTaskActionsBar_day
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

fragment ItemCardContextMenu_item on Item {
  id
}

fragment ItemCard_item on Item {
  id
  title
  durationInMinutes
  ...ItemTitle_item
  ...RenderItemCardDetails_item
  ...ItemCardActions_item
  ...OnCreateTaskItemRecordToCreateTaskFrom_item
  ...ItemCardContextMenu_item
}

fragment ItemTitle_item on Item {
  id
  title
  inboxPoints
}

fragment OnCreateItemItemRelatedToTask_task on Task {
  item {
    id
    inboxPoints
  }
}

fragment OnCreateItemTaskRecordToCreateItemFrom_task on Task {
  id
  date
  title
  itemId
  ...OnCreateItemItemRelatedToTask_task
}

fragment OnCreateTaskItemRecordToCreateTaskFrom_item on Item {
  id
  title
  inboxPoints
  listId
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

fragment TaskCardContextMenu_task on Task {
  id
  date
}

fragment TaskCardDurationButton_task on Task {
  id
  durationInMinutes
}

fragment TaskCardSubtask_task on Task {
  id
  title
  status
  date
}

fragment TaskCard_task on Task {
  id
  date
  title
  status
  completedAt
  subtasks {
    id
    ...TaskCardSubtask_task
  }
  ...RenderTaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
  ...TaskCardContextMenu_task
  ...CalendarListTaskCardDraggedIn_task
  ...OnCreateItemTaskRecordToCreateItemFrom_task
}

fragment TaskTitle_task on Task {
  id
  title
  date
  status
  durationInMinutes
  tags {
    id
  }
}
`}}}();S.hash="48dffd9ad344fe6af54c56add9efaa98";const M=()=>{v(S,{})},L=I,N=()=>{const n=k.useRef(A()),{queryRef:a,loadQuery:t}=R(L,{daysAfter:n.current.subtract(7,"day").format("YYYY-MM-DD"),firstDays:17,dayIdInFocus:`Day_${n.current.format("YYYY-MM-DD")}`});return k.useEffect(()=>{const s=setInterval(()=>{n.current=h().startOf("day"),t({daysAfter:n.current.subtract(7,"day").format("YYYY-MM-DD"),firstDays:17,dayIdInFocus:`Day_${n.current.format("YYYY-MM-DD")}`},{fetchPolicy:"store-and-network"})},36e5);return()=>clearInterval(s)},[]),a?c.jsx(Q,{queryRef:a}):null},Q=n=>{const a=F.usePreloadedQuery(L,n.queryRef);return M(),c.jsxs("div",{className:"flex h-screen w-[calc(100%-60px)] relative",children:[c.jsx(P,{data:a}),c.jsx(x,{data:a})]})};export{N as default};
