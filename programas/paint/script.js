{

const door = document.querySelector(".notReady");door.classList.remove("notReady")
const e = door.classList[1]

function declarar(eve) {
    let a = 0, b = document.querySelectorAll(eve), c;
    while (a < b.length) {
        if (b[a].closest("." + e) != null) {c = b[a]}
        a++
    }
    return c;
}

const apagar = declarar(".apagar"),
color = declarar(".color"),
colorF = declarar(".color2"),
pincel = declarar(".pincel"), borracha = declarar(".eraser"), balde = declarar(".fill"),
colorSelector = declarar(".colorSelector"),
paperSelector = declarar(".paperSelector"),
canvas = declarar(".canvas"),
line = declarar(".line"); const circle = declarar(".circle"), square = declarar(".square"),
penWidth = declarar("#penWidthInput"), eraserWidth = declarar("#eraserWidthInput"),
cWidth = declarar("#widthInput"), cHeight = declarar("#heightInput");
let ctx = canvas.getContext("2d");
let sizeP = 2, sizeB = 6, is_drawing = false, x, y, mpx, mpy, colorSelected = "#000", selected = "pincel";
let x2, y2;
let restore_array = [], new_array = [], naC = 0, selec = [], selc = -1;
let index = -1;
const obj = {
    mpx: 0,
    mpy: 0,
    x: 0,
    y: 0,
}
const antObj = {
    mpx: [],
    mpy: [],
    x: [],
    y: [],
}

ctx.globalCompositeOperation = "source-over";
penWidth.addEventListener("change", ({ target }) => {
    if (target.value < 1) { target.value = 1; }
    if (target.value > 50) { target.value = 50; }
    sizeP = target.value;
})
eraserWidth.addEventListener("change", ({ target }) => {
    if (target.value < 1) { target.value = 1; }
    if (target.value > 50) { target.value = 50; }
    sizeB = target.value;
})
cWidth.addEventListener("change", () => {
    if (cWidth.value < 400) { cWidth.value = 400 }
    canvas.width = cWidth.value;
    canvas.style.width = cWidth.value + "px";
    replaceAll();
})
cHeight.addEventListener("change", () => {
    if (cHeight.value < 400) { cHeight.value = 400 }
    canvas.height = cHeight.value;
    canvas.style.height = cHeight.value + "px";
    replaceAll();
})
function replaceAll() {
    let a = 0, b = restore_array.length;
    while (a < b) {
        ctx.putImageData(restore_array[a], 0, 0)
        a++
    }
}
color.addEventListener("input", () => {
    colorSelected = hexToRgbA(color.value);
    colorSelector.style.backgroundColor = colorSelected;
})
colorF.addEventListener("input", () => {
    paperSelector.style.backgroundColor = hexToRgbA(colorF.value);
    canvas.style.backgroundColor = hexToRgbA(colorF.value);

})
apagar.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    naC = 0;
    new_array = []
    restore_array = [];
    selec = [];
    index = -1;
    selc = -1;
})

pincel.addEventListener("click", () => selected = "pincel")
borracha.addEventListener("click", () => selected = "borracha")
line.addEventListener("click", () => selected = "line")
square.addEventListener("click", () => selected = "square")
circle.addEventListener("click", () => selected = "circle")
balde.addEventListener("click", () => selected = "balde")

canvas.addEventListener("mousedown", start)
canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mouseup", stop)
canvas.addEventListener("mouseout", stop)

function drawSelect(aox, aoy, mpx, mpy) {
    let x = aox, y = aoy;
    let px1 = mpx - 15, py1 = mpy - 15, 
    px2 = mpx - 15, py2 = y + 5, 
    px3 = x + 5, py3 = mpy - 15, 
    px4 = x + 5, py4 = y + 5;

    ctx.putImageData(selec[selc], 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = 1.5 * 2;
    ctx.strokeStyle = "lightgray";
    ctx.beginPath();
    ctx.rect(mpx - 10, mpy - 10, x - mpx + 20, y - mpy + 20);
    ctx.stroke();

    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.rect(px1, py1, 10, 10);
    ctx.fill();

    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.rect(px2, py2, 10, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.rect(px3, py3, 10, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.rect(px4, py4, 10, 10);
    ctx.fill();
}
function start(event) {
    if (event.altKey) {
        let a = 0, b  = antObj.mpx.length;
        while (a < b) {
            if (b[a] != "empty") {
                let x = event.offsetX, y = event.offsetY;
                let mpx = antObj.mpx[a], mpy = antObj.mpy[a];
                if ((x > mpx && x < antObj.x[a]) && (y > mpy && y < antObj.y[a])) {
                    drawSelect(antObj.x[a], y = antObj.y[a], mpx, mpy)
                }
                b[a]
                for (const obj of restore_array) {
                    if (obj == b[a]) console.log("eve"); else console.log("aaaa")
                }
            }
            a++
        }
        return;
    }

    ctx.strokeStyle = colorSelected;
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
                        let cor = col.replace(/[^0-9,]/g, "").split(",");
                        let r = cor[0], g = cor[1], b = cor[2];
                        col = rgbToHex(r, g, b);
                        colorSelector.style.backgroundColor = col;
                        color.value = col;
                        colorSelected = col;
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
        if (selected == "pincel") {
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
        if (selected == "borracha") {
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
                ctx.arc(x, y, sizeB, 0, Math.PI * 2);
                ctx.fillStyle = colorSelected;
                ctx.fill();
            }
            function drawLine(x1, y1, x2, y2) {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2)
                ctx.strokeStyle = colorSelected;
                ctx.lineWidth = sizeB * 2;
                ctx.stroke();
            }
        }
        //balde de tinta
        if (selected == "balde") {
            let swatch = "green"
            fill_rgba = hexToRgbA(color.value).replace(/[^0-9,]/g, "").split(",");
            draw_fill_without_pattern_support(ctx, mpx, mpy, fill_rgba[0], fill_rgba[1], fill_rgba[2], 255);
        }
    }
}
function draw() {
    if (!is_drawing) return
    
    //desenhar com o pincel
    if (selected == "pincel") {
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
    if (selected == "borracha") {
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
            ctx.arc(x, y, sizeB, 0, Math.PI * 2);
            ctx.fillStyle = colorSelected;
            ctx.fill();
        }
        function drawLine(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2)
            ctx.strokeStyle = colorSelected;
            ctx.lineWidth = sizeB * 2;
            ctx.stroke();
        }
    }
    //linha
    if (selected == "line") {
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
    if (selected == "square") {
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
    if (selected == "circle") {
        if (event.shiftKey) {
            ctx.putImageData(restore_array[index], 0, 0);
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = colorSelected;
            ctx.lineWidth = sizeP * 2;
            ctx.beginPath();
            let raioX = (event.offsetX - mpx) * 0.5, raioY = (event.offsetY - mpy) * 0.5;
            let pcX = mpx + raioX, pcY = mpy + raioY;
            if (raioX < 0) { raioX = (mpx - event.offsetX) * 0.5; pcX = event.offsetX + raioX }
            if (raioY < 0) { raioY = (mpy - event.offsetY) * 0.5; pcY = event.offsetY + raioY }
            ctx.ellipse(pcX, pcY, raioX, raioX, 0, 2 * Math.PI, false);
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
function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}
function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
  
//   alert(rgbToHex(0, 51, 255)); // #0033ff

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
    if (!is_drawing) return;
    is_drawing = false;
    restore_array.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    selec.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    
    if (event.type != 'mouseout') {
        index += 1;
        selc += 1;
    }
    
    if (selected == "square") {
        
        if (event.offsetX - mpx < 1) return;
        obj.mpx = mpx;
        obj.mpy = mpy;
        obj.x = x;
        obj.y = y;

        let px1 = mpx - 15, py1 = mpy - 15, 
        px2 = mpx - 15, py2 = event.offsetY + 5, 
        px3 = event.offsetX + 5, py3 = mpy - 15, 
        px4 = event.offsetX + 5, py4 = event.offsetY + 5;

        /* ctx.globalCompositeOperation = 'source-over';
        ctx.lineWidth = 1.5 * 2;
        ctx.strokeStyle = "lightgray";
        ctx.beginPath();
        ctx.rect(mpx - 10, mpy - 10, event.offsetX - mpx + 20, event.offsetY - mpy + 20);
        ctx.stroke();

        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.rect(px1, py1, 10, 10);
        ctx.fill();

        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.rect(px2, py2, 10, 10);
        ctx.fill();

        ctx.beginPath();
        ctx.rect(px3, py3, 10, 10);
        ctx.fill();

        ctx.beginPath();
        ctx.rect(px4, py4, 10, 10);
        ctx.fill(); */

        antObj.mpx[index] = mpx;
        antObj.mpy[index] = mpy;
        antObj.x[index] = event.offsetX;
        antObj.y[index] = event.offsetY;
        
    }
    
}



}