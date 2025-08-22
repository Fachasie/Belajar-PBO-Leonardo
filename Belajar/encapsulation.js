class Mobil{
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

newcar = new Mobil(5)
console.log(newcar._carname + 4 )
console.log(newcar.carname)
console.log(newcar._carname)