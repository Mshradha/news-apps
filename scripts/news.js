// Ude Import export (MANDATORY)

import {navbar} from "../components/navbar.js"

let n = document.getElementById("navbar")
n.innerHTML = navbar()


let store_arr = JSON.parse(localStorage.getItem("news"))


store_arr.map(function(el){
    let div = document.createElement("div")
   

    let image = document.createElement("img")
    image.src = el.urlToImage

    let div2 = document.createElement("div")
    let title = document.createElement("h3")
    title.innerText=el.title

    let discription = document.createElement("p")
    discription.innerText = el.description ;


    div2.append(title,discription)
    div.append(image,div2)
    document.getElementById("results").append(div)
})