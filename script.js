'use strict'

// function counter(n) {
//     return function (x) {
//         return x + n
//     }
// }

// let sum = counter(1)
// console.log(sum(15));

// url generator

function pathGenerator(url) {
    return function (imageName) {
        return url + imageName
    }
}

let urlToIcons = pathGenerator('http://mydomain.ru/assets/icons/')
let urlToImages = pathGenerator('http://mydomain.ru/assets/images/')

console.log(urlToIcons('clock.svg'));
console.log(urlToImages('main.png'));