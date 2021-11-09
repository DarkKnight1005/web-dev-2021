// ToDo App with Array methods

var data = ['Morning gymnastics training', 'Training course in Informatics', 'Dinner with colleagues'];
var button = document.querySelector('.addBtn');

disp();

// add element function
button.addEventListener('click', () => {
var input = document.getElementById('myInput');
var inpRes = document.getElementById('myInput').value;
if(inpRes.length > 3){
        data.push(inpRes); // adding element to array
        disp(); // displaying the array elements
}else{
    alert('Field can not be a blank. Please, write a task!');
}
input.value = ''; // Making the text box blank
});

// remove element
function remove_element(index_no){
    data.splice(index_no, 1);
    disp(); // displaying the array elements
}

// display all array elements
function disp(){
    var str = '';
    str = `<h2> Total number of tasks to do : ${data.length} </h2>`;
    data.forEach( (elem, index) => {
    str += `<p> ${elem} <span><a href=# onClick="remove_element( ${index} )"> \u00D7</a></span></p>`;  // adding each element with key number to variable
        document.getElementById('myRES').innerHTML = str; // Display the elements of the array
    });
    }

/*
// marking the list item as completed
var list = document.getElementById('myRES');
    list.addEventListener('click', function(eIndex) {
    if (eIndex.target.tagName === 'P') {
    eIndex.target.classList.toggle('checked');
    }
    }, false);
*/