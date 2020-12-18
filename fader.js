const cursor = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")
let isMouse = false

const growth = function () {
    cursor.classList.add("is-down")
}

const shrink = function () {
    cursor.classList.remove("is-down")
}


const cursorFollow = function (x, y) {
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}

const startDraw = function(canvas,x, y) {
    const context = canvas.getContext("2d")
    context.moveTo(x,y)
   
}
const setUpCanvas = function (canvas) {
    const sectionTag = document.querySelector('#section-1')
    const w = sectionTag.offsetWidth
    const h= sectionTag.offsetHeight
    console.log(h)
    console.log(w)
    const dpi = window.devicePixelRatio

    canvas.width = w * dpi
    canvas.height = h * dpi
    canvas.style.width = w +"px"
    canvas.style.height = h +"px"

    const context = canvas.getContext("2d")
    context.scale(dpi,dpi)
    context.fillStyle = "#000000"
    context.strokeStyle = "#ffffff"
    context.lineWidth = 80
    context.lineCap = "round"
    context.lineJoin = "round"
    context.rect(0,0,w,h)
    context.fill()
}
 const moveDraw = function (canvas, x, y) {
     const context = canvas.getContext("2d")
      if(isMouse) {
        context.lineTo(x,y)
        context.stroke()
       
}
      }
           

setUpCanvas(canvasTag)


document.addEventListener("mousedown", function (e) {
    isMouse = true
    growth()
    startDraw(canvasTag,e.pageX, e.pageY)
})


document.addEventListener("mouseup", function () {
    isMouse = false
    shrink()
})

document.addEventListener("mousemove", function (e) {
    cursorFollow(e.pageX, e.pageY)
    moveDraw(canvasTag, e.pageX, e.pageY)
})

