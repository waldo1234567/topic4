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
// console.log(jwb);

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

let collectionUmur = {};

people.forEach(orang=>{
    if(!collectionUmur[orang.usia]){
        collectionUmur[orang.usia] = [];
    }
    collectionUmur[orang.usia].push(orang);
});
console.log(collectionUmur);


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

let arrBaru = [];

const arr = [];
for (let key in kota) {
    arrBaru.push(key,kota[key]);
}

console.log(arrBaru);

/**
 * Mengakses Properti Bertingkat
 * 
 * Diberikan sebuah objek bertingkat. Akses value dar key city
 */

const data = {
    user: {
        profile: {
            name: "John Doe",
            address: {
                city: "Jakarta",
                postalCode: "12345"
            }
        }
    }
};

let result // "Jakarta"

result = data.user.profile.address.city;

console.log(result);

/**
 * Penghitungan Suara Pemilihan
 * 
 * Terdapat sebuah array berisi suara pemilihan. Hitunglah total suara untuk masing-masing kandidat dan kembalikan dalam bentuk objek.
 */

const suara = ['Budi', 'Ana', 'Budi', 'Citra', 'Ana', 'Budi', 'Dewi', 'Dewi', 'Ana'];
// OUTPUT :
// { Budi: 3, Ana: 3, Citra: 1, Dewi: 2 }

let objSuara = {}

suara.forEach(nama => {
    if(!objSuara[nama]){
        objSuara[nama] = 1;
    }else{
        objSuara[nama] += 1;
    }
})
// console.log(objSuara);

/**
 * Menggabungkan Beberapa Objek
 * 
 * Terdapat beberapa objek dengan struktur yang sama. 
 * Gabungkan objek-objek tersebut sehingga setiap kunci memiliki nilai yang merupakan total dari ketiga objek tersebut.
 */

const obj1 = { a: 5, b: 7, c: 3 };
const obj2 = { a: 4, b: 1, c: 8 };
const obj3 = { a: 9, b: 2, c: 5 };

let objTotal = {};

for(let key in obj1){
    objTotal[key] = 0;

    objTotal[key] += obj1[key];
    objTotal[key] += obj2[key];
    objTotal[key] += obj3[key];
}

console.log(objTotal);


/**
 * Mencari Nilai Tertinggi dan tampilkan nama dan nilainya
 * 
 * Gunakan looping untuk mencarinya. Lalu resultnya menjadi string dengan pernyataan
 */

const mahasiswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ana", nilai: 90 },
    { nama: "Dono", nilai: 78 },
    { nama: "Dewi", nilai: 92 }
];

let newList = {}

mahasiswa.forEach(orang => {
    if(Math.max(orang.nilai)){
       newList =  Object.assign({}, orang);
    }
})
console.log(newList);
console.log(`Murid yang memiliki nilai tertinggi adalah ${newList['nama']} dengan nilai ${newList['nilai']}`);


