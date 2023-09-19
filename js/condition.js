

const now = new Date();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(day, hours, minutes)

total_bill = 5000

if (day == 0) {
    discount = 10
}

else if (day == 1) {
    discount = 15
}
else if (day == 2) {
    if (hours < 17 && hours > 11) {
        discount = 35
    }
    else {
        discount = 20
    }
}
else if (day == 3) {
    discount = 25
}
else if (day == 4) {
    discount = 30
}
else if (day == 5) {
    discount  = 35
}

else {
    discount = 40
}

total_bill_after_discount = total_bill - ((total_bill * discount) / 100)
console.log("the total bill " + total_bill)
console.log(total_bill_after_discount)


// Assignment
// 0 - what is string
// 1 - how to find length of a string in js
// 2 - how to check a variable is empty in js
// 3 - study on OR operator in JS (How does it work)
// 4 - take two variable - 1: name 2: email; if any of them is empty - the output will failed otherwise the output will be success
