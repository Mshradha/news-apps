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
          window.location.href = "search.html"
         console.log(data)
       
    
       
        
    } catch (error) {
        console.log(error)
    }
}


async function get_data() {
    try {
        
       
        
            let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in&cnt=10`)
            let data = await res.json()
            let dataa = data.articles
            console.log(dataa)
            append_data(dataa)
    } catch (error) {
        console.log(error)
    }
}
async function get_data1() {
    try {
        
       
        
            let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`)
            let data = await res.json()
            let dataa = data.articles
            console.log(dataa)
            append_data(dataa)
    } catch (error) {
        console.log(error)
    }
}
async function get_data2() {
    try {
        
       
        
            let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`)
            let data = await res.json()
            let dataa = data.articles
            console.log(dataa)
            append_data(dataa)
    } catch (error) {
        console.log(error)
    }
}
async function get_data3() {
    try {
        
       
        
            let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`)
            let data = await res.json()
            let dataa = data.articles
            console.log(dataa)
            append_data(dataa)
    } catch (error) {
        console.log(error)
    }
}
async function get_data4() {
    try {
        
       
        
            let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`)
            let data = await res.json()
            let dataa = data.articles
            console.log(dataa)
            append_data(dataa)
    } catch (error) {
        console.log(error)
    }
}







document.getElementById("search_input").addEventListener("keydown",search)
document.getElementById("in").addEventListener("click",get_data)
document.getElementById("us").addEventListener("click",get_data1)
document.getElementById("ch").addEventListener("click",get_data2)
document.getElementById("uk").addEventListener("click",get_data3)
document.getElementById("nz").addEventListener("click",get_data4)

let store_arr = JSON.parse(localStorage.getItem("news")) || []


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

function storedata(el){
    store_arr.push(el)
    localStorage.setItem("news",JSON.stringify(store_arr))
    window.location.href = "news.html"
}