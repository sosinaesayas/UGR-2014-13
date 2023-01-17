const hpg = document.getElementById("nav-toggler")
const div = document.getElementById("header")

hpg.addEventListener("click" , toggler)

function toggler(){
    div.style.transform  = "translateY(0)"
}