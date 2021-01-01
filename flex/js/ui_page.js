let scrollTop = 0
let modal

window.onload = function() {
    modal = document.getElementsByClassName("modal")[0]
}

window.addEventListener("scroll", function(e) {
    scrollTop = document.documentElement.scrollTop
    
    if (scrollTop >= 80) {
        modal.style.top = 0
    }
    else {
        modal.style.top = 80 + "px"
    }
}, false)