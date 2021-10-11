const toys = [
    {
        id: 1,
        name: "Barbie",
        maker: "Mattle",
        age: 5,
        price: 25,
        weight: 1.2
    },
    {
        id: 2,
        name: "Lego",
        maker: "Legoworld",
        age: 8,
        price: 57,
        weight: 1.4
    },
    {
        id: 3,
        name: "Gameboy",
        maker: "Nintendo",
        age: 9,
        price: 150,
        weight: 1.2
    },
    {
        id: 4,
        name: "Super-Soaker",
        maker: "Nerf",
        age: 4,
        price: 32,
        weight: 1.4
    }
]


const games = [{
    name: "PS5",
    maker: "Playstation",
    age: 15,
    price: 750,
    weight: 5.3
}, {
    name: "Nutcracker",
    maker: "Dommon",
    age: 5,
    price: 50,
    weight: 1.7
}]

// toys.push(...games)

// const concatArrays = (arr1, arr2) => {
//     return [...arr1, ...arr2]
// }

// const stock = concatArrays(toys, games);

// const someFunction = (argument) => {
//     console.log(typeof argument);
// }

// const someString = someFunction("Hey is this a string?") // string
// const someInt = someFunction("Hey is this an int?") // string
// const realInt = someFunction(8) // number
// const someObj = someFunction({ a: '1' }) // object
// const someArr = someFunction([]) // object
// const undefinedIsType = someFunction() // undefined

// const itemToFind = 2

// for (const item of stock) {
//     if(item.id === itemToFind) {

// item.price = item.price + 4
//     console.log(`Buy a ${item.name} that your bratty ${item.age} year old will love for only $${item.price}.`)
// }
// }
// const things = stock.filter(item => item.id ===itemToFind)
//     console.log(things)

//     const thing = stock.find(item => item.id ===itemToFind)
//     console.log(thing)

const addItemToInventory = (inventory, item) => {
    const lastIndex = inventory.length - 1
    const currentLastItem = inventory[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1

    item.id = idForNewItem
    inventory.push(item)
}
 console.log(toys)
for (const game of games)
{
    addItemToInventory(toys, game)
}
console.log(toys)
