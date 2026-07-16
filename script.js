const words=["Java Developer","Python Developer","Web Developer"];
let i=0,j=0,del=false;
const t=document.getElementById("typing");
setInterval(()=>{
 const w=words[i];
 t.textContent=w.substring(0,j);
 if(!del){j++; if(j>w.length){del=true;}}
 else{j--; if(j===0){del=false;i=(i+1)%words.length;}}
},120);
