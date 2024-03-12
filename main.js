

function array(){
    let a=["Frontend Developer","SoftwareTester","Web Developer"]
    let index= Math.floor(Math.random()*a.length)
let output=document.querySelector(".text")

    output.innerHTML=a[index];
}
setInterval(array,1000)