const item=document.querySelector("#item")
const todoBox=document.querySelector("#todo")

item.addEventListener(
    "keyup",// to get the output from ke
    function(event){
        if(event.key=="Enter"){
          addToDo(this.value)
            this.value=""
        }
    }
)
const addToDo=(item)=>{
    const list=document.createElement("li")
    list.innerHTML=` ${item}  <i class="fas fa-times"></i>`;
    list.addEventListener(
        "click",
        function(){
           this.classList.toggle("done"); 
        }
    )
    list.querySelector("i").addEventListener(
        "click",
        function(){
           list.remove();
        }
    )
    todoBox.appendChild(list)
}