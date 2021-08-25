//b.addEventListener("click",adios)
//click, blur, mouseover, click, focus, change,


//1. Crear un botón que al hacerle click, muestre un saludo por alert.

/* const saludo = () => {alert("Hola! Como estas?")} */


//2. Crear un botón que al hacerle click, muestre un mensaje en el HTML.

/* const saludoHtml = () => {
    document.write(`<p>Hola! Soy un mensaje</p>`);
}  */


//3. Crear un botón que al hacerle click cambie de color.
//opc 1
/* const cambioColor = () => {
    document.querySelector("button").classList.add("naranja");
} */

//opc 2
/* let b = document.querySelector("button");

const cambioColor = () => {
    b.classList.add("naranja");
}

b.addEventListener("click",cambioColor); */


//4. Crear 5 botones numerados del 1 al 5. Al hacer click en uno y mostrar un mensaje que diga 
// “Haz clickeado el botón $número”, indicando al usuario cuál botón apretó.

/* const uno = () => {alert(`Haz clickeado en el botón número uno`)}
const dos = () => {alert(`Haz clickeado en el botón número dos`)}
const tres = () => {alert(`Haz clickeado en el botón número tres`)}
const cuatro = () => {alert(`Haz clickeado en el botón número cuatro`)}
const cinco = () => {alert(`Haz clickeado en el botón número cinco`)} */


//5. Crear un input y un botón. Dentro del input el usuario debe ingresar un color y al hacer click, 
// el input se pone de ese color y se genera un mensaje indicando el color elegido.

/* const color = document.querySelector("input");
const boton = document.querySelector("button");

const cambiarColor = () => {
    let colorElegido = color.value;
    if(colorElegido==="rojo"){
        color.classList.add("rojo");
        document.write(`<p class="${colorElegido}">El color elegido es ${colorElegido}</p>`)
    } else if(colorElegido==="azul"){
        color.classList.add("azul");
        document.write(`<p class="${colorElegido}">El color elegido es ${colorElegido}</p>`)
    } else if(colorElegido==="verde"){
        color.classList.add("verde");
        document.write(`<p class="${colorElegido}">El color elegido es ${colorElegido}</p>`)
    } else if(colorElegido==="naranja"){
        color.classList.add("naranja");
        document.write(`<p class="${colorElegido}">El color elegido es ${colorElegido}</p>`)
    }
} */


//6.Crear dos input tipo número y un botón.
/* a) Al hacer foco en un input se debe poner azul.
b) Al escribir, se debe poner violeta.
c) Cuando se le saca el foco, se pone verde.
d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma
de ambos */


/* //a. 
 const focusColor = () => {
    document.querySelector("button").classList.add("azul")
}

//b.
const writing = () => {
    document.querySelector("button").classList.add("violeta") 
}

//c.
const blurColor = () => {
    document.querySelector("button").classList.add("verde")
}

//d.
const plus = () =>{
    let n1 = parseInt(document.querySelector("uno").value);
    let n2 = parseInt(document.querySelector("dos").value);

    let resultado = n1 + n2;
    document.write('<p>' + resultado + '</p>');
} */