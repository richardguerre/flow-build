import{r as T,a as k,j as c,D as C,u as K,g as S,b as L,d as b,L as v}from"./index-DUr9sYyU.js";const p=function(){var n={defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"},a={defaultValue:null,kind:"LocalArgument",name:"daysAfter"},s={defaultValue:null,kind:"LocalArgument",name:"firstDays"},t=[{kind:"Variable",name:"after",variableName:"daysAfter"},{kind:"Variable",name:"first",variableName:"firstDays"}],l={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null};return{fragment:{argumentDefinitions:[n,a,s],kind:"Fragment",metadata:null,name:"IndexViewQuery",selections:[{args:t,kind:"FragmentSpread",name:"Days_data"},{args:[{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"Lists_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,s,n],kind:"Operation",name:"IndexViewQuery",selections:[{alias:null,args:t,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[i,e,l,o,r,d,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"subtasks",plural:!0,selections:[e,o,r,l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskTag",kind:"LinkedField",name:"tags",plural:!0,selections:[e],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null}],storageKey:null},e,i],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:t,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"},{alias:null,args:null,kind:"ScalarField",name:"canRefreshCalendarItems",storageKey:null},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[e,d],storageKey:null}],type:"Day",abstractKey:null},e],storageKey:null},{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"lists",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}]},params:{cacheID:"bf3d5fe76cd0f04de3c0935322324300",id:null,metadata:{},name:"IndexViewQuery",operationKind:"query",text:`query IndexViewQuery(
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
`}}}();p.hash="8f9fad5491adc069cff9c01f720ce21b";const _=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],a=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"}],s={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"DaysPaginationQuery",selections:[{args:a,kind:"FragmentSpread",name:"Days_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"DaysPaginationQuery",selections:[{alias:null,args:a,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[s,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[t,l,s,i,e,{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"subtasks",plural:!0,selections:[l,i,e,s],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TaskTag",kind:"LinkedField",name:"tags",plural:!0,selections:[l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null}],storageKey:null},l,t],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:a,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"}]},params:{cacheID:"53661029971270d553981c2b4a808716",id:null,metadata:{},name:"DaysPaginationQuery",operationKind:"query",text:`query DaysPaginationQuery(
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
`}}}();_.hash="fbd843c28cd0a042c12c1a070116d70d";const I=function(){var n=["days"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"bidirectional",path:n}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:{count:"last",cursor:"before"},path:n},fragmentPathInResult:[],operation:_}},name:"Days_data",selections:[{alias:"days",args:null,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"__Days_days_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();I.hash="fbd843c28cd0a042c12c1a070116d70d";const m=256,A=n=>{const{data:a,loadPrevious:s,loadNext:t}=T.usePaginationFragment(I,n.data),[l,i]=k.useState(null),[e,o]=k.useState(!1),r=k.useRef(null);return k.useEffect(()=>{var d;(d=r.current)==null||d.addEventListener("scroll",()=>{var y,f;const u=(y=r.current)==null?void 0:y.scrollLeft,g=(f=r.current)==null?void 0:f.scrollWidth;!u||!g||(u<=m?i(u):u>=g-window.screen.width-370-m*3&&o(!0))})},[r.current]),k.useEffect(()=>{l?s(7,{onComplete:()=>{var u;(u=r.current)==null||u.scrollTo({left:l+7*m,behavior:"auto"}),i(null)}}):e&&t(7,{onComplete:()=>o(!1)})},[l,e]),c.jsx("div",{ref:r,className:"no-scrollbar flex h-full overflow-x-scroll pr-3 pt-3",children:a.days.edges.map(d=>c.jsx(C,{day:d.node},d.cursor))})},F=function(){var n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a=[n],s={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},g=[n,{alias:null,args:null,filters:null,handle:"deleteRecord",key:"",kind:"ScalarHandle",name:"id"}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFlowNotiticationsSubscription",selections:[{alias:null,args:null,concreteType:"Notifications",kind:"LinkedField",name:"notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksUpdated",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"TaskCard_task"}],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksDeleted",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsUpdated",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"ItemCard_item"}],storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsDeleted",plural:!0,selections:a,storageKey:null}],storageKey:null}],type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useFlowNotiticationsSubscription",selections:[{alias:null,args:null,concreteType:"Notifications",kind:"LinkedField",name:"notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksUpdated",plural:!0,selections:[n,s,t,l,{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"subtasks",plural:!0,selections:[n,t,l,s],storageKey:null},i,{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[n,e,o,r],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[n,d,u],storageKey:null},{alias:null,args:null,concreteType:"TaskTag",kind:"LinkedField",name:"tags",plural:!0,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasksDeleted",plural:!0,selections:g,storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsUpdated",plural:!0,selections:[n,t,i,r,e,{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[d,u,n],storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:a,storageKey:null},o,{alias:null,args:null,kind:"ScalarField",name:"listId",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"itemsDeleted",plural:!0,selections:g,storageKey:null}],storageKey:null}]},params:{cacheID:"9d20860d042cf3f4c48eef5096be9195",id:null,metadata:{},name:"useFlowNotiticationsSubscription",operationKind:"subscription",text:`subscription useFlowNotiticationsSubscription {
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

fragment CalendarListTaskCardDraggedIn_task on Task {
  id
  durationInMinutes
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
`}}}();F.hash="df29f91c0b0a28d479f55a924d0a59da";const R=()=>{K(F,{})},D=p,P=()=>{const n=k.useRef(S()),{queryRef:a,loadQuery:s}=L(D,{daysAfter:n.current.subtract(7,"day").format("YYYY-MM-DD"),firstDays:17,dayIdInFocus:`Day_${n.current.format("YYYY-MM-DD")}`});return k.useEffect(()=>{const t=setInterval(()=>{n.current=b().startOf("day"),s({daysAfter:n.current.subtract(7,"day").format("YYYY-MM-DD"),firstDays:17,dayIdInFocus:`Day_${n.current.format("YYYY-MM-DD")}`},{fetchPolicy:"store-and-network"})},36e5);return()=>clearInterval(t)},[]),a?c.jsx(h,{queryRef:a}):null},h=n=>{const a=T.usePreloadedQuery(D,n.queryRef);return R(),c.jsxs("div",{className:"flex h-screen w-[calc(100%-60px)] relative",children:[c.jsx(A,{data:a}),c.jsx(v,{data:a})]})};export{P as default};
