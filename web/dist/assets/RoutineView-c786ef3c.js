import{r as _,a as k,j as l,F as T,u as B,c as P}from"./index-4b77959e.js";import{B as S,c as Y,e as Q,u as A,d as x}from"./Lists-f264c4ab.js";import{g as C}from"./index-8c97bd67.js";const w=function(){var t={defaultValue:null,kind:"LocalArgument",name:"currentDayId"},n={defaultValue:null,kind:"LocalArgument",name:"previousDayId"},i={defaultValue:null,kind:"LocalArgument",name:"routineId"},c=[{kind:"Variable",name:"id",variableName:"previousDayId"}],s={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},u={kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Routine",kind:"LinkedField",name:"routines",plural:!0,selections:[s,{alias:null,args:null,kind:"ScalarField",name:"done",storageKey:null}],storageKey:null}],type:"Day",abstractKey:null},e=[u],r=[{kind:"Variable",name:"id",variableName:"currentDayId"}],o=[{kind:"Variable",name:"id",variableName:"routineId"}],y={alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"shouldSkip",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m=[g,u,s];return{fragment:{argumentDefinitions:[t,n,i],kind:"Fragment",metadata:null,name:"RoutineViewQuery",selections:[{alias:"previousDay",args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:e,storageKey:null},{alias:"currentDay",args:r,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:e,storageKey:null},{alias:"routine",args:o,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[s,{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[y,a,d,{args:null,kind:"FragmentSpread",name:"RoutineStep_step"}],storageKey:null}],type:"Routine",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,t,i],kind:"Operation",name:"RoutineViewQuery",selections:[{alias:"previousDay",args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:m,storageKey:null},{alias:"currentDay",args:r,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:m,storageKey:null},{alias:"routine",args:o,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,s,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"RoutineStep",kind:"LinkedField",name:"steps",plural:!0,selections:[y,a,d],storageKey:null}],type:"Routine",abstractKey:null}],storageKey:null}]},params:{cacheID:"ef7e77b11ceba36e52eb070df9b51c1f",id:null,metadata:{},name:"RoutineViewQuery",operationKind:"query",text:`query RoutineViewQuery(
  $previousDayId: ID!
  $currentDayId: ID!
  $routineId: ID!
) {
  previousDay: node(id: $previousDayId) {
    __typename
    ... on Day {
      routines {
        id
        done
      }
    }
    id
  }
  currentDay: node(id: $currentDayId) {
    __typename
    ... on Day {
      routines {
        id
        done
      }
    }
    id
  }
  routine: node(id: $routineId) {
    __typename
    ... on Routine {
      id
      steps {
        pluginSlug
        stepSlug
        shouldSkip
        ...RoutineStep_step
      }
    }
    id
  }
}

fragment RoutineStep_step on RoutineStep {
  pluginSlug
  stepSlug
}
`}}}();w.hash="5782a345a9d9f42355e61cd788be7484";const $={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoutineStep_step",selections:[{alias:null,args:null,kind:"ScalarField",name:"pluginSlug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"stepSlug",storageKey:null}],type:"RoutineStep",abstractKey:null};$.hash="552b8b92650f6bdfd4dda68254f2185e";const q=()=>l(T,{children:"Loading..."}),M=t=>{const n=_.useFragment($,t.step),[i,c]=k.useState(()=>q);k.useEffect(()=>{(async()=>{var r;const e=await C({pluginSlug:n.pluginSlug});if("_error"in e){console.log(e._error);return}else if((r=e.routineSteps)!=null&&r[n.stepSlug].component)c(()=>{var o;return(o=e.routineSteps)==null?void 0:o[n.stepSlug].component});else{console.log(`Plugin ${n.pluginSlug} does not have the requested routine step.`);return}})()},[t.step]);const s=async e=>{await(e==null?void 0:e()),t.onNext()},u=async e=>{await(e==null?void 0:e()),t.onBack()};return l(i,{onNext:t.onNext,onBack:t.onBack,NextButton:e=>l(S,{...e,secondary:!0,onClick:()=>s(e.onClick),children:t.hasNext?"Next":"Done"}),BackButton:e=>l(S,{...e,secondary:!0,onClick:()=>u(e.onClick),children:t.hasPrevious?"Back":"Cancel"}),ArrowNextButton:e=>l(S,{...e,secondary:!0,onClick:()=>s(e.onClick),children:l(Y,{})}),ArrowBackButton:e=>l(S,{...e,secondary:!0,onClick:()=>u(e.onClick),children:l(Q,{})})})},N=w,H=()=>{const t=B(),{queryRef:n}=A(N,{previousDayId:`Day_${x().subtract(1,"day").format("YYYY-MM-DD")}`,currentDayId:`Day_${x().format("YYYY-MM-DD")}`,routineId:`Routine_${t.routineId}`});return n?l(j,{queryRef:n}):null},j=t=>{const n=_.usePreloadedQuery(N,t.queryRef),i=B(),c=P(),[s,u]=k.useState(0),{noSteps:e,stepsLeft:r}=k.useMemo(()=>{var f,D,h,v,I,R,F,K,b,L;if(!((D=(f=n.routine)==null?void 0:f.steps)!=null&&D.length))return{noSteps:!0,stepsLeft:[]};const a=n.routine.steps.findIndex(p=>i.routineStep&&`${p.pluginSlug}_${p.stepSlug}`.includes(i.routineStep)),d=(v=(h=n.currentDay)==null?void 0:h.routines)==null?void 0:v.findIndex(p=>p.id===n.routine.id),g=(F=(R=(I=n.currentDay)==null?void 0:I.routines)==null?void 0:R[d-1])==null?void 0:F.done,m=(L=(b=(K=n.previousDay)==null?void 0:K.routines)==null?void 0:b[n.previousDay.routines.length-1])==null?void 0:L.done,V=!!g||!!m;return{stepsLeft:n.routine.steps.slice(a===-1?0:a).filter(p=>!(V&&p.shouldSkip))}},[n]);if(e)return l("div",{children:"This routine has no steps. Please add some in your settings."});if(r.length===0)return l("div",{children:"You have completed all the steps in this routine (some may have been skipped because you already completed them in a previous routine)."});const o=()=>{u(a=>a===0?a:a-1)},y=()=>{u(a=>{if(a===r.length-1)return a;const d=r[a+1];return c(`/routine/${i.routineId}/${d.pluginSlug}_${d.stepSlug}`,{replace:!1}),a+1})};return l(M,{step:r[s],onBack:o,onNext:y,hasPrevious:s>0,hasNext:s<r.length-1})};export{H as default};
