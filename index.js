const errorm= document.getElementById('error-message')
const errorTitle = document.getElementById("error-title");
const inputs = document.getElementsByTagName("input");
const addButton = document.getElementById("add");
const tasksDiv = document.getElementById("tasks");
const nothingText = document.getElementById("nothing");
const listDiv = document.getElementById("list");
const taskTitles = document.getElementById("tae-titles");
const dateTitle = document.getElementById("date-title");
const trashBtnDiv = document.getElementById("trash-btn");

  
/////check////
addButton.onclick = function () {
            let taskinfo = inputs[0].value.trim()
             let dateinfo= inputs[1].value.trim()
          if (taskinfo && dateinfo) {
            errorm.style.display="none"
            nothingText.style.display ="none";
            tasksDiv.innerHTML+=  `
             <div id="list">
            <p id="tas-titles">${taskinfo}</p>
            <p id="date-title">${dateinfo}</p>
              <div id="trash-btn">
              <i class="fa-solid fa-trash"></i>
                </div>
          </div>
            `
            inputs[0].value=''
            inputs[1].value=''

            let trashBtnDivs = document.querySelectorAll("#trash-btn");
            let listDivs = document.getElementById("list");
            
            trashBtnDivs.forEach(btn => {
                btn.onclick = function() {
                    this.parentNode.remove();
          }});
        }else{
          nothingText.style.display="flex"
          errorm.style.display="flex"
       }
       if (!taskinfo) {
        errorTitle.innerText='you must enter title'
        
       }else if (!dateinfo) {
        errorTitle.innerText='you must enter date'
        
       }
    
 
    
}
 




