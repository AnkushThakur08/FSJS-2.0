const RandomColor = () => {
    let value = "0123456789ABCDEF";
    let color = "#"

    for(let i =0; i<6; i++){
        color = color + value[Math.floor(Math.random() * 16)]
    }
    console.log(color)
}

RandomColor()

