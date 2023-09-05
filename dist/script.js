
const body=document.querySelector("body")
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
const mode=document.getElementById("mode")
const hover=document.getElementById("hover")
const profilesection=document.getElementById("profilesection")
const profilelogo=document.getElementById("profilelogo")
const profile=document.getElementById("profile")
const login=document.getElementById("login")
const logout=document.getElementById("logout")
const loginsection=document.getElementById("loginsection")
const submit=document.getElementById("submit")
const username=document.getElementById("username")
const emailid=document.getElementById("emailid")
const password=document.getElementById("password")
const selectimg=document.getElementById("selectimg")
const uploadimg=document.getElementById("uploadimg")
const bio=document.getElementById("bio")
const decreption=document.getElementById("decreption")
const profileinformation=document.getElementById("profileinformation")
const userinfo=document.getElementById("userinfo")
const emailinfo=document.getElementById("emailinfo")
const selectitem=document.getElementById("selectitem")
const songlist=document.getElementById("songlist")
const photos=document.getElementsByClassName("photos")



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
   profilesection.style.borderColor=finalcolor;
   selectitem.style.backgroundColor=finalcolor;
   photos.style.borderColor=finalcolor;
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


// mode part
const hoverpint=()=>{     // arrow function
    if(body.style.backgroundColor == "white"){
        hover.textContent="dark mode"
        hover.style.display="block"
        hover.style.color="black"
    } else{
        hover.textContent="light mode"
        hover.style.display="block"
        hover.style.color="white"

    }
}

const hoverpint1= ()=>{
    hover.style.display="none"
}

function change(){
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor="#1f1f1f"
        mode.style.fill="white"
        body.style.color="black"
    } else{
        body.style.backgroundColor="white"
        mode.style.fill="black"
        body.style.color="white"
    }
}


// profile section

// function hovertoprofile(){
//     if()
// }
function showprofile(){
    if(profilesection.style.display == "none"){
        profilesection.style.display="block"
        profilesection.style.display="flex"
    } else{
        profilesection.style.display="none"
    }
}
// if(localStorage.getItem("tochecklogin")){

// }

let tochecklogin=false;


function showprofile1(){
    localStorage.setItem("username",username.value)
    localStorage.setItem("emailId",emailid.value)
    localStorage.setItem("password",password.value)
    profile.style.display="block"
    login.style.display="none"
    loginsection.style.display="none"
    document.querySelector("nav").style.filter="blur(0px)"

}

function showloginfrom(){
    loginsection.style.display="block"
    document.querySelector("nav").style.filter="blur(10px)"
    tochecklogin=true
}

function signout(){
    if( !tochecklogin){
        showloginfrom()

    } else{
        localStorage.removeItem("username")
        localStorage.removeItem("emailId")
        localStorage.removeItem("password")
        profile.style.display="none"
        login.style.display="block"
        tochecklogin=false;
    }
    
}

function addimg(){
    const img=new FileReader();
    img.onload=function(e){
        uploadimg.src=e.target.result
    }
    img.readAsDataURL(selectimg.files[0])
}


function addallinfo(){
    localStorage.setItem("bio",bio.value)
    localStorage.setItem("decreption",decreption.value)
    profileinformation.style.display="none"
    document.querySelector("nav").style.filter="blur(0px)"
    
}

function profileinf(){
    document.querySelector("nav").style.filter="blur(0px)"
    userinfo.textContent=`User Name : ${localStorage.getItem("username")}`
    emailinfo.textContent=`Email Id : ${localStorage.getItem("emailId")}`
    bio.textContent=localStorage.getItem("bio")
    decreption.textContent=localStorage.getItem("decreption")
    
    if(profileinformation.style.display=="block"){
        profileinformation.style.display="none"
    } else{
        profileinformation.style.display="block"
    }
    

}

let photolist=[
    "./assets/photo/Chaleya.jpg",
    "./assets/photo/chandni.jpg",
    "./assets/photo/Kaavaalaa.jpg",
    "./assets/photo/KUDIYE NI TERI.jpg",
    "./assets/photo/Malang-Sajna.jpg",
    "./assets/photo/Not-Ramaiya-Vastavaiya.jpg",
    "./assets/photo/calmdown.jpeg",
    "./assets/photo/teravaste.jpg",
    "./assets/photo/Mahiye-Jinna-Sohna.jpg",
    "./assets/photo/diltopagalhe.jpg"
]
let index=0;
function printphoto(){
    let div=document.createElement("div")
    div.className="photos"
    div.style.width="15rem";
    div.style.height="15rem"
    div.style.margin="20px"    
    div.style.border="2px solid "
    div.style.boxShadow="10px 20px 30px #7e7b7b";
    div.style.cursor = "pointer"

    let img=document.createElement("img")
    img.style.width="100%"
    img.style.height="100%"
    img.src=photolist[index];
    div.appendChild(img)
    songlist.append(div)
    index++;
    if(index==photolist.length){
        clearInterval(set)
    }
}


let set=setInterval(printphoto,200)







