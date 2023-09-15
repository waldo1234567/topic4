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

let hargaBuku = 50000
let barang1 = "Buku"

let barang2 = "Pulpen"
let hargaPulpen = 20000

let barang3 = "Penghapus"
let hargaPenghapus = 10000

let barang4 = "Pensil"
let hargaPensil = 5000
// let functionCB = function (sisaSaldo);

let saldoAwal = 100000

// function belanja(saldoAwal, hargaBarang, jenisBarang, callback) {

//     if (saldoAwal >= hargaBarang) {
//         saldoAwal -= hargaBarang
//         console.log(`Membeli ${jenisBarang} dengan harga ${hargaBarang}. Dan sisa saldo adalah ${saldoAwal}`);
//         callback(saldoAwal)
//     } else {
//         console.log("Duh uangnya ga cukup, silahkan nabung");
//     }
// }


// belanja(saldoAwal, hargaBuku, barang1, function(sisaSaldo) {

//     belanja(sisaSaldo, hargaPulpen, barang2, function(sisaSaldo) {

//         belanja(sisaSaldo, hargaPenghapus, barang3, function(sisaSaldo3) {

//             belanja(sisaSaldo3, hargaPensil, barang4, function (sisaSaldo4) {

//                 belanja(sisaSaldo4, hargaPenghapus, barang3, function(sisaSaldo5) {

//                     belanja(sisaSaldo5, hargaBuku, barang1, function(_) {

//                     })

//                 })

//             })

//         })

//     })

// })




//Output:
// Membeli buku dengan harga Rp50.000. Sisa saldo: Rp50.000.
// Membeli pulpen dengan harga Rp20.000. Sisa saldo: Rp30.000.
// Membeli penghapus dengan harga Rp10.000. Sisa saldo: Rp20.000.
// Membeli pensil dengan harga Rp5.000. Sisa saldo: Rp15.000.

// ============================================================================================================================

/**
 * Buatlah tiga fungsi yang masing-masing mengembalikan Promise. 
 * Fungsi pertama langkahPertama di-resolve DALAM 2 DETIK dengan pesan "Langkah 1 selesai", 
 * fungsi kedua langkahKedua di-resolve DALAM 3 DETIK dengan pesan "Langkah 2 selesai", dan 
 * fungsi ketiga langkahKetiga di-resolve DALAM 1 DETIK dengan pesan "Langkah 3 selesai".
 * Panggil ketiga fungsi tersebut secara berurutan menggunakan chaining sehingga pesan ditampilkan dalam urutan yang benar.
 */

function fungsiSatu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Langkah 1 selesai"));
        }, 2000)

    })
}

function fungsiDua() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Langkah 2 selesai"))
        }, 3000)
    })
}

function fungsiTiga() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Langkah 3 selesai"));
        }, 1000)
    })
}


// fungsiSatu()
//     .then((resolve)=> fungsiDua(resolve))
//     .then((resolve)=> fungsiTiga(resolve))
//     .catch(()=>{
//         console.log("ada yang salah");
//     })
/**
 * Ubahlah chaining Promise dari soal sebelumnya menjadi sebuah fungsi async yang menggunakan await untuk menunggu setiap langkah selesai sebelum melanjutkan ke langkah berikutnya.
 */
function functionOne(waktu) {
    return new Promise((resolve) => {
        setTimeout(resolve, waktu)
    });
};

async function steps() {
    try {
        await functionOne(2000);
        console.log("Langkah 1 selesai");

        await functionOne(3000);
        console.log("Langkah 2 selesai");

        await functionOne(1000);
        console.log("Langkah 3 selesai");
    }
    catch {
        console.log("something wrong");
    }
}

// steps();

/**
 * Ubahlah Callback hell Belanja menjadi fungsi yang mengembalikan Promise
 */

function belanja2(saldoAwal, hargaBarang, jenisBarang) {
    return new Promise((resolve, reject) => {
        if (saldoAwal >= hargaBarang) {
            saldoAwal -= hargaBarang;
            console.log(`Membeli ${jenisBarang} dengan harga ${hargaBarang}. Dan sisa saldo adalah ${saldoAwal}`);
            resolve(saldoAwal);
        } else {
            return reject("Duh uangnya ga cukup, silahkan nabung");
        }
    })
}

// belanja2(saldoAwal,hargaBuku,barang1)
//     .then((resolve) => belanja2(resolve,hargaPulpen,barang2))
//     .then((resolve) => belanja2(resolve,hargaPenghapus,barang3))
//     .then((resolve) => belanja2(resolve,hargaPensil,barang4))
//     .then((resolve) => belanja2(resolve,hargaBuku,barang1))
//     .catch((reject) => console.log(reject));

/**
 * Error Handling dengan Async/Await
 * Buatlah sebuah fungsi async pembagian yang menerima dua argumen, pembilang dan penyebut. 
 * Fungsi tersebut harus mengembalikan hasil bagi jika penyebut bukan 0 dan melempar sebuah kesalahan jika penyebut adalah 0. 
 * Tangani kesalahan tersebut menggunakan blok try/catch dalam fungsi async.
 */

async function pembagian(pembilang, penyebut) {
    try {
        if (penyebut === 0) {
            throw new Error("Penyebut tidak boleh 0!");
        }
        else {
            let hasil = pembilang / penyebut;
            return hasil;
        }
    }
    catch(error){
        return error;
    }
}

pembagian(20,4)
    .then((_) => console.log(_))
    .catch((error)=> console.log(error))