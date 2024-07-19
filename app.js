const inputOrigen = document.getElementById("input-origen");
const inputDesino = document.getElementById("input-destino");
const boton = document.getElementById("botton");

boton.addEventListener("click",()=>{
    const valor =inputOrigen.value; 
    inputDesino.value = valor;
});
