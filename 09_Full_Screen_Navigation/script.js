const leftNav = document.getElementById("Sidenav")
const menu = document.getElementById("openbtn")
const openNav = () => {
    console.log(leftNav)
    leftNav.style.display = "block"
}

const closeNav = () => {
    leftNav.style.display = "none"
}

document.addEventListener("click", (e) => {

    if (!leftNav.contains(e.target) && !menu.contains(e.target)) {
        leftNav.style.display = "none"
    }
})
