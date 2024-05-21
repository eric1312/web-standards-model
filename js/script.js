// OBTENER EL NÚMERO DEL DÍA
// obtener el número de día de un nuevo objeto de fecha
// asignar a una variable
let today = new Date().getDay();
// NÚMERO DEL DÍA DEL PARTIDO CON ÍNDICE DE LISTA DE NODOS
// El domingo es el primer día de JavaScript pero es
// el último día en nuestra lista así que cambie de 0 a 6
// y disminuir todos los demás números de días para que
// coincidir con los índices de la lista de nodos
if (today === 0){
    today = 6;
}else{
    today--;
}

// SELECCIONAR TODOS LOS DT
// seleccione todos los elementos del término de descripción
// asignar a una variable
const dts = document.querySelectorAll('dt');
// AÑADE UNA CLASE AL DT DE HOY
// use el número de día (variable de hoy) para agregar
// la clase 'hoy' al dt apropiado
// elemento para que él y el dd adyacente puedan ser
// diseñado en CSS
dts[today].className = 'today';
// Las listas de nodos comienzan en 0, por lo que el día 1 de nuestra lista
// (lunes) será el nodo 0