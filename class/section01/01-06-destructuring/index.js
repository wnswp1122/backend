const profile = {
    name : "철수",
    age : 12,
    school : "송현초등학교"
}

const {name,school} = profile
console.log(name)
console.log(school)

function de({apple,banana}){
    console.log(apple)
    console.log(banana)
}

const fruit = {
    apple : 3,
    banana : 10
}

de(fruit)