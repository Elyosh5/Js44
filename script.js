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




let i = ['Салам!', 'Манас', '20:40'];
console.log(`Сообщение от ${i[1]}: ${i[0]}\n
Время: ${i[2]}\n-----`);
let i2 = ['Привет)', 'Каныкей', '21:00']
console.log(`Сообщение от ${i2[1]}: ${i2[0]}\n
Время: ${i2[2]}\n-----`);
let i3 = ['Че делаешь?', 'Манас', '21:01'];
console.log(`Сообщение от ${i3[1]}: ${i3[0]}\n
Время: ${i3[2]}\n-----`);
let i4 = ['Сижу...','Каныкей','22:32',];
console.log(`Сообщение от ${i4[1]}: ${i4[0]}\n
Время: ${i4[2]}\n-----`);
