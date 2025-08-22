interface Volume {
    nama: string;
    volume(): void;
}

interface Luaspermukaan {
    jenisluas: string;
    luas(): void;
}

class Kubus implements Volume, Luaspermukaan {
    constructor(sisi) {
        this.nama = "Kubus";
        this.jenisluas = "Kubus";
        this.sisi = sisi;

        if (typeof sisi === 'string') {
            this.info = `Yang di input bukanlah angka!`;
            this.salah = true;
        } else {
            
            this.volum = sisi ** 3;
            this.luaspermukaan = sisi ** 2 * 6;
        }
    }

    volume() {
        if (this.salah) {
            console.log(this.info);
        } else {
            console.log(`Volume ${this.nama} dengan sisi ${this.sisi} adalah ${this.volum}`);
        }
    }

    luas() {
        if (this.salah) {
            console.log(this.info);
        } else {
            console.log(`Luas permukaan ${this.jenisluas} dengan sisi ${this.sisi} adalah ${this.luaspermukaan}`);
        }
    }
}

class Balok implements Volume, Luaspermukaan {
    constructor(panjang,lebar,tinggi) {
        this.nama = "Volume Balok";
        this.jenisluas = "Luas Permukaan Balok";
        this.panjang = panjang
        this.tinggi = tinggi
        this.lebar = lebar

        if (typeof panjang === 'string' || typeof tinggi === 'string' || typeof lebar === 'string') {
            this.info = `Salah Satu Yang di input bukanlah angka!`;
            this.salah = true;
        } else {
            this.volum = panjang * lebar * tinggi;
            this.luaspermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi)) 
        }
    }

    volume() {
        if (this.salah) {
            console.log(this.info);
        } else {
            console.log(`${this.nama} dengan panjang ${this.panjang} , lebar ${this.lebar} dan tinggi ${this.tinggi} adalah ${this.volum}`);
        }
    }

    luas() {
        if (this.salah) {
            console.log(this.info);
        } else {
            console.log(`${this.jenisluas} dengan panjang ${this.panjang} , lebar ${this.lebar} dan tinggi ${this.tinggi} adalah ${this.luaspermukaan}`);
        }
    }
}

class Tabung implements Volume, Luaspermukaan {
    constructor(jarijari,tinggi) {
        this.nama = "Volume Tabung";
        this.jenisluas = "Luas Permukaan Tabung";
        this.jarijari = jarijari
        this.tinggi = tinggi
        

        if (typeof jarijari === 'string' || typeof tinggi === 'string') {
            this.info = `Salah Satu Yang di input bukanlah angka!`;
            this.salah = true;
        } else {
            this.volum = jarijari ** 2 * 3.14 * tinggi;
            this.luaspermukaan = 2 * 3.14 * jarijari * (jarijari+tinggi) ;
        }
    }

    volume() {
        if (this.salah) {
            console.log(this.info);
        } else {
            console.log(`${this.nama} dengan jarijari ${this.jarijari} dan tinggi ${this.tinggi} adalah ${this.volum}`);
        }
    }

    luas() {
        if (this.salah) {
            console.log(this.info);
        } else {
            console.log(`${this.jenisluas} dengan jarijair ${this.jarijari} dan tinggi ${this.tinggi} adalah ${this.luaspermukaan}`);
        }
    }
}
let kubus1 = new Kubus(5)
kubus1.volume()
kubus1.luas()
console.log('')

let balok1 = new Balok(4,5,6)
balok1.volume()
balok1.luas()
console.log('')

let tabung1 = new Tabung(4,6)
tabung1.volume()
tabung1.luas()

