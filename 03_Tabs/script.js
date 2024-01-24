function OpenCity(event, cityname) {

    let i;
    let tabcontet = document.getElementsByClassName("tabcontent")

    for (i = 0; i < tabcontet.length; i++) {
        tabcontet[i].style.display = "none"

    }
    let tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    cityname.style.display = "block"
}

