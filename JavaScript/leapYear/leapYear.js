function leapYear() {
    var year = prompt("Enter a year: ");
    if (year < 1000){
        alert("Sorry, we don't have that record");
    } else {
        if (year % 4 == 0){
            if (year % 100 == 0){
                if (year % 400 == 0) {
                    alert(`${year} is a leap year.\nDivisible by 4. \nDivisible by 100\nDivisible by 400.`);
                } else {alert(`${year} is not a leap year.`)}
            } else {alert(`${year} is a leap year.\nDivisible by 4.\nNot divisible by 100.`);
        }} else {alert(`${year} is not a leap year.`);
    }}
}

leapYear()
