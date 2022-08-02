import{T as d}from"./TutorialDataService.0db1d8ae.js";import{_ as c,o as V,c as f,a as m,t as h,b as e,w as i,F as T,d as p}from"./index.cf9b5e79.js";import{V as _,a as r}from"./VTextField.1602da69.js";import{V as g,a as s,b as n}from"./VRow.eced6354.js";const v={name:"edit-tutorial",props:["id"],data(){return{tutorial:{},message:"Enter data and click save"}},methods:{retrieveTutorial(){d.get(this.id).then(o=>{this.tutorial=o.data}).catch(o=>{this.message=o.response.data.message})},updateTutorial(){var o={title:this.tutorial.title,description:this.tutorial.description};d.update(this.id,o).then(t=>{this.tutorial.id=t.data.id,console.log("add "+t.data),this.$router.push({name:"tutorials"})}).catch(t=>{this.message=t.response.data.message})},cancel(){this.$router.push({name:"tutorials"})}},mounted(){this.retrieveTutorial()}},b=m("h1",null,"Tutorial Edit",-1),x=p("Save"),k=p("Cancel");function C(o,t,B,D,l,u){return V(),f(T,null,[b,m("h4",null,h(l.message),1),e(_,null,{default:i(()=>[e(r,{label:"Title",modelValue:l.tutorial.title,"onUpdate:modelValue":t[0]||(t[0]=a=>l.tutorial.title=a)},null,8,["modelValue"]),e(r,{label:"Description",modelValue:l.tutorial.description,"onUpdate:modelValue":t[1]||(t[1]=a=>l.tutorial.description=a)},null,8,["modelValue"]),e(r,{label:"Description",modelValue:l.tutorial.published,"onUpdate:modelValue":t[2]||(t[2]=a=>l.tutorial.published=a)},null,8,["modelValue"]),e(g,{justify:"center"},{default:i(()=>[e(s,{col:"2"}),e(s,{col:"2"},{default:i(()=>[e(n,{color:"success",onClick:t[3]||(t[3]=a=>u.updateTutorial())},{default:i(()=>[x]),_:1})]),_:1}),e(s,{col:"2"},{default:i(()=>[e(n,{color:"info",onClick:t[4]||(t[4]=a=>u.cancel())},{default:i(()=>[k]),_:1})]),_:1}),e(s,{col:"2"})]),_:1})]),_:1})],64)}var S=c(v,[["render",C]]);export{S as default};
