{

const door = document.querySelector(".notReady");door.classList.remove("notReady")
const e = door.classList[1]

const styles = `
    resize: none;
    width: 360px;
    height: 500px;
`;
document.querySelector("." + e).style.cssText = styles;

function declarar(eve, ev) {
    let a = 0, b = document.querySelectorAll(eve), c, d = 0;
    if (ev == 1) c = [];
    while (a < b.length) {
        if (ev == 1) {
            if (b[a].closest("." + e) != null) {c[d] = b[a]; d+=1};
        } else if (b[a].closest("." + e) != null) {c = b[a]};
        a++
    }
    return c;
}

const display = declarar(".calculoDisplay");
const numeros = declarar("[id*=tecla]", 1);
const operadores = declarar("[id*=operador]", 1);
const calculo = declarar(".resultadoDisplay"); calculo.value = "";
let novoNumero = true, operador, numeroAnterior, controleAtual = true, novoCalculo = false;

const operacaoPendente = () => operador == undefined;

const calcular = () => {
    if (!operacaoPendente()) {
        const numeroAtual = parseFloat(display.value.replace(numeroAnterior + " " + operador + " ", "").replace(",", "."));
        if (operador == "+") {
            novoNumero = true;
            controleAtual = false;
            calculoAtual(numeroAtual + " =");
            if (numeroAnterior == 1 && numeroAtual == 1) {
                atualizarDisplay(1 + 2, 1, numeroAtual);
                return;
            }
            atualizarDisplay(numeroAnterior + numeroAtual, 1, numeroAtual);
        } else if (operador == "-") {
            novoNumero = true;
            controleAtual = false;
            calculoAtual(numeroAtual + " =");
            atualizarDisplay(numeroAnterior - numeroAtual, 1, numeroAtual);
        } else if (operador == "x") {
            novoNumero = true;
            controleAtual = false;
            calculoAtual(numeroAtual + " =");
            atualizarDisplay(numeroAnterior * numeroAtual, 1, numeroAtual);
        } else if (operador == "÷") {
            novoNumero = true;
            controleAtual = false;
            calculoAtual(numeroAtual + " =");
            atualizarDisplay(numeroAnterior / numeroAtual, 1, numeroAtual);
        }
    }
}

const atualizarDisplay = (texto, vf, n) => {
    if (novoNumero) {
        calculo.value = ""
        if (!vf) display.value = texto; else { calculo.value = texto }
        novoNumero = false;
    } else {
        display.value += texto;
    }
    controleCAtual();
    if (display.value == "Nan") {
        novoNumero = true;
    }
}

const inserirNumero = (evento) => { atualizarDisplay(evento.target.textContent) };
numeros.forEach(numero => numero.addEventListener("click", (e) => { inserirNumero(e); e.target.blur() }));

const selecionarOperador = (evento) => {
    if (operador == undefined) {
        if (calculo.value != "") { numeroAnterior = parseFloat(calculo.value); novoNumero = false; calculo.value = ""; } else
            numeroAnterior = parseFloat(display.value.replace(",", "."));
    }
    operador = evento.target.textContent;
    calculoAtual(numeroAnterior + " " + operador + " ");
    display.value = numeroAnterior + " " + operador + " ";
    novoCalculo = false;
}
operadores.forEach(operador => operador.addEventListener("click", selecionarOperador));
declarar(".calcBtn", 1).forEach(buttons => buttons.addEventListener("click", (e) => e.target.blur()))

const umDivPx = () => {
    if (calculo.value != "") {
        numeroAnterior = parseFloat(calculo.value); novoNumero = true; calculo.value = "";
        atualizarDisplay(1 / numeroAnterior);
        return;
    }
    if (display.value == numeroAnterior + " " + operador + " ") return;
    let numDivPum;
    controleAtual = false;
    novoNumero = true;
    if (numeroAnterior == undefined) {
        numDivPum = parseFloat(display.value.replace(",", "."));
        atualizarDisplay(1 / numDivPum);
    } else {
        numDivPum = parseFloat(display.value.replace(numeroAnterior + " " + operador + " ", ""));
        atualizarDisplay(numeroAnterior + " " + operador + " " + (1 / numDivPum));
    }
    calcular()
}
const raiz = () => {
    if (calculo.value != "") {
        numeroAnterior = parseFloat(calculo.value); novoNumero = true; calculo.value = "";
        atualizarDisplay(Math.sqrt(numeroAnterior));
        return;
    }
    if (display.value == numeroAnterior + " " + operador + " ") return;
    let numRaiz;
    controleAtual = false;
    novoNumero = true;
    if (numeroAnterior == undefined) {
        numRaiz = parseFloat(display.value.replace(",", "."));
        atualizarDisplay(Math.sqrt(numRaiz));
    } else {
        numRaiz = parseFloat(display.value.replace(numeroAnterior + " " + operador + " ", ""));
        atualizarDisplay(numeroAnterior + " " + operador + " " + (Math.sqrt(numRaiz)));
    }
    calcular()
}
const elev2 = () => {
    if (calculo.value != "") {
        numeroAnterior = parseFloat(calculo.value); novoNumero = true; calculo.value = "";
        atualizarDisplay(numeroAnterior * numeroAnterior);
        return;
    }
    if (display.value == numeroAnterior + " " + operador + " ") return;
    let eleva2;
    novoNumero = true;
    if (numeroAnterior == undefined) {
        eleva2 = parseFloat(display.value.replace(",", "."));
        atualizarDisplay(eleva2 * eleva2);
    } else {
        eleva2 = parseFloat(display.value.replace(numeroAnterior + " " + operador + " ", ""));
        atualizarDisplay(numeroAnterior + " " + operador + " " + (eleva2 * eleva2));
    }
    controleAtual = false;
    calcular()
}
const porcentagem = () => {
    if (calculo.value != "") {
        numeroAnterior = parseFloat(calculo.value); novoNumero = true; calculo.value = "";
        atualizarDisplay(numeroAnterior / 100);
        return;
    }
    if (display.value == numeroAnterior + " " + operador + " ") return;
    let porcento;
    novoNumero = true;
    /* if (operador == "+" || operador == "-") {
        atualizarDisplay(numeroAnterior * (porcento / 100));
    } else {
        atualizarDisplay(porcento / 100);
    } */
    if (numeroAnterior == undefined) {
        porcento = parseFloat(display.value.replace(",", "."));
        atualizarDisplay(porcento / 100);
    } else {
        porcento = parseFloat(display.value.replace(numeroAnterior + " " + operador + " ", ""));
        if (operador == "+" || operador == "-") {
            atualizarDisplay(numeroAnterior + " " + operador + " " + (numeroAnterior * (porcento / 100)));
        } else {
            atualizarDisplay(numeroAnterior + " " + operador + " " + (porcento / 100));
        }
    }
    calcular()
}
declarar("#umDivPx", 2).addEventListener("click", umDivPx)
declarar("#elev2", 2).addEventListener("click", elev2)
declarar("#raiz", 2).addEventListener("click", raiz)
declarar("#porcentagem", 2).addEventListener("click", porcentagem)

const ativarIgual = () => {
    calcular();
    operador = undefined;
    novoNumero = true;
    novoCalculo = true;
}
declarar("#igual", 2).addEventListener("click", ativarIgual)

const limparCalculo = () => {
    display.value = "";
    calculo.value = "";
    novoNumero = true;
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
    calculoAtual("");
    controleAtual = true;
}
declarar("#limparCalculo", 2).addEventListener("click", limparCalculo);

const removerUltimoNumero = () => {
    if (display.value == numeroAnterior + " " + operador + " ") {
        operador = undefined;
        display.value = numeroAnterior;
    } else
        display.value = display.value.slice(0, -1);
}
declarar("#backspace", 2).addEventListener("click", removerUltimoNumero);

const inverterSinal = () => {
    if (calculo.value != "") {
        numeroAnterior = parseFloat(calculo.value); novoNumero = true; calculo.value = "";
        atualizarDisplay(numeroAnterior * -1);
        return;
    }
    novoNumero = true;
    if (numeroAnterior == undefined) {
        atualizarDisplay(display.value * -1);
    } else {
        atualizarDisplay(numeroAnterior + " " + operador + " " + (parseFloat(display.value.replace(numeroAnterior + " " + operador + " ", "")) * -1));
    }
}
declarar("#inverter", 2).addEventListener("click", inverterSinal);

const existeDecimal = () => display.value.indexOf(",") !== -1;

const inserirDecimal = () => {
    if (!novoNumero) {
        if (!existeDecimal()) {
            atualizarDisplay(",");
        }
    } else {
        atualizarDisplay("0,");
    }
}
declarar("#decimal", 2).addEventListener("click", inserirDecimal);

const controleCAtual = () => {

    if (novoCalculo) {
        calculo.value = "";
        novoCalculo = false;
    }
}
const calculoAtual = (evento) => {
    /* if (!controleAtual) {
        let calculoAnterior = calculo.value;
        calculo.value = (calculoAnterior + evento);
        controleAtual = true;
    } else {
        calculo.value = evento;
    } */
}

const mapateclado = {
    "0": "tecla0",
    "1": "tecla1",
    "2": "tecla2",
    "3": "tecla3",
    "4": "tecla4",
    "5": "tecla5",
    "6": "tecla6",
    "7": "tecla7",
    "8": "tecla8",
    "9": "tecla9",
    "+": "operadorAdcionar",
    "-": "operadorSubtrair",
    "*": "operadorMultiplicar",
    "/": "operadorDividir",
    "±": "inverter",
    ",": "decimal",
    "=": "igual",
    "Shift": "igual",
    "Backspace": "backspace",
    "Escape": "limparCalculo",
    "Delete": "limparDisplay",
}

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapateclado).indexOf(tecla) !== -1;
    if (teclaPermitida()) document.getElementById(mapateclado[tecla]).click();
}
document.addEventListener("keydown", mapearTeclado);

}