document.addEventListener('DOMContentLoaded', () => {
 const todoinput=document.getElementById("addtask");
 const addtaskbtn=document.getElementById("addtaskbtn");
 const todolist=document.getElementById("todolist");
 let tasks = JSON.parse(localStorage.getItem("tasks"))||[];
 tasks.forEach((task)=>rendertask(task));
 addtaskbtn.addEventListener("click",()=>{
    const tasktext=todoinput.value.trim();
    if(tasktext==="") return;
    const newtask={
    id:Date.now(),
    text:tasktext,
    completed:false,
 };
 tasks.push(newtask);
 savetask();
 rendertask(newtask);
 todoinput.value="";
 console.log(tasks);

 });
 function rendertask(task){
const li=document.createElement("li");
li.setAttribute("data-id", task.id);
if(task.completed) li.classList.add("completed");
 li.innerHTML = `
<span>${task.text}</span>
<button>delete</button>
`;
li.addEventListener("click",(e)=>{
    if(e.target.tagName ==="button") return;
    task.completed=!task.completed;
    li.classList.toggle("completed");
    savetask();
});
li.querySelector("button").addEventListener("click",(e)=>{
    e.stopPropagation;
    tasks=tasks.filter((t)=>t.id!==task.id);
    li.remove();
    savetask();
});
todolist.appendChild(li);
 }
 function savetask(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
 }

   });
