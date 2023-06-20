const cities = ['Dhaka','Tangail','Rajshahi','Rangpur']

const country = {
    name: 'Bangladesh',
    capital: 'Dhaka'
}

// for (city in cities){
//     console.log(city)
// }

for (city of cities){
    //console.log(city)
}

for (prop in country){
    //console.log(prop)
}

for (prop in country){
    console.log(country[prop])
}
