import{r as p,a as g,j as c,D as I,d as T,u as S,b as L,L as b}from"./index-c866acf4.js";const F=function(){var n={defaultValue:null,kind:"LocalArgument",name:"dateInFocus"},a={defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"},t={defaultValue:null,kind:"LocalArgument",name:"daysAfter"},l={defaultValue:null,kind:"LocalArgument",name:"firstDays"},d=[{kind:"Variable",name:"after",variableName:"daysAfter"},{kind:"Variable",name:"first",variableName:"firstDays"}],u={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},y=[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},e];return{fragment:{argumentDefinitions:[n,a,t,l],kind:"Fragment",metadata:null,name:"IndexViewQuery",selections:[{args:d,kind:"FragmentSpread",name:"Days_data"},{args:[{kind:"Variable",name:"dateInFocus",variableName:"dateInFocus"},{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"Lists_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[t,l,n,a],kind:"Operation",name:"IndexViewQuery",selections:[{alias:null,args:d,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[u,e,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},o,r,i,{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[s,e],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:y,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null}],storageKey:null},e,u],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:d,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"},{alias:"events",args:[{fields:[{kind:"Literal",name:"isRelevant",value:!0},{kind:"Variable",name:"scheduledFor",variableName:"dateInFocus"}],kind:"ObjectValue",name:"where"}],concreteType:"QueryItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[e,o,s,r,{alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[u,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[e,i],storageKey:null}],type:"Day",abstractKey:null},e],storageKey:null},{alias:null,args:[{kind:"Literal",name:"orderBy",value:"inboxPoints_DESC"},{kind:"Literal",name:"where",value:{isRelevant:!0,minInboxPoints:1}}],concreteType:"QueryItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[e,o,r,s,{alias:null,args:null,kind:"ScalarField",name:"inboxPoints",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[e],storageKey:null},{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:y,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'items(orderBy:"inboxPoints_DESC",where:{"isRelevant":true,"minInboxPoints":1})'},{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"lists",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}]},params:{cacheID:"c91bce61b1bd168dc80d53a7a672b2ca",id:null,metadata:{},name:"IndexViewQuery",operationKind:"query",text:`query IndexViewQuery(
  $daysAfter: ID
  $firstDays: Int
  $dateInFocus: Date!
  $dayIdInFocus: ID!
) {
  ...Days_data_4vQlYY
  ...Lists_data_2mdM5G
}

fragment CalendarList_data_2mdM5G on Query {
  events: items(where: {isRelevant: true, scheduledFor: $dateInFocus}) {
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
  tasks {
    id
  }
}

fragment ItemCard_item on Item {
  title
  durationInMinutes
  ...ItemCardDetails_item
  ...ItemCardActions_item
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
  canBeSuperdone
  id
}

fragment TaskCardDetails_task on Task {
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

fragment TaskCard_task on Task {
  title
  durationInMinutes
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
`}}}();F.hash="2dc9c7bed88d7491b0b5013b1c445294";const D=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],a=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"}],t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"DaysPaginationQuery",selections:[{args:a,kind:"FragmentSpread",name:"Days_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"DaysPaginationQuery",selections:[{alias:null,args:a,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[t,l,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null}],storageKey:null},l,t],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:a,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"}]},params:{cacheID:"fd0b1f4489314e8374e12d1fb834f1de",id:null,metadata:{},name:"DaysPaginationQuery",operationKind:"query",text:`query DaysPaginationQuery(
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
  canBeSuperdone
  id
}

fragment TaskCardDetails_task on Task {
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

fragment TaskCard_task on Task {
  title
  durationInMinutes
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
`}}}();D.hash="fbd843c28cd0a042c12c1a070116d70d";const _=function(){var n=["days"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"bidirectional",path:n}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:{count:"last",cursor:"before"},path:n},fragmentPathInResult:[],operation:D}},name:"Days_data",selections:[{alias:"days",args:null,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"__Days_days_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();_.hash="fbd843c28cd0a042c12c1a070116d70d";const m=256,v=n=>{const{data:a,loadPrevious:t,loadNext:l}=p.usePaginationFragment(_,n.data),[d,u]=g.useState(null),[e,o]=g.useState(!1),r=g.useRef(null);return g.useEffect(()=>{var i;(i=r.current)==null||i.addEventListener("scroll",()=>{var k,f;const s=(k=r.current)==null?void 0:k.scrollLeft,y=(f=r.current)==null?void 0:f.scrollWidth;!s||!y||(s<=m?u(s):s>=y-window.screen.width-370-m*3&&o(!0))})},[r.current]),g.useEffect(()=>{d?t(7,{onComplete:()=>{var s;(s=r.current)==null||s.scrollTo({left:d+7*m,behavior:"auto"}),u(null)}}):e&&l(7,{onComplete:()=>o(!1)})},[d,e]),c("div",{ref:r,className:"flex h-full overflow-x-scroll pr-3 pt-3",children:a.days.edges.map(i=>c("div",{className:"flex-1",children:c(I,{day:i.node})},i.cursor))})},K=F,A=()=>{const n=new Date;n.setDate(n.getDate()-7);const a=n.toISOString().split("T")[0],t=T().format("YYYY-MM-DD"),{queryRef:l}=S(K,{daysAfter:a,firstDays:17,dateInFocus:t,dayIdInFocus:`Day_${t}`});return l?c(C,{queryRef:l}):null},C=n=>{const a=p.usePreloadedQuery(K,n.queryRef);return L("div",{className:"flex h-screen w-[calc(100%-60px)]",children:[c(v,{data:a}),c(b,{data:a})]})};export{A as default};
