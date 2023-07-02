localStorage.setItem("userName", "")

for (const inicio of document.body.children) {
    if (inicio.localName != "script" && inicio.localName != "style" && inicio.className != "login") {
        inicio.style.opacity = 0;
    }
}
let cont = 1, maxCont = 2;
while (cont < maxCont) {
    if (localStorage.getItem("userN" + cont) != null) {
        maxCont++
        const userLi = document.createElement("li"),
        userBtn = document.createElement("button"),
        userImg = document.createElement("img"),
        userNam = document.createElement("span");

        userBtn.addEventListener("click", () => {Nome.value = userNam.textContent;Senha.value = "";document.querySelector(".photo").src = (userImg.src);})
        userImg.src = localStorage.getItem("userF" + cont);
        userNam.textContent = localStorage.getItem("userN" + cont);

        document.querySelector("#users").appendChild(userLi);
        userLi.appendChild(userBtn);
        userBtn.appendChild(userImg);
        userBtn.appendChild(userNam);
    }
    cont++
}

localStorage.removeItem("userPicture");

const Nome = document.querySelector("#nome");
const Senha = document.querySelector("#senha");
document.querySelector(".enviar").addEventListener("click", () => {
    event.preventDefault();
    if (Nome.value.length >= 3) {
        localStorage.setItem("userName", Nome.value);

        let a = 1, b = document.querySelector("#users").children.length, c = 0, d;
        while (a < b) {
            if (document.querySelector("#users").children[a].children[0].children[1].textContent == localStorage.getItem("userName")) {
                d = a;
                a = b;
                c = 1;
            } else a++;
        }
        if (!c) {
            if (Senha.value != "") {
                localStorage.setItem("userN" + a, localStorage.getItem("userName"));
                localStorage.setItem("userS" + a, Senha.value);
                localStorage.setItem("userF" + a, document.querySelector(".photo").src);
                localStorage.setItem("themeColor" + a, "blue");
                localStorage.setItem("theme" + a, "dark");
                // localStorage.setItem("bg" + a, "wallpaper/floresta.jpg");

                const userLi = document.createElement("li"),
                userBtn = document.createElement("button"),
                userImg = document.createElement("img"),
                userNam = document.createElement("span");

                userBtn.addEventListener("click", () => {Nome.value = userNam.textContent;Senha.value = "";document.querySelector(".photo").src = (userImg.src);})
                userImg.src = document.querySelector(".photo").src;
                userNam.textContent = localStorage.getItem("userName");

                document.querySelector("#users").appendChild(userLi);
                userLi.appendChild(userBtn);
                userBtn.appendChild(userImg);
                userBtn.appendChild(userNam);
                inicial("block");
            } else {
                document.querySelector("#nonePass").classList.remove("disabled");
                document.querySelector("#senha").style = "box-shadow: inset 0 -3px 0 -1px var(--mc-red)"
                setTimeout(() => {
                    document.querySelector("#senha").removeAttribute("style")
                    document.querySelector("#nonePass").classList.add("erroClose");
                    setTimeout(() => document.querySelector("#nonePass").classList.replace("erroClose","disabled"),150)
                }, 2000);
            }
        } else {
            if (Senha.value != localStorage.getItem("userS" + d)) {
                document.querySelector("#wrongPass").classList.remove("disabled");
                document.querySelector("#senha").style = "box-shadow: inset 0 -3px 0 -1px var(--mc-red)"
                setTimeout(() => {
                    document.querySelector("#senha").removeAttribute("style")
                    document.querySelector("#wrongPass").classList.add("erroClose");
                    setTimeout(() => document.querySelector("#wrongPass").classList.replace("erroClose","disabled"),150)
                }, 2000);
                window.location.href = "#senha"
            } else {
                localStorage.setItem("userF" + d, document.querySelector(".photo").src)
                inicial("block");
            }
        }
    } else {
        document.querySelector("#minCharacter").classList.remove("disabled");
        document.querySelector("#nome").style = "box-shadow: inset 0 -3px 0 -1px var(--mc-red)"
        setTimeout(() => {
            document.querySelector("#nome").removeAttribute("style")
            document.querySelector("#minCharacter").classList.add("erroClose");
            setTimeout(() => document.querySelector("#minCharacter").classList.replace("erroClose","disabled"),150)
        }, 2000);
        window.location.href = "#nome"
    }

})
document.addEventListener("keydown", verificar)
function verificar(e) {if (e.code == "Space") inicial("none")};
function inicial(e) {
    document.querySelector(".loading").style.display = e;
    if (e == "block") {
        setTimeout(() => {document.querySelector(".loading").style.display = "none"; clearInterval(timerLoad)}, 0);
        let a = document.querySelector(".loading").children[0].children[1], b = "."
        function timerLoading() {
            a.textContent = " Carregando" + b + " "
            b += ".";
            if (b.length > 3) b = "."
        }
        const timerLoad = setTimeout(timerLoading, 500)
    } else {
        localStorage.setItem("userName", "Admin")
    }
    document.removeEventListener("keydown", verificar)
    document.querySelector(".login").style.display = "none";
    for (const inicio of document.body.children) {
        if (inicio.localName != "script" && inicio.localName != "style" && inicio.className != "login") {
            inicio.style.opacity = 1;
        }
    }
    picture();
}

document.querySelector("#file").addEventListener("change", (event) => {
    const inputTarget = event.target;
    const file = inputTarget.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", (e) => {
            const readerTarget = e.target;
            document.querySelector(".photo").src = readerTarget.result;
            localStorage.setItem("userPicture", readerTarget.result)
        });
        reader.readAsDataURL(file);
    }
})
