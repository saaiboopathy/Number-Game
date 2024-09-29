const okay = document.getElementById("okaybtn")
const cancel = document.getElementById("cancelbtn")
let attempts = 0

const randomnumber = Math.floor(Math.random() * 10) + 1;

okay.addEventListener("click", () => {
    const storedinput = document.getElementById("inputbox")
    attempts = attempts + 1

    if (storedinput.value == randomnumber) {
        alert(`You guessed the correct number ${randomnumber} in ${attempts} attempts`)
    }
    else {
        if (storedinput.value < randomnumber) {
            alert("Your guess is too  low, Try again")
        }
        else {
            alert("your guess is too  high, Try again")
        }

    }

})

cancel.addEventListener("click", () => {
    document.getElementById("inputbox").value = "";
});