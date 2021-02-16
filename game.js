let bttns = document.querySelectorAll(".cell");
// let trueTents = document.querySelectorAll(".trueTent.tent");

const click = (event) => {
    if (event.target.classList.contains("tree")){
        return
    }
    else if (event.target.classList.contains("grass")){
        event.target.classList.remove("grass");
        event.target.classList.add("tent");
        event.target.innerHTML = `<i class="fas fa-campground"></i>`
    }
    else if (event.target.classList.contains("tent")){
        event.target.classList.remove("tent");
        event.target.innerHTML = "";
    }
    else {
        event.target.classList.add("grass")
    }
    
    // if(endGame() === true){}
};

bttns.forEach(bttn => bttn.onclick = click)

function endGame(){
    if(document.querySelectorAll(".trueTent.tent").length === 7){
        return true
    }
    else{return false}
}

// INFOS
// const info = (event) => {// mettre info visible}
// document.getElementById("info").onclick = info()

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
}

redoBttn.onclick = reDo

