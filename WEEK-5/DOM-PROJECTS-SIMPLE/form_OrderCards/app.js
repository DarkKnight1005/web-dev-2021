function UpdateCost(){
    // get Elements values
    let selectVal = document.forms['order']['type'].value ; //select value
    let radVal = document.querySelector('input[type=radio]:checked').value; //radio button value
    let checkBoxes = document.querySelectorAll('input[type=checkbox]:checked'); //checkboxes array
    // get total sum of checkboxes
    let checkSum = 0;
    checkBoxes.forEach( (checks) => {
        checkSum += Number(checks.value);
    });
    let res = Number(selectVal) * Number(radVal) + checkSum ;
    document.getElementById('totalcost').value = res ;	
}