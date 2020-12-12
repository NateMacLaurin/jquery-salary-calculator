console.log('JS - scripts.js loaded');

//create Employee object prototype function
function Employee(firstName, lastName, empID, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.empID = empID;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
}

//create global array employeeStore to hold Employee objects
const employeeArray = [];

// Shorthand for $(document).ready(readyNow);
$(readyNow); 

function readyNow(){
    console.log('JQ - jquery-3.5.1.min.js loaded!');
    appendDOM();
} //end readyNow

function appendDOM(){
    console.log('JS - In appendDOM function');
    //append bootstrap framework to DOM

    //initial render
    renderToDOM();
    //submit button click listener appended to inputUI form
    $('#submitButton').on('click', submitClickHandler);
} //end appendDOM

function renderToDOM(){
    console.log('JS - In renderToDOM function');
        //no stale employees please
    $('#employeeTable').empty();
        //use everything in the array, and append them accordingly
    for(let i=0; i<employeeArray.length; i++){
        $('#employeeTable').append(`
        <tr class="employee" id="${i}">
        <td>${employeeArray[i].firstName}</td>
        <td>${employeeArray[i].lastName}</td>
        <td>${employeeArray[i].empID}</td>
        <td>${employeeArray[i].jobTitle}</td>
        <td>${employeeArray[i].annualSalary}</td>
        </tr>`)
    }
} //end renderToDOM

function submitClickHandler(){
    console.log('JS - In submitClickHandler function');
    let newEmployee = new Employee( $('#firstName').val(), $('#lastName').val(), $('#empID').val(), $('#jobTitle').val(), $('#annualSalary').val() );
    console.log('newEmployee added:', newEmployee);
    employeeArray.push(newEmployee);

    renderToDOM();

    clearInputs();
} //end submitClickHandler

function deleteClickHandler(){
    console.log('JS - In deleteClickHandler function');
} //end deleteClickHandler

function clearInputs(){
    console.log('JS - In clearInputs function');
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}