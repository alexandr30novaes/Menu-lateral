
var menu = document.querySelectorAll(".item-menu")

function selectLink(){
    menu.forEach((item)=>{
        item.classList.remove("active")
    })
    this.classList.add("active")
}

menu.forEach((item)=>{
    item.addEventListener("click", selectLink)
})


var btn = document.querySelector("#btn-exp")
var menuSide = document.querySelector(".menu-lateral")

btn.addEventListener("click", function(){
    menuSide.classList.toggle("expandir")
})

