

function diHola(){
    console.log("Hola!");
    
}

diHola();

function Edad(){
    let edad=Number(prompt("Cual es tu edad?"));
    if(edad <= 18){
        alert("Eres menor de edad");
    }else{
        alert("Podes entrar al boliche");
    }

}

Edad();

function verificarEdad(edad){
    if(edad <= 18){
        alert("Eres menor de edad, segunda funcion");
    }else{
        alert("Podes entrar al boliche, segun funcion");
    }
}

edad=prompt("Cual es tu edad?");
verificarEdad(edad);    