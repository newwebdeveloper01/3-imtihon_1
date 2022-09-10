var collection = [];
function sumInput() {
    for (; ;) {
        let count = prompt("Son kiriting: ");
        if (count == '' || count === null || isNaN(count) || count.substring(0, 1) == " ") {
            break;
        } else {
            collection.push(count-0);
        }
    }
}
sumInput();
let sum = collection.reduce((a, b) => a + b);
console.log(`Jami: ${collection}`)
document.querySelector(".result").innerHTML = "Jami: " + sum;
