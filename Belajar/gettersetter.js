class Mobil {
    constructor(brand){
        this._carname = brand
    }
    get carname(){
        return this._carname
    }
    set carname(x){
        this._carname = x
    }
}

let mobilan = new Mobil('Avanza')
mobilan.carname = 'Alphard'
console.log(mobilan.carname)