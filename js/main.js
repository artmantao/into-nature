const gotop = document.querySelector(".go-top")
document.addEventListener('scroll', () => {
    if(window.scrollY<100){
        gotop.style.display = "none" 
    }
    else{
        gotop.style.display = "block" 
    }
});
