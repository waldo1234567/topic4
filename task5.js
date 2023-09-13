/**
 * setTimeout
 * 
 * Buatlah sebuah fungsi yang menampilkan pesan "Latihan dimulai dalam 5 detik" dan setelah menunggu selama 5 detik, menampilkan pesan "Mulai!".
 * 
 */

// mulaiHitungMundur();
// Latihan dimulai dalam 5 detik...
// Mulai!

function mulaiHitungMundur(){
    console.log("Latihan dimulai dalam 5 detik...");
    setTimeout(()=> {
        console.log("Mulai!");
    },5000)
}

/**
 * setInterval
 * 
 * Buatlah sebuah fungsi yang akan menampilkan pesan "Detik ke-{n}" setiap detik. 
 * Fungsi ini harus berhenti menampilkan pesan setelah mencapai "Detik ke-5".
 * 
 */

// tampilkanDetik();
// "Detik ke-1"
// (setelah 1 detik) "Detik ke-2"
// (setelah 1 detik lagi) "Detik ke-3"
// (setelah 1 detik lagi) "Detik ke-4"
// (setelah 1 detik lagi) "Detik ke-5"

function tampilkanDetik(){
    let count = 0;
    let interval = setInterval(()=>{
        count++;
        console.log(`Detik ke-${count}`);
        if(count == 5){
            clearInterval(interval);
        }
    },1000)
};

/**
 * Cek Lari (Gabungan setTimeout dan setInterval)
 * 
 * Buatlah sebuah fungsi yang ketika dijalankan akan menunggu selama 2 detik, kemudian menampilkan pesan "Mulai latihan!". 
 * Setelah itu, fungsi tersebut akan menampilkan pesan "Lari {n} meter!" setiap 1 detik. 
 * Fungsi ini harus berhenti setelah menampilkan pesan "Lari 10 meter!".
 * 
 */

// mulaiLatihan();
// Tunggu 2 detik...
// "Mulai latihan!"
// (setelah 1 detik) "Lari 1 meter!"
// (setelah 1 detik lagi) "Lari 2 meter!"
// ... 
// (setelah 1 detik lagi) "Lari 10 meter!"

function mulaiLatihan(){
    setTimeout(()=>{
        console.log("Mulai Latihan!");
        let count = 0;
        let intrv2 = setInterval(()=>{
            count++;
            console.log(`Lari ${count} meter!`);
            if(count == 10){
                clearInterval(intrv2);
            }
        },1000);
    },2000)

}

/**
 * Iterasi Array dengan callback
 * 
 * Buatlah fungsi iterasiArrayDenganCallback(arr, callback) yang menerima sebuah array dan sebuah callback. 
 * Fungsi tersebut harus memanggil callback untuk setiap elemen dalam array tersebut.
 */

const data = [1, 2, 3, 4, 5];

function iterasiArrayDenganCallback(arr, callback){
    for(let i =0 ; i < arr.length; i++){
        callback(arr[i], i);
    }
};

// iterasiArrayDenganCallback(data, (item, index) => {
//     console.log(`Index: ${index}, Value: ${item}`);
// });

/**
 * Latihan Callback dengan skenario belanja
 * 
 * Saldo awal sebesar Rp100.000. Anda ingin berbelanja di sebuah toko dengan urutan sebagai berikut:
 * 1. Membeli buku seharga Rp50.000.
 * 2. Membeli pulpen seharga Rp20.000.
 * 3. Membeli penghapus seharga Rp10.000.
 * 4. Membeli pensil seharga Rp5.000.
 * 
 * Tugas:
 * 1. Buatlah fungsi belanja yang menerima saldo awal, harga barang, dan sebuah callback.
 * 2. Fungsi tersebut akan mengurangi saldo dengan harga barang, lalu memanggil callback dengan sisa saldo setelah pembelian.
 * 3. Jika saldo tidak mencukupi untuk pembelian, fungsi harus menampilkan pesan "Uang tidak mencukupi" dan tidak memanggil callback.
 * 4. Gunakan fungsi belanja untuk melakukan setiap pembelian dengan urutan yang sudah ditentukan.
 * 5. Setelah setiap pembelian, tampilkan sisa saldo Anda.
 * 
 */



function belanja(saldo, harga, callback) {
    for(let i = 0; i < harga.length; i++){
        if(harga[i] <= saldo){
            saldo -= harga;
            callback(saldo);
        }else if (harga[i] >= saldo){
            console.log("Uang tidak cukup!");
        }
    }
}

belanja(100000, [50000,20000,10000,5000], (cur)=>{
    console.log(cur);
})


//Output:
// Membeli buku dengan harga Rp50.000. Sisa saldo: Rp50.000.
// Membeli pulpen dengan harga Rp20.000. Sisa saldo: Rp30.000.
// Membeli penghapus dengan harga Rp10.000. Sisa saldo: Rp20.000.
// Membeli pensil dengan harga Rp5.000. Sisa saldo: Rp15.000.

// belanja(100000, listHarga, (item) => {
//     console.log()
// })

/**
 * Pengurutan dengan Callback
 * 
 * Tuliskan sebuah fungsi urutkanArray(arr, compareFunc, callback) yang menerima sebuah array, fungsi perbandingan, dan sebuah callback. 
 * Fungsi tersebut harus mengembalikan array yang sudah diurutkan sesuai dengan fungsi perbandingan ke fungsi callback.
 * 
 */

let result = [];

function urutkanArray(arr, compareFunc, callback){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let c = compareFunc(arr[j],arr[j+1]);
            if(c > 0){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    callback(arr);
}



// urutkanArray([3, 1, 4, 1], (a, b) => a - b, (hasil) => {
//     console.log(hasil); // [1, 1, 3, 4]
// });