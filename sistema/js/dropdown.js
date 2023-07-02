// Menu de contexto do desktop
document.querySelector(".fundo").addEventListener("contextmenu", () => {
    const contextElement = document.querySelector(".contextMenu");

    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");

    const widthWin = document.querySelector(".fundo").clientWidth;
    const heightWin = document.querySelector(".fundo").clientHeight;
    const width = document.querySelector(".contextMenu").clientWidth;
    const height = document.querySelector(".contextMenu").clientHeight;
    const top = parseInt(window.getComputedStyle(contextElement).top.replace("px", ""));
    const left = parseInt(window.getComputedStyle(contextElement).left.replace("px", ""));

    if (top + height > heightWin) {
        let a = top + height;
        let b = a - heightWin + 5;
        contextElement.style.top = (event.offsetY - b) + "px";
    }

    if (left + width > widthWin) {
        let a = left + width;
        let b = a - widthWin + 5;
        contextElement.style.left = (event.offsetX - b) + "px";
    }
})
window.addEventListener("mousedown", () => { document.querySelector(".contextMenu").classList.remove("active") })

// Menu de contexto dos atalhos

const b = document.querySelectorAll(".openDesktop");
let a = 0;
while (a < b.length) {
    b[a].addEventListener("contextmenu", (event) => {
    const cmAtalho = document.querySelector(".desktopItemDropdown");
    let click;
    if (event.target.classList[1] == "openDesktop") {
        click = event.target;
    } else {
        click = event.composedPath()[1];
    }
    cmAtalho.style.top = event.clientY + "px";
    cmAtalho.style.left = event.clientX + "px";
    cmAtalho.classList.add("active");

    /* const widthWin = document.querySelector(".openDesktop").clientWidth;
    const heightWin = document.querySelector(".openDesktop").clientHeight;
    const width = document.querySelector(".desktopItemDropdown").clientWidth;
    const height = document.querySelector(".desktopItemDropdown").clientHeight;
    const top = parseInt(window.getComputedStyle(cmAtalho).top.replace("px", ""));
    const left = parseInt(window.getComputedStyle(cmAtalho).left.replace("px", "")); */

    /* if (top + height > heightWin) {
        let a = top + height;
        let b = a - heightWin + 5;
        cmAtalho.style.top = (event.offsetY - b) + "px";
    }

    if (left + width > widthWin) {
        let a = left + width;
        let b = a - widthWin + 5;
        cmAtalho.style.left = (event.offsetX - b) + "px";
    } */
    })
    a++
}
/* window.addEventListener("mousedown", () => {
    document.querySelector(".desktopItemDropdown").classList.remove("active") 
}); */

window.addEventListener("keypress", (e) => {
    if (e.code == "KeyF") { if (e.ctrlKey) {e.preventDefault()} }
})
