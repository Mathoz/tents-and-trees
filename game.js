let bttns = document.querySelectorAll(".cell");
let rowNumber = document.getElementsByClassName("rowNumber");
let columnNumber = document.getElementsByClassName("columnNumber");

for(let i = 0; i<rowNumber.length; i++){
    if (Number(rowNumber[i].innerHTML) === 0){
        rowNumber[i].classList.add("grey")
        rowNumber[i].innerHTML += `<i class="fas fa-check"></i>`
    }
}

for(let i = 0; i<columnNumber.length; i++) {
    if(Number(columnNumber[i].innerHTML) === 0){
        columnNumber[i].classList.add("grey")
        columnNumber[i].innerHTML += `<i class="fas fa-check"></i>`
    }
}

const click = (event) => {
    if (event.target.classList.contains("tree")){return}

    else if (event.target.classList.contains("grass")){
        event.target.classList.remove("grass");
        event.target.classList.add("tent");
        event.target.innerHTML = `<i class="fas fa-campground"></i>`
    }
    else if (event.target.classList.contains("tent")){
        event.target.classList.remove("tent");
        event.target.innerHTML = "";
    }
    else {event.target.classList.add("grass")}

    if(endGame() === true){
        document.getElementById("endPage").classList.remove("invisible");
        document.querySelector("#option p").classList.add("invisible")
    }

    //GREY AND RED
    let grid = document.querySelectorAll("#grid .gridRows")

    //COLUMN NUMBER
    for(let y = 0; y<columnNumber.length; y++){
        let cell = grid[y].querySelectorAll(".cell")
        let columnCell = document.querySelectorAll(".columnNumber")
        let trueNumber = Number(columnCell[y].innerText)
        let number = 0
        for (let i = 0; i<cell.length; i++){
            if (cell[i].classList.contains("tent")){
                number += 1
            }
        }
        if(number === trueNumber){
            columnCell[y].classList.remove("red")
            columnCell[y].classList.add("grey")
            columnCell[y].innerHTML = `${trueNumber} <i class="fas fa-check"></i>`
        }
        else if (number > trueNumber){
            columnCell[y].classList.remove("grey")
            columnCell[y].classList.add("red")
            columnCell[y].innerHTML = `${trueNumber} <i class="fas fa-times"></i>`
        }
        else {
            columnCell[y].classList.remove("grey")
            columnCell[y].classList.remove("red")
            columnCell[y].innerHTML = `${trueNumber}`
        }
    }

    // ROW NUMBER
    for(let y = 0; y<rowNumber.length; y++){
        let column = document.querySelectorAll(`.gridRows > :nth-child(${y+1})`);
        let trueNumber = Number(rowNumber[y].innerText);
        let number = 0;

        for(let i = 0; i<column.length; i++){
            if(column[i].classList.contains("tent")){
                number += 1
            }
        }

        if(number === trueNumber){
            rowNumber[y].classList.remove("red")
            rowNumber[y].classList.add("grey")
            rowNumber[y].innerHTML = `${trueNumber} <i class="fas fa-check"></i>`
        }
        else if (number > trueNumber){
            rowNumber[y].classList.remove("grey")
            rowNumber[y].classList.add("red")
            rowNumber[y].innerHTML = `${trueNumber} <i class="fas fa-times"></i>`
        }
        else {
            rowNumber[y].classList.remove("grey")
            rowNumber[y].classList.remove("red")
            rowNumber[y].innerHTML = `${trueNumber}`
        }
    }
};

bttns.forEach(bttn => bttn.onclick = click)

function endGame(){
    if(document.querySelectorAll(".trueTent.tent").length === 7){return true}
    else{return false}
}

// INFOS
const info = (event) => {document.querySelector("#option p").classList.toggle("invisible")}
document.getElementById("info").onclick = info

// MUSIC
let theMusic = document.getElementById("theMusic")
let bttnMusic = document.getElementById("musicOn")

const music = (event) => {
    if(bttnMusic.classList.contains("on")){
        bttnMusic.classList.remove("on")
        bttnMusic.classList.add("off")
        bttnMusic.innerHTML = `<i class="fas fa-volume-mute"></i>`
    }
    else {
        bttnMusic.classList.remove("off")
        bttnMusic.classList.add("on")
        bttnMusic.innerHTML = `<i class="fas fa-volume-up">`
    }

    if (bttnMusic.classList.contains("off")){
        theMusic.pause()
    }

    if(bttnMusic.classList.contains("on")){
        theMusic.play()
    }
}

bttnMusic.onclick = music

//REDO
let redoBttn = document.getElementById("redo")

const reDo = (event) => {
    bttns.forEach(bttn => {
        bttn.classList.remove("grass")
        if (bttn.classList.contains("tent")){
            bttn.classList.remove("tent")
            bttn.innerHTML = ""
        }
    })

    for(let i = 0; i<rowNumber.length; i++){
        let trueRowNumber = Number(rowNumber[i].innerText)
        let trueColumnNumber = Number(columnNumber[i].innerText)
        rowNumber[i].innerHTML = `${trueRowNumber}`
        columnNumber[i].innerHTML = `${trueColumnNumber}`
        rowNumber[i].classList.remove("grey")
        rowNumber[i].classList.remove("red")
        columnNumber[i].classList.remove("grey")
        columnNumber[i].classList.remove("red")
    }

    for(let i = 0; i<rowNumber.length; i++){
        if (Number(rowNumber[i].innerHTML) === 0){
            rowNumber[i].classList.add("grey")
            rowNumber[i].innerHTML += `<i class="fas fa-check"></i>`
        }
    }
    
    for(let i = 0; i<columnNumber.length; i++) {
        if(Number(columnNumber[i].innerHTML) === 0){
            columnNumber[i].classList.add("grey")
            columnNumber[i].innerHTML += `<i class="fas fa-check"></i>`
        }
    }

    document.getElementById("endPage").classList.add("invisible")
}

redoBttn.onclick = reDo

// REDO ENDGAME
document.getElementById("redo_endGame").onclick = reDo
