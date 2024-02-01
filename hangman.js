
let div=document.getElementsByClassName("letters")[0]
let letters="abcdefghijklmnopqrstuvwxyz"
let arry=Array.from(letters)
arry.forEach(function(ele){
    let span=document.createElement("span")
    let text=document.createTextNode(ele)
    span.appendChild(text)
    div.appendChild(span)
})
let names={
    animals:["lion","eagle","tiger","cat","dog",],
    langages:["css","html","javascript","python","java"],
    contries:["france","iran","espagne","italy","canada"]
}
let arrykeys=Object.keys(names)
let numberkeys=Math.floor(Math.random()*arrykeys.length)
let keys=arrykeys[numberkeys]
let arryvalues=names[keys]
let numbervalus=Math.floor(Math.random()*arryvalues.length)
let valus=arryvalues[numbervalus]

let arryofvalue=Array.from(valus)
let word=document.getElementsByClassName("word")[0]
arryofvalue.forEach(function(ele){
    let spanl=document.createElement("span")
    word.appendChild(spanl)
})
let spanlose=document.querySelector(".fails .lose")
let spanwin=document.querySelector(".score .win")
console.log(valus)
///click//
let buttons=document.querySelectorAll(".letters span")
let spanls=document.querySelectorAll(".word span")
let lose=0
let win=0
 buttons.forEach(function(ele){
    ele.addEventListener("click",function(e){
     ele.classList.add("clicked")
     let test=false
       arryofvalue.forEach(function(el,index1){
        if(e.target.innerHTML.toLowerCase()===el.toLowerCase()){
           test=true
           console.log(test)
           win++
            spanls.forEach(function(elle,index2){
                if(index1===index2){
                    elle.innerHTML=el
                }
            })
        }
       })
       if(test===false){
        lose++
        spanlose.innerHTML=lose
         if(lose===6){
            alert("you lose")
         }
     }
       else{
        let score=0
         if(win===arryofvalue.length){
            score++
            window.sessionStorage.score=score
            spanwin.innerHTML=window.sessionStorage.score
         alert("win")
       }
    }
 })
})
let go=document.getElementsByClassName("go")[0]
go.addEventListener("click",function(){
 location.reload()
})

