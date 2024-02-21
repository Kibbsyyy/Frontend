var sayName = prompt("What is your name?");
firstLetter = sayName.slice(0, 1).toUpperCase(); 
restOfName = sayName.slice(1, sayName.length).toLowerCase();
fullName = firstLetter + restOfName;
alert("Hello " + fullName);