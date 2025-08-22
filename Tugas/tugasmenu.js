class Menu {
    constructor(menu, jumlah) {
        this.menu = menu;
        this.jumlah = jumlah;
        this.harga = 0;
        this.namamakan = '';
        this.total = 0;
        this.totalpajak = 0;

        if (menu === 1) {
            this.harga = 10000;
            this.namamakan = "Nasi Uduk";
        } else if (menu === 2) {
            this.harga = 15000;
            this.namamakan = "Nasi Goreng";
        } else if (menu === 3) {
            this.harga = 19000;
            this.namamakan = "Nasi Kebuli";
        } else if (menu === 4) {
            this.harga = 25000;
            this.namamakan = "Bebek Bakar";
        } else if (menu === 5) {
            this.harga = 8000;
            this.namamakan = "Es Teh Manis";
        } else {
            throw new Error('Menu Tidak Ada');
        }

        if (jumlah > 20 ) {
            throw new Error('Stok Tidak Tersedia Sebanyak itu');
        }
    }

    // pelanggan melihat menu
    pilihmenu() {
        console.log('Daftar Menu:');
        console.log('1. Nasi Uduk');
        console.log('2. Nasi Goreng');
        console.log('3. Nasi Kebuli');
        console.log('4. Bebek Bakar');
        console.log('5. Es Teh Manis');
        console.log(`Pilih Menu: ${this.menu}`);
        console.log('');
    }
}

class Hitung extends Menu {
    constructor(menu, jumlah) {
        super(menu, jumlah);
    }

    hitungtotal() {
        this.total = this.harga * this.jumlah;
    }

    hitungtotalpajak() {
        this.totalpajak = this.total + (this.total * 0.1);
    }
}

class Pilihdanprint extends Hitung {
    constructor(menu, jumlah) {
        super(menu, jumlah);
        this.hitungtotal();
        this.hitungtotalpajak();
    }

    print() {
        console.log(`Menu: ${this.menu}. ${this.namamakan}`);
        console.log(`Jumlah: ${this.jumlah}`);
        console.log('');
        console.log('NOTA');
        console.log(`Menu: ${this.menu}. ${this.namamakan}`);
        console.log(`Harga Satuan: Rp${this.harga}`);
        console.log(`Jumlah: ${this.jumlah}`);
        console.log(`Total Sebelum Pajak: Rp${this.total}`);
        console.log(`Pajak 10%`);
        console.log(`Total Bayar: Rp${this.totalpajak}`);
        console.log('Terima Kasih');
    }
}


try {
    let bon = new Pilihdanprint(3, 9);  
    bon.pilihmenu();          
    bon.print();              // cetak nota
} catch (error) {
    console.error('Terjadi Error:', error.message);
}