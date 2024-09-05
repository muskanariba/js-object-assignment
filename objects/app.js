var itemsArray = [ //ques 1
    {name:"juice" , price : "50" , quantity :"3"},
    {name:"cookie" , price : "30" , quantity :"9"},
    {name:"shirt" , price : "880" , quantity :"1"},
    {name:"pen" , price : "100" , quantity :"2"},
]
var totalPriceOfAllItems = 0;
for(var key in itemsArray){
    var items = itemsArray[key]
    var itemPrice = items.price * items.quantity
    console.log(` The price of ${items.name} is Rs. ${itemPrice}`);
    totalPriceOfAllItems += itemPrice;
console.log("Total price of all items: " + totalPriceOfAllItems);
}

var personal ={  //ques 2
    name : "Areeba",
    age : "22",
    gender : "female",
    city : "karachi",
    country : "Pakistan",
    email : "areeba@gmail.com",
    password : "abcd"
}
console.log( "age" in personal)
console.log( "country" in personal)
console.log("firstname" in personal);
console.log("lastname" in personal);

function personinfo(name,age,gender) {  //ques 3
this.name = name;
this.age = age;
this.gender = gender;
}

var personinfo1 = new personinfo ("rohan",9,"male")
var personinfo2 = new personinfo ("ali",15,"male")
var personinfo3 = new personinfo ("saad",17,"male")
console.log(personinfo1)
console.log(personinfo2)
console.log(personinfo3)

function population (name,gender,education,profession){ //ques 4
    this.name = name;
    this.gender = gender;
    this.education = education;
    this.profession = profession;
}
document.getElementById('populationform').addEventListener('submit', function(e) {
    e.preventDefault();
var name = document.getElementById("name").value;
var gender = document.getElementById("gender").value;
var education = document.getElementById("education").value;
var profession = document.getElementById("profession").value;

var total = new population (name,gender,education,profession) 
console.log(total)
})