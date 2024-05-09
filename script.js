//script
document.getElementsByClassName("question-content")[0].innerHTML = "______. yaava uuru?"
let a = ["niinu","nimma","niMa","neenu"]
let ans = ["niinu"]
let numberOfCorrect = 0
let numberOfWrong = 0
let s = document.getElementsByClassName("option");
for(let i=0;i<s.length;i++){
    s[i].innerHTML = a[i];
}
function color(d) {
    d.setAttribute("color","green");
}
let clicked = document.getElementsByClassName("option")
for(let i=0;i<s.length;i++){
    if(clicked[i].innerHTML === ans[0]){
        clicked[i].addEventListener("click",()=>{
            clicked[0].style.backgroundColor = "green"
            numberOfCorrect++
            document.getElementsByClassName("correct-score")[0].innerHTML="Correct answers:" + numberOfCorrect
            for(let j=0;j<s.length;j++){
                clicked[j].setAttribute("disabled","true")
            }
        })
        
    }
    else{
        clicked[i].addEventListener("click",()=>{
            clicked[i].style.backgroundColor = "red"
            numberOfWrong++;
            document.getElementsByClassName("incorrect-score")[0].innerHTML="Incorrect answers:" + numberOfWrong
            for(let j=0;j<s.length;j++){
                clicked[j].setAttribute("disabled","true")
            }
        })
        
    }
} 


