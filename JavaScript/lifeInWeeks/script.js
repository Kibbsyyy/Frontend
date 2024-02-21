function lifeInWeeks() {
   
    age = prompt("What's your age?")
    var days = 365;
    var weeks = 52;
    var months = 12;

    var ageLeft = 90 - age;
    var daysLeft = days * ageLeft;
    var weeksLeft = weeks * ageLeft;
    var monthsLeft = months * ageLeft;

    alert(`You have ${daysLeft} days, ${weeksLeft} weeks and ${monthsLeft} days left.`)
}
lifeInWeeks()

 


