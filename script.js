let words = ["Just", "Do", "It", "!"]
console.log(words.join(''));





let chars = ["A", "C", "E", "F", "I", "M"]
let vowels = []
vowels.push("A","E","I")
console.log(vowels)


let cities1 = ["Bishkek", "London", "Tokyo", "Oslo", "Berlin"]
let cities2 = []
cities2.push("London","Oslo","Berlin")
console.log(cities2)




let cities3 = ["Bishkek", "London", "Tokyo", "Oslo", "Berlin"]
let cities4 = []
for (let i = 0; i < cities3.length; i++){
    if (cities3[i].length % 2 == 0){
        cities4.push(cities3[i]);
    }
}
console.log(cities4);

let text =prompt("Введите текст:")
let text2 = text.split("")
console.log(text2.reverse().join(""))
