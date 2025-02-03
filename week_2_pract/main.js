console.log("Tabla de multiplicar 1 - 10.");

let parar = true;

while(parar)
{

let num = parseInt(prompt("Ingrese un numero :"));

   
console.log(`\nTabla de multiplicar ${num}\n`);
   

for (let i = 1; i <=10; i++)
{
   let resultado = num * i;
   console.log(`${num} * ${i} = ${resultado}`);

}

let userResponse = prompt(`Si deseas continuar apoye 1, caso contrario apoye cualquira otra tecla.`);
parar = userResponse == 1 ? true : false;

}


