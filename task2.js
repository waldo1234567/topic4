/**
 * Tulis sebuah program untuk menampilkan angka genap dari 1 hingga 20
 */
for(let i = 1 ; i <= 20; i++){
    if(i % 2 ==0){
        console.log(i);
    }
};

/**
 * Tulis sebuah program yang menghitung jumlah dari angka 1 hingga 100.
 */

for(let i = 1 ; i <= 100; i++){
    console.log(i);
};

/**
 * Pola Segitiga Naik
 * Tampilkan pola segitiga asteriks sebagai berikut untuk n = 5. Contoh:

*
**
***
****
*****

 */

let n = 5;
let bintang = ""
for(let i = 1; i <= n; i++){
    for(let j = 0 ; j < i ; j++){
        bintang += "*";
    }
    bintang += "\n";
}

// console.log(bintang);

/**
 * Pola Segitiga Terbalik
 * Tampilkan pola segitiga asteriks terbalik sebagai berikut untuk n = 5. Contoh:
 
*****
****
***
**
*

 */

let p = 5;
let bintang2 = ""
for(let i = 0 ; i < n; i++){
    for(let j = 0 ; j < n - i ; j++){
        bintang2 += "*";
    }
    bintang2 += "\n";
}

// console.log(bintang2);

let u = 5;
let bintang3 = "";

for(let i = 1; i <= u ; i++){
    for(let j = u; j > i; j--){
        bintang3 += " ";
    }
    for(let k = 0; k < i * 2 - 1; k++){
        bintang3 += "*";
    }
    bintang3 += "\n";
}
for(let i = 1; i <= u - 1 ; i++){
    for(let j = 0; j < i; j++){
        bintang3 += " ";
    }
    for(let k = (n - i) * 2 - 1; k > 0; k--){
        bintang3 += "*";
    }
    bintang3 += "\n";
}

console.log(bintang3);

/**
 * Pola Segitiga Bilangan
 * Tampilkan pola segitiga dengan angka dengan asteriks sebagai pemisah:

1
1*2
1*2*3
1*2*3*4
1*2*3*4*5

 */

// let num = 5;
// let star = "";

// for(let i = 1 ; i <= num ; i ++){
//     for(let j = 0; j < i; j++){
//         if(j = 1){
            
//         }
//         if(j = 5){
//             console.log()
//         }
//     }
// }