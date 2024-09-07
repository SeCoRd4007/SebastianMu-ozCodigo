interface tipoVehiculo{
    tipo:string;
    marca:string;
    modelo:string;
    cilindraje:number;
    numPuertas:number;
    arrancarVehiculo: ()=> void;
    cEspeciales:caracteristicasEspeciales[];
}
interface caracteristicasEspeciales{
    velocidad:number;
    suspension:boolean;
    agregarSuspension:()=> void;
}
interface testArray{
    modelos:number[];
    característicasArray:Array<string[]>;
}

const miVehiculo: tipoVehiculo={
    tipo:"autoMovil",
    marca:"kia",
    modelo:"2025",
    cilindraje:2000,
    numPuertas:4,
    arrancarVehiculo(){
        console.log("El vehiculo arranco con un motor de "+this.cilindraje+" cc.");
    },
    cEspeciales:[]
}
console.table(miVehiculo);
console.log(miVehiculo.arrancarVehiculo());

const miSegundoVehiculo: caracteristicasEspeciales={
    velocidad:100,
    suspension:false,
    agregarSuspension(){
        if (this.suspension) {
            console.log("Tu vehiculo tiene suspensión")
        } else {
            console.log("Tu vehiculo no tiene suspensión")
        }
    }
}

console.log(miSegundoVehiculo.agregarSuspension());

const miTercerVehiculo: testArray={
    modelos:[2010,2011,2012,2013,2014],
    característicasArray:[
        ["azul", "verde"],
        ["Rin 15", "Rin 17"],
        ["2 puertas", "4 puertas"]
    ]
}
console.table(miTercerVehiculo);
console.log(miTercerVehiculo.característicasArray[0][0]);
console.log(miTercerVehiculo.característicasArray[2][1]);
let index:number=1;
miTercerVehiculo.característicasArray.forEach((caracteristicas)=>{
    console.log(caracteristicas[index]);
});