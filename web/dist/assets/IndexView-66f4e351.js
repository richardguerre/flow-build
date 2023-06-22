import{r as R,a as v,j as p,b as w,g as De,R as Le}from"./index-d7cdbe8c.js";import{D as Ke,u as re,I as Ae,d as ie}from"./ItemCard-5133f8f7.js";const de=function(){var e={defaultValue:null,kind:"LocalArgument",name:"dateInFocus"},n={defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"},l={defaultValue:null,kind:"LocalArgument",name:"daysAfter"},u={defaultValue:null,kind:"LocalArgument",name:"firstDays"},c=[{kind:"Variable",name:"after",variableName:"daysAfter"},{kind:"Variable",name:"first",variableName:"firstDays"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[e,n,l,u],kind:"Fragment",metadata:null,name:"IndexViewQuery",selections:[{args:c,kind:"FragmentSpread",name:"Days_data"},{args:[{kind:"Variable",name:"dateInFocus",variableName:"dateInFocus"},{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"Lists_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[l,u,e,n],kind:"Operation",name:"IndexViewQuery",selections:[{alias:null,args:c,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},k,b,{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[s,d],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},d],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null}],storageKey:null},d,f],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:c,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"},{alias:"events",args:[{fields:[{kind:"Literal",name:"isRelevant",value:!0},{kind:"Variable",name:"scheduledFor",variableName:"dateInFocus"}],kind:"ObjectValue",name:"where"}],concreteType:"QueryItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[d,k,s,b,{alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[f,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null}],storageKey:null}],type:"Day",abstractKey:null},d],storageKey:null},{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"lists",plural:!0,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}]},params:{cacheID:"f6607fee126ed492da0052115544b74c",id:null,metadata:{},name:"IndexViewQuery",operationKind:"query",text:`query IndexViewQuery(
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
  ...TaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();de.hash="2dc9c7bed88d7491b0b5013b1c445294";const ue=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],n=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"}],l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"DaysPaginationQuery",selections:[{args:n,kind:"FragmentSpread",name:"Days_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"DaysPaginationQuery",selections:[{alias:null,args:n,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"days",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"date",storageKey:null},{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"item",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"TaskPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"canBeSuperdone",storageKey:null}],storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:n,filters:null,handle:"connection",key:"Days_days",kind:"LinkedHandle",name:"days"}]},params:{cacheID:"4d9797a34467053847b8671a92177baf",id:null,metadata:{},name:"DaysPaginationQuery",operationKind:"query",text:`query DaysPaginationQuery(
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
  ...TaskCardDetails_task
  ...TaskCardActions_task
  ...TaskTitle_task
}

fragment TaskTitle_task on Task {
  id
  title
}
`}}}();ue.hash="fbd843c28cd0a042c12c1a070116d70d";const oe=function(){var e=["days"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"before"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"last"}],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"bidirectional",path:e}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:{count:"last",cursor:"before"},path:e},fragmentPathInResult:[],operation:ue}},name:"Days_data",selections:[{alias:"days",args:null,concreteType:"QueryDaysConnection",kind:"LinkedField",name:"__Days_days_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryDaysConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Day",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Day_day"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();oe.hash="fbd843c28cd0a042c12c1a070116d70d";const U=256,we=e=>{const{data:n,loadPrevious:l,loadNext:u}=R.usePaginationFragment(oe,e.data),[c,d]=v.useState(null),[k,b]=v.useState(!1),s=v.useRef(null);return v.useEffect(()=>{var f;(f=s.current)==null||f.addEventListener("scroll",()=>{var o,S;const g=(o=s.current)==null?void 0:o.scrollLeft,A=(S=s.current)==null?void 0:S.scrollWidth;!g||!A||(g<=U?d(g):g>=A-window.screen.width-370-U*3&&b(!0))})},[s.current]),v.useEffect(()=>{c?l(7,{onComplete:()=>{var g;(g=s.current)==null||g.scrollTo({left:c+7*U,behavior:"auto"}),d(null)}}):k&&u(7,{onComplete:()=>b(!1)})},[c,k]),p("div",{ref:s,className:"flex h-full overflow-x-scroll pr-3 pt-3",children:n.days.edges.map(f=>p("div",{className:"flex-1",children:p(Ke,{day:f.node})},f.cursor))})},ce={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"dateInFocus"},{defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"}],kind:"Fragment",metadata:null,name:"Lists_data",selections:[{args:[{kind:"Variable",name:"dateInFocus",variableName:"dateInFocus"},{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"CalendarList_data"},{alias:null,args:null,concreteType:"List",kind:"LinkedField",name:"lists",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],type:"Query",abstractKey:null};ce.hash="2cf0c7382c707d124a9aaf0dab4290d5";const fe=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"listId"}],n=[{kind:"Variable",name:"id",variableName:"listId"}],l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{kind:"Literal",name:"where",value:{isRelevant:!0}}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ListQuery",selections:[{alias:"list",args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[l,{args:null,kind:"FragmentSpread",name:"ListItems_list"}],type:"List",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ListQuery",selections:[{alias:"list",args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[u,c,{kind:"InlineFragment",selections:[l,{alias:null,args:d,concreteType:"ListItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"ListItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},c,{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},c],storageKey:null},u],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:'items(where:{"isRelevant":true})'},{alias:null,args:d,filters:["where"],handle:"connection",key:"ListItems_items",kind:"LinkedHandle",name:"items"}],type:"List",abstractKey:null}],storageKey:null}]},params:{cacheID:"9efb75329f92438f09f3a128bed1333c",id:null,metadata:{},name:"ListQuery",operationKind:"query",text:`query ListQuery(
  $listId: ID!
) {
  list: node(id: $listId) {
    __typename
    ... on List {
      name
      ...ListItems_list
    }
    id
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
}

fragment ItemCard_item on Item {
  title
  durationInMinutes
  ...ItemCardDetails_item
  ...ItemCardActions_item
}

fragment ListItems_list on List {
  name
  items(where: {isRelevant: true}) {
    edges {
      cursor
      node {
        title
        ...ItemCard_item
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}
`}}}();fe.hash="bf89e66f30591da69ca0dd3a8e0f6910";const ge=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"id"}],n=[{kind:"Variable",name:"id",variableName:"id"}],l={kind:"Variable",name:"after",variableName:"after"},u={kind:"Variable",name:"first",variableName:"first"},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k=[l,u,{kind:"Literal",name:"where",value:{isRelevant:!0}}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ListItemsPaginationQuery",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[l,u],kind:"FragmentSpread",name:"ListItems_list"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ListItemsPaginationQuery",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:k,concreteType:"ListItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"ListItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},d,{alias:null,args:null,concreteType:"ItemPluginData",kind:"LinkedField",name:"pluginDatas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},d],storageKey:null},c],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:k,filters:["where"],handle:"connection",key:"ListItems_items",kind:"LinkedHandle",name:"items"}],type:"List",abstractKey:null}],storageKey:null}]},params:{cacheID:"8358c87ed8ba2ac00c1a62cf47df4564",id:null,metadata:{},name:"ListItemsPaginationQuery",operationKind:"query",text:`query ListItemsPaginationQuery(
  $after: ID
  $first: Int
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...ListItems_list_2HEEH6
    id
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
}

fragment ItemCard_item on Item {
  title
  durationInMinutes
  ...ItemCardDetails_item
  ...ItemCardActions_item
}

fragment ListItems_list_2HEEH6 on List {
  name
  items(first: $first, after: $after, where: {isRelevant: true}) {
    edges {
      cursor
      node {
        title
        ...ItemCard_item
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}
`}}}();ge.hash="11650c8da4ca930fb7cc141e4c9690a7";const me=function(){var e=["items"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"after"},{defaultValue:null,kind:"LocalArgument",name:"first"}],kind:"Fragment",metadata:{connection:[{count:"first",cursor:"after",direction:"forward",path:e}],refetch:{connection:{forward:{count:"first",cursor:"after"},backward:null,path:e},fragmentPathInResult:["node"],operation:ge,identifierField:"id"}},name:"ListItems_list",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"items",args:[{kind:"Literal",name:"where",value:{isRelevant:!0}}],concreteType:"ListItemsConnection",kind:"LinkedField",name:"__ListItems_items_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"ListItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{args:null,kind:"FragmentSpread",name:"ItemCard_item"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:'__ListItems_items_connection(where:{"isRelevant":true})'},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"List",abstractKey:null}}();me.hash="11650c8da4ca930fb7cc141e4c9690a7";const ye=fe,Ce=e=>{const{queryRef:n,loadQuery:l}=re(ye,{listId:e.listId},{fetchPolicy:"store-and-network"});return v.useEffect(()=>{l({listId:e.listId})},[e.listId]),n?p(Te,{queryRef:n}):null},Te=e=>{const n=R.usePreloadedQuery(ye,e.queryRef);return n.list?w("div",{className:"flex items-center space-x-2",children:[p("div",{className:"text-sm",children:n.list.name}),p(Pe,{list:n.list})]}):p("div",{children:"No list found. Try refreshing the page or toggling to another list and back."})},Pe=e=>{const{data:n}=R.usePaginationFragment(me,e.list);return p("div",{className:"flex-1",children:n.items.edges.map(l=>p(Ae,{item:l.node},l.cursor))})},ke=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"dateInFocus"},{defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"CalendarListQuery",selections:[{args:[{kind:"Variable",name:"dateInFocus",variableName:"dateInFocus"},{kind:"Variable",name:"dayIdInFocus",variableName:"dayIdInFocus"}],kind:"FragmentSpread",name:"CalendarList_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"CalendarListQuery",selections:[{alias:"events",args:[{fields:[{kind:"Literal",name:"isRelevant",value:!0},{kind:"Variable",name:"scheduledFor",variableName:"dateInFocus"}],kind:"ObjectValue",name:"where"}],concreteType:"QueryItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null}],storageKey:null}],type:"Day",abstractKey:null},n],storageKey:null}]},params:{cacheID:"daf63449bbe3f9ef1424fa74bad00552",id:null,metadata:{},name:"CalendarListQuery",operationKind:"query",text:`query CalendarListQuery(
  $dateInFocus: Date!
  $dayIdInFocus: ID!
) {
  ...CalendarList_data_2mdM5G
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
`}}}();ke.hash="0ad5b8661b2e7fa8b40063b2f5c9a794";const pe=function(){var e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"dateInFocus"},{defaultValue:null,kind:"LocalArgument",name:"dayIdInFocus"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:[],operation:ke}},name:"CalendarList_data",selections:[{alias:"events",args:[{fields:[{kind:"Literal",name:"isRelevant",value:!0},{kind:"Variable",name:"scheduledFor",variableName:"dateInFocus"}],kind:"ObjectValue",name:"where"}],concreteType:"QueryItemsConnection",kind:"LinkedField",name:"items",plural:!1,selections:[{alias:null,args:null,concreteType:"QueryItemsConnectionEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Item",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scheduledAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"durationInMinutes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isAllDay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:"day",args:[{kind:"Variable",name:"id",variableName:"dayIdInFocus"}],concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Task",kind:"LinkedField",name:"tasks",plural:!0,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"completedAt",storageKey:null}],storageKey:null}],type:"Day",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();pe.hash="0ad5b8661b2e7fa8b40063b2f5c9a794";var be={},he={},X={exports:{}},h=String,Fe=function(){return{isColorSupported:!1,reset:h,bold:h,dim:h,italic:h,underline:h,inverse:h,hidden:h,strikethrough:h,black:h,red:h,green:h,yellow:h,blue:h,magenta:h,cyan:h,white:h,gray:h,bgBlack:h,bgRed:h,bgGreen:h,bgYellow:h,bgBlue:h,bgMagenta:h,bgCyan:h,bgWhite:h}};X.exports=Fe();X.exports.createColors=Fe;var Ee=X.exports;(function(e){Object.defineProperty(e,"__esModule",{value:!0});function n(s,f){for(var g in f)Object.defineProperty(s,g,{enumerable:!0,get:f[g]})}n(e,{dim:function(){return k},default:function(){return b}});const l=u(Ee);function u(s){return s&&s.__esModule?s:{default:s}}let c=new Set;function d(s,f,g){typeof process<"u"&&{}.JEST_WORKER_ID||g&&c.has(g)||(g&&c.add(g),console.warn(""),f.forEach(A=>console.warn(s,"-",A)))}function k(s){return l.default.dim(s)}const b={info(s,f){d(l.default.bold(l.default.cyan("info")),...Array.isArray(s)?[s]:[f,s])},warn(s,f){d(l.default.bold(l.default.yellow("warn")),...Array.isArray(s)?[s]:[f,s])},risk(s,f){d(l.default.bold(l.default.magenta("risk")),...Array.isArray(s)?[s]:[f,s])}}})(he);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});const n=l(he);function l(d){return d&&d.__esModule?d:{default:d}}function u({version:d,from:k,to:b}){n.default.warn(`${k}-color-renamed`,[`As of Tailwind CSS ${d}, \`${k}\` has been renamed to \`${b}\`.`,"Update your configuration file to silence this warning."])}const c={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},get lightBlue(){return u({version:"v2.2",from:"lightBlue",to:"sky"}),this.sky},get warmGray(){return u({version:"v3.0",from:"warmGray",to:"stone"}),this.stone},get trueGray(){return u({version:"v3.0",from:"trueGray",to:"neutral"}),this.neutral},get coolGray(){return u({version:"v3.0",from:"coolGray",to:"gray"}),this.gray},get blueGray(){return u({version:"v3.0",from:"blueGray",to:"slate"}),this.slate}}})(be);let G=be;var Ve=(G.__esModule?G:{default:G}).default;const M=De(Ve),Me=e=>{var A;const n=e.startHour??0,l=e.heightOf1Hour??96,u=Array.from({length:25}).map((o,S)=>(S+n)%24),c=v.useRef(null),[d,k]=v.useState(new Date);v.useEffect(()=>{const o=setInterval(()=>{k(new Date)},6e4);return()=>clearInterval(o)},[]);const{events:b,allDayEvents:s,yOffset:f}=v.useMemo(()=>{const o=e.events.reduce((T,_)=>{if("isAllDay"in _)return{eventsMap:T.eventsMap,allDayEvents:[...T.allDayEvents,_]};const x=Array.from(T.eventsMap.values()).filter(K=>K===_?!1:K.scheduledAt<=_.scheduledAt&&K.end>_.scheduledAt||K.scheduledAt<K.end&&K.end>=K.end),P=x[x.length-1],E=new Date(_.scheduledAt);return E.setMinutes(E.getMinutes()+_.durationInMinutes),{eventsMap:T.eventsMap.set(_.id,{..._,end:E,height:_.durationInMinutes/60*l,widthPercentage:P?P.widthPercentage*.75:100}),allDayEvents:T.allDayEvents}},{eventsMap:new Map,allDayEvents:new Array}),S=30*o.allDayEvents.length+4;return{events:Array.from(o.eventsMap.values()),allDayEvents:o.allDayEvents,yOffset:S}},[JSON.stringify(e.events)]),g=v.useCallback(o=>((o.getHours()+24-n)%24+o.getMinutes()/60)*l+f,[]);return w("div",{className:"flex gap-1",children:[p("div",{className:"flex flex-col",style:{marginTop:f},children:u.map((o,S)=>p("div",{className:"relative w-[4ch]",style:{height:l},children:w("span",{className:"text-foreground-700 absolute left-0 top-0 -translate-y-1/2 transform text-xs",children:[j(o),":00"]})},S))}),w("div",{className:"relative w-full",children:[p("div",{className:"mb-1",children:s.map(o=>p("div",{className:"border-background-50 overflow-hidden overflow-ellipsis whitespace-nowrap rounded-md border px-2 py-1 text-sm",style:{color:o.textColor??M.blue[900],backgroundColor:o.backgroundColor??M.blue[100]},children:o.title},o.id))}),p("div",{className:"w-full flex-col",children:u.map((o,S)=>p("div",{className:"border-background-300 border-0 border-l border-t",style:{height:l}},S))}),p("div",{ref:c,className:"absolute z-20 h-[2px] w-full bg-[#ef4444]",style:{top:g(d)}}),(A=e.artifacts)==null?void 0:A.map(o=>p("div",{className:"absolute z-10",style:{top:g(o.at),left:`${o.leftPercentageOffset??0}%`},children:o.element},o.id)),b.map(o=>w("div",{className:`absolute overflow-hidden rounded-md border border-white p-2 ${o.height<ee?"py-0":""}`,style:{top:g(o.scheduledAt),height:o.height,color:o.textColor??M.blue[900],backgroundColor:o.backgroundColor??M.blue[100],width:`calc(${o.widthPercentage}% - 2%)`,left:`calc(${100-o.widthPercentage}% + 2%)`},onClick:()=>{var S;return(S=e.onEventClick)==null?void 0:S.call(e,o)},children:[p("div",{className:`w-full overflow-hidden overflow-ellipsis whitespace-nowrap ${o.height<ee?"text-sm":"text-base"}`,children:o.title}),w("div",{className:"text-sm",children:[o.scheduledAt.getHours(),":",j(o.scheduledAt.getMinutes())," -"," ",o.end.getHours(),":",j(o.end.getMinutes())]})]},o.id))]})]})},ee=32,j=(e,n=2)=>e.toLocaleString("en-US",{minimumIntegerDigits:n});let Re=0;function xe(e,n){const l=`atom${++Re}`,u={toString:()=>l};return typeof e=="function"?u.read=e:(u.init=e,u.read=c=>c(u),u.write=(c,d,k)=>d(u,typeof k=="function"?k(c(u)):k)),n&&(u.write=n),u}const Y=e=>"init"in e,z=e=>!!e.write,q=new WeakMap,Ne=(e,n)=>{q.set(e,n),e.catch(()=>{}).finally(()=>q.delete(e))},ne=(e,n)=>{const l=q.get(e);l&&(q.delete(e),l(n))},ae=(e,n)=>{e.status="fulfilled",e.value=n},le=(e,n)=>{e.status="rejected",e.reason=n},$=(e,n)=>"v"in e&&"v"in n&&Object.is(e.v,n.v),te=(e,n)=>"e"in e&&"e"in n&&Object.is(e.e,n.e),W=e=>"v"in e&&e.v instanceof Promise,B=e=>{if("e"in e)throw e.e;return e.v},Qe=()=>{const e=new WeakMap,n=new WeakMap,l=new Map;let u,c;({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&(u=new Set,c=new Set);const d=a=>e.get(a),k=(a,t)=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&Object.freeze(t);const r=e.get(a);if(e.set(a,t),l.has(a)||l.set(a,r),r&&W(r)){const i="v"in t?t.v instanceof Promise?t.v:Promise.resolve(t.v):Promise.reject(t.e);ne(r.v,i)}},b=(a,t,r)=>{const i=new Map;let m=!1;r.forEach(y=>{const F=y===a?t:d(y);F?(i.set(y,F),t.d.get(y)!==F&&(m=!0)):({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[Bug] atom state not found")}),(m||t.d.size!==i.size)&&(t.d=i)},s=(a,t,r)=>{const i=d(a),m={d:(i==null?void 0:i.d)||new Map,v:t};return r&&b(a,m,r),i&&$(i,m)&&i.d===m.d?i:(k(a,m),m)},f=(a,t,r)=>{const i=d(a),m={d:(i==null?void 0:i.d)||new Map,e:t};return r&&b(a,m,r),i&&te(i,m)&&i.d===m.d?i:(k(a,m),m)},g=a=>{const t=d(a);if(t&&(t.d.forEach((I,D)=>{D!==a&&!n.has(D)&&g(D)}),Array.from(t.d).every(([I,D])=>I===a||d(I)===D)))return t;const r=new Set;let i=!0;const m=I=>{if(r.add(I),I===a){const L=d(I);if(L)return B(L);if(Y(I))return I.init;throw new Error("no atom init")}const D=g(I);return B(D)};let y,F;const O={get signal(){return y||(y=new AbortController),y.signal},get setSelf(){return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!z(a)&&console.warn("setSelf function cannot be used with read-only atom"),!F&&z(a)&&(F=(...I)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&i&&console.warn("setSelf function cannot be called in sync"),!i)return P(a,...I)}),F}};try{const I=a.read(m,O);if(I instanceof Promise){let D;const L=new Promise((N,_e)=>{let V=!1;I.then(C=>{V||(ae(L,C),N(C))},C=>{V||(le(L,C),_e(C))}).finally(()=>{V||(V=!0,s(a,L,r))}),D=C=>{V||(V=!0,C.then(H=>ae(L,H),H=>le(L,H)),N(C))}});return L.status="pending",Ne(L,N=>{N&&D(N),y==null||y.abort()}),s(a,L,r)}return s(a,I,r)}catch(I){return f(a,I,r)}finally{i=!1}},A=a=>B(g(a)),o=a=>{let t=n.get(a);return t||(t=E(a)),t},S=(a,t)=>!t.l.size&&(!t.t.size||t.t.size===1&&t.t.has(a)),T=a=>{const t=n.get(a);t&&S(a,t)&&K(a)},_=a=>{const t=n.get(a);t==null||t.t.forEach(r=>{if(r!==a){const i=d(r),m=g(r);(!i||!$(i,m))&&_(r)}})},x=(a,...t)=>{let r=!0;const i=F=>B(g(F)),m=(F,...O)=>{let I;if(F===a){if(!Y(F))throw new Error("atom not writable");const D=d(F),L=s(F,O[0]);(!D||!$(D,L))&&_(F)}else I=x(F,...O);return r||Q(),I},y=a.write(i,m,...t);return r=!1,y},P=(a,...t)=>{const r=x(a,...t);return Q(),r},E=(a,t)=>{const r={t:new Set(t&&[t]),l:new Set};if(n.set(a,r),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&c.add(a),g(a).d.forEach((i,m)=>{const y=n.get(m);y?y.t.add(a):m!==a&&E(m,a)}),g(a),z(a)&&a.onMount){const i=a.onMount((...m)=>P(a,...m));i&&(r.u=i)}return r},K=a=>{var t;const r=(t=n.get(a))==null?void 0:t.u;r&&r(),n.delete(a),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&c.delete(a);const i=d(a);i?(W(i)&&ne(i.v),i.d.forEach((m,y)=>{if(y!==a){const F=n.get(y);F&&(F.t.delete(a),S(y,F)&&K(y))}})):({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[Bug] could not find atom state to unmount",a)},Se=(a,t,r)=>{const i=new Set(t.d.keys());r==null||r.forEach((m,y)=>{if(i.has(y)){i.delete(y);return}const F=n.get(y);F&&(F.t.delete(a),S(y,F)&&K(y))}),i.forEach(m=>{const y=n.get(m);y?y.t.add(a):n.has(a)&&E(m,a)})},Q=()=>{for(;l.size;){const a=Array.from(l);l.clear(),a.forEach(([t,r])=>{const i=d(t);if(i){i.d!==(r==null?void 0:r.d)&&Se(t,i,r==null?void 0:r.d);const m=n.get(t);m&&!(r&&!W(r)&&($(r,i)||te(r,i)))&&m.l.forEach(y=>y())}else({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[Bug] no atom state to flush")})}({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&u.forEach(a=>a())},Z=(a,t)=>{const r=o(a);Q();const i=r.l;return i.add(t),()=>{i.delete(t),T(a)}};return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"?{get:A,set:P,sub:Z,dev_subscribe_state:a=>(u.add(a),()=>{u.delete(a)}),dev_get_mounted_atoms:()=>c.values(),dev_get_atom_state:a=>e.get(a),dev_get_mounted:a=>n.get(a),dev_restore_atoms:a=>{for(const[t,r]of a)Y(t)&&(s(t,r),_(t));Q()}}:{get:A,set:P,sub:Z}};let J;const Oe=()=>(J||(J=Qe()),J),$e=v.createContext(void 0),Ie=e=>{const n=v.useContext($e);return(e==null?void 0:e.store)||n||Oe()},Be=e=>e instanceof Promise,qe=Le.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(n=>{e.status="fulfilled",e.value=n},n=>{e.status="rejected",e.reason=n}),e)});function He(e,n){const l=Ie(n),[[u,c,d],k]=v.useReducer(f=>{const g=l.get(e);return Object.is(f[0],g)&&f[1]===l&&f[2]===e?f:[g,l,e]},void 0,()=>[l.get(e),l,e]);let b=u;(c!==l||d!==e)&&(k(),b=l.get(e));const s=n==null?void 0:n.delay;return v.useEffect(()=>{const f=l.sub(e,()=>{if(typeof s=="number"){setTimeout(k,s);return}k()});return k(),f},[l,e,s]),v.useDebugValue(b),Be(b)?qe(b):b}function Ue(e,n){const l=Ie(n);return v.useCallback((...c)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!("write"in e))throw new Error("not writable atom");return l.set(e,...c)},[l,e])}function Ge(e,n){return[He(e,n),Ue(e,n)]}const je=xe,Ye=Ge,se=ie().format("YYYY-MM-DD"),ze=je({dateInFocus:se,dayIdInFocus:`Day_${se}`}),We=e=>{var k;const[n]=Ye(ze),[l,u]=R.useRefetchableFragment(pe,e.data),c=v.useMemo(()=>l.events.edges.reduce((b,s)=>{if(!s.node.scheduledAt)return b;const f=s.node.color;return b.push({id:s.node.id,title:s.node.title,scheduledAt:new Date(s.node.scheduledAt),textColor:f?M[s.node.color][900]:void 0,backgroundColor:f?M[s.node.color][100]:void 0,durationInMinutes:s.node.durationInMinutes??0,...s.node.isAllDay?{isAllDay:!0}:{}}),b},[]),[l.events.edges]),d=v.useMemo(()=>{var b,s;return(s=(b=l.day)==null?void 0:b.tasks)==null?void 0:s.reduce((f,g)=>(g.completedAt&&f.push({id:g.id,at:new Date(g.completedAt),element:p("div",{className:"h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500"})}),f),[])},[(k=l.day)==null?void 0:k.tasks]);return v.useEffect(()=>{u({dateInFocus:n.dateInFocus,dayIdInFocus:n.dayIdInFocus})},[n.dateInFocus,n.dayIdInFocus]),w("div",{className:"flex h-full flex-col",children:[p("div",{className:"p-3 text-xl font-semibold",children:"Calendar"}),p("div",{className:"h-full overflow-y-scroll pl-3 pt-3",children:p(Me,{events:c,artifacts:d,startHour:4})})]})},Je=e=>{const n=R.useFragment(ce,e.data),[l,u]=v.useState(null);return w("div",{className:"bg-background-50 z-10 flex h-full shadow-xl",children:[p("div",{className:"h-full w-72 flex-1",children:l?p(Ce,{listId:l}):p(We,{data:n})}),w("div",{className:"border-l-background-300 flex h-full flex-col gap-3 overflow-y-scroll border-l p-4",children:[p("button",{title:"calendar",className:"bg-background-300 h-12 w-12 rounded-full p-3",onClick:()=>u(null),children:"🗓️ "}),n.lists.map(c=>p("button",{title:c.name,className:"bg-background-300 h-9 w-9 rounded-full",onClick:()=>u(c.id)},c.id))]})]})},ve=de,nn=()=>{const e=new Date;e.setDate(e.getDate()-7);const n=e.toISOString().split("T")[0],l=ie().format("YYYY-MM-DD"),{queryRef:u}=re(ve,{daysAfter:n,firstDays:17,dateInFocus:l,dayIdInFocus:`Day_${l}`});return u?p(Xe,{queryRef:u}):null},Xe=e=>{const n=R.usePreloadedQuery(ve,e.queryRef);return w("div",{className:"flex h-screen",children:[p(we,{data:n}),p(Je,{data:n})]})};export{nn as default};
