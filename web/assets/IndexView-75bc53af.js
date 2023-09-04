import{r as D,a as u,j as y,D as T,d as k,u as L,b,L as v}from"./index-7daf0cae.js";const F=function(){var n={defaultValue:null,kind:"LocalArgument",name:"dateInFocus"},a={defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"},r={defaultValue:null,kind:"LocalArgument",name:"daysAfter"},i={defaultValue:null,kind:"LocalArgument",name:"firstDays"},e=[{kind:"Variable",name:"after",variableName:"daysAfter"},{kind:"Variable",name:"first",variableName:"firstDays"}],m={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},g=[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},l];return{fragment:{argumentDefinitions:[n,a,r,i],kind:"Fragment",metadata:null,name:"IndexViewQuery",selections:[{args:e,kind:"FragmentSpread",name:"Days_data"},{args:[{kind:"Variable",name:"dateInFocus",variableName:"dateInFocus"},{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"Lists_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[r,i,n,a],kind:"Operation",name:"IndexViewQuery",selections:[{alias:null,args:e,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[m,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[o,l,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},m,t,d,s,{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[c,l],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:g,storageKey:null}],storageKey:null},l,o],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:e,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"},{alias:"events",args:[{fields:[{kind:"Variable",name:"scheduledFor",variableName:"dateInFocus"}],kind:"ObjectValue",name:"where"}],concreteType:"QueryItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[l,t,c,s,{alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[o,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[l,d],storageKey:null}],type:"Day",abstractKey:null},l],storageKey:null},{alias:null,args:[{kind:"Literal",name:"orderBy",value:"inboxPoints_DESC"},{kind:"Literal",name:"where",value:{isRelevant:!0,minInboxPoints:1}}],concreteType:"QueryItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"isRelevant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null},t,s,c,{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:g,storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[l],storageKey:null}],storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"__id",storageKey:null}]}],storageKey:'items(orderBy:"inboxPoints_DESC",where:{"isRelevant":true,"minInboxPoints":1})'},{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"lists",plural:!0,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}]},params:{cacheID:"47bed576c917e429ad46cf29c98f5a67",id:null,metadata:{},name:"IndexViewQuery",operationKind:"query",text:`query IndexViewQuery(
  $daysAfter: ID
  $firstDays: Int
  $dateInFocus: Date!
  $dayIdInFocus: ID!
) {
  ...Days_data_4vQlYY
  ...Lists_data_2mdM5G
}

fragment CalendarList_data_2mdM5G on Query {
  events: items(where: {scheduledFor: $dateInFocus}) {
    edges {
      node {
        id
        title
        scheduledAt
        durationInMinutes
        isAllDay
        color
      }
    }
  }
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

fragment InboxList_data on Query {
  items(where: {isRelevant: true, minInboxPoints: 1}, orderBy: inboxPoints_DESC) {
    edges {
      node {
        id
        isRelevant
        inboxPoints
        ...ItemCard_item
      }
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
}

fragment ItemCardDetails_item on Item {
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

fragment ItemCard_item on Item {
  title
  durationInMinutes
  ...ItemTitle_item
  ...ItemCardDetails_item
  ...ItemCardActions_item
}

fragment ItemTitle_item on Item {
  id
  title
}

fragment Lists_data_2mdM5G on Query {
  ...CalendarList_data_2mdM5G
  ...InboxList_data
  lists {
    id
    name
  }
}

fragment TaskCardActions_task on Task {
  status
  id
  item {
    id
  }
  ...TaskCardDurationButton_task
}

fragment TaskCardDetails_task on Task {
  durationInMinutes
  item {
    scheduledAt
    id
  }
  pluginDatas {
    pluginSlug
    min
    id
  }
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
  ...TaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();F.hash="2dc9c7bed88d7491b0b5013b1c445294";const _=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],a=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"}],r={alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"DaysPaginationQuery",selections:[{args:a,kind:"FragmentSpread",name:"Days_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"DaysPaginationQuery",selections:[{alias:null,args:a,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[r,{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[i,e,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},e],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},e],storageKey:null}],storageKey:null},e,i],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:a,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"}]},params:{cacheID:"63ad1f362fcefc04cefc9560bf77e4fd",id:null,metadata:{},name:"DaysPaginationQuery",operationKind:"query",text:`query DaysPaginationQuery(
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

fragment TaskCardActions_task on Task {
  status
  id
  item {
    id
  }
  ...TaskCardDurationButton_task
}

fragment TaskCardDetails_task on Task {
  durationInMinutes
  item {
    scheduledAt
    id
  }
  pluginDatas {
    pluginSlug
    min
    id
  }
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
  ...TaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();_.hash="fbd843c28cd0a042c12c1a070116d70d";const I=function(){var n=["days"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"bidirectional",path:n}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:{count:"last",cursor:"before"},path:n},fragmentPathInResult:[],operation:_}},name:"Days_data",selections:[{alias:"days",args:null,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"__Days_days_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();I.hash="fbd843c28cd0a042c12c1a070116d70d";const f=256,S=n=>{const{data:a,loadPrevious:r,loadNext:i}=D.usePaginationFragment(I,n.data),[e,m]=u.useState(null),[o,l]=u.useState(!1),t=u.useRef(null);return u.useEffect(()=>{var d;(d=t.current)==null||d.addEventListener("scroll",()=>{var g,p;const s=(g=t.current)==null?void 0:g.scrollLeft,c=(p=t.current)==null?void 0:p.scrollWidth;!s||!c||(s<=f?m(s):s>=c-window.screen.width-370-f*3&&l(!0))})},[t.current]),u.useEffect(()=>{e?r(7,{onComplete:()=>{var s;(s=t.current)==null||s.scrollTo({left:e+7*f,behavior:"auto"}),m(null)}}):o&&i(7,{onComplete:()=>l(!1)})},[e,o]),y("div",{ref:t,className:"no-scrollbar flex h-full overflow-x-scroll pr-3 pt-3",children:a.days.edges.map(d=>y("div",{className:"flex-1",children:y(T,{day:d.node})},d.cursor))})},K=F,A=()=>{const n=u.useRef(k()),{queryRef:a,loadQuery:r}=L(K,{daysAfter:n.current.subtract(7,"day").format("YYYY-MM-DD"),firstDays:17,dateInFocus:n.current.format("YYYY-MM-DD"),dayIdInFocus:`Day_${n.current.format("YYYY-MM-DD")}`});return u.useEffect(()=>{const i=setInterval(()=>{n.current.startOf("day").add(1,"day").add(4,"hours").isAfter(k())||(n.current=k(),r({daysAfter:n.current.subtract(7,"day").format("YYYY-MM-DD"),firstDays:17,dateInFocus:n.current.format("YYYY-MM-DD"),dayIdInFocus:`Day_${n.current.format("YYYY-MM-DD")}`},{fetchPolicy:"store-and-network"}))},36e5);return()=>clearInterval(i)},[]),a?y(h,{queryRef:a}):null},h=n=>{const a=D.usePreloadedQuery(K,n.queryRef);return b("div",{className:"flex h-screen w-[calc(100%-60px)]",children:[y(S,{data:a}),y(v,{data:a})]})};export{A as default};
