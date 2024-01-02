import{_ as v,r as _,h as m,p as n,q as t,R as d,O as w,P as y,t as h,v as r,w as g,Z as A,a8 as b,Q as I}from"./framework-52ca566e.js";const B=["for"],k=["for"],E=["id","onUpdate:modelValue","value"],F={key:0,class:"endresult"},H={class:"green"},N={__name:"FactfulnessQuiz",setup(z){const u=o=>["A","B","C","D","E","F"][o],c=o=>o.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""),a=_([{id:1,text:"In all low-income countries across the world today, how many girls finish primary school?",options:["20%","40%","60%"],correctIndex:2,chosenAnswer:null},{id:2,text:"Where does the majority of the world population live?",options:["low-income countries","middle-income countries","high-income countries"],correctIndex:1,chosenAnswer:null},{id:3,text:"In the last 20 years, the proportion of the world population living in extreme poverty has:",options:["almost doubled","remained more or less the same","almost halved"],correctIndex:2,chosenAnswer:null},{id:4,text:"What is the life expectancy in the world today?",options:["50 years","60 years","70 years"],correctIndex:2,chosenAnswer:null},{id:5,text:"There are 2 billion children in the world today, aged 0 to 15 years old. How many children will there be in the year 2100 according to the United Nations?",options:["4 Billion","3 Billion","2 Billion"],correctIndex:2,chosenAnswer:null},{id:6,text:"The UN predicts that by 2100 the world population will have increased by another 4 billion people. What is the main reason?",options:["there will be more children (aged below 15)","there will be more adults (aged 15 to 74)","there will be more very old people (aged 75 and older)"],correctIndex:1,chosenAnswer:null},{id:7,text:"How did the number of deaths per year from natural disasters change over the last 100 years?",options:["more than doubled","remained about the same","decreased to less than half"],correctIndex:2,chosenAnswer:null},{id:8,text:"There are roughly 7 billion people in the world today.",options:["1 Billion in Europe, 1 Billion in America, 1 Billion in Africa, 4 Billion in Asia","1 Billion in Europe, 1 Billion in America, 2 Billion in Africa, 3 Billion in Asia","1 Billion in Europe, 2 Billion in America, 1 Billion in Africa, 3 Billion in Asia"],correctIndex:0,chosenAnswer:null},{id:9,text:"How many of the world’s one-year-old children today have been vaccinated against some disease?",options:["20%","50%","80%"],correctIndex:2,chosenAnswer:null},{id:10,text:"Worldwide, 30-year-old men have spent 10 years in school, on average. How many years have women of the same age spent in school?",options:["9 years","6 years","3 years"],correctIndex:0,chosenAnswer:null},{id:11,text:"In 1996, tigers, giant pandas and black rhinos were all listed as endangered. How many of these three species are more critically endangered today?",options:["all three of them","one of them","none of them"],correctIndex:2,chosenAnswer:null},{id:12,text:"How many people in the world have some access to electricity?",options:["20%","50%","80%"],correctIndex:2,chosenAnswer:null},{id:13,text:"Global climate experts believe that, over the next 100 years, the average temperature will:",options:["get warmer","remain the same","get colder"],correctIndex:0,chosenAnswer:null}]),x=m(()=>{let o=0;return a.value.forEach(i=>{i.chosenAnswer===i.correctIndex&&(o+=1)}),o}),p=m(()=>a.value.every(o=>o.chosenAnswer!==null));return(o,i)=>(n(),t("div",null,[d("form",null,[(n(!0),t(w,null,y(a.value,e=>(n(),t("div",{key:e.id,style:{margin:"10px 0"}},[h(r(e.id)+". "+r(e.text)+" ",1),(n(!0),t(w,null,y(e.options,(s,l)=>(n(),t("div",{class:"options",key:l},[p.value?(n(),t("label",{key:0,for:c(s)+e.text[10],class:g({green:l==e.correctIndex,red:l==e.chosenAnswer})},r(u(l))+". "+r(s),11,B)):(n(),t("label",{key:1,for:c(s)+e.text[10]},r(u(l))+". "+r(s),9,k)),A(d("input",{type:"radio",id:c(s)+e.text[10],"onUpdate:modelValue":f=>e.chosenAnswer=f,value:l},null,8,E),[[b,e.chosenAnswer]])]))),128))]))),128)),p.value?(n(),t("div",F,[h(" You got "),d("span",H,r(x.value),1),h(" out of "+r(a.value.length)+" correct. ",1)])):I("v-if",!0)])]))}},V=v(N,[["__scopeId","data-v-8f6fb6ea"],["__file","FactfulnessQuiz.vue"]]);export{V as default};