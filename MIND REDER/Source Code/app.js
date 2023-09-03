let subBtn = document.querySelector(".submit-Btn");
subBtn.onclick = () => {

    let loding = document.querySelector(".loding");
    loding.classList.remove("disnone")

    setTimeout(() => {
        loding.classList.add("disnone")
        let num = document.querySelector(".number");
        num = num.value
    
        let popupText = document.querySelector(".popup-Test")
        popupText.innerHTML = `your number is ${num}.`
        num = 0
        
        let popup = document.querySelector(".popup");
        popup.classList.add("popvisi");

        
    }, 3000);

}

let ok = document.querySelector(".ok")
ok.onclick = () => {
    let popup = document.querySelector(".popup");
    popup.classList.remove("popvisi");
}