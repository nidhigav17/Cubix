function changeScroll(){
    let navbar=document.getElementById("nav-scroll");
    let scrollValue=window.scrollY;
    //console.log(scrollY);
    if(scrollValue < 300){
        navbar.classList.remove("bgColor");
    }else{
        navbar.classList.add("bgColor");
       
    }
    
}
window.addEventListener("scroll",changeScroll);