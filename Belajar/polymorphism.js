class Vehicle {
    soundbah(){
        console.log(`Kendaraan Berusara`)
    }
}
class Mobil extends Vehicle{
    sound(){
        console.log(`Ngeeeeeng`)
    }
}
class Bike extends Vehicle{
    sound(){
        return `NGOEOEGNGOEGOENG`
    }
}
printer = new Mobil()
printer.soundbah()
motor = new Bike()
console.log(`Motor Be Like...${motor.sound()}`)

class Tipeangka{
    constructor(angka){
        this.angka = angka
        if(typeof angka === "string"){
            this.jawaban = `Bukan angka, tapi string : ${this.angka}` 
        }  else {
        this.jawaban = `ini adalah angka : ${this.angka}`
        }
    }
    cetakinfo(){
        console.log(this.jawaban)
    }
}
 let number1 = new Tipeangka(30)
 number1.cetakinfo()