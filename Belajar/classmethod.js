// class Car{
//     // method
//     sound(){
//         return 'Bremmm... net...net'
//     }
// }
// //instantiate
// let mobil1 = new Car()
// console.log(mobil1.sound())


// iseng bikin tambah tambahan
class Hitung{
    // method tambah
    tambah(x,y){
        return x+y+' ini Ditambah'
    }
}
 // instantiate
let aritmatika= new Hitung()
angka1 = 8
angka2 = 9
console.log(aritmatika.tambah(angka1,angka2))




//tipe data, control program di class
class Mobil{
    constructor(kecepatan){
        this.kecepatan = kecepatan
    }
    get kecepatan(){
        return this._kecepatan
    }
    set kecepatan(jumlah){
        if (jumlah <= 0) {
            throw new Error('Mobil Aneh Tidak bisa jalan')
        }
    }

    informasi(){
        console.log(`Mobil memiliki kecepatan ${this.kecepatan} Km/Jam`)

        if(this.kecepatan > 120){
            console.log('Mobil Berjalan terlalu cepat')
        } else if(this.kecepatan > 0){
            console.log(`mobil berjalan`)
        }
    }
}

try{


//instantiate
let mobil1 = new Mobil(-30)
mobil1.informasi()
let mobil2 = new Mobil(130)
mobil2.informasi()
} catch(error) { console.error('Error Terjadi kesalah ', error.message)}
