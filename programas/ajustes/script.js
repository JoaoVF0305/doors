{

const door = document.querySelector(".notReady");door.classList.remove("notReady")
const event = door.classList[1]
let mainScreen;
    
function seiLa(e, cont, clicked) {
    for (const obj of door.children[1].children[1].lastElementChild.children) {
        switch (e) {
            case 0: obj.classList.remove("active"); break;
            case 1:
                if (clicked == obj.classList[0]) door.children[1].children[1].lastElementChild.children[cont].classList.add("active"); cont++
            break;
            case 2: if (obj.classList[0] == "Screen") mainScreen = obj; break;
        }
    }
}

for (const obj of door.children[1].children[1].children[0].children[0].children[0].children) {
    obj.addEventListener("mousedown", function(e) {
        if (e.which == 1) {
            let clicked;
            if (e.target.localName == "label") {
                clicked = e.target.id
            } else if (e.target.localName == "span") {
                clicked = e.target.offsetParent.id
            }
            if (clicked != "System") {
                let cont = 0;
                seiLa(0); seiLa(1, cont, clicked)
            }
        }
    })
}
seiLa(2)

for (const obj of mainScreen.children[1].children) {
    obj.children[0].addEventListener("mousedown", function(e) {
        if (e.which == 1) {
            let clicked;
            if (e.target.localName == "label") {
                clicked = e.target;
            } else if (e.target.localName == "span") {
                clicked = e.target.offsetParent;
            }
            switch (clicked.classList[1]) {
                case "themeLight":themeLight(); break;
                case "themeDark":themeDark(); break;
                case "themeContrast":themeContrast(); break;
                case "themeNT":colors("blue", "bl"); break;
            }
        }
    })
}

for (const obj of mainScreen.lastElementChild.children) {
    obj.children[0].addEventListener("mousedown", function(e) {
        if (e.which == 1) {
            switch (e.target.title) {
                case "Vermelho":colors("red", "red"); break;
                case "Laranja":colors("orange", "org"); break;
                case "Amarelo":colors("yellow", "yll"); break;
                case "Verde":colors("green", "grn"); break;
                case "Ciano":colors("cyan", "cyn"); break;
                case "Azul":colors("blue", "bl"); break;
                case "Roxo":colors("purple", "prp"); break;
                case "Rosa":colors("pink", "pnk"); break;
            }
        }
    })
}

mainScreen.children[3].children[0].children[0].addEventListener("change", (event) => {
    const inputTarget = event.target;
    const file = inputTarget.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
            const readerTarget = e.target;
            document.body.style.setProperty('--systemBackground', "url(" + readerTarget.result + ")");
            let a = 1, b = document.querySelector("#users").children.length, c;
            while (a < b) {
                if (document.querySelector("#users").children[a].children[0].children[1].textContent == localStorage.getItem("userName")) {
                    c = a;
                    a = b;
                } else a++;
            }
            localStorage.setItem("bg" + c, "url(" + readerTarget.result + ")")
        });
        reader.readAsDataURL(file);
    }
})

}