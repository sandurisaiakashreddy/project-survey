import{L as f}from"./LessonDataService.8c990292.js";import{_ as h,o as V,c as _,a as i,t as d,b as s,w as t,F as v,d as m}from"./index.141ca740.js";import{V as I,a as u}from"./VTextField.d6164421.js";import{V as L,a,b as c}from"./VRow.db93b627.js";const g={name:"add-lesson",props:["tutorialId"],data(){return{lesson:{id:null,title:"",description:"",published:!1},message:"Enter data and click save"}},methods:{saveLesson(){var n={title:this.lesson.title,description:this.lesson.description,tutorialId:this.tutorialId};f.createLesson(this.tutorialId,n).then(e=>{this.lesson.id=e.data.id,this.$router.push({name:"view",params:{id:this.tutorialId}})}).catch(e=>{this.message=e.response.data.message})},cancel(){this.$router.push({name:"view",params:{id:this.tutorialId}})}}},x=i("h1",null,"Add Lesson",-1),b=m("Save"),k=m("Cancel");function w(n,e,p,C,l,r){return V(),_(v,null,[x,i("h4",null,d(l.message),1),i("h4",null,"Tutorial : "+d(p.tutorialId),1),s(I,null,{default:t(()=>[s(u,{label:"Title",modelValue:l.lesson.title,"onUpdate:modelValue":e[0]||(e[0]=o=>l.lesson.title=o)},null,8,["modelValue"]),s(u,{label:"Description",modelValue:l.lesson.description,"onUpdate:modelValue":e[1]||(e[1]=o=>l.lesson.description=o)},null,8,["modelValue"]),s(L,{justify:"center"},{default:t(()=>[s(a,{col:"2"}),s(a,{col:"2"},{default:t(()=>[s(c,{color:"success",onClick:e[2]||(e[2]=o=>r.saveLesson())},{default:t(()=>[b]),_:1})]),_:1}),s(a,{col:"2"},{default:t(()=>[s(c,{color:"info",onClick:e[3]||(e[3]=o=>r.cancel())},{default:t(()=>[k]),_:1})]),_:1}),s(a,{col:"2"})]),_:1})]),_:1})],64)}var N=h(g,[["render",w]]);export{N as default};
