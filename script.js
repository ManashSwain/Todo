// Getting the values of task (user input value) and items(appended value)

let task = document.getElementById("task");
let items = document.getElementById("item")

// on click function 

const addTask = () => {
    if(task.value === ' '){
        alert("Please add task to continue")
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        items.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    task.value = " ";

    // local storage function 
    saveData();
}

// on click to strike or delete a note 

items.addEventListener("click", (e) => {
   if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
   }
   else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
   }
})

// local storage function to store the data 

const saveData = ()=>{
    localStorage.setItem("data" , items.innerHTML)
}

// local storage function to delete the data 

const showData = ()=>{
    items.innerHTML = localStorage.getItem("data")
}

// calling the function 

showData();
