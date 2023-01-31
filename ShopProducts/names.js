let chocolates = [{ "name": "Milky bar", "brand": "Nestle" }, { "name": "Mars", "brand": "Mars" }, { "name": "Dairy milk", "brand": "Cadbury" }, { "name": "Snickers", "brand": "Mars" }, { "name": "Toblerone", "brand": "Toblerone" }, { "name": "5 star", "brand": "Cadbury" }, { "name": "Ferrero Rocher", "brand": "Ferrero Rocher" }]
let chocolatesPrice = ["10", "40", "10", "40", "120", "10", "200"]

let fruits = ["Banana", "Strawberries", "Grapes", "Muskmelon", "Custard Apple", "Apple"];
let fruitsPrice = ["70", "140", "100", "80", "300", "120"];

let soaps = [{ "name": "Hamam", "brand": "Unilever" }, { "name": "Mysore Sandal", "brand": "Karnataka Soaps and Detergents Limited (KSDL)" }, { "name": "Lux", "brand": "Unilever" }, { "name": "Park Avenue Fragrant Deo Soap", "brand": "Park Avenue" }, { "name": "Dettol Original Soap", "brand": "Dettol" }];
let soapsPrice = ["40", "60", "45", "90", "35"];

let biscuits = [{ "name": "Milk Bikis", "brand": "Brittania" }, { "name": "Good Day", "brand": "Cadbury" }, { "name": "Marie Gold", "brand": "Brittania" }, { "name": "Hide n Seek", "brand": "Parle" }, { "name": "Parle-G", "brand": "Parle" }, { "name": "Oreo", "brand": "Cadbury" }]
let biscuitsPrice = ["20", "30", "20", "30", "10", "30"];

let pens = [{ "name": "Brite", "brand": "Reynolds" }, { "name": "Jitter", "brand": "Parker" }, { "name": "Pin Point", "brand": "Cello" }, { "name": "MistBlue", "brand": "Nataraj" }]
let pensPrice = ["10", "200", "25", "5"]

let fruitsData = [];
let chocolatesData = []
let pensData = [];
let biscuitsData = [];
let soapsData = [];

fruits.forEach((fruit, index) => {
    fruitsData.push({
        "name": fruit,
        "price": fruitsPrice[index],
        "category": ["food", "fruits"]
    })
})

chocolates.forEach((chocolate, index) => {
    chocolatesData.push({
        ...chocolate,
        "price": chocolatesPrice[index],
        "category": ["food", "chocolates"]
    })
})

biscuits.forEach((biscuit, index) => {
    biscuitsData.push({
        ...biscuit,
        "price": biscuitsPrice[index],
        "category": ["food", "biscuits"]
    })
})

soaps.forEach((soap, index) => {
    soapsData.push({
        ...soap,
        "price": soapsPrice[index],
        "category": ["soaps", "body care"]
    })
})

pens.forEach((pen, index) => {
    pensData.push({
        ...pen,
        "price": pensPrice[index],
        "category": ["pens", "stationary"]
    })
})


let fruitsSchema={
    $jsonSchema: {
       required: [ "name","price","category"],
       properties: {
          name: {
             bsonType: "string",
             description: "must be a string and is required"
          },
          price:{
            bsonType:"string",
            description: "must be a strng and is required"
          },
          category:{
            bsonType:["array"],
            minItems:1,
            uniqueItems:true
          }
          }
       }
    }

// console.log(chocolatesData);
// console.log(soapsData);
// console.log(biscuitsData);
console.log(fruitsData);
// console.log(pensData);


let fruitsCol = [
    { name: 'Banana', 
    price: '70', category: ['food', 'fruits'] },
    {
        name: 'Strawberries',
        price: '140',
        category: ['food', 'fruits']
    },
    { name: 'Grapes', price: '100', category: ['food', 'fruits'] },
    { name: 'Muskmelon', price: '80', category: ['food', 'fruits'] },
    {
        name: 'Custard Apple',
        price: '300',
        category: ['food', 'fruits']
    },
    { name: 'Apple', price: '120', category: ['food', 'fruits'] }
]
