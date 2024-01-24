
const pass = document.getElementById("password")
const upperCase = document.getElementById("upperCase")
const lowercase = document.getElementById("lowercase")
const number = document.getElementById("number")
const character = document.getElementById("character")


pass.onfocus = function () {
    document.getElementById("message").style.display = "block"
}

pass.onblur = function () {
    document.getElementById("message").style.display = "none"
}

pass.onkeyup = function () {
    //validate lowercase letters
    let lowerCaseLetters = /[a-z]/g
    if (pass.value.match(lowerCaseLetters)) {
        lowercase.classList.remove("invalid")
        lowercase.classList.add("valid")
    }
    else {
        lowercase.classList.remove("valid")
        lowercase.classList.add("invalid")
    }
    //validate upperClass letters

    let upperCaseLetters = /[A-Z]/g
    if (pass.value.match(upperCaseLetters)) {
        upperCase.classList.remove("invalid")
        upperCase.classList.add("valid")
    }
    else {
        upperCase.classList.remove("valid")
        upperCase.classList.add("invalid")
    }

    //validate numbers

    let numberCheck = /[0-9]/g
    if (pass.value.match(numberCheck)) {
        number.classList.remove("invalid")
        number.classList.add("valid")
    }
    else {
        number.classList.remove("valid")
        number.classList.add("invalid")
    }

    //validate length

    if (pass.value.length >= 8) {
        character.classList.remove("invalid")
        character.classList.add("valid")
    }
    else {
        character.classList.remove("valid")
        character.classList.add("invalid")
    }
}