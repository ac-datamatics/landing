function def() {
    const pic = document.getElementById('recording');
    if(pic.src == "./photos/r1.png") { 
        pic.src = "./photos/r2.png"
    } else { 
        pic.src = "./photos/r1.png"
    }
}