class Electrodomestico { 

    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoEnergetico = 100;
    }

    setPrecio(precio){ 
      this.precio = precio;
    }
    getPrecio(){ 
        return this.precio;
    }

    setColor(color){
        this.color = color; 

    } 

    getColor(){ 
        return this.color;
    }

    setCapacidad(capacidad){ 
        this.capacidad = capacidad;
    }
    getCapacidad(){ 
        return this.capacidad;
    }

    setConsumoEnergetico(){ 
        this.consumoEnergetico = 100;
    }
    getConsumoEnegertico(){ 
        return this.consumoEnergetico;
    }
}

class Lavadora extends Electrodomestico{ 
    // carga son los kgs de ropa
    constructor(precio, color, capacidad, carga){ 
       super(precio, color, capacidad);
       this.carga = carga;
    }
    setCarga(carga){ 
      this.carga = carga;
    }
    getCarga(){ 
        return this.carga;
    }

    precioFinal(){ 
        return `el precio final es: ${this.getConsumoEnegertico() * this.carga}`;
    }
}

const aLavarRopa = new Lavadora(100, 'azul', 200, 50);
console.log(aLavarRopa.precioFinal());

class Bebida { 
    constructor(cantidad){
        this.cantidad = cantidad; 
    }

    setCantidad(cantidad){ 
      this.cantidad = cantidad;
    }
    getCantidad(){ 
        return this.cantidad;
    }
}

class Refresco extends Bebida{ 
    constructor(cantidad, azucar){ 
      super(cantidad);
      this.azucar = azucar;
    }
    setAzucar(azucar){ 
        this.azucar = azucar;
    }
    getAzucar(){ 
        return this.azucar;
    }
}

class Cerveza extends Bebida{ 
    constructor(cantidad, porcentajeAlcohol){ 
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }
    setPorcentajeAlcohol(porcentajeAlcohol){ 
        this.porcentajeAlcohol = porcentajeAlcohol;
    }
    getPorcentajeAlcohol(){ 
        return this.porcentajeAlcohol;
    }
}

class Maestro{ 

    constructor(nombre, materia){ 
        this.nombre = nombre;
        this.materia = materia;
    }
    setNombre(nombre){ 
        this.nombre = nombre;
    }
    getNombre(){ 
        return this.nombre;
    }
    
    setMateria(materia){ 
        this.materia = materia;
    }
    getMateria(){ 
        return this.materia;
    }

    calcularPromedio(calificaciones){ 

        let cont = 0;
        let sum = 0;

      for(let i = 0; i < calificaciones.length; i++){

        sum += calificaciones[i];
        cont++;
      }
      return `el promedio de la clase es: ${sum / cont}`
    }
}

const Gera = new Maestro('Gerardo', 'programacion');

const notas = [4.5, 3.0, 2.5, 1.0, 5.0, 5.0, 4.8];

console.log(Gera.calcularPromedio(notas));

class MaestroFisica extends Maestro{ 
    constructor(nombre, materia, antiguedad){
        super(nombre, materia);
        this.antiguedad = antiguedad; 
    }
    setAntiguedad(antiguedad){ 
        this.antiguedad = antiguedad;
    }
    getAntiguedad(){ 
        return this.antiguedad;
    }
}
class MaestroMusica extends Maestro{ 
    constructor(nombre, materia, edad){
        super(nombre, materia);
        this.edad = edad; 
    }
    setEdad(edad){ 
        this.edad = edad;
    }
    getEdad(){ 
        return this.edad;
    }
}