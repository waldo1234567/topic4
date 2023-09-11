/**
 * Konversi Array ke Objek
 * 
 * Diberikan sebuah array yang berisi string, [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ] dan sebuah array berisi number, [4, 6, 6, 5]. 
 * Ubahlah array tersebut menjadi objek dengan kunci berupa nama buah dan nilai berupa panjang dari nama buah tersebut.
 */

let fruits = ['Apel', 'Mangga', 'Pisang', 'Jeruk']
let amount = [4, 6, 6, 5]

// OUTPUT: { Apel: 4, Mangga: 6, Pisang: 6, Jeruk: 5 }

let buah = {};

for (let i = 0; i < fruits.length; i++) {
    buah[fruits[i]] = amount[i];
}

// console.log(buah);

/**
 * Menghitung Kemunculan Kata
 * 
 * Diberikan sebuah kalimat, "saya suka makan nasi goreng dan saya juga suka minum teh". 
 * Buatlah sebuah objek yang menghitung berapa kali masing-masing kata muncul di dalam kalimat tersebut.
 */

let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh"

// OUTPUT:  { saya: 2, suka: 2, makan: 1, nasi: 1, goreng: 1, dan: 1, juga: 1, minum: 1, teh: 1 }

const kata = favWord.split(" ");
const jwb = {};
let count = 0;

for (let i = 0; i < kata.length; i++) {
    if (!jwb[kata[i]]) {
        jwb[kata[i]] = 1;
    } else{
        jwb[kata[i]] += 1;
    }
}
console.log(jwb);

/**
 * Grup Orang Berdasarkan Usia
 * 
 * Diberikan sebuah array objek yang berisi nama dan usia.
 * 1. Akses umur Dewi
 * 2. Kelompokkan objek didalam array berdasarkan usia, dan keluarkan dalam bentuk objek
 * 
 */

const people = [
    { nama: "Budi", usia: 25 },
    { nama: "Ana", usia: 20 },
    { nama: "Citra", usia: 25 },
    { nama: "Dewi", usia: 32 },
    { nama: "Eka", usia: 30 }
]

let umurDewi;
for (let i = 0; i < people.length; i++) {
    if (people[i].nama == "Dewi") {
        umurDewi = people[i].usia;
    }
}

// console.log(umurDewi);
// OUTPUT: 32

let collectionUmur;

// for(let i = 0; i < people.length; i++){
//     if(people[i].usia < people[i+1].usia){
//         collectionUmur = people[i].usia;
//         people[i].usia = people[i+1].usia;
//         people[i+1].usia = collectionUmur;
//     }
// }
// console.log(collectionUmur);

// OUTPUT:
// {
//     20: [ { nama: 'Ana', usia: 20 } ],
//     25: [ { nama: 'Budi', usia: 25 }, { nama: 'Citra', usia: 25 } ],
//     30: [ { nama: 'Eka', usia: 30 } ],
//     32: [ { nama: 'Dewi', usia: 20 } ]
// }

/**
 * Konversi Objek ke Array
 * 
 * Rubah objek menjadi array dengan metode looping yang dimana akan dinamis.
 */

const kota = {
    Jakarta: 10,
    Bandung: 5,
    Surabaya: 7,
    Medan: 4
};

const arr = [];
for (let key in kota) {
    arr.push(kota[key]);
}

// console.log(arr);