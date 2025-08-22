// deklarasi class
class Identitas{
    constructor(nama,umur,proglat,nilai,grade){
        this.nama = nama
        this.umur = umur
        this.proglat = proglat
        this.nilai = nilai
        this.grade = grade
    }   
     
    get nilai(){
        return this._nilai
     }
     set nilai(x){
        if (x > 100){
            throw new Error('Nilai tidak dapat lebih dari 100') // melempar error jika nilai lebih dari 100
            
        } else if(x < 100){
            throw new Error('Nilai tidak dapat kurang dari 0... Kasian') // melempar error jika nilai kurang dari 0
        }else {
            this._nilai = x
        }
     } 
     
// method cetak biar mudah jika ingin cetak lagi
    cetaknama(){
        console.log(`Nama       - ${this.nama}`)
    }
    cetakumur(){
        console.log(`Umur       - ${this.umur}`)
    }
    cetakproglat(){
        console.log(`Program    - ${this.proglat}`)
    }
    cetaknilai(){
        console.log(`Nilai      - ${this.nilai}`)
    }
    cetakgrade(){
        console.log(`Gradenya   - ${this.grade}`)
    }

// grading pakai console
    grading(){
        if(this._nilai >= 90){
            console.log('Grade      : A')
        } else if(this._nilai >= 80){
            console.log('Grade      : B')
        } else if(this.nilai >= 70){
            console.log('Grade      : C')
        } else if(this.nilai >= 60){
            console.log('Grade      : D')
        } else if(this.nilai <= 59){
            console.log('Sayang Sekali Tidak Lulus')
        }
    }

// grading dengan memasukan value ke variable di dalam class
    grading1(){
        if(this.nilai >= 98){
            this.grade = 'A+'
        } else if(this.nilai >= 90){
            this.grade = 'A'
        } else if(this.nilai >= 80){
            this.grade = 'B'
        } else if(this.nilai >= 70){
            this.grade = 'C'
        } else if(this.nilai >= 60){
            this.grade = 'D'
        } else if(this.nilai <= 59){
            this.grade = 'Tak Lulus'
        }
    }
    
}
// instantiate the class 
// try untuk menangkap error yang dilempar karena nilai lebih dari 100
try {

let namapeserta = new Identitas('Leonardo Fachasie',26,`Web Dev`,-3)

console.log(`Nama       - ${namapeserta.nama}`)
console.log(`Usia       - ${namapeserta.umur}`)
console.log(`Program    - ${namapeserta.proglat}`)
console.log(`Nilai      - ${namapeserta.nilai}`)
namapeserta.grading()
console.log(``)

namapeserta.nama = 'Kodok'
namapeserta.cetaknama() 
namapeserta.cetakumur()
namapeserta.cetaknilai()
namapeserta.cetakproglat()
namapeserta.grading1() // grading input ke dalam variabel grade harus di atas "cetak grade" karena dicompile dari atas
namapeserta.cetakgrade()
} catch(error) {
    console.error(`Terjadi Error`, error.message) // jika kondisi throw terpenuhi akan ditangkap disini
}