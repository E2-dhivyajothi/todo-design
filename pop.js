document.getElementById('add').addEventListener('click',function()
{
 document.querySelector('.pop').style.display="flex";
});


document.querySelector('.close').addEventListener('click',function()
{
 document.querySelector('.pop').style.display="none";
});

let textInput=document.getElementById("textInput");
let msg=document.getElementById("error");
let form=document.getElementById("form");
let tasks=document.getElementById("tasks");
    form.addEventListener("submit",function(e)
        {
          e.preventDefault();
          formvalidate();
        }
    ); 

let data=[];
let acceptData= function()
{
    data.push(
        {
        name:textInput.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    createTasks();
}; 
let formvalidate=function()
{
    if(textInput.value ==="")
    {
     console.log("failure");
     msg.innerHTML="*Mandatory";
    }
    else
    {
        console.log("success");
        msg.innerHTML="";
        acceptData();
        
    }; 
}
let createTasks=function()
{  
  tasks.innerHTML+=`
  <div>
  <span>${textInput.value}</span>
  
  
  <span class="options">
      <i onclick="editTask(this)"class="fa-solid fa-pen-to-square"></i>
      <i onclick="deleteForm(this)" class="fa-solid fa-trash-can"></i>
  </span>
</div>
`;
 resetForm();
};
let deleteForm=function(e)
{
   e.parentElement.parentElement.remove();
   
}
let editTask = function(e) { 
document.getElementById('tasks').addEventListener('click',function()
{
 document.querySelector('.pop').style.display="flex";
});
document.querySelector('.submit').addEventListener('click',function()
{
 document.querySelector('.pop').style.display="none";
});
   
let selectedTask = e.parentElement.parentElement;
textInput.value = selectedTask.children[0].innerHTML;
selectedTask.remove();
};

let resetForm=function()
{
    textInput.value="";
    
    
}
