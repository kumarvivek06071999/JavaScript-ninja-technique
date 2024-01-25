function openPage(pageName, elem, color) {
    let i;
    let tabcontent = document.getElementsByClassName("tabcontent")
    let tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = ''
    }
    elem.style.backgroundColor = color
    document.getElementById(pageName).style.display = 'block'
}