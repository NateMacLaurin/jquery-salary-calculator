console.log('JS - scripts.js loaded');

//create object array of type Employee to receive 5 values (load delete click handler on render later)
const employee = [{
    firstName: "",
    lastName: "",
    empID: "",
    jobTitle: "",
    annualSalary:
}];

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