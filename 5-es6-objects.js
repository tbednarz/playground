//Object property shorthand

const name = "Tres"
const userAge = 25

const user = {
    name,
    userAge,
    location: "Marquette"
}

console.log(user)

//destructuring

const product = {
    label: "Red Notebook",
    price : "$3",
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock, price}) => {
    console.log(type,label,stock,price)
}

transaction("order", product)