let fruits = ['apple', 'banana', 'cherry']
fruits.pop();

// console.log(fruits);

let bulkAlphabet = ['a', 'b', 'c', 'd', 'e']
// console.log(bulkAlphabet.length);

let angkaUnik = [21, 19, 10, 89, 3, 20, 33, 34];

function urut(angkaUnik) {
    for (let j = 0; j < angkaUnik.length; j++) {
        for (let i = 0; i < angkaUnik.length; i++) {
            if (angkaUnik[i] > angkaUnik[i + 1]) {
                let temp = angkaUnik[i];
                angkaUnik[i] = angkaUnik[i + 1];
                angkaUnik[i + 1] = temp;
            }
        }
    }
    return angkaUnik;
}
console.log(urut(angkaUnik));

let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
let result1 = arr1.concat(arr2);
console.log(`${result1} ===> nomor 1`);
let newArr = [];
// for(let i = 0; i < arr1.length + arr2.length; i++){
//     n
// }


let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let angkaGanjil = []

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 != 0) {
        angkaGanjil.push(arr3[i]);
    }
}


console.log(angkaGanjil);


let angkaKumupulan = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function urutTerbalik(num) {
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[j] < num[j + 1]) {
                let temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    return num
}

const newNumber = angkaKumupulan.filter(function (i, item) {
    return angkaKumupulan.indexOf(i) === item;
});
// console.log(urutTerbalik(angkaKumupulan));
console.log(newNumber);


let kumpulanAngka = [1, 2, 3];
let kumpulanHuruf = ["a", "b", "c"];
let newArr2 = gabung(kumpulanAngka, kumpulanHuruf);

function gabung(satu, dua) {
    for (let j = 0; j < dua.length; j++) {
        satu.push(dua[j]);
    }
    return satu;
}

function pisah(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === typeof arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    return arr;
}


console.log(newArr2);
console.log(pisah(newArr2));
