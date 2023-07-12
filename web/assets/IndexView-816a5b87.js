import{r as p,a as y,j as u,b as T}from"./index-4b77959e.js";import{D as S,d as I,u as L,L as b}from"./Lists-f264c4ab.js";const F=function(){var a={defaultValue:null,kind:"LocalArgument",name:"dateInFocus"},n={defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"},e={defaultValue:null,kind:"LocalArgument",name:"daysAfter"},i={defaultValue:null,kind:"LocalArgument",name:"firstDays"},d=[{kind:"Variable",name:"after",variableName:"daysAfter"},{kind:"Variable",name:"first",variableName:"firstDays"}],l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[a,n,e,i],kind:"Fragment",metadata:null,name:"IndexViewQuery",selections:[{args:d,kind:"FragmentSpread",name:"Days_data"},{args:[{kind:"Variable",name:"dateInFocus",variableName:"dateInFocus"},{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"Lists_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,i,a,n],kind:"Operation",name:"IndexViewQuery",selections:[{alias:null,args:d,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},o,c,t,{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[r,l],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null}],storageKey:null},l,s],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:d,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"},{alias:"events",args:[{fields:[{kind:"Literal",name:"isRelevant",value:!0},{kind:"Variable",name:"scheduledFor",variableName:"dateInFocus"}],kind:"ObjectValue",name:"where"}],concreteType:"QueryItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[l,o,r,c,{alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[s,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[l,t],storageKey:null}],type:"Day",abstractKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"lists",plural:!0,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}]},params:{cacheID:"8d11922ea43f8fdd1caf7246fd6fb7d2",id:null,metadata:{},name:"IndexViewQuery",operationKind:"query",text:`query IndexViewQuery(
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

fragment Lists_data_2mdM5G on Query {
  ...CalendarList_data_2mdM5G
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
`}}}();F.hash="2dc9c7bed88d7491b0b5013b1c445294";const D=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],n=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"DaysPaginationQuery",selections:[{args:n,kind:"FragmentSpread",name:"Days_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"DaysPaginationQuery",selections:[{alias:null,args:n,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},e],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},e],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null}],storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:n,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"}]},params:{cacheID:"b21e88d749c3ccc461a2a59b4a75b0ad",id:null,metadata:{},name:"DaysPaginationQuery",operationKind:"query",text:`query DaysPaginationQuery(
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
`}}}();D.hash="fbd843c28cd0a042c12c1a070116d70d";const K=function(){var a=["days"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"bidirectional",path:a}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:{count:"last",cursor:"before"},path:a},fragmentPathInResult:[],operation:D}},name:"Days_data",selections:[{alias:"days",args:null,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"__Days_days_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();K.hash="fbd843c28cd0a042c12c1a070116d70d";const g=256,v=a=>{const{data:n,loadPrevious:e,loadNext:i}=p.usePaginationFragment(K,a.data),[d,l]=y.useState(null),[o,c]=y.useState(!1),t=y.useRef(null);return y.useEffect(()=>{var r;(r=t.current)==null||r.addEventListener("scroll",()=>{var k,f;const s=(k=t.current)==null?void 0:k.scrollLeft,m=(f=t.current)==null?void 0:f.scrollWidth;!s||!m||(s<=g?l(s):s>=m-window.screen.width-370-g*3&&c(!0))})},[t.current]),y.useEffect(()=>{d?e(7,{onComplete:()=>{var s;(s=t.current)==null||s.scrollTo({left:d+7*g,behavior:"auto"}),l(null)}}):o&&i(7,{onComplete:()=>c(!1)})},[d,o]),u("div",{ref:t,className:"flex h-full overflow-x-scroll pr-3 pt-3",children:n.days.edges.map(r=>u("div",{className:"flex-1",children:u(S,{day:r.node})},r.cursor))})},_=F,P=()=>{const a=new Date;a.setDate(a.getDate()-7);const n=a.toISOString().split("T")[0],e=I().format("YYYY-MM-DD"),{queryRef:i}=L(_,{daysAfter:n,firstDays:17,dateInFocus:e,dayIdInFocus:`Day_${e}`});return i?u(A,{queryRef:i}):null},A=a=>{const n=p.usePreloadedQuery(_,a.queryRef);return T("div",{className:"flex h-screen",children:[u(v,{data:n}),u(b,{data:n})]})};export{P as default};
