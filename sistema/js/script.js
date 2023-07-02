// window.addEventListener("mousedown", () => { document.querySelector(".desktopItemDropdown").classList.remove("active") });
// Caixa de Seleção
// Menu de contexto do desktop
let active = 0, mpx, mpy, x, y;
const sb = document.querySelector(".selectionBox");
document.querySelector(".fundo").addEventListener("mousedown", (e) => {
    if (e.which == 1) {
        active = 1
        mpx = e.clientX, mpy = e.clientY;
    }
})

document.querySelector(".showPass").addEventListener("mousedown", (e) => {
    document.querySelector(".showPass").children[0].src = "sistema/icons/eye/eyeClose.png"
    document.querySelector(".passwordBar").type = "text"
})
document.querySelector(".showPass").addEventListener("mouseup", (e) => { hiddenPass() })
document.querySelector(".showPass").addEventListener("mouseout", (e) => { hiddenPass() })
function hiddenPass() {
    document.querySelector(".showPass").children[0].src = "sistema/icons/eye/eye.png";
    document.querySelector(".passwordBar").type = "password"
}

document.querySelector(".fundo").addEventListener("mousemove", (e) => {
    if (active) {
        x = e.x; y = e.y;
        sb.classList.add("active");
        if (x - mpx > 0) {
            sb.style.left = mpx + "px";
            sb.style.width = (x - mpx) + "px";
        } else {
            sb.style.left = x + "px";
            sb.style.width = (mpx - x) + "px";
        }
        if (y - mpy > 0) {
            sb.style.top = mpy + "px";
            sb.style.height = (y - mpy) + "px";
        } else {
            sb.style.top = y + "px";
            sb.style.height = (mpy - y) + "px";
        }
    }
})
document.querySelector(".fundo").addEventListener("mouseup", (e) => {
    active = 0; sb.classList.remove("active");
})

function themeLight() {
    let a = 1, b = document.querySelector("#users").children.length, c;
    while (a < b) {
        if (document.querySelector("#users").children[a].children[0].children[1].textContent == localStorage.getItem("userName")) {
            c = a;
            a = b;
        } else a++;
    }

    localStorage.setItem("theme" + c, "light");
    document.body.style.setProperty('--colorScheme', 'light');
    document.body.style.setProperty('--selectionBackground', '#0003');
    document.body.style.setProperty('--selectionColor', 'var(--accentColor)');

    document.body.style.setProperty('--transitionFast', '150ms');
    document.body.style.setProperty('--transitionNormal', '225ms');
    document.body.style.setProperty('--transitionSlow', '300ms');

    document.body.style.setProperty('--scrollBackground', '#666');
    document.body.style.setProperty('--scrollBackgroundHover', '#000');
    document.body.style.setProperty('--scrollBackgroundActive', 'var(--accentColor)');
    document.body.style.setProperty('--scrollBorder', '1px solid transparent');
    document.body.style.setProperty('--scrollerBackground', 'var(--scrollBackground) #fff8');

    document.body.style.setProperty('--defaultColor', '#000');
    document.body.style.setProperty('--defaultTextShadow', '0px 1px 2px #0004');
    document.body.style.setProperty('--titleColor', 'var(--accentColor)');
    document.body.style.setProperty('--titleTextShadow', '0px 1px 2px #0004');
    document.body.style.setProperty('--placeholderColor', '#0008');

    document.body.style.setProperty('--hrColor', '#0002');

    document.body.style.setProperty('--taskbarBackground', '#ddda');
    document.body.style.setProperty('--windowBackground', '#eeeb');
    document.body.style.setProperty('--windowBorder', '1px solid #0002');
    document.body.style.setProperty('--windowOutline', '1px solid #0001');
    document.body.style.setProperty('--windowBorderRadius', '8px');
    document.body.style.setProperty('--windowBackdrop', 'blur(20px) saturate(125%)');
    
    document.body.style.setProperty('--headerBackground', '#ddda');
    document.body.style.setProperty('--headerBackdrop', 'blur(8px) saturate(125%)');
    document.body.style.setProperty('--navBackground', '#fff7');
    document.body.style.setProperty('--navBackgroundAllowTabs', 'transparent');    

    document.body.style.setProperty('--dropdownBackground', '#fff8');
    document.body.style.setProperty('--dropdownBackdrop', 'blur(20px) saturate(125%)');
    
    document.body.style.setProperty('--buttonBackground', 'transparent');
    document.body.style.setProperty('--buttonBackgroundHover', '#0001');
    document.body.style.setProperty('--buttonBackgroundFocus', '#0001');
    document.body.style.setProperty('--buttonBackgroundActive', '#0002');
    document.body.style.setProperty('--buttonBorderRadius', '5px');
    document.body.style.setProperty('--buttonBoxShadow', '0 0 0 transparent');
    document.body.style.setProperty('--buttonBoxShadowHover', '0 1px 3px #fff3');
    document.body.style.setProperty('--buttonBoxShadowActive', '0 0 0 transparent');
    document.body.style.setProperty('--buttonBoxShadowFocus', '0 1px 3px #fff2');
    document.body.style.setProperty('--buttonBorder', '1px solid #0000');
    document.body.style.setProperty('--buttonBorderHover', '1px solid #0001');
    document.body.style.setProperty('--buttonBorderActive', '1px solid transparent');
    document.body.style.setProperty('--buttonBorderFocus', '1px solid #0001');
    document.body.style.setProperty('--buttonScale', '.95');
    document.body.style.setProperty('--buttonTranslate', '0 -4px');

    document.body.style.setProperty('--inputBackground', '#0001');
    document.body.style.setProperty('--inputBackgroundHover', '#0002');
    document.body.style.setProperty('--inputBackgroundFocus', '#0002');
    document.body.style.setProperty('--inputBorder', '1px solid #0001');
    document.body.style.setProperty('--inputBorderHover', '1px solid transparent');
    document.body.style.setProperty('--inputBorderFocus', '1px solid transparent');
    document.body.style.setProperty('--inputBoxShadow', '0 0 0 transparent');
    document.body.style.setProperty('--inputBoxShadowHover', '0 0 0 transparent');
    document.body.style.setProperty('--inputBoxShadowFocus', '0 0 0 transparent');
    document.body.style.setProperty('--inputButtonBorderRadius', '2px');

    document.body.style.setProperty('--shortcutBorderRadius', '16px');
    document.body.style.setProperty('--shortcutBackdrop', 'blur(0)');
    document.body.style.setProperty('--shortcutBackdropHover', 'blur(3px) saturate(1.1)');
    document.body.style.setProperty('--shortcutBackdropActive', 'blur(3px) saturate(1.1)');
    document.body.style.setProperty('--shortcutBackdropFocus', 'blur(3px) saturate(1.1)');

    document.body.style.setProperty('--monoIcon', 'invert(0) drop-shadow(0px 1px 3px #0005)');
    document.body.style.setProperty('--coloredIcon', 'drop-shadow(0px 1px 3px #0005)');
    document.body.style.setProperty('--whiteIcon', 'invert(1)');
    document.body.style.setProperty('--systemColorIcon', 'var(--accentColorImage) drop-shadow(0px 1px 3px #0005)');

    document.body.style.setProperty('--default', 'url("../icons/cursor/cursorDark.png"), auto');
    document.body.style.setProperty('--text', 'url("../icons/cursor/writeDark.png"), pointer');
    document.body.style.setProperty('--move', 'url("../icons/cursor/moveDark.png") 10 10, move');
    document.body.style.setProperty('--no-drop', 'url("../icons/cursor/disabledDark.png"), no-drop');
    document.body.style.setProperty('--paint', 'url("../icons/cursor/penDark.png"), auto');
}

themeDark()
function themeDark() {
    let a = 1, b = document.querySelector("#users").children.length, c;
    while (a < b) {
        if (document.querySelector("#users").children[a].children[0].children[1].textContent == localStorage.getItem("userName")) {
            c = a;
            a = b;
        } else a++;
    }

    localStorage.setItem("theme" + c, "dark");
    document.body.style.setProperty('--colorScheme', 'dark');
    document.body.style.setProperty('--selectionBackground', '#0003');
    document.body.style.setProperty('--selectionColor', 'var(--accentColor)');

    document.body.style.setProperty('--transitionFast', '150ms');
    document.body.style.setProperty('--transitionNormal', '225ms');
    document.body.style.setProperty('--transitionSlow', '300ms');

    document.body.style.setProperty('--scrollBackground', '#aaa6');
    document.body.style.setProperty('--scrollBackgroundHover', '#aaad');
    document.body.style.setProperty('--scrollBackgroundActive', 'var(--accentColor)');
    document.body.style.setProperty('--scrollBorder', '1px solid transparent');
    document.body.style.setProperty('--scrollerBackground', 'var(--scrollBackground) #0004');

    document.body.style.setProperty('--defaultColor', '#fff');
    document.body.style.setProperty('--defaultTextShadow', '0px 1px 2px #0006');
    document.body.style.setProperty('--titleColor', 'var(--accentColor)');
    document.body.style.setProperty('--titleTextShadow', '0px 1px 2px #0006');
    document.body.style.setProperty('--placeholderColor', '#fff8');
    
    document.body.style.setProperty('--hrColor', '#fff1');
    
    document.body.style.setProperty('--taskbarBackground', '#222b');
    document.body.style.setProperty('--windowBackground', '#111b');
    document.body.style.setProperty('--windowBorder', '1px solid #0005');
    document.body.style.setProperty('--windowOutline', '1px solid #fff2');
    document.body.style.setProperty('--windowBorderRadius', '8px');
    document.body.style.setProperty('--windowBackdrop', 'blur(20px) saturate(125%)');
    
    document.body.style.setProperty('--headerBackground', '#111b');
    document.body.style.setProperty('--headerBackdrop', 'blur(8px) saturate(125%)');
    document.body.style.setProperty('--navBackground', '#fff1');
    document.body.style.setProperty('--navBackgroundAllowTabs', 'transparent');

    document.body.style.setProperty('--dropdownBackground', '#2226');
    document.body.style.setProperty('--dropdownBackdrop', 'blur(20px) saturate(125%)');
    
    document.body.style.setProperty('--buttonBackground', 'transparent');
    document.body.style.setProperty('--buttonBackgroundHover', '#fff1');
    document.body.style.setProperty('--buttonBackgroundFocus', '#fff1');
    document.body.style.setProperty('--buttonBackgroundActive', '#ffffff0a');
    document.body.style.setProperty('--buttonBorderRadius', '5px');
    document.body.style.setProperty('--buttonBoxShadow', '0 0 0 transparent');
    document.body.style.setProperty('--buttonBoxShadowHover', '0 1px 3px #0001');
    document.body.style.setProperty('--buttonBoxShadowActive', '0p 1px 3px #0001');
    document.body.style.setProperty('--buttonBoxShadowFocus', '0 1px 3px #0001');
    document.body.style.setProperty('--buttonBorder', '1px solid #0000');
    document.body.style.setProperty('--buttonBorderHover', '1px solid #ffffff07');
    document.body.style.setProperty('--buttonBorderActive', '1px solid #ffffff00');
    document.body.style.setProperty('--buttonBorderFocus', '1px solid #ffffff07');
    document.body.style.setProperty('--buttonScale', '.95');
    document.body.style.setProperty('--buttonTranslate', '0 -4px');

    document.body.style.setProperty('--inputBackground', '#0003');
    document.body.style.setProperty('--inputBackgroundHover', '#0006');
    document.body.style.setProperty('--inputBackgroundFocus', '#0006');
    document.body.style.setProperty('--inputBorder', '1px solid #0004');
    document.body.style.setProperty('--inputBorderHover', '1px solid #0004');
    document.body.style.setProperty('--inputBorderFocus', '1px solid #0002');
    document.body.style.setProperty('--inputBoxShadow', '0 0 0 transparent');
    document.body.style.setProperty('--inputBoxShadowHover', '0 0 0 transparent');
    document.body.style.setProperty('--inputBoxShadowFocus', '0 0 0 transparent');
    document.body.style.setProperty('--inputButtonBorderRadius', '2px');

    document.body.style.setProperty('--shortcutBorderRadius', '16px');
    document.body.style.setProperty('--shortcutBackdrop', 'blur(0)');
    document.body.style.setProperty('--shortcutBackdropHover', 'blur(3px) saturate(1.1)');
    document.body.style.setProperty('--shortcutBackdropActive', 'blur(3px) saturate(1.1)');
    document.body.style.setProperty('--shortcutBackdropFocus', 'blur(3px) saturate(1.1)');

    document.body.style.setProperty('--monoIcon', 'invert(1) drop-shadow(0px 1px 3px #0005)');
    document.body.style.setProperty('--coloredIcon', 'drop-shadow(0px 1px 3px #0005)');
    document.body.style.setProperty('--whiteIcon', 'invert(1)');
    document.body.style.setProperty('--systemColorIcon', 'var(--accentColorImage) drop-shadow(0px 1px 3px #0005)');

    document.body.style.setProperty('--default', 'url("../icons/cursor/cursorLight.png"), auto');
    document.body.style.setProperty('--text', 'url("../icons/cursor/writeLight.png"), pointer');
    document.body.style.setProperty('--move', 'url("../icons/cursor/moveLight.png") 10 10, move');
    document.body.style.setProperty('--no-drop', 'url("../icons/cursor/disabledLight.png"), no-drop');
    document.body.style.setProperty('--paint', 'url("../icons/cursor/penLight.png"), auto');
}

function themeNT() {
    let a = 1, b = document.querySelector("#users").children.length, c;
    while (a < b) {
        if (document.querySelector("#users").children[a].children[0].children[1].textContent == localStorage.getItem("userName")) {
            c = a;
            a = b;
        } else a++;
    }

    localStorage.setItem("theme" + c, "NT");
    document.body.style.setProperty('--colorScheme', 'light');
    document.body.style.setProperty('--selectionBackground', '#0003');
    document.body.style.setProperty('--selectionColor', 'var(--accentColor)');

    document.body.style.setProperty('--transitionFast', '0');
    document.body.style.setProperty('--transitionNormal', '0');
    document.body.style.setProperty('--transitionSlow', '0');

    document.body.style.setProperty('--scrollBackground', '#999');
    document.body.style.setProperty('--scrollBackgroundHover', '#666');
    document.body.style.setProperty('--scrollBackgroundActive', 'var(--accentColor)');
    document.body.style.setProperty('--scrollBorder', 'none');
    document.body.style.setProperty('--scrollerBackground', 'var(--scrollBackground) #fff');

    document.body.style.setProperty('--defaultColor', '#000');
    document.body.style.setProperty('--defaultTextShadow', 'none');
    document.body.style.setProperty('--titleColor', 'var(--accentColor)');
    document.body.style.setProperty('--titleTextShadow', 'none');
    document.body.style.setProperty('--placeholderColor', '#666');
    
    document.body.style.setProperty('--hrColor', '#aaa');
    
    document.body.style.setProperty('--taskbarBackground', '#ccc');
    document.body.style.setProperty('--windowBackground', '#ccc');
    document.body.style.setProperty('--windowBorder', '1px outset #ffff');
    document.body.style.setProperty('--windowOutline', '1px inset #fff');
    document.body.style.setProperty('--windowBorderRadius', '0');
    document.body.style.setProperty('--windowBackdrop', 'none');
    
    document.body.style.setProperty('--headerBackground', '#aaa');
    document.body.style.setProperty('--headerBackdrop', 'none');
    document.body.style.setProperty('--navBackground', '#ccc');
    document.body.style.setProperty('--navBackgroundAllowTabs', 'var(--accentColor)');

    document.body.style.setProperty('--dropdownBackground', '#ccc');
    document.body.style.setProperty('--dropdownBackdrop', 'none');
    
    document.body.style.setProperty('--buttonBackground', '#ddd');
    document.body.style.setProperty('--buttonBackgroundHover', '#eee');
    document.body.style.setProperty('--buttonBackgroundFocus', '#ddd');
    document.body.style.setProperty('--buttonBackgroundActive', '#bbb');
    document.body.style.setProperty('--buttonBorderRadius', '0');
    document.body.style.setProperty('--buttonBoxShadow', 'none');
    document.body.style.setProperty('--buttonBoxShadowHover', 'none');
    document.body.style.setProperty('--buttonBoxShadowActive', 'none');
    document.body.style.setProperty('--buttonBoxShadowFocus', 'none');
    document.body.style.setProperty('--buttonBorder', '1px outset #fff');
    document.body.style.setProperty('--buttonBorderHover', '1px outset #fff');
    document.body.style.setProperty('--buttonBorderActive', '1px inset #fff');
    document.body.style.setProperty('--buttonBorderFocus', '1px outset #fff');
    document.body.style.setProperty('--buttonScale', 'none');
    document.body.style.setProperty('--buttonTranslate', 'none');

    document.body.style.setProperty('--inputBackground', '#eee');
    document.body.style.setProperty('--inputBackgroundHover', '#fff');
    document.body.style.setProperty('--inputBackgroundFocus', '#fff');
    document.body.style.setProperty('--inputBorder', '1px inset #fff');
    document.body.style.setProperty('--inputBorderHover', '1px inset #fff');
    document.body.style.setProperty('--inputBorderFocus', '1px inset #fff');
    document.body.style.setProperty('--inputBoxShadow', '0 0 0 transparent');
    document.body.style.setProperty('--inputBoxShadowHover', '0px 1px 3px #0001');
    document.body.style.setProperty('--inputBoxShadowFocus', '0px 1px 3px #0001');
    document.body.style.setProperty('--inputButtonBorderRadius', '0');

    document.body.style.setProperty('--shortcutBorderRadius', '0');
    document.body.style.setProperty('--shortcutBackdrop', 'none');
    document.body.style.setProperty('--shortcutBackdropHover', 'none');
    document.body.style.setProperty('--shortcutBackdropActive', 'none');
    document.body.style.setProperty('--shortcutBackdropFocus', 'none');

    document.body.style.setProperty('--monoIcon', 'invert(0)');
    document.body.style.setProperty('--coloredIcon', '');
    document.body.style.setProperty('--whiteIcon', 'invert(1)');
    document.body.style.setProperty('--systemColorIcon', 'var(--accentColorImage)');

    document.body.style.setProperty('--default', 'url("../icons/cursor/cursorDark.png"), auto');
    document.body.style.setProperty('--text', 'url("../icons/cursor/writeDark.png"), pointer');
    document.body.style.setProperty('--move', 'url("../icons/cursor/moveDark.png") 10 10, move');
    document.body.style.setProperty('--no-drop', 'url("../icons/cursor/disabledDark.png"), no-drop');
    document.body.style.setProperty('--paint', 'url("../icons/cursor/penDark.png"), auto');
}
function themeContrast() {
    let a = 1, b = document.querySelector("#users").children.length, c;
    while (a < b) {
        if (document.querySelector("#users").children[a].children[0].children[1].textContent == localStorage.getItem("userName")) {
            c = a;
            a = b;
        } else a++;
    }
    localStorage.setItem("theme" + c, "contrast");
    document.body.style.setProperty('--colorScheme', 'dark');
    document.body.style.setProperty('--selectionBackground', '#0003');
    document.body.style.setProperty('--selectionColor', 'var(--accentColor)');

    document.body.style.setProperty('--transitionFast', '0');
    document.body.style.setProperty('--transitionNormal', '0');
    document.body.style.setProperty('--transitionSlow', '0');

    document.body.style.setProperty('--scrollBackground', '#aaa');
    document.body.style.setProperty('--scrollBackgroundHover', '#fff');
    document.body.style.setProperty('--scrollBackgroundActive', 'var(--accentColor)');
    document.body.style.setProperty('--scrollBorder', '1px solid transparent');
    document.body.style.setProperty('--scrollerBackground', 'var(--scrollBackground) #000');

    document.body.style.setProperty('--defaultColor', '#fff');
    document.body.style.setProperty('--defaultTextShadow', '0px 0px 2px #000');
    document.body.style.setProperty('--titleColor', 'var(--accentColor)');
    document.body.style.setProperty('--titleTextShadow', '0px 0px 2px #000');
    document.body.style.setProperty('--placeholderColor', '#fff8');
    
    document.body.style.setProperty('--hrColor', '#fff');
    
    document.body.style.setProperty('--taskbarBackground', '#222');
    document.body.style.setProperty('--windowBackground', '#111');
    document.body.style.setProperty('--windowBorder', '1px solid #fff');
    document.body.style.setProperty('--windowOutline', '1px solid #000');
    document.body.style.setProperty('--windowBorderRadius', '0');
    document.body.style.setProperty('--windowBackdrop', 'none');
    
    document.body.style.setProperty('--headerBackground', '#111');
    document.body.style.setProperty('--headerBackdrop', 'none');
    document.body.style.setProperty('--navBackground', '#222');
    document.body.style.setProperty('--navBackgroundAllowTabs', 'var(--accentColor)');

    document.body.style.setProperty('--dropdownBackground', '#222');
    document.body.style.setProperty('--dropdownBackdrop', 'none');
    
    document.body.style.setProperty('--buttonBackground', 'transparent');
    document.body.style.setProperty('--buttonBackgroundHover', '#777');
    document.body.style.setProperty('--buttonBackgroundFocus', '#777');
    document.body.style.setProperty('--buttonBackgroundActive', 'var(--accentColor)');
    document.body.style.setProperty('--buttonBorderRadius', '0');
    document.body.style.setProperty('--buttonBoxShadow', 'none');
    document.body.style.setProperty('--buttonBoxShadowHover', 'none');
    document.body.style.setProperty('--buttonBoxShadowActive', 'none');
    document.body.style.setProperty('--buttonBoxShadowFocus', 'none');
    document.body.style.setProperty('--buttonBorder', '1px solid transparent');
    document.body.style.setProperty('--buttonBorderHover', '1px solid #fff');
    document.body.style.setProperty('--buttonBorderActive', '1px solid #fff');
    document.body.style.setProperty('--buttonBorderFocus', '1px solid #fff');
    document.body.style.setProperty('--buttonScale', 'none');
    document.body.style.setProperty('--buttonTranslate', 'none');

    document.body.style.setProperty('--inputBackground', '#000');
    document.body.style.setProperty('--inputBackgroundHover', 'var(--accentColor)');
    document.body.style.setProperty('--inputBackgroundFocus', '#000');
    document.body.style.setProperty('--inputBorder', '1px solid #fff');
    document.body.style.setProperty('--inputBorderHover', '1px solid #fff');
    document.body.style.setProperty('--inputBorderFocus', '1px solid #fff');
    document.body.style.setProperty('--inputBoxShadow', 'none');
    document.body.style.setProperty('--inputBoxShadowHover', 'none');
    document.body.style.setProperty('--inputBoxShadowFocus', 'none');
    document.body.style.setProperty('--inputButtonBorderRadius', '0');

    document.body.style.setProperty('--shortcutBorderRadius', '0');
    document.body.style.setProperty('--shortcutBackdrop', 'none');
    document.body.style.setProperty('--shortcutBackdropHover', 'none');
    document.body.style.setProperty('--shortcutBackdropActive', 'none');
    document.body.style.setProperty('--shortcutBackdropFocus', 'none');

    document.body.style.setProperty('--monoIcon', 'invert(1) drop-shadow(0px 0px 2px #000)');
    document.body.style.setProperty('--coloredIcon', ' drop-shadow(0px 0px 2px #000)');
    document.body.style.setProperty('--whiteIcon', 'invert(1) drop-shadow(0px 0px 2px #000)');
    document.body.style.setProperty('--systemColorIcon', 'var(--accentColorImage) drop-shadow(0px 0px 2px #000)');

    document.body.style.setProperty('--default', 'url("../icons/cursor/cursorLight.png"), auto');
    document.body.style.setProperty('--text', 'url("../icons/cursor/writeLight.png"), pointer');
    document.body.style.setProperty('--move', 'url("../icons/cursor/moveLight.png") 10 10, move');
    document.body.style.setProperty('--no-drop', 'url("../icons/cursor/disabledLight.png"), no-drop');
    document.body.style.setProperty('--paint', 'url("../icons/cursor/penLight.png"), auto');
}

document.querySelector(".enviar").addEventListener("click", () => {
    event.preventDefault();
    if (Nome.value.length < 3 || Senha.value == "") return;
    let a = 1, b = document.querySelector("#users").children.length, c;
    while (a < b) {
        if (document.querySelector("#users").children[a].children[0].children[1].textContent == localStorage.getItem("userName")) {
            c = a;
            a = b;
        } else a++;
    }
    if (Senha.value != localStorage.getItem("userS" + c)) return;

    switch (localStorage.getItem("themeColor" + c)) {
        case "red": colors("red", "red"); break
        case "orange": colors("orange", "org"); break
        case "yellow": colors("yellow", "yll"); break
        case "green": colors("green", "grn"); break
        case "cyan": colors("cyan", "cyn"); break
        case "blue": colors("blue", "bl"); break
        case "purple": colors("purple", "prp"); break; break
        case "pink": colors("pink", "pnk"); break; break
        default: colors("blue", "bl"); break
    }

    switch (localStorage.getItem("theme" + c)) {
        case "light": themeLight(); break
        case "dark": themeDark(); break
        case "NT": themeNT(); break
        case "contrast": themeContrast(); break
        default: themeDark(); break
    }

    if (localStorage.getItem("bg" + c) != null) {
        document.body.style.setProperty('--systemBackground', localStorage.getItem("bg" + c));
    }
});

function colors(colNam, colAbr) {
    let a = 1, b = document.querySelector("#users").children.length, c;
    while (a < b) {
        if (document.querySelector("#users").children[a].children[0].children[1].textContent == localStorage.getItem("userName")) {
            c = a;
            a = b;
        } else a++;
    }

    localStorage.setItem("themeColor" + c, colNam);
    document.body.style.setProperty('--accentColor', 'var(--mc-' + colAbr + ')');
    document.body.style.setProperty('--accentColorImage', 'var(--img-' + colAbr + ')');
}

function chamar(e) {
    switch (e.replace(/\d/g, "")) {
        // case "arquivos": arquivos(e); break;
        // case "ajustes": ajustes(e); break;
        case "paint": paint(e); break;
        case "anotações": anotacoes(e); break;
        case "calculadora": calculadora(e); break;
        case "editorDeCookies": cookiesEditor(e); break;
        case "cubes": cubes(e); break;
    }
}

function arquivos(e) {
    console.log(e)
    let folders = []
    for (const list of document.querySelector("." + e).children[1].lastElementChild.children[0].children[0].children[0].children) {
        const element = list.children[0].lastElementChild.innerText;
        folders.push(element);
        list.addEventListener("click", () => {
            let a = 0
            for (const cont of folders) {
                if (cont == "Lixeira") return;
                if (cont == element) {
                    for (const b of folders) {
                        if (b != "Lixeira") { document.querySelector("." + b).classList.remove("active") }
                    }
                    document.querySelector("." + cont).classList.add("active");
                }
                a++
            }

        })
    }
}

function paint(e) {
    const count = document.querySelector("." + e).classList[1].replace(/[^0-9]/g, "");
    document.querySelector(".apagar").classList.replace("apagar", "apagar" + count);
    document.querySelector(".color").classList.replace("color", "color" + count);
    document.querySelector(".color2").classList.replace("color2", "color2" + count);
    document.querySelector(".pincel").classList.replace("pincel", "pincel" + count);
    document.querySelector(".eraser").classList.replace("eraser", "eraser" + count);
    document.querySelector(".fill").classList.replace("fill", "fill" + count);
    document.querySelector(".colorSelector").classList.replace("colorSelector", "colorSelector" + count);
    document.querySelector(".paperSelector").classList.replace("paperSelector", "paperSelector" + count);
    document.querySelector(".canvas").classList.replace("canvas", "canvas" + count);
    document.querySelector(".line").classList.replace("line", "line" + count); document.querySelector(".circle").classList.replace("circle", "circle" + count); document.querySelector(".square").classList.replace("square", "square" + count);
    document.querySelector("#penWidthInput").setAttribute("id", "penWidthInput" + count); document.querySelector("#eraserWidthInput").setAttribute("id", "eraserWidthInput" + count);
    const apagar = document.querySelector(".apagar" + count),
        color = document.querySelector(".color" + count),
        colorF = document.querySelector(".color2" + count),
        pincel = document.querySelector(".pincel" + count), borracha = document.querySelector(".eraser" + count), balde = document.querySelector(".fill" + count),
        colorSelector = document.querySelector(".colorSelector" + count),
        paperSelector = document.querySelector(".paperSelector" + count),
        canvas = document.querySelector(".canvas" + count),
        line = document.querySelector(".line" + count); const circle = document.querySelector(".circle" + count), square = document.querySelector(".square" + count),
            penWidth = document.querySelector("#penWidthInput" + count),
            eraserWidth = document.querySelector("#eraserWidthInput" + count);
    let ctx = canvas.getContext("2d");
    let sizeP = 2, sizeB = 6, is_drawing = false, x, y, mpx, mpy, colorSelected;
    let x2, y2;
    let restore_array = [], new_array = [], naC = 0;
    let index = -1;
    ctx.globalCompositeOperation = "source-over";
    penWidth.addEventListener("change", ({ target }) => {
        if (target.value < 1) { target.value = 1; }
        if (target.value > 49) { target.value = 49; }
        sizeP = target.value;
    })
    eraserWidth.addEventListener("change", ({ target }) => {
        if (target.value < 1) { target.value = 1; }
        if (target.value > 49) { target.value = 49; }
        sizeB = target.value;
    })
    document.querySelector("#widthInput").addEventListener("change", () => {
        if (document.querySelector("#widthInput").value < 400) { document.querySelector("#widthInput").value = 400 }
        canvas.width = document.querySelector("#widthInput").value;
        canvas.style.width = document.querySelector("#widthInput").value + "px";
    })
    document.querySelector("#heightInput").addEventListener("change", () => {
        if (document.querySelector("#heightInput").value < 400) { document.querySelector("#heightInput").value = 400 }
        canvas.height = document.querySelector("#heightInput").value;

    })
    color.addEventListener("input", () => {
        colorSelected = color.value;
        colorSelector.style.backgroundColor = colorSelected;
    })
    colorF.addEventListener("input", () => {
        paperSelector.style.backgroundColor = colorF.value;
        canvas.style.backgroundColor = colorF.value;

    })
    color.addEventListener
    const selects = document.querySelectorAll(".select");
    let selQ = 0
    while (selQ < selects.length) {
        selects[selQ].addEventListener("click", (e) => {
            if (e.target.id != "selected") {
                let a = 0;
                while (a < selects.length) { if (selects[a].id == "selected") { selects[a].removeAttribute("id", "selected") } a++ }
                if (e.target.localName == "img") e.composedPath()[1].setAttribute("id", "selected"); else e.target.setAttribute("id", "selected");
            }
        });
        selQ++
    }
    selects[selQ]

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stop); canvas.addEventListener("mouseout", stop);

    function start(event) {
        document.querySelector(".desfazer").children[0].classList.remove("disabled");
        mpx = event.offsetX;
        mpy = event.offsetY;
        x = event.offsetX; y = event.offsetY;
        is_drawing = true;
        if (event.ctrlKey) {
            if (mpx >= 0 && mpy >= 0 && mpx < canvas.width && mpy < canvas.height) {
                const id = ctx.getImageData(~~x, ~~y, 1, 1);
                const [r, g, b, a] = id.data;
                let col;
                switch (event.which) {
                    case 1:
                        col = `rgba(${r},${g},${b},${a / 255})`;
                        if (col != "rgba(0,0,0,0)") {
                            colorSelector.style.backgroundColor = col;

                        } /* else {
                            colorSelector.style.backgroundColor = "white"
                            colorSelected = "white";
                        } */
                        break;
                    case 3:
                        col = `rgba(${r},${g},${b},${a / 255})`;
                        if (col != "rgba(0,0,0,0)") {
                            paperSelector.style.backgroundColor = col;
                            canvas.style.backgroundColor = col;
                        } else {
                            paperSelector.style.backgroundColor = "white";
                            canvas.style.backgroundColor = "white";
                        }
                        break;
                }
            }
        } else {
            if (pincel.id == 'selected') {
                let a = 1;
                x2 = event.offsetX; y2 = event.offsetY;
                ctx.globalCompositeOperation = "source-over";
                if (a) {
                    drawCircle(x2, y2);
                    drawLine(x, y, x2, y2);
                    x = x2;
                    y = y2;
                }
                function drawCircle(x, y) {
                    ctx.beginPath();
                    ctx.arc(x, y, sizeP, 0, Math.PI * 2);
                    ctx.fillStyle = colorSelected;
                    ctx.fill();
                }
                function drawLine(x1, y1, x2, y2) {
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2)
                    ctx.strokeStyle = colorSelected;
                    ctx.lineWidth = sizeP * 2;
                    ctx.stroke();
                }
            }
            //borracha
            if (borracha.id == 'selected') {
                let a = 1;
                x2 = event.offsetX; y2 = event.offsetY;
                ctx.globalCompositeOperation = "destination-out";
                if (a) {
                    drawCircle(x2, y2);
                    drawLine(x, y, x2, y2);
                    x = x2;
                    y = y2;
                }
                function drawCircle(x, y) {
                    ctx.beginPath();
                    ctx.arc(x, y, sizeP, 0, Math.PI * 2);
                    ctx.fillStyle = colorSelected;
                    ctx.fill();
                }
                function drawLine(x1, y1, x2, y2) {
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2)
                    ctx.strokeStyle = colorSelected;
                    ctx.lineWidth = sizeP * 2;
                    ctx.stroke();
                }
            }
            //balde de tinta
            if (balde.id == 'selected') {
                let swatch = "green"
                // const fill_rgba = get_rgba_from_color(swatch);0
                const fill_rgba = [255, 0, 43, 255];
                draw_fill_without_pattern_support(ctx, mpx, mpy, fill_rgba[0], fill_rgba[1], fill_rgba[2], fill_rgba[3]);
            }
        }
    };

    function draw(event) {
        document.querySelector("." + e).children[0].lastElementChild.children[0].children[0].firstElementChild.textContent = " X: " + event.offsetX + " "
        document.querySelector("." + e).children[0].lastElementChild.children[0].children[0].lastElementChild.textContent = " Y: " + event.offsetY + " "
        if (is_drawing) {
            if (event.ctrlKey) {
                if (event.offsetX >= 0 && event.offsetY >= 0 && event.offsetX < canvas.width && event.offsetY < canvas.height) {
                    const id = ctx.getImageData(~~event.offsetX, ~~event.offsetY, 1, 1);
                    const [r, g, b, a] = id.data;
                    let col;
                    switch (event.which) {
                        case 1:
                            col = `rgba(${r},${g},${b},${a / 255})`;
                            if (col != "rgba(0,0,0,0)") {
                                colorSelector.style.backgroundColor = col;
                                colorSelected = col;
                            } else {
                                colorSelector.style.backgroundColor = "white"
                                colorSelected = "white";
                            }
                            break;
                        case 3:
                            col = `rgba(${r},${g},${b},${a / 255})`;
                            if (col != "rgba(0,0,0,0)") {
                                paperSelector.style.backgroundColor = col;
                                canvas.style.backgroundColor = col;
                            } else {
                                paperSelector.style.backgroundColor = "white";
                                canvas.style.backgroundColor = "white";
                            }
                            break;
                    }
                } else {
                    colorSelector.style.backgroundColor = "white";
                    colorSelected = `rgba(${r},${g},${b},${a / 255})`;
                }
            } else {
                //desenhar com o pincel
                if (pincel.id == 'selected') {
                    let a = 1;
                    x2 = event.offsetX; y2 = event.offsetY;
                    ctx.globalCompositeOperation = "source-over";
                    if (a) {
                        drawCircle(x2, y2);
                        drawLine(x, y, x2, y2);
                        x = x2;
                        y = y2;
                    }
                    function drawCircle(x, y) {
                        ctx.beginPath();
                        ctx.arc(x, y, sizeP, 0, Math.PI * 2);
                        ctx.fillStyle = colorSelected;
                        ctx.fill();
                    }
                    function drawLine(x1, y1, x2, y2) {
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2)
                        ctx.strokeStyle = colorSelected;
                        ctx.lineWidth = sizeP * 2;
                        ctx.stroke();
                    }
                }
                //borracha
                if (borracha.id == 'selected') {
                    let a = 1;
                    x2 = event.offsetX; y2 = event.offsetY;
                    ctx.globalCompositeOperation = "destination-out";
                    if (a) {
                        drawCircle(x2, y2);
                        drawLine(x, y, x2, y2);
                        x = x2;
                        y = y2;
                    }
                    function drawCircle(x, y) {
                        ctx.beginPath();
                        ctx.arc(x, y, sizeP, 0, Math.PI * 2);
                        ctx.fillStyle = colorSelected;
                        ctx.fill();
                    }
                    function drawLine(x1, y1, x2, y2) {
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2)
                        ctx.strokeStyle = colorSelected;
                        ctx.lineWidth = sizeP * 2;
                        ctx.stroke();
                    }
                }
                //linha
                if (line.id == 'selected') {
                    ctx.putImageData(restore_array[index], 0, 0);
                    ctx.globalCompositeOperation = "source-over";
                    ctx.strokeStyle = colorSelected;
                    ctx.lineWidth = sizeP * 2;
                    ctx.beginPath();
                    ctx.moveTo(mpx, mpy);
                    ctx.lineTo(event.offsetX, event.offsetY);
                    ctx.stroke();
                }
                //quadrado
                if (square.id == 'selected') {
                    if (event.shiftKey) {
                        ctx.putImageData(restore_array[index], 0, 0);
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = colorSelected;
                        ctx.lineWidth = sizeP * 2;
                        ctx.beginPath();
                        let xy = event.offsetX - mpx;
                        if (event.offsetX - mpx < event.offsetY - mpy) xy = event.offsetY - mpy
                        ctx.rect(mpx, mpy, xy, xy);
                        ctx.stroke();
                    } else {
                        ctx.putImageData(restore_array[index], 0, 0);
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = colorSelected;
                        ctx.lineWidth = sizeP * 2;
                        ctx.beginPath();
                        ctx.rect(mpx, mpy, event.offsetX - mpx, event.offsetY - mpy);
                        ctx.stroke();
                    }
                }
                //circulo
                if (circle.id == 'selected') {
                    if (event.shiftKey) {
                        ctx.putImageData(restore_array[index], 0, 0);
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = colorSelected;
                        ctx.lineWidth = sizeP * 2;
                        ctx.beginPath();
                        let raio = (event.offsetX - mpx) * 0.5
                        let pcX = mpx + raio, pcY = mpy + raio;

                        if ((event.offsetX - mpx) * 0.5 < 0) { raio = (mpx - event.offsetX) * 0.5; pcX = event.offsetX + (event.offsetX - mpx) * 0.5 }
                        if ((event.offsetY - mpy) * 0.5 < 0) { raio = (mpy - event.offsetY) * 0.5; pcY = event.offsetY + (event.offsetY - mpy) * 0.5 }

                        if ((event.offsetX - mpx) * 0.5 < (event.offsetY - mpy) * 0.5) raio = (event.offsetY - mpy) * 0.5
                        ctx.ellipse(pcX, pcY, raio, raio, 0, 2 * Math.PI, false);
                        ctx.stroke();
                    } else {
                        ctx.putImageData(restore_array[index], 0, 0);
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = colorSelected;
                        ctx.lineWidth = sizeP * 2;
                        ctx.beginPath();
                        let raioX = (event.offsetX - mpx) * 0.5, raioY = (event.offsetY - mpy) * 0.5;
                        let pcX = mpx + raioX, pcY = mpy + raioY;
                        if (raioX < 0) { raioX = (mpx - event.offsetX) * 0.5; pcX = event.offsetX + raioX }
                        if (raioY < 0) { raioY = (mpy - event.offsetY) * 0.5; pcY = event.offsetY + raioY }
                        ctx.ellipse(pcX, pcY, raioX, raioY, 0, 2 * Math.PI, false);
                        ctx.stroke();
                    }
                }
            }
        }
    };
    function draw_fill_without_pattern_support(ctx, start_x, start_y, fill_r, fill_g, fill_b, fill_a) {
        ctx.globalCompositeOperation = "source-over";
        const fill_threshold = 1;
        // @TODO: split up processing in case it takes too long?
        // progress bar and abort button (outside of image-manipulation.js)
        // or at least just free up the main thread every once in a while
        // @TODO: speed up with typed arrays? https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/
        // could avoid endianness issues if only copying colors
        // the jsperf only shows ~15% improvement
        // maybe do something fancier like special-casing large chunks of single-color image
        // (octree? or just have a higher level stack of chunks to fill and check at if a chunk is homogeneous)

        const c_width = canvas.width;
        const c_height = canvas.height;
        start_x = Math.max(0, Math.min(Math.floor(start_x), c_width));
        start_y = Math.max(0, Math.min(Math.floor(start_y), c_height));
        const stack = [[start_x, start_y]];
        const id = ctx.getImageData(0, 0, c_width, c_height);
        let pixel_pos = (start_y * c_width + start_x) * 4;
        const start_r = id.data[pixel_pos + 0];
        const start_g = id.data[pixel_pos + 1];
        const start_b = id.data[pixel_pos + 2];
        const start_a = id.data[pixel_pos + 3];

        // @TODO: Allow flood-filling colors similar within fill threshold.
        // Right now it will cause an infinite loop if we don't stop early in this case.
        // As of writing, the fill threshold is very low, so this problem is unlikely to be noticed,
        // but it would be nice as a user-configurable option.
        if (
            Math.abs(fill_r - start_r) <= fill_threshold &&
            Math.abs(fill_g - start_g) <= fill_threshold &&
            Math.abs(fill_b - start_b) <= fill_threshold &&
            Math.abs(fill_a - start_a) <= fill_threshold
        ) {
            return;
        }

        while (stack.length) {
            let new_pos;
            let x;
            let y;
            let reach_left;
            let reach_right;
            new_pos = stack.pop();
            x = new_pos[0];
            y = new_pos[1];

            pixel_pos = (y * c_width + x) * 4;
            while (should_fill_at(pixel_pos)) {
                y--;
                pixel_pos = (y * c_width + x) * 4;
            }
            reach_left = false;
            reach_right = false;
            // eslint-disable-next-line no-constant-condition
            while (true) {
                y++;
                pixel_pos = (y * c_width + x) * 4;

                if (!(y < c_height && should_fill_at(pixel_pos))) {
                    break;
                }

                do_fill_at(pixel_pos);

                if (x > 0) {
                    if (should_fill_at(pixel_pos - 4)) {
                        if (!reach_left) {
                            stack.push([x - 1, y]);
                            reach_left = true;
                        }
                    } else if (reach_left) {
                        reach_left = false;
                    }
                }

                if (x < c_width - 1) {
                    if (should_fill_at(pixel_pos + 4)) {
                        if (!reach_right) {
                            stack.push([x + 1, y]);
                            reach_right = true;
                        }
                    } else if (reach_right) {
                        reach_right = false;
                    }
                }

                pixel_pos += c_width * 4;
            }
        }
        ctx.putImageData(id, 0, 0);

        function should_fill_at(pixel_pos) {
            return (
                // matches start color (i.e. region to fill)
                Math.abs(id.data[pixel_pos + 0] - start_r) <= fill_threshold &&
                Math.abs(id.data[pixel_pos + 1] - start_g) <= fill_threshold &&
                Math.abs(id.data[pixel_pos + 2] - start_b) <= fill_threshold &&
                Math.abs(id.data[pixel_pos + 3] - start_a) <= fill_threshold
            );
        }

        function do_fill_at(pixel_pos) {
            id.data[pixel_pos + 0] = fill_r;
            id.data[pixel_pos + 1] = fill_g;
            id.data[pixel_pos + 2] = fill_b;
            id.data[pixel_pos + 3] = fill_a;
        }
    }
    function stop(event) {
        if (is_drawing) {
            ctx.stroke();
            ctx.closePath();
            is_drawing = false;
        }
        if (event.type != 'mouseout') {
            restore_array.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            index += 1;
        }
        x = e.offsetX;
        y = e.offsetY;
    };
    apagar.addEventListener("click", clear_canvas);
    function clear_canvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        naC = 0;
        new_array = []
        restore_array = [];
        index = -1;
        document.querySelector(".desfazer").children[0].classList.add("disabled");
        document.querySelector(".refazer").children[0].classList.add("disabled");
    }
    //control + z | control + y
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'z') {
            desfaz();
        }
        if (event.ctrlKey && event.key === 'y') {
            refaz();
        }
    });
    //desfazer
    document.querySelector(".desfazer").addEventListener("click", desfaz);
    function desfaz() {
        if (index > 0) {
            document.querySelector(".refazer").children[0].classList.remove("disabled");
            index -= 1;
            new_array[naC] = restore_array.pop();
            naC++
            ctx.putImageData(restore_array[index], 0, 0);
        }
        if (index <= 0) {
            document.querySelector(".refazer").children[0].classList.remove("disabled");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.querySelector(".desfazer").children[0].classList.add("disabled");
        }
    }
    document.querySelector(".refazer").addEventListener("click", refaz);
    function refaz() {
        if (naC > 0) {
            document.querySelector(".desfazer").children[0].classList.remove("disabled");
            index += 1;
            restore_array.push(new_array[naC - 1]);
            naC = naC - 1;
            new_array.pop()
            ctx.putImageData(restore_array[index], 0, 0);
        }
        if (naC <= 0) {
            document.querySelector(".desfazer").children[0].classList.remove("disabled");
            document.querySelector(".refazer").children[0].classList.add("disabled");
        }
    }
}

/* \Ajustes */

function ajustes(event) {
    document.querySelector(".themeLight").addEventListener("click", () => { themeLight() });
    document.querySelector(".themeDark").addEventListener("click", () => { themeDark() });
    document.querySelector(".themeContrast").addEventListener("click", () => { themeContrast() });
    document.querySelector(".themeNT").addEventListener("click", () => { themeNT() });

    document.querySelector(".colRed").addEventListener("click", () => { colors("red", "red") });
    document.querySelector(".colOrange").addEventListener("click", () => { colors("orange", "org") });
    document.querySelector(".colYellow").addEventListener("click", () => { colors("yellow", "yll") });
    document.querySelector(".colGreen").addEventListener("click", () => { colors("green", "grn") });
    document.querySelector(".colCyan").addEventListener("click", () => { colors("cyan", "cyn") });
    document.querySelector(".colBlue").addEventListener("click", () => { colors("blue", "bl") });
    document.querySelector(".colPurple").addEventListener("click", () => { colors("purple", "prp") });
    document.querySelector(".colPink").addEventListener("click", () => { colors("pink", "pnk") });


    document.querySelector(".changeWallpaper").addEventListener("change", (event) => {
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


    let count = document.querySelector("." + event).classList[1].replace(/[^0-9]/g, "");
    const buttons = document.querySelectorAll(".configButton");
    let a = 0;
    let b = buttons.length;
    while (a < b) {
        buttons[a].classList.remove("configButton"); buttons[a].classList.add("configButton" + count);
        a++
    }
    const main = document.querySelectorAll(".mainConfig");
    let y = main.length;
    let x = 0;

    while (x < y) {
        main[x].classList.replace("mainConfig", "mainConfig" + count)
        let a = main[x].classList[2];
        x++
    }

    const button = document.querySelectorAll(".configButton" + count);
    a = 0; b = button.length; let c; let d;
    let way = []; way[count] = ["C:/", "Users/", "User/", "OneDrive/", "Ajustes/"];
    let wayLength = []; wayLength[count] = way[count].length;
    let lastWay = []; lastWay[count] = [];
    let volt = []; volt[count] = 0;
    const homes = document.querySelectorAll(".home");

    while (a < b) {
        button[a].addEventListener("click", (event) => {
            let a;
            if (event.target.id == "") {
                let ca = 0; let cb = 1;
                while (ca < cb) {
                    if (event.composedPath()[ca].id != "") {
                        c = event.composedPath()[ca].id;
                        let b = event.composedPath()[ca].classList[1].replace(/[^0-9]/g, "");
                        d = way[b].length;
                        way[b][d++] = c + "/";
                        atualizar(way[b], b);
                        a = b;
                    } else { cb++ }
                    ca++;
                }
            } else {
                c = event.target.id;
                let b = event.target.classList[1].replace(/[^0-9]/g, "");
                d = way[b].length;
                way[b][d++] = c + "/";
                atualizar(way[b], b);
                a = b;
            }
            volt[a] = 0;
            document.querySelector(".avançar" + a).children[0].classList.add("disabled");
            lastWay[a] = [];
            const home2 = document.querySelectorAll(".home" + a);
            let x = 0
            while (x < home2.length) {
                home2[x].children[0].classList.remove("disabled");
                if (x == 0) {
                    home2[x].children[0].classList.remove("disabled");
                }
                x++
            }
        })
        a++
    }
    a = 0;
    b = homes.length;
    while (a < b) {
        homes[a].classList.replace("home", "home" + count)
        homes[a].addEventListener("click", ({ target }) => {
            if (target.classList[0] == "icon-area") {
                home(target.children[0].classList[1]);
            } else if (target.classList[0] == "icon-bg") {
                home(target.children[0].classList[1]);
            } else {
                home(target.classList[1]);
            }
            function home(e) {
                if (e != "disabled") {
                    let a = homes[0].classList[1].replace(/[^0-9]/g, "");
                    way[a] = ["C:/", "Users/", "User/", "OneDrive/", "Ajustes/"];
                    atualizar(way[a], a);
                    volt[a] = 0;
                    document.querySelector(".avançar" + a).children[0].classList.add("disabled");
                    lastWay[a] = [];
                    document.querySelector(".home" + a).children[0].classList.add("disabled");
                    const home2 = document.querySelectorAll(".home" + a);
                    let x = 0
                    while (x < home2.length) {
                        home2[x].children[0].classList.add("disabled");
                        if (x == 0) {
                            home2[x].children[0].classList.add("disabled");
                        }
                        x++
                    }
                }
            }
        })
        a++
    }

    const voltarc = document.querySelector(".voltar");
    voltarc.classList.replace("voltar", "voltar" + count);
    voltarc.addEventListener("click", ({ target }) => {
        if (target.classList[0] == "icon-area") {
            voltar(target.children[0].classList[1]);
        } else if (target.classList[0] == "icon-bg") {
            voltar(target.children[0].classList[1]);
        } else {
            voltar(target.classList[1]);
        }
        function voltar(e) {
            if (e != "disabled") {
                let a = voltarc.classList[1].replace(/[^0-9]/g, "");
                let b = way[a].length
                lastWay[a][volt[a]] = way[a][b - 1];
                volt[a]++
                way[a].pop();
                atualizar(way[a], a);
                document.querySelector(".avançar" + [a]).children[0].classList.remove("disabled");
            }
        }
    })
    const avançarc = document.querySelector(".avançar");
    avançarc.classList.replace("avançar", "avançar" + count);
    avançarc.addEventListener("click", ({ target }) => {
        if (target.classList[0] == "icon-area") {
            avançar(target.children[0].classList[1]);
        } else if (target.classList[0] == "icon-bg") {
            avançar(target.children[0].classList[1]);
        } else {
            avançar(target.classList[1]);
        }
        function avançar(e) {
            let a = avançarc.classList[1].replace(/[^0-9]/g, "");
            if (e != "disabled") {
                let b = way[a].length;
                let c = lastWay[a].length - 1;
                way[a][b] = lastWay[a][c];
                atualizar(way[a], a);
                lastWay[a].pop()
                const home2 = document.querySelectorAll(".home" + a);
                let x = 0
                while (x < home2.length) {
                    home2[x].children[0].classList.remove("disabled");
                    if (x == 0) {
                        home2[x].children[0].classList.remove("disabled");
                    }
                    x++
                }


                if (lastWay[a].length == 0) {
                    document.querySelector(".avançar" + a).children[0].classList.add("disabled");
                    volt[a] = 0
                }
            }
        }
    })

    function atualizar(way, cont) {
        let a = way.length;
        const main = document.querySelectorAll(".mainConfig" + cont)
        let y = main.length
        let x = 0;
        while (x < y) {
            main[x].classList.remove("active");
            x++
        }
        document.querySelector("." + way[a - 1].replace("/", "")).classList.add("active");
        if (a > wayLength[cont]) {
            document.querySelector(".voltar" + cont).children[0].classList.remove("disabled");
        } else {
            document.querySelector(".voltar" + cont).children[0].classList.add("disabled");
            const home2 = document.querySelectorAll(".home" + cont);
            let x = 0
            while (x < home2.length) {
                home2[x].children[0].classList.add("disabled");
                if (x == 0) {
                    home2[x].children[0].classList.add("disabled");
                }
                x++
            }
        }
    }
}

function calculadora(e) {
    const styles = `
        resize: none;
        width: 360px;
        height: 500px;
    `;
    document.querySelector("." + e).style.cssText = styles;


    const display = document.querySelector(".calculoDisplay");
    const numeros = document.querySelectorAll("[id*=tecla]");
    const operadores = document.querySelectorAll("[id*=operador]");
    const calculo = document.querySelector(".resultadoDisplay"); calculo.value = "";
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
    document.querySelectorAll(".calcBtn").forEach(buttons => buttons.addEventListener("click", (e) => e.target.blur()))

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
    document.getElementById("1DivPx").addEventListener("click", umDivPx)
    document.getElementById("elev2").addEventListener("click", elev2)
    document.getElementById("raiz").addEventListener("click", raiz)
    document.getElementById("porcentagem").addEventListener("click", porcentagem)

    const ativarIgual = () => {
        calcular();
        operador = undefined;
        novoNumero = true;
        novoCalculo = true;
    }
    document.getElementById("igual").addEventListener("click", ativarIgual)

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
    document.getElementById("limparCalculo").addEventListener("click", limparCalculo);

    const removerUltimoNumero = () => {
        if (display.value == numeroAnterior + " " + operador + " ") {
            operador = undefined;
            display.value = numeroAnterior;
        } else
            display.value = display.value.slice(0, -1);
    }
    document.getElementById("backspace").addEventListener("click", removerUltimoNumero);

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
    document.getElementById("inverter").addEventListener("click", inverterSinal);

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
    document.getElementById("decimal").addEventListener("click", inserirDecimal);

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


function cookiesEditor() {
    let a, b = 0, replace = [];
    for (const opts of document.querySelector(".mainCookies").children) {
        opts.children[1].value = localStorage.getItem(opts.children[0].innerText).replace("url(", "").replace(")", "");

        replace[b] = opts.children[1].value
        b++
        opts.children[2].addEventListener("click", (e) => {
            for (const opts of e.composedPath()[2].children) {
                a = 0;
                if (opts.children[1] == e.composedPath()[1].children[1]) {
                    e.composedPath()[1].children[1].value = "";
                    return
                } else { a++ }
            }
        })
        opts.children[3].addEventListener("click", (e) => {
            a = 0;
            for (const opts of e.composedPath()[2].children) {
                if (opts.children[1] == e.composedPath()[1].children[1]) {
                    e.composedPath()[1].children[1].value = replace[a]
                    return
                } else { a++ }
            }
        })
    }
    document.querySelector(".apply").addEventListener("click", () => {
        b = 0;
        for (const opts of document.querySelector(".mainCookies").children) {
            if (opts.children[0].innerText == "bg") {
                localStorage.setItem(opts.children[0].innerText, "url(" + opts.children[1].value + ")");
            } else {
                localStorage.setItem(opts.children[0].innerText, opts.children[1].value);
            }

            replace[b] = opts.children[1].value
            b++
            window.location.reload()

        }
    })
    document.querySelector(".clearAll").addEventListener("click", () => {
        for (const opts of document.querySelector(".mainCookies").children) {
            opts.children[1].value = "";
        }
    })
    document.querySelector(".undoAll").addEventListener("click", () => {
        b = 0;
        for (const opts of document.querySelector(".mainCookies").children) {
            opts.children[1].value = replace[b];
            b++
        }
    })
}

function anotacoes(e) {
    const quant = e.replace(/[^0-9]/g, "")
    document.querySelector(".texto").classList.replace("texto", "texto" + quant);
    const text = document.querySelector("#textArea");
    text.addEventListener("input", () => {
        document.querySelector("."+e).firstElementChild.lastElementChild.firstElementChild.firstElementChild.children[4].textContent = " caracteres: " + text.value.replace(/\r?\n/g, "").length + " ";
    });
    
}

function cubes(eve) {
    const styles = `
        resize: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    `;
    document.querySelector("." + eve).style.cssText = styles;
    const canvas = document.querySelector("#cCubes");
    document.querySelector(".headDraggable0").click()
    canvas.width = window.getComputedStyle(document.querySelector(".cubes" + eve.replace(/[^0-9]/g, ""))).width.replace(/[^0-9]/g, "");
    canvas.height = window.getComputedStyle(document.querySelector(".cubes" + eve.replace(/[^0-9]/g, ""))).height.replace(/[^0-9]/g, "");
    const ctx = canvas.getContext("2d");
    let enemies = []
    ctx.strokeStyle = "#888";
    let jump = 0, jum = 1, sf = 0, shot = 1, qntdShot = 0, reloadSpeed = 2.5, c1tc = 0, timeShot = reloadSpeed, side = 1, game = 1, move = 1; // move: 0 - left; 1 - stop; 2 - right;
    let point = {
        k: 0,
        t: "00" + 0,
    }
    const player = {
        x: (canvas.width / 2) - (30 / 2),
        y: 550 - 31,
        a: 550 - 31, //a: 550 - 31,
        l: 3,
        jump: 80,
        width: 30,
        height: 30,
    };
    let cordEnemy = []
    const enemy = {
        x: [],
        y: 550 - 31,
        l: [],
        width: 30,
        height: 30,
    };
    const shots = {
        x: [],
        y: [],
        l: [],
        s: [],
        width: 10,
        height: 5,
    };
    const box = {
        x: 0,
        y: 0,
        l: 0,
        s: 1,
        n: 0,
        width: 20,
        height: 20,
    };
    const pUP = {
        width: canvas.width / 2,
        height: canvas.height / 2,
        textAlign: "center",
        textContent: "",
        PUP: [0, 0],
    }
    let newEnemy = 1, contEnemy = 0
    const animBox = setInterval(() => {
        if (box.l) {
            if (box.s) if (box.y > 550 - 35) box.y -= .8; else box.s--;
            if (!box.s) if (box.y < 550 - 31 + 9) box.y++; else box.s++;
        }
    }, 20)

    loop();
    function drawFix() {
        ctx.strokeStyle = "#888";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const ground = () => {
            ctx.beginPath();
            ctx.rect(0, 550, canvas.width, canvas.height);
            ctx.stroke();
        }
        ground()

        ctx.font = "30px arial"
        ctx.fillStyle = "#888"
        ctx.textBaseline = "top"
        ctx.textAlign = "right"
        ctx.fillText("Tempo: " + point.t, canvas.width - 20, 20);
        ctx.textAlign = "left"
        ctx.fillText("Mortes: " + point.k, 20, 20);
    }
    drawFix()

    const timer = setInterval(() => {
        point.t++
        if (point.t < 10) { point.t = "00" + point.t };
        if (point.t >= 10 && point.t < 100) { point.t = "0" + point.t };
        if (point.t >= 100 && point.t < 999) { point.t };
        if (point.t >= 999) game = 0;
    }, 1000)
    function drawPlayer() {
        ctx.strokeStyle = "#888";
        if (jump) jumping()
        if (player.x > 0) { if (move == 0) player.x -= 5; }
        if (player.x < (canvas.width - player.width)) { if (move == 2) player.x += 5; }

        ctx.strokeRect(player.x, player.y, player.width, player.height);
        let p1, p2, p3, p4, p5, p6;
        if (side) {
            p1 = player.x + 10, p2 = player.y + 8,
                p3 = player.x + player.width - 10, p4 = player.y + player.height - 15,
                p5 = player.x + 10, p6 = player.y + player.height - 8;
        } else {
            p1 = player.x + player.width - 11, p2 = player.y + 8,
                p3 = player.x + 9, p4 = player.y + player.height - 15,
                p5 = player.x + player.width - 11, p6 = player.y + player.height - 8;
        }

        if (box.l) if ((player.y + player.width >= box.y) && ((player.x + player.width >= box.x && player.x + player.width <= box.x + box.width) || (player.x <= box.x + box.width && player.x >= box.x))) {
            box.l = 0;
            let x = 0, y = 1;
            while (x < y) {
                let a = Math.floor(Math.random() * 2);
                switch (a) {
                    case 0:
                        if (!pUP.PUP[0]) {
                            player.jump = 120;
                            pUP.textContent = "JUMP BOOST!";
                            setTimeout(() => pUP.textContent = "", 2000);
                        } else { y++ }
                        pUP.PUP[0] = 1
                        break;

                    case 1:
                        if (!pUP.PUP[1]) {
                            c1tc += 1;
                            reloadSpeed -= .5;
                            pUP.textContent = "RELOAD SPEED++";
                            setTimeout(() => pUP.textContent = "", 2000);
                        } else { y++ }
                        if (c1tc == 2) pUP.PUP[1] = 1
                        break;
                }
                x++
            }
        }

        ctx.beginPath();
        ctx.moveTo(p1, p2);
        ctx.lineTo(p3, p4)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(p3, p4);
        ctx.lineTo(p5, p6)
        ctx.stroke();

        let lifeWH = player.width / 5;
        if (sf) {
            if (player.l >= 1) ctx.fillRect(player.x - 1, player.y - 10, lifeWH, player.height / 5);
            if (player.l >= 2) ctx.fillRect(player.x + (lifeWH * 2), player.y - 10, lifeWH, player.height / 5);
            if (player.l == 3) ctx.fillRect(player.x + 1 + (lifeWH * 4), player.y - 10, lifeWH, player.height / 5);
        }
        if (player.l <= 0) game--;
    }
    drawPlayer();
    function drawBox() {
        if (box.l) {
            ctx.strokeStyle = "#888"
            if (box.n) {
                box.n = 0;
                box.y = 550 - 31 + 10;
                // setTimeout(() => box.l = 0, 5000)
                box.x = Math.floor(Math.random() * canvas.width);
            }

            ctx.strokeRect(box.x, box.y, box.width, box.height);
        }
    }
    drawBox()
    const dBox = setInterval(() => {
        if (!box.l) {
            xs = 0;
            for (const ab of pUP.PUP) {
                if (ab) xs++
            }
            if (xs < pUP.PUP.length) {
                let a = Math.floor(Math.random() * 3);
                if (!a) { box.l = 1; box.n++; }
            }
        }
    }, 10000)

    function showLife() {
        sf = 1;
        setTimeout(() => sf = 0, 2000)
    }
    showLife()

    function drawEnemy(e) {
        if (game) if (e) contEnemy++
        let a = 0;
        while (a < contEnemy) {
            if (enemy.x[a] > 0) { } else {
                let x = Math.floor(Math.random() * 2);
                if (x) enemy.x[a] = 0; else enemy.x[a] = canvas.width - enemy.width - 2;
                enemy.l[a] = 1
            }
            enemies[a] = () => {
                ctx.strokeStyle = "#e11";

                // if (enemy.x[a] + enemy.width + 4 < canvas.width) enemy.x[a] += 5;
                if (enemy.x[a] > player.width + player.x) enemy.x[a]--;
                if (enemy.x[a] + enemy.width < player.x) enemy.x[a] += 1;

                if (enemy.l[a]) {
                    if ((player.x >= enemy.x[a] && player.x <= enemy.x[a] + enemy.width || player.x + player.width >= enemy.x[a] && player.x + player.width <= enemy.x[a] + enemy.width) && player.y + player.height >= enemy.y && player.y + player.height <= enemy.y + enemy.height) {
                        player.l--;
                        enemy.l[a] = 0;
                        showLife()
                    }
                }
                let b = 0;
                while (b < shots.x.length) {
                    if (shots.l[b] && enemy.l[a]) {
                        if ((shots.x[b] + shots.width >= enemy.x[a] && shots.x[b] + shots.width <= enemy.x[a] + enemy.width) && (shots.y[b] + shots.height > enemy.y)) { enemy.l[a] = 0; shots.l[b] = 0; point.k++ }
                    }
                    b++
                }

                if (enemy.l[a]) ctx.strokeRect(enemy.x[a], enemy.y, enemy.width, enemy.height);
            }
            enemies[a]()
            a++
        }


    }

    function jumping() {
        ctx.strokeStyle = "#888";
        if (jum == 1) {
            if (player.y > player.a - player.jump) { player.y -= 4; } else { setTimeout(() => { jum = 0 }, 10) }
        } else
            if (jum == 0) {
                if (player.y < player.a) { player.y += 5; } else { jum = 1; jump = 0 }
            }
    }

    function shoting(e) {
        if (!game) return
        if (e) {
            if (shot) {
                shot = 0; qntdShot++;
                const timerShot = () => {
                    setTimeout(() => {
                        if (timeShot < .1) { shot = 1; timeShot = reloadSpeed } else { timeShot -= .1; if (game) window.requestAnimationFrame(timerShot); }
                    }, 100);
                }
                timerShot();
            }
        }
        let a = 0;
        ctx.font = "15px arial"
        ctx.textAlign = "center";
        ctx.fillStyle = "#888"
        if (!shot) ctx.fillText(timeShot.toFixed(1), player.x + (player.width / 2), player.y + player.width * 1.2);
        while (a < qntdShot) {
            if (shots.y[a] > 0) { } else {
                shots.y[a] = player.y + ((player.height / 2) - 2);
                if (side) { shots.x[a] = player.x + player.width; shots.l[a] = 1; shots.s[a] = 1 } else {
                    shots.x[a] = player.x - shots.width; shots.l[a] = 1; shots.s[a] = 0
                }
            }
            ctx.strokeStyle = "#888";
            if (shots.l[a]) ctx.strokeRect(shots.x[a], shots.y[a], 10, 5);
            if (shots.s[a]) { if (shots.x[a] + shots.width < canvas.width) shots.x[a] += 6; } else { if (shots.x[a] > 0) shots.x[a] -= 6; }
            if (shots.x[a] <= 0 || shots.x[a] + shots.width >= canvas.width) shots.l[a] = 0;
            a++
        }
    }


    function loop() {
        ctx.strokeStyle = "#fff";
        drawFix();
        drawPlayer();
        drawEnemy();
        shoting();
        drawBox();
        // if (game) window.requestAnimationFrame(loop);
        if (pUP.textContent != "") {
            ctx.font = "30px arial"
            ctx.fillStyle = "#888"
            ctx.textBaseline = "top"
            ctx.textAlign = "center"
            ctx.fillText(pUP.textContent, pUP.width, pUP.height);
        }
    }
    const sLopp = setInterval(() => { if (game) window.requestAnimationFrame(loop) }, 20)

    function loopEnemy() {
        if (newEnemy) { timerEnemy(); newEnemy = 0 }
        drawEnemy();
        if (game) window.requestAnimationFrame(loopEnemy);
    }
    const timerEnemy = () => { setTimeout(() => { drawEnemy(1); newEnemy = 1 }, 2600) }
    loopEnemy();
    document.addEventListener("keydown", (e) => { if (e.code == "Space") shoting(1) })

    document.addEventListener("keydown", (e) => { if (e.code == "KeyW" || e.code == "ArrowUp") jump = 1 })

    document.addEventListener("keydown", (e) => { if (e.code == "KeyA" || e.code == "ArrowLeft") { move = 0; side = 0 } })
    document.addEventListener("keyup", (e) => { if (e.code == "KeyA" || e.code == "ArrowLeft") move = 1 })

    document.addEventListener("keydown", (e) => { if (e.code == "KeyD" || e.code == "ArrowRight") { move = 2; side = 1 } })
    document.addEventListener("keyup", (e) => { if (e.code == "KeyD" || e.code == "ArrowRight") move = 1 })

    document.querySelector(".closeWindow" + eve.replace(/[^0-9]/g, "")).addEventListener("click", () => {
        clearInterval(sLopp);
        clearInterval(dBox);
        clearInterval(timer);
        clearInterval(animBox);
    })
}
