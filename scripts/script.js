
// for cusrsor pointer
let nav_var = document.querySelector("body")
let cursor_var = document.querySelector(".cursor-move")

nav_var.addEventListener("mousemove", (mouse_movement) => {
    cursor_var.style.left = mouse_movement.x + "px"
    cursor_var.style.top = mouse_movement.y + "px"
    cursor_var.style.opacity = "1"
    console.log(mouse_movement);
})


// for nav as humberger
let close_hemburger = document.querySelector(".close-hem")
let hemburger = document.querySelector(".hemburger-div")
let navs = document.querySelectorAll(".nav-links")
console.log(navs);
navs.forEach((val) => {
    hemburger.addEventListener("click", () => {
        val.style.display = "block"
        val.style.transition = "all ease-in 0.3s;"
        hemburger.style.display = "none"
        close_hemburger.style.display = "block"
        close_hemburger.style.opacity = "1"
    })
})



// setTimeout(()=>{alert("thanx for visiting")},5000)
// setTimeout(()=>{prompt("enter your good name : ")},10000)





close_hemburger.addEventListener("click", () => {
    navs.forEach((val) => {
        val.style.display = "none"
        close_hemburger.style.display = "none"
        hemburger.style.display = "inline"
    })

    console.log("clse");
})


// ========================FOR DYNAMIC WORD TYPING USING TYPE.JS LIBRARY========


// let DynamicTyping = document.querySelector("#dynamic-txt-changing")

var typed = new Typed('#dynamic-txt-changing', {
    strings: ["College Student...","Dumb Coder...","Learner..."],  //,"Berozgar...🙂"
    typeSpeed: 120,
    backSpeed:40,
    loop:true,
    showCursor:true

  });




