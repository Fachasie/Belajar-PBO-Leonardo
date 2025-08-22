class Identitas{
    constructor(nama,umur,proglat){
        this.nama = nama
        this.umur = umur
        this.proglat = proglat
    }   
}
// instantiate the class 
let namapeserta = new Identitas('Leonardo Fachasie',26,`Web Dev`,54)
console.log(`Nama       - ${namapeserta.nama}`)
console.log(`Usia       - ${namapeserta.umur}`)
console.log(`Program    - ${namapeserta.proglat}`)
