// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"

let n = document.getElementById("navbar")
n.innerHTML = navbar()

async function search(){
    try {
        let id = document.getElementById("search_input").value;
        
            let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${id}`)
           let data = await res.json()
           let datta = data.articles
           append_data(dataa)
         console.log(data)
       
    
       
        
    } catch (error) {
        console.log(error)
    }
}

function append_data(dataa){

    let conta = document.getElementById("results").innerHTML=""

    dataa.map(function(el){
        let div = document.createElement("div")
        div.addEventListener("click",()=>{
            storedata(el)
        })

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
}