var Kubus = /** @class */ (function () {
    function Kubus(sisi) {
        this.nama = "Kubus";
        this.jenisluas = "Kubus";
        this.sisi = sisi;
        if (typeof sisi === 'string') {
            this.info = "Yang di input bukanlah angka!";
            this.salah = true;
        }
        else {
            this.volum = Math.pow(sisi, 3);
            this.luaspermukaan = Math.pow(sisi, 2) * 6;
        }
    }
    Kubus.prototype.volume = function () {
        if (this.salah) {
            console.log(this.info);
        }
        else {
            console.log("Volume ".concat(this.nama, " dengan sisi ").concat(this.sisi, " adalah ").concat(this.volum));
        }
    };
    Kubus.prototype.luas = function () {
        if (this.salah) {
            console.log(this.info);
        }
        else {
            console.log("Luas permukaan ".concat(this.jenisluas, " dengan sisi ").concat(this.sisi, " adalah ").concat(this.luaspermukaan));
        }
    };
    return Kubus;
}());
var Balok = /** @class */ (function () {
    function Balok(panjang, lebar, tinggi) {
        this.nama = "Volume Balok";
        this.jenisluas = "Luas Permukaan Balok";
        this.panjang = panjang;
        this.tinggi = tinggi;
        this.lebar = lebar;
        if (typeof panjang === 'string' || typeof tinggi === 'string' || typeof lebar === 'string') {
            this.info = "Salah Satu Yang di input bukanlah angka!";
            this.salah = true;
        }
        else {
            this.volum = panjang * lebar * tinggi;
            this.luaspermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
        }
    }
    Balok.prototype.volume = function () {
        if (this.salah) {
            console.log(this.info);
        }
        else {
            console.log("".concat(this.nama, " dengan panjang ").concat(this.panjang, " , lebar ").concat(this.lebar, " dan tinggi ").concat(this.tinggi, " adalah ").concat(this.volum));
        }
    };
    Balok.prototype.luas = function () {
        if (this.salah) {
            console.log(this.info);
        }
        else {
            console.log("".concat(this.jenisluas, " dengan panjang ").concat(this.panjang, " , lebar ").concat(this.lebar, " dan tinggi ").concat(this.tinggi, " adalah ").concat(this.luaspermukaan));
        }
    };
    return Balok;
}());
var Tabung = /** @class */ (function () {
    function Tabung(jarijari, tinggi) {
        this.nama = "Volume Tabung";
        this.jenisluas = "Luas Permukaan Tabung";
        this.jarijari = jarijari;
        this.tinggi = tinggi;
        if (typeof jarijari === 'string' || typeof tinggi === 'string') {
            this.info = "Salah Satu Yang di input bukanlah angka!";
            this.salah = true;
        }
        else {
            this.volum = Math.pow(jarijari, 2) * 3.14 * tinggi;
            this.luaspermukaan = 2 * 3.14 * jarijari * (jarijari + tinggi);
        }
    }
    Tabung.prototype.volume = function () {
        if (this.salah) {
            console.log(this.info);
        }
        else {
            console.log("".concat(this.nama, " dengan jarijari ").concat(this.jarijari, " dan tinggi ").concat(this.tinggi, " adalah ").concat(this.volum));
        }
    };
    Tabung.prototype.luas = function () {
        if (this.salah) {
            console.log(this.info);
        }
        else {
            console.log("".concat(this.jenisluas, " dengan jarijair ").concat(this.jarijari, " dan tinggi ").concat(this.tinggi, " adalah ").concat(this.luaspermukaan));
        }
    };
    return Tabung;
}());
var kubus1 = new Kubus(5);
kubus1.volume();
kubus1.luas();
console.log('');
var balok1 = new Balok(4, 5, 6);
balok1.volume();
balok1.luas();
console.log('');
var tabung1 = new Tabung(4, 6);
tabung1.volume();
tabung1.luas();
