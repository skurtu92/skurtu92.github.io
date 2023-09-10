var pirateLocation = Math.floor(Math.random()*9)
var treasureLocation = Math.floor(Math.random()*9)

if(pirateLocation === treasureLocation) 
{treasureLocation = Math.floor(Math.random()*9)
}

console.log(pirateLocation, treasureLocation)
var counter = 9


const changeToPic=(placeholder) => {
    //counter = counter - 1
    //document.getElementById ("counter").innerHTML= `Counter; $(counter)`
    
    if(placeholder === pirateLocation){
        document.getElementById(`${placeholder}`).innerHTML="🏴‍☠️"
        alert("You're Dead Try Again")
    }   
    else if(placeholder === treasureLocation){
        document.getElementById(`${placeholder}`).innerHTML="💰"
        alert("You Win!! Congrats You Can Quit Your Job!!")
    }
    else {
        document.getElementById(`${placeholder}`).innerHTML="🌊"
    }
}


