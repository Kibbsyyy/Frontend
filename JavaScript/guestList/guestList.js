function guests() {
    var guestList = ["Angela", "Tumi", "Bisi", "Somto", "Jalil", "Debbie"];
    guestName = prompt("what is your name?");
    if (guestList.includes(guestName)) {
        alert(`Welcome! ${guestName}`)
    } else {alert("Sorry, your name is not on the guest list.")}
}

guests()