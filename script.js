
let handburger = document.querySelector(".handburger")
let dropmenu = document.querySelector(".ddmenu")

handburger.addEventListener("click",function()  {
    handburger.classList.toggle("active");
    dropmenu.classList.toggle("active");

})