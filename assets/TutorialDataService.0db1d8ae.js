import{h as e}from"./index.cf9b5e79.js";class l{getAll(){return e.get("/tutorials")}get(t){return e.get(`/tutorials/${t}`)}create(t){return e.post("/tutorials",t)}update(t,r){return e.put(`/tutorials/${t}`,r)}delete(t){return e.delete(`/tutorials/${t}`)}deleteAll(){return e.delete("/tutorials")}findByTitle(t){return e.get(`/tutorials?title=${t}`)}}var i=new l;export{i as T};
