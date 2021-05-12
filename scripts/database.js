
const database = {
    cakeTypes:[
        {
            id:1,
            name:"German cholcolate",
            price: 7.5
        },
        {
            id:2,
            name:"Red velvet",
            price: 7.5
        },
        {
            id:3,
            name:"Lemon",
            price: 7.5
        },
        {
            id:4,
            name:"Carrot",
            price: 7.5
        },
    ],
    Toppings:[],
    CupcakeBuilder:[],
    Frosting:[]
}



const getCake = () =>{
    return[...database.cakeTypes]
}