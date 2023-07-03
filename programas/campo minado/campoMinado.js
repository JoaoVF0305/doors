document.getElementById('tempo').innerText = "0:00";
let seg = 0;
let min = 0;
function contador() {
    seg++
    if (seg < 10 && min < 60) {
        document.getElementById('tempo').innerText = (min + ":" + "0" + seg);
    } else if (seg >= 10 && seg <= 60 && min < 60) {
        document.getElementById('tempo').innerText = (min + ":" + seg);
    } else if (seg >= 60 && min < 60) {
        seg = 0;
        min++
        document.getElementById('tempo').innerText = (min + ":" + "0" + seg);
    } else if (min == 60) {
        clearInterval(cont);
    }
}
var cont;
function intervalo() {
    fisrtClick = false;
    document.getElementById('tempo').innerText = "0:00";
    seg = 0;
    min = 0;
    cont =  setInterval(function(){ contador() },1000)
}


document.addEventListener('contextmenu', event => event.preventDefault()); //bloqueia botao direito

var flags;
function quantFlag(event) {
    flags = event.length;
    document.getElementById("flag").innerText = (flags);
}
function atualizarCont() {
    if (flags >= 10) { 
        document.getElementById("flag").innerText = (flags);
    } else if (flags <= 9) {
        document.getElementById("flag").innerText = ("0" + flags);
    }
}


function addFlag(event) {
    if(3 === event.which) {
        if (event.target.localName === "img") {
            event.target.setAttribute("class", "invisible");
            flags++;
            atualizarCont();
            event.composedPath()[1].setAttribute("class", "")
        } else if (event.target.localName === "span") {
            
        } else if (event.target.children[1].className === "invisible") {
            if (flags > 0) {
                if (event.target.children[0].className === "invisible") {
                    event.target.children[1].setAttribute("class", "visible")
                    flags--;
                    atualizarCont();
                    event.target.setAttribute("class", "select")
                    fim(event)
                }
            }
        } else {
            event.target.children[1].setAttribute("class", "invisible")
            flags++;
            atualizarCont();
            event.target.setAttribute("class", "")
        }
    }
}

function field(rows_count, cols_count, mines) {
    quantFlag(mines)
    var rows = [];

    for (var i = 0; i < rows_count; i++) {
        rows[i] = [];
        for (var j = 0; j < cols_count; j++) {
            if (mines.map(x => JSON.stringify(x)).includes("["+i +","+j+"]")) {
                rows[i][j] = "*";
            } else {
                rows[i][j] = 0;
            }
        }
    }

    for (var i = 0; i < rows_count; i++) {
        for (var j = 0; j < cols_count; j++) {
            if (rows[i][j] != "*") {
                if (rows[i - 1] !== undefined && rows[i - 1][j - 1] === "*") rows[i][j]++;
                if (rows[i - 1] !== undefined && rows[i - 1][j    ] === "*") rows[i][j]++;
                if (rows[i - 1] !== undefined && rows[i - 1][j + 1] === "*") rows[i][j]++;

                if (rows[i][j - 1] === "*") rows[i][j]++;
                if (rows[i][j + 1] === "*") rows[i][j]++;

                if (rows[i + 1] !== undefined && rows[i + 1][j - 1] === "*") rows[i][j]++;
                if (rows[i + 1] !== undefined && rows[i + 1][j    ] === "*") rows[i][j]++;
                if (rows[i + 1] !== undefined && rows[i + 1][j + 1] === "*") rows[i][j]++;
            }
            
        }        
    }

    return rows;
}

let fisrtClick = true;
function clicked(event) {
    if (fisrtClick) {
        intervalo();
    }
    if (event.target.textContent === "*") {
        if (event.target.innerHTML !== "*") {
            if (event.target.childNodes[1].className === "invisible") {
                for (element of document.querySelectorAll("td")) {
                    if (element.children[0].innerText === "0") {
                        element.style.backgroundColor = "#121212";
                    }
                }          
                for (element of document.querySelectorAll("span")) {
                    if (element.textContent === "0") {
                        element.style.color = "#121212";
                    } else {
                        element.style.color = "#dc143c";
                    }
                    element.setAttribute("class", "visible");
                }
                for (element of document.querySelectorAll("img")) {
                    element.setAttribute("class", "invisible");
                }
                for (element of document.querySelectorAll("td")) {
                    if (element.textContent === "*") {
                        element.children[2].setAttribute("class", "visible");
                        element.children[0].setAttribute("class", "invisible");
                    } 
                }
                fim(event)
                clearInterval(cont);
                document.getElementById("flag").innerText = 0;
            }
        }
    } else if (event.target.localName === "img") {
        
    } else if (event.target.childNodes[0].className === "invisible" && event.target.childNodes[1].className === "invisible") {
        if (event.target.textContent === "0") {
            event.target.style.backgroundColor = "#121212";
            event.target.style.color = "#121212";
        }
        event.target.setAttribute("class", "select")
        event.target.childNodes[0].setAttribute("class", "visible");
        fim(event);
    }       
}

function fim(event){
    let aa = event.composedPath()[2].children;
    let quantidade = 0;
    for (let a = 0; a < aa.length; a++) {
        for (let b = 0; b < aa.length; b++) {
            if (aa[a].children[b].children[0].innerText === "*") {
                quantidade++;
            } else if (aa[a].children[b].className === "select") {
                quantidade++;
            }
        }
    }
    if (dificuldade === "facil") {
        if (quantidade >= 81) {
            clearInterval(cont);
            document.getElementById("flag").innerText = 0;
            for (element of document.querySelectorAll("img")) {
                element.setAttribute("class", "invisible")
                for (element of document.querySelectorAll("span")) {
                    if (element.textContent === "0") {
                        element.style.color = "#121212";
                    } else {
                        element.style.color = "#36ba67";
                    }
                    element.setAttribute("class", "visible")
                }
            }
            for (element of document.querySelectorAll("td")) {
                if (element.textContent === "*") {
                    element.children[2].setAttribute("class", "visible");
                    element.children[0].setAttribute("class", "invisible");
                } 
            }            
        }
    }
    if (dificuldade === "medio") {
        if (quantidade >= 196) {
            clearInterval(cont);
            document.getElementById("flag").innerText = 0;
            for (element of document.querySelectorAll("img")) {
                element.setAttribute("class", "invisible")
                for (element of document.querySelectorAll("span")) {
                    if (element.textContent === "0") {
                        element.style.color = "#121212";
                    } else {
                        element.style.color = "#36ba67";
                    }
                    element.setAttribute("class", "visible")
                }
            }
            for (element of document.querySelectorAll("td")) {
                if (element.textContent === "*") {
                    element.children[2].setAttribute("class", "visible");
                    element.children[0].setAttribute("class", "invisible");
                } 
            }
        }
    }
    if (dificuldade === "dificil") {
        if (quantidade >= 361) {
            clearInterval(cont);
            document.getElementById("flag").innerText = 0;
            for (element of document.querySelectorAll("img")) {
                element.setAttribute("class", "invisible")
                for (element of document.querySelectorAll("span")) {
                    if (element.textContent === "0") {
                        element.style.color = "#121212";
                    } else {
                        element.style.color = "#36ba67";
                    }
                    element.setAttribute("class", "visible")
                }
            }
            for (element of document.querySelectorAll("td")) {
                if (element.textContent === "*") {
                    element.children[2].setAttribute("class", "visible");
                    element.children[0].setAttribute("class", "invisible");
                } 
            }
        }
    }
    
}

function drawTable(rows) {
    table = document.getElementById("field");
        for (var row of rows) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            for (var col of row) {
                var td = document.createElement("td");
                var span = document.createElement("span");
                span.textContent = col;
                span.setAttribute("class", "invisible");
                var img = new Image(20, 20);
                img.src = "icons/flag.png";
                var img2 = new Image(20, 20);
                img2.src = "icons/bomb.png";
                img.setAttribute("class", "invisible");
                img2.setAttribute("class", "invisible");
                td.appendChild(span);
                td.appendChild(img);
                td.appendChild(img2);
                tr.appendChild(td);
                td.addEventListener("click", clicked)
                td.addEventListener("mousedown", addFlag)
            }
        }
}


function randomMines(quant, rows, cols) {
    mines = undefined;
    mines = [];
    var erro = true;
    while (erro) {
        var erro = false;
        mines = undefined;
        mines = [];
        for (var i = 0; i < quant; i++) {
            var positionRow = parseInt(Math.random() * rows);
            var positionCol = parseInt(Math.random() * cols);
            mines.push([positionRow, positionCol]);
        }
        for (let aa = 0; aa < mines.length; aa++) {
            mines[aa];
            for (let bb = 0; bb < mines.length; bb++) {
                if (aa !== bb) {
                    if (mines[aa][0] === mines[bb][0] && mines[aa][1] === mines[bb][1]) {
                        erro = true;
                    }
                } else {
                    
                }
            }
        }
    }
    return mines;
}

function openOpts(event) {
    if (event.composedPath()[1].children[1].className === "close") {
        document.getElementById("dificuldade").setAttribute("class", "")
    } else {
        document.getElementById("dificuldade").setAttribute("class", "close")
    }
}
document.getElementById("opcoes").addEventListener("click", openOpts);

var mines = randomMines(10, 9, 9);
var myField = field(9, 9, mines);
drawTable(myField);

dificuldade = "facil";
function novoJogo(event) {
    let qntApag = document.getElementById("field").children.length;
    qntApag--;
    for (apagar = qntApag; apagar > -1; apagar--) {
        document.getElementById("field").children[apagar].remove()
    }
    if (event.target.id === "facil") {
        dificuldade = "facil";
        document.getElementById("tempo").setAttribute("class", "tempoFacil");
        document.getElementById("flag").setAttribute("class", "flagFacil");
    } else if (event.target.id === "medio") {
        dificuldade = "medio";
        document.getElementById("tempo").setAttribute("class", "tempoMedio");
        document.getElementById("flag").setAttribute("class", "flagMedio");
    } else if (event.target.id === "dificil") {
        dificuldade = "dificil";
        document.getElementById("tempo").setAttribute("class", "tempoDificil");
        document.getElementById("flag").setAttribute("class", "flagDificil");
    } else if (event.composedPath()[1].id === "facil") {
        dificuldade = "facil";
        document.getElementById("tempo").setAttribute("class", "tempoFacil");
        document.getElementById("flag").setAttribute("class", "flagFacil");
    } else if (event.composedPath()[1].id === "medio") {
        dificuldade = "medio";
        document.getElementById("tempo").setAttribute("class", "tempoMedio");
        document.getElementById("flag").setAttribute("class", "flagMedio");
    } else if (event.composedPath()[1].id === "dificil") {
        dificuldade = "dificil";
        document.getElementById("tempo").setAttribute("class", "tempoDificil");
        document.getElementById("flag").setAttribute("class", "flagDificil");
    }
    if (dificuldade === "facil") {
        var mines = randomMines(10, 9, 9);
        var myField = field(9, 9, mines);
    } else if (dificuldade === "medio") {
        var mines = randomMines(35, 14, 14);
        var myField = field(14, 14, mines);
    } else if (dificuldade === "dificil") {
        var mines = randomMines(60, 19, 19);
        var myField = field(19, 19, mines);
    }
    document.getElementById("dificuldade").setAttribute("class", "close")
    drawTable(myField);
    clearInterval(cont)
    document.getElementById('tempo').innerText = "0:00";
    seg = 0;
    min = 0;
    fisrtClick = true;
}
document.getElementById("novoJogo").addEventListener("click", novoJogo);
document.getElementById("facil").addEventListener("click", novoJogo);
document.getElementById("medio").addEventListener("click", novoJogo);
document.getElementById("dificil").addEventListener("click", novoJogo);


document.onselectstart=new Function ("return false") //bloqueia seleção texto