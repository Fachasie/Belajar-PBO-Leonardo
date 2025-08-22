class LBD{
    constructor({sisi,panjang,lebar,tinggi,alas,jarijari}){
        this.sisi = sisi
        this.panjang = panjang
        this.lebar = lebar
        this.tinggi = tinggi
        this.alas = alas
        this.jarijari = jarijari
    }
}
class luasPersegi extends LBD {
    constructor(sisi){
        super({sisi})
    }
    hitungluaspersegi(){
        console.log(`Luas Persegi Dengan sisi ${this.sisi} = `, this.sisi*this.sisi)
    }
}
class luasPersegipanjang extends LBD {
    constructor(panjang,lebar){
        super({panjang,lebar})
    }
    hitungluaspersegipanjang(){
        console.log(`Luas Persegi Panjang Dengan panjang ${this.panjang} dan lebar ${this.lebar} = `, this.panjang*this.lebar)
    }
}
class luasSegitiga extends LBD {
    constructor(alas,tinggi){
        super({alas,tinggi})
    }
    hitungluassegitiga(){
        console.log(`Luas Segitiga Dengan Alas ${this.alas} dan tinggi ${this.tinggi} = `, this.alas*this.tinggi / 2)
    }
}
class luasLingkaran extends LBD {
    constructor(jarijari){
        super({jarijari})
    }
    hitungluaslingkaran(){
        console.log(`Luas Lingkaran Dengan Jari-Jari ${this.jarijari} = `, this.jarijari*this.jarijari * 3.14)
    }
}
class luasJajargenjang extends LBD {
    constructor(alas,tinggi){
        super({alas,tinggi})
    }
    hitungluasjajar(){
        console.log(`Luas Jajar Genjang Dengan Alas ${this.alas} dan Tinggi ${this.tinggi} = `, this.alas*this.tinggi)
    }
}
let luaspersegi1 = new luasPersegi(4)
luaspersegi1.hitungluaspersegi()

let luaspersegipanjang1 = new luasPersegipanjang(4,6)
luaspersegipanjang1.hitungluaspersegipanjang()

let luasSegitiga1 = new luasSegitiga(5,6)
luasSegitiga1.hitungluassegitiga()

let luasLingkaran1 = new luasLingkaran(7)
luasLingkaran1.hitungluaslingkaran()

let luasjajargenjang1 = new luasJajargenjang(4,11)
luasjajargenjang1.hitungluasjajar()