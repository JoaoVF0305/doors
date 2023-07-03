{

const door = document.querySelector(".notReady");door.classList.remove("notReady")
const eve = door.classList[1]

const styles = `
        resize: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    `;
document.querySelector("." + eve).style.cssText = styles;
const canvas = document.querySelector("#cCubes");
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