let Identitas = class Identity{
    constructor(nama,umur,proglat){
        this.nama = nama
        this.umur = umur
        this.proglat = proglat
    }   
}
// instantiate the class 
let namapeserta = new Identitas( 'Leonardo Fachasie',26,`Web Dev`)
console.log(`Nama       - ${namapeserta.nama}`)
console.log(`Usia       - ${namapeserta.umur}`)
console.log(`Program    - ${namapeserta.proglat}`)