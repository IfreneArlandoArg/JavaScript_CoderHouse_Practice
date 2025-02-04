//Goal 
//Build a calculator (basic opertions add, substract, multiply, divide) using functions...

//two inputs...
//Result based on the operator selected...

function Sumar(numeroA, numeroB)
{
    return numeroA + numeroB;
}

function Restar(numeroA, numeroB)
{
    return numeroA - numeroB;
}

function Multiplicar(numeroA, numeroB)
{
    return numeroA * numeroB;
}

function Dividir(numeroA, numeroB)
{
    return numeroA / numeroB;
}

let menu = parseInt(prompt(`Elige la operación correspondiente :\n1-Sumar.\n2-Restar.\n3-Multiplicar.\n4-Dividir.\n5-Salir.`));


while(menu !== 5)
{
    let numeroA = parseFloat(prompt(`Ingresa el primer número.`));
    let numeroB = parseFloat(prompt(`Ingresa el segundo número.`));
    
  switch(menu)
    {
        case 1:
            alert(`Resultado ${numeroA} + ${numeroB} = ${Sumar(numeroA, numeroB)}`);
            break;
        case 2:
            alert(`Resultado ${numeroA} - ${numeroB} = ${Restar(numeroA, numeroB)}`);
            break;
        case 3:
            alert(`Resultado ${numeroA} * ${numeroB} = ${Multiplicar(numeroA, numeroB)}`);
            break;
        case 4:
            alert(`Resultado ${numeroA} / ${numeroB} = ${Dividir(numeroA, numeroB)}`);
            break;
        default:
            alert(`Numero incorrecto...`);
            break;

    }

    menu = parseInt(prompt(`Elige la operación correspondiente :\n1-Sumar.\n2-Restar.\n3-Multiplicar.\n4-Dividir.\n5-Salir.`));
    if(menu !== 5)
    {
        numeroA = parseFloat(prompt(`Ingresa el primer número.`));
        numeroB = parseFloat(prompt(`Ingresa el segundo número.`));
    }

}


