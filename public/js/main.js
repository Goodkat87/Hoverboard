let section = document.querySelector("section")

//creation of all div
for (let c = 0; c < 1406; c++) {
    let cell = document.createElement("div");
    section.appendChild(cell)
}

//array for all colors
let color = ["blue","red","green","yellow","orange","purple","gold",]
let randomColor

document.querySelectorAll("div").forEach(element => {
    //size and color for all divs
    element.style.background = "#202020"
    element.style.height = "20px"
    element.style.width = "20px"
    element.style.border = "solid black 1px"

    //mouse over the div the color change
    element.addEventListener('mouseover',()=>{
        randomColor = color[Math.floor(Math.random() * color.length)]
        element.style.background = randomColor
        document.querySelector("h1").style.transition = "1s"
        document.querySelector("h1").style.color = randomColor
    })
    //mouse out the div the color return gray with a transition
    element.addEventListener('mouseout',()=>{
        element.style.transition = "4s"
        element.style.background = "#202020"
    })
});

