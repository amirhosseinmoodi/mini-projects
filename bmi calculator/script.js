document.getElementById("form").addEventListener("submit", (event) => {
    
    event.preventDefault();

    let height = document.getElementById("height").value/100;
    let weight = document.getElementById("weight").value;
    
    let result = (weight/(height*height)).toFixed(2);
    
    if (result>=18.5 && result<=24.9) {
        document.querySelector(".up-right").style.visibility = "initial";
     } else if (result>=16 && result<=18.4) {
         document.querySelector(".up-left").style.visibility = "initial";
     } else if (result>=25 && result<=29.9) {
         document.querySelector(".down-right").style.visibility = "initial";
     } else {
         document.querySelector(".down-left").style.visibility = "initial";
       }
    
    document.querySelector(".chart-text").innerHTML = `BMI: ${result}`
    
});

// document.getElementById("form").addEventListener("reset", () => {

// })
