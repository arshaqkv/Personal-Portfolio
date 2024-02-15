// header scroll

let nav =  document.querySelector(".navbar")
window.onscroll = function () {
    if(document.documentElement.scrollTop > 21 ){
        nav.classList.add("header_scrolled");
    }else{
        nav.classList.remove("header_scrolled");
    }
}

