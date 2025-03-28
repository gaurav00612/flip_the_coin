function flipTheCoin() {
    const imgSrc = document.getElementsByClassName('coin')

    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    document.querySelector("#result").textContent = result;

    if(result === "Heads") {
        imgSrc[0].src = './assets/heads.svg'
    }
    else {
        imgSrc[0].src = './assets/tails.svg'
    }

}