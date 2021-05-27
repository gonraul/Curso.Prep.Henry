// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí  
  
  const arrayTransformer=[];
  
  for (const key in objeto) {
      arrayTransformer.push( key , objeto[key] );
  }

  var k =0;
  var array = new Array(2);

  for ( let i = 0; i < (arrayTransformer.length / 2); i++) {
      array[i] = new Array(2);      
      for ( let j = 0 ; j < 2; j++) {          
          array[i][j] = arrayTransformer[k];
          k=k+1
      }
  }
 return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

    var obj = {}
    let array1 = [];
    let cont = 0;

    var array= string.split("")
    var arrayOrdenado = array.sort() 

    console.log(arrayOrdenado)
    for (let i = 0; i < arrayOrdenado.length; i++) {
        for (let j = 0; j < arrayOrdenado.length; j++) {
            if (arrayOrdenado[i] === arrayOrdenado[j]) {
                cont++;            
            }        
        }
        obj[arrayOrdenado[i]] = cont
        cont = 0    
    }
    return obj
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var cadena = s;

  var ABC = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  var abc = 'abcdefghijklmnñopqrstuvwxyz';
  var cadenaMayuscula ='';
  let cadenaMinuscula ='';
  
  for (let i = 0; i < cadena.length; i++) {
      for (let j = 0; j < ABC.length; j++) {
          if (cadena.charAt(i) === ABC.charAt(j)) {
              cadenaMayuscula += ABC.charAt(j);            
          }      
      }    
  }

  for (let i = 0; i < cadena.length; i++) {
      for (let j = 0; j < abc.length; j++) {
          if (cadena.charAt(i) === abc.charAt(j)) {
              cadenaMinuscula += cadena.charAt(i);
          }        
      }    
  }

  let cadenaTotal = cadenaMayuscula + cadenaMinuscula;

  return cadenaTotal
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

    str += ' ';
    let flag = true;
    let array = str.split('');
    let newArray = [];
    let auxArray = [];
    cont = 0;
    inicio= 0;
    final= 0;
    let palabra = '';

    for (let i = 0; i < array.length; i++) {

        if (array[i] !== ' ') {
            if (flag) {
                inicio = i;
                flag = false;
            }
            final = i;
        }
        if (array[i] === ' ') {
            
            while (inicio <= final) {
                auxArray.unshift(array[inicio]);
                inicio++;
            }
            newArray.push(auxArray)
            newArray[final+1] = ' ';
            flag = true;
            auxArray= [];
        }
    }

    const totalArray = newArray.flat();

    for (let i = 0; i < totalArray.length; i++) {
        palabra += totalArray[i];
        
    }
    let palabras = palabra.trim();

    return palabras
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  const nCapicua = numero.toString()
  let cont = nCapicua.length - 1;

  let numInvertido = '';
  let aux = '';
  let aux1 = '';

  for (let i = 0; i < nCapicua.length; i++) {
      aux += nCapicua[cont]
      aux1 += nCapicua[i]
      cont--
  }
  let aux2 = aux.toString()

  if (aux1 === aux2) {
      return 'Es capicua'
  }else{ 
      return 'No es capicua'
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

    let cadenaModificada = '';

    for (let i = 0; i < cadena.length; i++) {
        if ((cadena.charAt(i) !== 'a') && (cadena.charAt(i) !== 'b') && (cadena.charAt(i) !== 'c')) {            
            cadenaModificada += cadena.charAt(i);
        }
    }
    return cadenaModificada
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let aux = ''
  let arr1 = arr
  
  for (let i = 1; i < arr1.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
          
          if (arr1[i].length < arr1[j].length) {            
              aux = arr1[j]
              arr1[j] = arr1[i]            
              arr1[i] = aux
          }        
      }    
  }

    return arr1
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

    var nuevoArreglo = arreglo1.filter(union)

    function union(number) {
        for (let i = 0; i < arreglo2.length; i++) {
            if (number === arreglo2[i]) {
                return number
            }        
        }    
    }

    return nuevoArreglo
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

