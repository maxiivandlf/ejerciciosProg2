//Ejercicio 1

const resultado1 = document.getElementById('resultado-1');
const boton1 = document.getElementById('boton1');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

boton1.addEventListener('click', function (e) {
  e.preventDefault();
  const min = (a, b) => Math.min(a, b);

  resultado1.innerHTML =
    'El valor minimo es: ' + min(input1.value, input2.value);
});

//Ejercicio 2

const num = document.getElementById('input-ej2');
const resultado2 = document.getElementById('resultado-2');
const boton2 = document.getElementById('boton-ej2');

boton2.addEventListener('click', function (e) {
  e.preventDefault();
  const res = esPar(num.value);
  if (num.value < 0) {
    resultado2.innerHTML = 'Ingrese un numero mayor que "0"';
  } else if (res == true) {
    resultado2.innerHTML = 'EL Numero es PAR';
  } else if (res == false) {
    resultado2.innerHTML = 'El Numero es IMPAR';
  }
});

function esPar(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else if (n > 0) {
    return esPar(n - 2);
  } else {
    return esPar(-n);
  }
}

//Ejercicio 3

const texto = document.getElementById('input-ej3');
const caracter = document.getElementById('caracter');
const resultado3 = document.getElementById('resultado-3');
const caracterEnc = document.getElementById('caracterEnc');
const boton3 = document.getElementById('boton-ej3');

boton3.addEventListener('click', function (e) {
  e.preventDefault();
  contarLetra(texto.value);
  contarCaracter(texto.value, caracter.value);
});

function contarLetra(cadena) {
  const res3 = cadena.length;
  resultado3.innerHTML = 'La longitu es de ' + res3 + ' caracteres';
}

function contarCaracter(cadena, carct) {
  let cont = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == carct) {
      cont += 1;
    }
  }
  if (cont === 0) {
    caracterEnc.innerHTML = `No se encontro "${carct}" en la cadena`;
  } else {
    caracterEnc.innerHTML = `"${carct}" Se repite: ${cont} veces`;
  }
}
