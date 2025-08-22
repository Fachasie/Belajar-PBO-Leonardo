interface Animal {
    nama : string
    suara() : void
}

interface Category{
    deskripsi : string
}

class Kucing implements Animal,Category{
    nama : string
    deskripsi: string

    constructor(nama: string, deskripsi :string){
        this.nama = nama
        this.deskripsi = deskripsi
    }
    suara(): void {
        console.log (`${this.nama} ${this.deskripsi} suaranya meong`)
    }
}

let oyen = new Kucing('Kitty','Mamalia')
oyen.suara()