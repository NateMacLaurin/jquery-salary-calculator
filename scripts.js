console.log('JS - scripts.js loaded');

//create Employee object prototype function
function Employee(firstName, lastName, empID, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.empID = empID;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
}

//create global variable to store USD formatted number string
let formattedUSD = "Empty";

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

    //initial render
    renderToDOM();

    /*A 'Submit' button should collect the form information, 
    store the information to calculate monthly costs, 
    append information to the DOM 
    and clear the input fields. */
    $('#submitButton').on('click', submitClickHandler);
} //end appendDOM

function renderToDOM(){
    console.log('JS - In renderToDOM function');
    //no stale employees please
    $('#employeeTable').empty();

    //use everything in the array, and append them accordingly
    for(let i=0; i<employeeArray.length; i++){
        //convert salary string to USD format before appending
        formattedUSD = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD' 
            }).format(employeeArray[i].annualSalary);
        $('#employeeTable').append(`
        <tr class="employee" id="${i}">
        <td>${employeeArray[i].firstName}</td>
        <td>${employeeArray[i].lastName}</td>
        <td>${employeeArray[i].empID}</td>
        <td>${employeeArray[i].jobTitle}</td>
        <td>${formattedUSD}</td>
        <td><button class="deleteButton" id="${i}">Delete</button></td>
        </tr>`)
        //employee clicked listener on each render in table to delete
        $(`#${i}.deleteButton`).on('click', deleteClickHandler);
    }
    calculateMonthlyCosts();
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
    let deleteTarget = this.id;
    console.log('JS - In deleteClickHandler function', deleteTarget);

    employeeArray.splice(deleteTarget,1);

    renderToDOM();
} //end deleteClickHandler

function clearInputs(){
    console.log('JS - In clearInputs function');
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function calculateMonthlyCosts(){
    console.log('JS - In calculateMonthlyCosts function');

    /*Using the stored information, calculate monthly 
    costs and append this to the to DOM.*/
    let totalMonthlyCost = 0;
    for(let employee of employeeArray){
        totalMonthlyCost += Number(employee.annualSalary);
    }
    //divide total annual by 12 to get monthly
    totalMonthlyCost /= 12;

    //format to USD and store in global variable
    formattedUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalMonthlyCost);
    

    console.log('Total Monthly Cost value:' + totalMonthlyCost + ' USD formatted: ' + formattedUSD);
    $('#totalMonthlyValue').text( formattedUSD );

    /*If the total monthly cost exceeds $20,000, 
    add a red background color to the total monthly cost.*/
    if(totalMonthlyCost > 20000){
        $('#totalMonthlyDisplay').css('background-color','red');
        $('#totalMonthlyDisplay').css('color','white');
    } else {
        $('#totalMonthlyDisplay').css('background-color','unset');
        $('#totalMonthlyDisplay').css('color','unset');        
    }
}