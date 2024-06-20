// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//EJ1 Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....
const startPointElement = document.getElementById('start-point');

console.dir(startPointElement);
console.dir(
  `Soy un ${startPointElement.tagName} con el id: ${startPointElement.id} y la clase: ${startPointElement.classList} mi padre es un header con ${startPointElement.parentElement.tagName} con el id: ${startPointElement.parentElement.id} y la clase: ${startPointElement.parentElement.classList}. Mi hermano es un ${startPointElement.previousElementSibling.previousElementSibling.tagName} con id: ${startPointElement.previousElementSibling.previousElementSibling.id} y la clase: ${startPointElement.previousElementSibling.previousElementSibling.classList}`
);

//EJ2 Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido.
const firstListElement = document.getElementById('first-list');
const secondListElement = document.getElementById('second-list');
const firstListContent = firstListElement.textContent;
const secondListContent = secondListElement.textContent;

firstListElement.textContent = secondListContent;
secondListElement.textContent = firstListContent;

//EJ3 Usando este HTML muestra por consola el número de etiquetas que hay de cada cosa.
const h1Element = document.querySelectorAll('h1');
const h2Element = document.querySelectorAll('h2');

console.log(h1Element.length);
console.log(h2Element.length);
