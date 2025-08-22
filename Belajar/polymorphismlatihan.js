class Volume{
    constructor(nama,{sisi,panjang,lebar,tinggi,alas,jarijari}){
        this.nama = nama
        this.sisi = sisi
        this.panjang = panjang
        this.lebar = lebar
        this.tinggi = tinggi
        this.alas = alas
        this.jarijari = jarijari
    }
    volume(){
        console.log(``)
    }
}

class volKubus extends Volume {
    constructor(sisi){
        super("Kubus",{sisi})
        if(typeof sisi === 'string'){
            this.info = `Yang di Input Bukanlah Angka!`
            this.salah = true
        } else {
            this.volum = this.sisi ** 3
        }
    }
    volume(){
        if(this.salah) {
            console.log(this.info)
        } else {
        console.log(`Volume ${this.nama} dengan panjang Sisi ${this.sisi} = `, this.volum)
        }
    }
}

class volBalok extends Volume {
    constructor(panjang,tinggi,lebar){
        super("Balok",{panjang,tinggi,lebar})
                if(typeof panjang === 'string' || typeof tinggi === 'string' || typeof lebar === 'string'){
            this.info = `Salah Satu yang di input bukanlah Angka!`
            this.salah = true
        } else {
            this.volum = this.panjang * this.tinggi * this.lebar
        }
    }
    volume(){
        if(this.salah) {
            console.log(this.info)
        } else { console.log(`Volume ${this.nama} dengan panjang ${this.panjang} , tinggi ${this.tinggi} dan lebar ${this.lebar} = `, this.volum)
    }
    }
}

class volTabung extends Volume {
    constructor(jarijari,tinggi){
        super("Tabungam",{jarijari,tinggi})
        if(typeof jarijari === 'string' || typeof tinggi === 'string'){
            this.info = `Salah Satu yang di input bukanlah Angka!`
            this.salah = true
        } else {
        this.volum = this.jarijari ** 2 * 3.14 * this.tinggi
        }
    }
    volume(){
        if(this.salah) {
            console.log(this.info)
        } else {console.log(`Volume ${this.nama} dengan Jari-Jari ${this.jarijari} dan tinggi ${this.tinggi} = `, this.volum)
    }
    }
}
let kubus = new volKubus(6)
kubus.volume()
let balok = new volBalok(4,5,7)
balok.volume()
let tabung = new volTabung(4,10)
tabung.volume()