import {CupcakeBuilder} from "./CupcakeBuilder.js"

const main = document.querySelector(".contain")



const renderHTML = () =>{
    main.innerHTML = CupcakeBuilder()
}

renderHTML()