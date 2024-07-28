
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
    })
})






close_hemburger.addEventListener("click", () => {
    navs.forEach((val) => {
        val.style.display = "none"
        close_hemburger.style.display = "none"
        hemburger.style.display = "inline"
    })

    console.log("clse");
})







