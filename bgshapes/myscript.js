var addtask = document.querySelector('.add-task');
var taskform = document.querySelector('.add-task-form');
var popclose = document.querySelector('.add-task-form .close i');
var savbtn = document.querySelector('#add-task');
/** 
var tasks = []
var dta = JSON.parse(localStorage.getItem('title'));


if (dta !== null) {
    var list = "";
    dta.forEach(element => {
        list += `<div class="task-list-card">
            <div class="task-content">
                <h4>${element}</h4>
                <span>2 hrs remains</span>
            </div>
            <div class="task-progress">
                <span>80%</span>
            </div>
        </div>`;
    });
    document.querySelector('.task-list').innerHTML = list;
}

popclose.addEventListener('click', function (e) {
    taskform.classList.remove('show');
});


var mt = []
mt.push({ 'title': 'mytitle', 'cat': 'webdesign' })
console.log(mt)

//var tasks=[];
savbtn.addEventListener('click', function () {
    let title = document.querySelector('#task-title').value;
    let cate = document.querySelector('#task-cat').value;
    console.log(document.querySelector('#ct').value);


    // Check if tasks is undefined or null before accessing its length
    if (!tasks) {
        tasks = [];
    } else {
        tasks = dta;
    }

    // Use push to add an element to the end of the array
    tasks.push({ 'title': title, 'cate': cate });

    localStorage.setItem('title', JSON.stringify(tasks));




});
**/
function openPopup() {
    document.getElementById("taskPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("taskPopup").style.display = "none";
}

function submitForm() {
    // Add your form submission logic here
    alert("Task submitted!");
    closePopup();
}







window.addEventListener("load", (event) => {

    var cats=['Web Design','Graphic', 'SEO','Data Entry']
    //create category if not added 
    localStorage.setItem('task_categories',JSON.stringify(cats))
    // create a function to fetch Projects
    var categories = JSON.parse(localStorage.getItem('task_categories'))
    
    var optionss = "<option value='new'>New</option>";
    if (categories.length > 1) {
        categories.forEach(function (e) {
            optionss += `<option value="${e}">${e}</option>`;
        });
    
        //showing all project in the dropdown 
        document.querySelector('#projects').innerHTML = optionss;
    }


    /***
     * 
     * Create User Array  And Show in form dropdown
     * 
    */
    var users=['John','Alex','Anaya']
    var userlist='';
    users.forEach(function(e){
        userlist+='<option value='+e+'>'+e+'</option>'
    })

    document.querySelector('#assign').innerHTML = userlist;

    /***
     * 
     * Get and Validate Form Data 
     * 
    */
    var task_title=document.querySelector('#title');
    var project=document.querySelector('#projects');
    var taskdesc=document.querySelector('#description');
    var asignuser=document.querySelector('#assign');
    var due_date=document.querySelector('#due-date');
    var save_task=document.querySelector('.save-button');
    // check if task list is created
    var alltask = JSON.parse(localStorage.getItem('all_task'))

    if(!alltask) {
        alltask=[];
    }

    save_task.addEventListener('click',function(){
        console.log(alltask);
    let task={'title':task_title.value, 'project':project.value,'user':asignuser.value,'due_date':due_date.value,'description':taskdesc.value  }
        alltask.push(task)

        localStorage.setItem('all_task',JSON.stringify(alltask));
        
    });


   
    dt=alltask.filter(function(ele){ return ele.project=='SEO'});

        console.log(dt)


  });