const getColor = () => {
    // hex code (hexa decimal colors)
    const randomnumber=Math.floor(Math.random()*16777215);
    const randomCode="#" +randomnumber.toString(16);
    console.log(randomnumber,randomCode)
    document.body.style.backgroundColor=randomCode
    document.getElementById('color-code').innerText=randomCode

    // to copy code directly while click on color code(automatically copies selects)
    navigator.clipboard.writeText(randomCode)
}

// event call
document.getElementById('btn').addEventListener(
    "click",
    getColor
)

// init call 
getColor();