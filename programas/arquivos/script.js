{

const door = document.querySelector(".notReady");door.classList.remove("notReady")
const e = door.classList[1]

let folders = []
for (const list of door.children[0].lastElementChild.children[0].children[0].children[0].children) {
    const element = list.children[0].lastElementChild.innerText;
    folders.push(element);
    list.addEventListener("click", () => {
        for (const cont of door.children[0].lastElementChild.lastElementChild.children) {
            if (cont == "Lixeira") return;
            if (cont.classList[1] == element) {
                for (const b of door.children[0].lastElementChild.lastElementChild.children) {
                    b.classList.remove("active");
                }
                cont.classList.add("active");
            }
        }

    })
}

}