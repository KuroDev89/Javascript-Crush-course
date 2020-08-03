// /*TIPOS DE DATOS*/
// //Strings, numner, boolean...


// /*ARRAYS*/
// [1,2,5,6,89]
// [true, false, false, true]


/*OBJETOS*/
//Piénsalo como si fuesen entidades, estructura similar
//a la de un diccionarios en Python3
// {'user':'Ryan',
// 'score':88,
// 'hours': 14,
// 'proffesional': true
// }
// console.log({'user':'Peter', 'score':78}) //Para verlo en consola


/*VARIABLES Y CONSTANTES*/
 /*No empezar un nombre de variable con un número o @, pero sí con - _ $ */
// var name='John';//local o global
// name='Juancho';
// let lastname='Carter';//similar a var, pero con alcance limitado al bloque en el que se declaró
// console.log(name)
// console.log(lastname)

// const PI=3.1416
// console.log(PI)


/*OPERADORES*/
// var numberOne=5;
// var numbreTwo=2;

// var result=numberOne/numbreTwo; // / nos arroja un float, % arroja el residuo 
// document.write(result);

// var comparisson=numbreTwo<numberOne; //al comparar obtenemos booleano
// console.log(comparisson);

// var passw='pepe159';
// var input='pepe159';
// var result = input==passw;
// console.log(result);


/*CONDICIONALES*/
// var pass='juancho123';
// var input='juancho123';

// var result=input==pass;

// if (result==true){
//     console.log('login correcto');
// } else{
//     console.log('contraseña incorrecta');
// }

// var score=100;
// if (score<30){
//     console.log('regresa al tutorial');
// }
// else if(score>50){
//     console.log('sigue practicando');
// }
// else{
//     console.log('Ya puedes competir');
// }

// var tipoDeTarjeta='cash';
// switch (tipoDeTarjeta){
//     case 'Débito':
//         console.log('Tu tarjeta es de Débito');
//     break;

//     case 'Crédito':
//         console.log('Tu tarjeta es de Crédito');
//         break;
//     default:
//         console.log('No tienes una tarjeta')
// }


/*BUCLES*/
// contar=50;
// while(contar>0){
//     console.log(contar);
//     contar=contar-1;//se puede resumir como contar--, si fuese sumar count++
// }

// let name=['Nicole','John','Sarah'];/*
// Al usar var para definir la variable que contiene el array y luego querer
// imprimir un item de la lista, solo toma el primer caracter, pero esto no
// sucede si se emplea let*/
// for (let index=0;index<name.length;index++){/*
//     primero defino mi variable; la condición, la variación que habrá
//     en el ciclo, en este caso la variable index aumentará en 1 en cada
//     iteración*/
//     console.log(name[index]);
// }


// /*FUNCIONES*/
// function saludo(nombre){
//         console.log('Hola '+nombre)
//     }

// saludo('Nicole');
// saludo('Verónica');

// function saludar(valor){
//     if (valor==true){
//         console.log('Hola')
//     }
//     else{
//         console.log('A dios')
//     }
// }

// saludar(false);