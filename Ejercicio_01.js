var LaJefa = new Array();
var LJventas = new Array();

 class producto {
    constructor(codigo, descripcion, tipo, precio_compra, precio_venta, stock){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio_compra = precio_compra;
        this.tipo = tipo;
        this.precio_venta = precio_venta;
        this.stock = stock 
    }
}

class venta {
    constructor(id, codprod,preciov){
        this.id = id;
        this.codprod = codprod;
    }
}

function agregar(){
    var cod = prompt("Ingrese el codigo del producto");
    var desc = prompt("Ingrese la descripcion del producto");
    var prec = prompt("Ingrese el precio original del producto");
    var prev = prompt("Ingrese el precio de venta del producto");
    var tipo = prompt("Ingrese el tipo del producto");
    var stock = prompt("Ingrese cantidad de producto");

    var p = new producto (cod,desc, tipo, prec, prev, stock);

    LaJefa.push(p);
}


function modificarStock(){
    console.log(LaJefa);

    var cod = prompt("Ingrese el codigo del producto");
    for(let i = 0; i<LaJefa.length ; i++){
        if (LaJefa[i].codigo == cod){
            var nstock = prompt("Ingrese el nuevo stock del producto");
            LaJefa[i].stock = nstock;
        }
    }
}


function regVenta(){
    var id = prompt("Ingrese el id de la venta");
    var codv = prompt("Ingrese el codigo del producto");

    if(LaJefa.includes(id)){
        var v =new venta (id, codv);
        for(let j = 0; j < LaJefa.length; j++){
            if(LaJefa[j].codigo == codv){
                if(LaJefa[i].stock > 0){
                    LaJefa[i].stock -= 1;
                    LJventas.push(v);
                }
                else{
                    console.log("No se pueden realizar mas ventas");
                }
            }
        }
        
    }
    else console.log("El stock no puede ser negativo >:V");
}


function promV(){
    var cont = 0;
    for (let k = 0; k<LJventas.length; k++){
       for(let l = 0; l<LaJefa.length; l++){
           if(LJventas[k].cod == LaJefa[l].cod){
               cont += LaJefa[l].precio_venta;
           }
       } 
    }
    console.log(cont/LJventas.length);
}

function ceroStock(){
    var temp = new Array();
    for(let a = 0; a<LaJefa.length; a++){
        if(LaJefa[a].stock == 0){
            temp.push(LaJefa[a]);
        }
    }
}

function iniciar(){
    let ini = 9;

    console.log("1-Agregar.");
    console.log("2-Modificar el stock.");
    console.log("3-Registrar venta");
    console.log("4-Promedio de venta.");
    console.log("5-Mostrar cero stock");
    console.log("0-salir");

    while(ini != 0){
        ini = prompt("Seleccione una opcion: ");
        if(ini == 1) agregar();
        if(ini == 2) modificarStock();
        if(ini == 3) regVenta();
        if(ini == 4) promV();
        if(ini == 5) ceroStock();
        if(ini == 0) break;
    }
}