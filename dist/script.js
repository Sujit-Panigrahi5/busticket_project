
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
const sujijf=document.getElementById("sujijf")
// const  audio0=document.getElementById("audio0")
// const music0=document.getElementById("music0")
// const video0=document.getElementById("video0")





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
  
//    audio0.style.fill=finalcolor;
//    photos.style.borderColor=finalcolor;
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

// let photolist=[
//     "./assets/photo/Chaleya.jpg",
//     "./assets/photo/chandni.jpg",
//     "./assets/photo/Kaavaalaa.jpg",
//     "./assets/photo/KUDIYE NI TERI.jpg",
//     "./assets/photo/Malang-Sajna.jpg",
//     "./assets/photo/Not-Ramaiya-Vastavaiya.jpg",
//     "./assets/photo/calmdown.jpeg",
//     "./assets/photo/teravaste.jpg",
//     "./assets/photo/Mahiye-Jinna-Sohna.jpg",
//     "./assets/photo/diltopagalhe.jpg"
// ]
// let index=0;
// function printphoto(){
//     let div=document.createElement("div")
//     div.className="photos"
//     div.style.width="15rem";
//     div.style.height="15rem"
//     div.style.margin="20px"    
//     div.style.border="2px solid "
//     div.style.boxShadow="10px 20px 30px #7e7b7b";
//     div.style.cursor = "pointer"

//     let img=document.createElement("img")
//     img.style.width="100%"
//     img.style.height="100%"
//     img.src=photolist[index];
//     div.appendChild(img)
//     songlist.append(div)
//     index++;
//     if(index==photolist.length){
//         clearInterval(set)
//     }
// }


// let set=setInterval(printphoto,200)


let songlistsall=[
    {
        photo:"./assets/photo/Chaleya.jpg",
        audio:"./assets/audio/chaleya.mp3",
        video:"./assets/video/chaleya.mp4"
    },
    {
        photo:"./assets/photo/chandni.jpg",
        audio:"./assets/audio/chandini.mp3",
        video:"./assets/video/chadni.mp4"
    },
    {
        photo:"./assets/photo/Kaavaalaa.jpg",
        audio:"./assets/audio/kaavaalaa.mp3",
        video:"./assets/video/kaalaavaa.mp4"
    },
    {
        photo:"./assets/photo/KUDIYE NI TERI.jpg",
        audio:"./assets/audio/kudiyeni .mp3",
        video:"./assets/video/kudiyen_teri.mp4"
    },
    {
        photo:"./assets/photo/Malang-Sajna.jpg",
        audio:"./assets/audio/malang.mp3",
        video:"./assets/video/malang.mp4"
    },
    {
        photo:"./assets/photo/Not-Ramaiya-Vastavaiya.jpg",
        audio:"./assets/audio/notrameya.mp3",
        video:"./assets/video/not-ramaya-vastameya.mp4"
    },
    {
        photo:"./assets/photo/calmdown.jpeg",
        audio:"./assets/audio/calmdown.mp3",
        video:"./assets/video/calmdown.mp4"
    },
    {
        photo:"./assets/photo/teravaste.jpg",
        audio:"./assets/audio/teribaste.mp3",
        video:"./assets/video/terevaste.mp4"
    },
    {
        photo:"./assets/photo/Mahiye-Jinna-Sohna.jpg",
        audio:"./assets/audio/mahiya.mp3",
        video:"./assets/video/maheya.mp4"
    },
    {
        photo:"./assets/photo/diltopagalhe.jpg",
        audio:"./assets/audio/diltopagalhe.mp3",
        video:"./assets/video/diltopagalhe.mp4"
    }
   
]

// // let index=0;
// function printphoto(){
//     let index=0;
//     while(index <songlistsall.length){
        
//         let div=document.createElement("div")
//         // div.className="photos"
//         div.style.width="15rem";
//         div.style.height="15rem"
//         div.style.margin="20px"    
//         div.style.border="2px solid "
//         div.style.boxShadow="10px 20px 30px #7e7b7b";
//         div.style.cursor = "pointer"
//         div.style.display="flex"

//         //img
//         let img=document.createElement("img")
//         img.style.width="100%"
//         img.style.height="100%"
//         img.src=songlistsall[index].photo
//         img.id=`audio${index}`
//         console.log(img.id)
        
//         div.appendChild(img)
//         // audio
//         let audi=document.createElement("audio")
//         audi.src=songlistsall[0].audio
//         audi.controls=true
//         audi.load()
        
//         // audio0.addEventListener("click",function(){
//         //     audi.play()
//         // })
        
//         div.appendChild(audi)

//         songlist.append(div)

        
//         songlist.append(div)
//         index++;
//     }

//     // if(index==photolist.length){
//     //     clearInterval(set)
//     // }
// }
// printphoto()

// let set=setInterval(printphoto,200)
// let audi=document.createElement("audio")
// audi.src=songlistsall[0].audio
// // audi.setAttribute("controls", "controls");
// audi.controls=true
// audi.load()
// // audi.play()
//   document.body.appendChild(audi);


// let p1=music0;
// if(p1.style.display="none"){
//     p1.style.display="block"
// }
// p1.style.display="block"
function showmusicandvideo(p1,p2){
    const music0=document.getElementById(p1)
    const video0=document.getElementById(p2)
    if(music0.style.display=="none"){
        music0.style.display="block"
        video0.style.display="block"
    } else{
        music0.style.display="none"
        video0.style.display="none"
    }
}
function donnotshow(p1,p2){
    const music0=document.getElementById(p1)
    const video0=document.getElementById(p2)
    music0.style.display="none"
        video0.style.display="none"
}

function show(p1,p2){
    const music0=document.getElementById(p1)
    const video0=document.getElementById(p2)
    music0.style.display="block"
        video0.style.display="block"
}

function playmusic(idofaudio){
    // let idofmusic=document.getElementById(idofaudio)
    // idofmusic.playmusic();

    let aud=document.createElement("audio")
    aud.src=songlistsall[0].audio;
    aud.controls=true;
    aud.play()
}
