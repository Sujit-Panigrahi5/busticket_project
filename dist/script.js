
const  time=document.getElementById("time")
const additem=document.getElementById("itemadd")
const additemlist=document.getElementById("additemlist")
const addbus=document.getElementById("additem")
const addbusname1=document.getElementById("addbus1")
const addtoitemlist=document.getElementById("addtoitemlist")
const showitem=document.getElementById("showitemlist")
const busname1=document.getElementById("busname")
const okbuttom=document.getElementById("button")
const seethelistitem=document.getElementById("seethelistitem")

function timeS(){
    
    const hour=document.getElementById("hour")
    const minut=document.getElementById("minut")
    const second=document.getElementById("second")

    let date=new Date();


    let currenthour=date.getHours().toString().padStart(2,"0")
    let currentminut=date.getMinutes().toString().padStart(2,"0")
    let currentsecond=date.getSeconds().toString().padStart(2,"0");
    hour.innerText=currenthour;
    minut.innerText=currentminut;
    second.innerText=currentsecond;
    // time.style.borderColor="#"+currenthour+currentminut+currentsecond
}
setInterval(timeS,1000)

let color=[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
]
function colorchange(){
    let finalcolor="#"
    for(let i=0;i<6;i++){
        finalcolor+= color[setcolor()]
    }
   time.style.borderColor=finalcolor;
   additem.style.borderColor=finalcolor;
   
}

function setcolor(){
    
    return Math.floor(Math.random()*color.length);

}
setInterval(colorchange,2000)


// const additemlist=document.getElementById("additemlist")


function showoption(){
    
    if( additemlist.style.display == "none") {
        additemlist.style.display="block"
        additemlist.style.display="flex"
        // additemlist.style.flexDirection="col"
      
    } else{
        additemlist.style.display="none"
        
    }
    
    
}

function addbusname(){
    // if(addbusname1.style.display=="none"){
    //     addbusname1.style.display="block"
    // }
    if(addbusname1.style.display !="block"){
        addbusname1.style.display="block"
        showoption()
        
    } else{
        addbusname1.style.display="none"

    }
    
}

let item=[
    "Maa Travels",
    "Maa Barala Devi"
]

function addtoitem(){
    showoption()
    addbusname()

    let value=busname1.value;
    item.push(value)
    
    showitem.innerHTML=""
    
    item.forEach((itemname,index,item)=>{
        let newelement=document.createElement("li")
        newelement.textContent= index+1 +". " +itemname
        showitem.appendChild(newelement)
    })

}
console.log(item)
function showlistitem(){
    showoption()
    if(showitem.style.display !="block"){
        showitem.style.display="block"
        okbuttom.style.display="block"
    } else{
        showitem.style.display="none"
        okbuttom.style.display="none"
    }
}

function showoptionagain(){
    
    if(showitem.style.display !="block"){
        showitem.style.display="block"
        okbuttom.style.display="block"
    } else{
        showitem.style.display="none"
        okbuttom.style.display="none"
    }
    showoption()
    

}





