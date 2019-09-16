// Object Property Shorthand

const name = "Brian"
const userAge = 28

const user = {
    name,
    age: userAge,
    location: "New York"
}


// Object Destructuring

const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const {label, stock, rating = 5} = product

const transaction = (type, {label, stock} = myProduct) => {
    console.log(type, label, stock)
}

transaction("order", product)