function kategoriUsia(umur) {
    if (umur <= 12) {
        console.log("Anak-anak");
    } else if (umur <= 19) {
        console.log("Remaja");
    } else if (umur <= 35) {
        console.log("Dewasa");
    } else {
        console.log("Lanjut Usia");
    }
}

// kategoriUsia(4);
// kategoriUsia(13);
// kategoriUsia(20);
// kategoriUsia(36);

/**

Soal Latihan: Penentuan Biaya Parkir

Sebuah mal memiliki aturan biaya parkir sebagai berikut:

1. Jika parkir kurang dari atau sama dengan 1 jam, maka biaya parkirnya adalah Rp10.000.
2. Untuk setiap jam berikutnya (lebih dari 1 jam), biaya tambahan adalah Rp5.000/jam.
3. Jika parkir lebih dari 5 jam, akan diberikan diskon Rp10.000 dari total biaya.
4. Parkir di hari Minggu dikenakan biaya tambahan Rp5.000.
5. Jika total biaya parkir lebih dari Rp30.000 dan parkir dilakukan pada hari libur nasional, maka akan diberikan diskon tambahan sebesar Rp7.000.

Buatlah fungsi hitungBiayaParkir(lamaParkir, hari, liburNasional) yang menerima parameter:
1. lamaParkir (number): Durasi parkir dalam jam.
2. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
3. liburNasional (boolean): Menandakan apakah hari itu merupakan libur nasional atau tidak (true jika ya, false jika tidak).

Fungsi ini harus mengembalikan biaya parkir berdasarkan kondisi yang diberikan.

*/

function hitungBiayaParkir(lamaParkir, hari, liburNasional) {
    let total = 0;
    if (lamaParkir >= 1) {
        total = 10000;
        if (lamaParkir <= 5) {
            for (let i = 1; i < lamaParkir; i++) {
                total += 5000;
            }
            if (lamaParkir > 5) {
                total -= 10000;
            }
        }
    }
    if (hari == "minggu") {
        total += 5000;
    }
    if (total > 30000 && liburNasional == true) {
        total -= 7000;
    }

    return total;
}

console.log(hitungBiayaParkir(0, 'senin', false));
console.log(hitungBiayaParkir(7, 'senin', false));

function jadwalFestivalHari(hari,cuaca,suhu,angin){
    let daftar = ["Pameran Seni"];
    if(cuaca == "hujan" && angin > 20){
        daftar.push("Pameran Seni");
    }else if(cuaca == "hujan" && angin < 20){
        daftar.push("acara outdoor dipindahkan ke dalam ruangan");
    }
    if(suhu < 5){
        daftar.push("acara konser malam diganti dengan indoor");
    }
    if(cuaca == "cerah" && suhu > 25){
        daftar.push("Pesta Es krim");
    }
    if(hari == "minggu" && cuaca == "cerah"){
        daftar.push("Maraton Senja");
    }else{
        daftar.push("Pameran Seni");
    }

    return daftar;
}
console.log(jadwalFestivalHari('sabtu', 'hujan', 23, 30));