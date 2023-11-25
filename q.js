let inputbox = document.getElementById("inputbox")
let imgbox = document.getElementById("imgbox")
let img = document.getElementById("img")

const qrcodegenerator = ()=>{
    if(inputbox.value.length > 0){
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputbox.value}`
        imgbox.classList.add("showimg")
    }
    else{
        inputbox.classList.add("error")
        setTimeout(function(){
            inputbox.classList.remove("error")
        },1000)
    }
}