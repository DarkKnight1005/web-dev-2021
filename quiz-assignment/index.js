document.getElementById('wight_div').style.display = "none";
let hasAdditionalLuggage = false;

let price_list = {
    "London":250,
    "Baku": 50,
    "New_York": 200,
    "Rotterdam": 500
};

let multipliyers = {
    "adult": 1,
    "child": 0.5,
    "trip": 1.5,
    "one_way": 1,
    "standart": 1,
    "business": 2,
};

let price_list_str = "<h3>Price List</h3>";

Object.entries(price_list).forEach(([key, value]) => {
    price_list_str += `<div>${key}: ${value}$</div>`;
});


document.getElementById("price_list").innerHTML = price_list_str;

document.querySelector('button').addEventListener('click', function(){
    
    document.getElementById("price").innerHTML = "Loading...";

    //Init
    additionalWeight = document.getElementById('weight').value;
    numOfAdults = document.getElementById('adults').value;
    numOfChildren = document.getElementById('children').value;
    radio_triptype = document.querySelector('input[name="rad"]:checked');
    radio_class = document.querySelector('input[name="rad1"]:checked');

    let price = 0;
    let hasError = false;

    var arr = [];
    var dropdowns = document.querySelectorAll('select');

    dropdowns.forEach( (checks) => {
        arr.push(checks.value);
    });

    arr[1] = arr[1] == "Yes" ? true : false;
    //End Init

    //Body
    price = price_list[arr[0]];

    let total_price = 0;

    console.log(price);

    if(numOfAdults == ""){
        alert("Text Field cannot be empty")
        hasError = true;
    }else{
        total_price += (price * multipliyers["adult"] * numOfAdults);
    }

    if(numOfChildren == ""){
        alert("Text Field cannot be empty")
        hasError = true
    }else{
        total_price += (price * multipliyers["child"] * numOfChildren);
    }

    if(radio_triptype){
        console.log(radio_triptype.id);
        total_price *= multipliyers[radio_triptype.id]
    }else{
        alert('Please select Trip Type');
        hasError = true;
    }
    
    if(radio_class){
        console.log(radio_class.id);
        total_price *= multipliyers[radio_class.id] 
    }else{
        alert('Please select Class Type');
        hasError = true;
    }

    if(arr[1] && additionalWeight == ""){
        alert("Please enter additional weight in Kg");
        hasError = true;
    }else if(arr[1] && additionalWeight != ""){
        total_price += (15 * additionalWeight);
    }
    //End Body

    setTimeout(() => {
        document.getElementById("price").innerHTML = "Total Price: " + (hasError ? "ERROR" : total_price);
    }, 1000);
    

})

function onDropDownLuggageCange(value){
    if(value == "Yes"){
        document.getElementById('wight_div').style.display = "block";
    }else{
        document.getElementById('wight_div').style.display = "none";
    }
}