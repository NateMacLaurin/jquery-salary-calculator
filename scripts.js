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
const employeeStore = [];

// Shorthand for $(document).ready(readyNow);
$(readyNow); 

function readyNow(){
    console.log('JQ - jquery-3.5.1.min.js loaded!');
    appendDOM();
} //end readyNow

function appendDOM(){
    console.log('JS - In appendDOM function');
    renderToDOM();
} //end appendDOM

function renderToDOM(){
    console.log('JS - In renderToDOM function');
} //end renderToDOM

function submitClickHandler(){
    console.log('JS - In submitClickHandler function');
} //end submitClickHandler

function deleteClickHandler(){
    console.log('JS - In deleteClickHandler function');
} //end deleteClickHandler