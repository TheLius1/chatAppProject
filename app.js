let x = document.body;
let y = document.querySelector("div.wrapper");
let z = document.getElementById("z");
let ck1 = document.getElementById("ck1");
let ck2 = document.getElementById("ck2");

ck1.addEventListener("click", ()=>{
    x.classList.add("dark-mode");
    y.classList.add("dark-mode");
    z.classList.add("dark-mode");
    console.log("Pink")
})

ck2.addEventListener("click", ()=>{
    x.classList.remove("dark-mode");
    y.classList.remove("dark-mode");
    z.classList.remove("dark-mode");
    console.log("Pink")
})
