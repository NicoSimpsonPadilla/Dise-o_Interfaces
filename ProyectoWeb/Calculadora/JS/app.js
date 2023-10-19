function sumar() {
    console.log("Aplicacion calculador. sumar");
    const formu = document.getElementById('formulario');

    let opA = formu['operandoA'];
    let opB = formu['operandoB'];

    let resultado = parseInt(opA.value) + parseInt(opB.value);

    if (isNaN(resultado)) {
        document.getElementById('resultado').innerHTML = "Datos intruducidos no son correcos";
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    }
}

function restar() {
    console.log("Aplicacion calculador. restar");
    const formu = document.getElementById('formulario');

    let opA = formu['operandoA'];
    let opB = formu['operandoB'];

    let resultado = parseInt(opA.value) - parseInt(opB.value);

    if (isNaN(resultado)) {
        document.getElementById('resultado').innerHTML = "Datos intruducidos no son correcos";
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    }
}

function multiplicar() {
    console.log("Aplicacion calculador. multiplicar");
    const formu = document.getElementById('formulario');

    let opA = formu['operandoA'];
    let opB = formu['operandoB'];

    let resultado = parseInt(opA.value) * parseInt(opB.value);

    if (isNaN(resultado)) {
        document.getElementById('resultado').innerHTML = "Datos intruducidos no son correcos";
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    }
}

function dividir() {
    console.log("Aplicacion calculador. dividir");
    const formu = document.getElementById('formulario');

    let opA = formu['operandoA'];
    let opB = formu['operandoB'];

    let resultado = parseInt(opA.value) / parseInt(opB.value);

    if (isNaN(resultado)) {
        document.getElementById('resultado').innerHTML = "Datos intruducidos no son correcos";
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    }
}