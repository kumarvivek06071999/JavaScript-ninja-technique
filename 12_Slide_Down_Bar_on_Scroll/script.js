// when the user scrolls down from the top of the document, slide down the navbar
// when the user scrolls to the top of the page, slide up the navbar(50px out of the view)

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0"
    } else {
        document.getElementById("navbar").style.top = "-50px"
    }
}