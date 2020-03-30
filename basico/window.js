var message = 'Hi';

// global object 
window.alert(message);

// Or...
alert(message);

// Window.prompt()
var age = prompt("How old are you?");
console.log(age);

// Window.confirm()
result = window.confirm(message);

if(window.confirm("Are you sure you want to delete this?")) {
    deleteItem(itemId);
}