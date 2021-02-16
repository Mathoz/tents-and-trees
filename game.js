let bttns = document.querySelectorAll(".cell");
let trueTents = document.querySelectorAll(".trueTent");

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
    console.log(trueTents.forEach(tent => tent.classList.contains("tent")));
};

bttns.forEach(bttn => bttn.onclick = click)

function endGame(){
    if(trueTents.forEach(tent => tent.classList.contains("tent"))){
        return true
    }
    else{return false}
}