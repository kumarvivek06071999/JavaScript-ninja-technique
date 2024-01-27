const myFunction = () => {
    let input, filter, ul, li, a, i;
    input = document.getElementById("mySearch")
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu")
    li = ul.getElementsByTagName("li")
    console.log(filter)
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]    // this is something interesting

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            // here i learn indexOf in javascript
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }

}