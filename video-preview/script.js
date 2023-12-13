
document.querySelector("#leafVid")
.addEventListener("mouseover",function () {
    this.play()
})

document.querySelector("#leafVid")
.addEventListener("mouseleave",function () {
    this.pause()
})