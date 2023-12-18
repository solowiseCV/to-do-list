
const inputBox = document.querySelector(".input-box");
const addButton = document.querySelector(".addBtn");
const listContainer =document.querySelector(".list-container");
const listItem = document.querySelectorAll(".list-item");



 const updateStorage =()=>{
    localStorage.setItem("list",listContainer.innerHTML);
 }
const creatList = ()=>{
    if(inputBox.value ===''){
        alert("write somethin")
    }else{
        let listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
        console.log(listItem)
     
    }
  inputBox.value =""
  updateStorage()
}

addButton.addEventListener("click",()=>{
  creatList()
})

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        updateStorage()
    }
    
},false)

updateStorage();