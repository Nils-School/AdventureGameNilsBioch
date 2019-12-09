let achtergrondmenu = document.getElementById('game-container');
let title = document.getElementById('title');
let description = document.getElementById('description');
let inventoryItem = document.getElementById('inventoryItem')
//butons
let gamebuttons = document.getElementById('game-buttons');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let zombiemor = false
let wakker = false
let morgueterug = false


let buttonweg = {
    raam:false,
    kast:false,
    deur:false
}
let inv = {
    mes:false,
    zaag:false,
    key:false,
    slot:false
};
//function aanroep

menu();
button1.onclick = function(){beginpag()};//begin

//functions maken
function menu(){
    achtergrondmenu.style.backgroundImage = "url(./images/Menu.jpg)"
    title.textContent = "Menu";
    description.textContent = "Welkom bij de game"
    button1.textContent = "Start"
    button1.style.marginTop= "600px"
    button2.style.display = "none"
    button3.style.display = "none"
    inventoryItem.style.display = "none"
    console.log(title.innerHTML)
}
function beginpag(){
    achtergrondmenu.style.backgroundImage = "url(./images/Begin.jpg)"
    title.textContent = "De kamer";
    inventoryItem.style.display = "none"
    if (wakker==false){
        description.innerHTML = "Je wordt wakker in een kamer, je weet niet waar je ben.<br>Wat ga je doen?"
        wakker = true
    }
    else{
        description.innerHTML = "Wat ga je doen?"
    }
    description.style.marginTop = "550px"
    description.style.position = "none"
    gamebuttons.style.marginLeft="10px"
    gamebuttons.style.marginRight="10px"
    // 1
    button1.textContent = "Ga naar de deur"
    button1.style.marginTop = "10px"
    // 2
    if (buttonweg.kast ==false){
        button2.style.display = "unset"
        button2.innerHTML = "Kijk nog even door de kamer"
        button2.style.marginTop = "10px"
        buttonweg.kast = true
    }
    else{
        button2.style.display = "none"
    }
    // 3
    if (buttonweg.raam == false){
        button3.style.display = "unset"
        button3.innerHTML = "Kijk uit het raam"
        button3.style.marginTop = "10px"
        
    }
    else{
        button3.requestFullscreen.display = "none"
    }
    //
    console.log(title.innerHTML)
    console.log(description.innerHTML)
    button1.onclick = function(){keuzekijkgang()}
    button2.onclick = function(){keuzekijkkamer()};
    button3.onclick = function(){keuzekijkuitraam()};

}
function keuzekijkgang(){
    achtergrondmenu.style.backgroundImage = "url(./images/Begin.jpg)"
    title.textContent = "De deur"
    description.innerHTML = "Je voelt aan de deur klink en de deur is niet op slot <br> Wat doe je?"
    button1.textContent = "Open de deur"
    button2.textContent = "Kijk nog even in de kamer"
    button3.style.display = "none"
    button1.onclick = function(){gang()}
    button2.onclick = function(){beginpag()}
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function keuzekijkkamer(){
    achtergrondmenu.style.backgroundImage = "url(./images/Begin.jpg)"
    title.textContent = "De kamer";
    description.innerHTML ="Je kijkt door de kamer en je ziet een klein houte kastje<br>Wat doe je?"
    //
    button1.textContent = "Kijk in de kast"
    button1.style.marginTop = "10px"
    //
    button2.style.display = "unset"
    button2.innerHTML = "Kijk niet in de kast"
    button2.style.marginTop = "10px"
    //
    button3.style.display = "none"
    
    button1.onclick = function(){kijkkast()};
    button2.onclick = function(){beginpag()};
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function keuzekijkuitraam(){
    achtergrondmenu.style.backgroundImage = "url(./images/Raam.jpg)"
    title.textContent = "Het raam";
    description.innerHTML ="Je ziet allemaal lijkzakken <br> Wat doe je?"
    button1.textContent = "Ga weg van het raam"
    button2.style.display = "none"
    button3.style.display = "none"
    button1.onclick = function(){doodraam()};
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function doodraam(){
    if (inv.mes == false){
        achtergrondmenu.style.backgroundImage = "url(./images/Zombie.jpg)"
        title.textContent = "Dood";
        description.innerHTML ="Je draait je om en je ziet een zombie, je bent te laat je wordt gebeten. <br> Press F to pay respect."
        description.style.marginTop = "10px"
        button1.textContent = "F"
        button1.style.marginTop = "600px"
        button1.onclick = function(){restart()};
    }
    else{
        achtergrondmenu.style.backgroundImage = "url(./images/Zombie.jpg)";
        title.textContent = "Zombie"
        description.innerHTML = "Je draait je om en je ziet een zombie, Wat doe je";
        description.style.marginTop = "10px";
        button1.innerHTML = "Steek hem met je mes";
        button1.style.marginTop = "600px";
        button2.style.display = "unset";
        button2.innerHTML = "Steek hem niet"
        button1.onclick = function(){beginpag()};
        button2.onclick = function(){dood()}
        buttonweg.raam = true
    }
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function dood(){
    achtergrondmenu.style.backgroundImage = "url(./images/Zombie.jpg)"
        title.textContent = "Dood";
        description.innerHTML ="Je draait je om en je ziet een zombie, je bent te laat je wordt gebeten. <br> Press F to pay respect."
        description.style.marginTop = "10px"
        button1.textContent = "F"
        button1.style.marginTop = "600px"
        button2.style.display = "none"
        button1.onclick = function(){restart()};
}
function kijkkast(){
    achtergrondmenu.style.backgroundImage = "url(./images/Kast.jpg)"
    title.textContent = "De Kast";
    description.innerHTML = "Er zit iets in de la <br> Wat doe je?"
    description.style.marginTop = "600px"
    button1.innerHTML = "Ga weg"
    button2.style.display = "none"
    button3.style.display = "none"
    inventoryItem.style.display = "unset"
    inventoryItem.src = "./images/Mes.png"
    inventoryItem.style.marginTop ="-267px"
    inventoryItem.style.marginLeft ="432px"
    inventoryItem.style.position = "absolute"
    inventoryItem.onclick = function(){mesinv()};
    button1.onclick = function(){beginpag()};
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function gang(){
    achtergrondmenu.style.backgroundImage ="url(./images/Gang.jpg)"
    title.textContent = "De gang"
    description.innerHTML = "Je komt in de gang en de deur achter je valt in het slot<br> Wat doe je?"
    button1.textContent = "Kijk door de gang"
    button1.style.display = "unset"
    if (buttonweg.deur==false){
        buttonweg.deur = false 
        button2.textContent = "Probeer terug te komen"
}
else{
    button2.style.display = "none"
}
    button1.onclick = function(){kijkdoorgang()}
    button2.onclick = function(){terugkamer()}
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function terugkamer(){
    achtergrondmenu.style.backgroundImage ="url(./images/Gang.jpg)"
    title.textContent = "De gang"
    description.innerHTML = "De deur zit opslot"
    button1.textContent = "Kijk door de gang"
    button1.onclick = function(){kijkdoorgang()}
    button2.style.display = "none"
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function kijkdoorgang(){
    achtergrondmenu.style.backgroundImage ="url(./images/Gang.jpg)"
    title.textContent = "De gang"
    description.innerHTML = "Je ziet 2 deuren en een deuropening met een trap naar beneden<br>Waar ga je heen"
    description.style.position = "relative"
    gamebuttons.style.textAlign = "center"
    inventoryItem.style.display= "none";
    button1.style.marginTop = "10px"
    button2.style.display = "unset"
    button3.style.display = "unset"
    
    button1.innerHTML = "Probeer de eerste deur"
    button2.innerHTML = "Probeer de tweede deur"
    if (morgueterug==false){
    button3.innerHTML = "Ga naar de trap"
}
else{
    button3.style.display = "none"
}
    console.log(title.innerHTML)
    console.log(description.innerHTML)
    button1.onclick = function(){eerstedeurgang()}
    button2.onclick = function(){tweededeurgang()}
    button3.onclick = function(){morgue()}
}
function eerstedeurgang(){
    achtergrondmenu.style.backgroundImage ="url(./images/Kamer1.jpg)"
    title.textContent = "Eerste Kamer"
    description.innerHTML = "Je komt in een kamer met geen uitgang en de ramen zijn geblendeerd<br>Wat doe je?"
    if (inv.key==false){
    inventoryItem.style.height ="50px"
    inventoryItem.style.width ="100px"
    inventoryItem.style.marginTop ="-200px"
    inventoryItem.style.marginLeft ="80px"
    inventoryItem.style.position="absolute"
    inventoryItem.style.display = "unset"
    inventoryItem.src = "./images/Key.png"
    }
    else{
        inventoryItem.style.display = "none"
    }
    button1.innerHTML = "ga terug"
    button2.style.display = "none"
    button3.style.display = "none"
    
    button1.onclick = function(){kijkdoorgang()}
    inventoryItem.onclick = function(){keyinv()}
}
function tweededeurgang(){
    title.textContent = "De Deur"
    achtergrondmenu.style.backgroundImage ="url(./images/Deur.jpg)"
    achtergrondmenu.style.width = "1440px"
    description.innerHTML = "De deur zit opslot met een slot<br>Wat doe je?"
    description.style.position = "absolute"
    description.style.width = "100%"
    inventoryItem.src = "./images/Slot.png"
    inventoryItem.style.position = "absolute"
    inventoryItem.style.display = "unset"
    inventoryItem.style.width = "220px"
    inventoryItem.style.height = "100px"
    inventoryItem.style.marginTop = "100px"
    inventoryItem.style.marginLeft = "620px"
    button1.innerHTML ="Ga terug"
    button2.style.display = "none"
    button3.style.display = "none"
    button1.onclick = function(){kijkdoorgang()}
    inventoryItem.onclick = function(){tweededeurdingie()}
}
function tweededeurdingie(){
    if(inv.key == true){
        inventoryItem.style.display = "none"
        tweededeurkey();
    }
    else if (inv.zaag == true){
        inventoryItem.style.display = "none"
        tweededeurzaag();
    }
    
    else{
        tweededeurgang();
    }
}
function morgue(){
    achtergrondmenu.style.backgroundImage ="url(./images/Morgue.jpg)"
    title.textContent = "De Morgue"
    description.innerHTML = "Je bent nu in de Morgue en een kluis staat open<br>Wat doe je?"
    button1.style.display = "unset"
    button2.style.display = "unset"
    button3.style.display = "unset"
    button1.innerHTML = "Ga terug"
    button2.innerHTML = "Kijk in de kluis die open staat"
    button3.style.display = "none"
    
    inventoryItem.style.display = "unset"
    inventoryItem.src = "./images/Zaag.png"
    inventoryItem.style = "absolute"
    inventoryItem.style.height = "50px"
    inventoryItem.style.marginTop ="-220px"
    inventoryItem.style.marginLeft ="80px"

    // else{
    //     inventoryItem.style.display = "none"
    // } 
    inventoryItem.onclick = function(){zaaginv()};
    button1.onclick = function(){kijkdoorgang()};
    button2.onclick = function(){zombiemorgue()};
}
function zombiemorgue(){
    achtergrondmenu.style.backgroundImage ="url(./images/ZombieMorgue.png)"
    title.textContent = "Zombie"
    description.innerHTML = "Een zombie kruipt uit de kluis en kruipt naar je toe<br>Wat doe je?"
    description.style.position = "absolute"
    description.style.width = "100%"
    gamebuttons.style.textAlign = "center"
    inventoryItem.style.display= "none";
    button2.style.display = "none";
    button1.style.marginTop = "10px"
    button1.innerHTML = "ren weg"
    if (inv.mes==true){
        button2.style.display = "unset"
        button2.innerHTML = "steek hem"
    }
    button1.onclick = function(){renweg()};
    button2.onclick = function(){steekzombie()};
}
function renweg(){
    achtergrondmenu.style.backgroundImage ="url(./images/ZombieMorgue.png)"
    title.textContent = "Zombie"
    description.innerHTML = "Helaas je was te laat je bent gebeten<br>Druk op F op respect te betalen"
    description.style.marginTop = "10px"
    button1.textContent = "F"
    button1.style.marginTop = "600px"
    button2.style.display = "none"
    button1.onclick = function(){restart()};
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function steekzombie(){
    achtergrondmenu.style.backgroundImage ="url(./images/Morgue.jpg)"
    title.textContent = "De Morgue"
    description.innerHTML = "Je steekt de zombie in zijn schedel hij beweegt niet meer<br>Je hoor nu op de andere kluis deuren geklop, het komt van binnen!"
    button1.innerHTML = "ga terug"
    button2.style.display = "none"
    button1.onclick = function(){kijkdoorgang()}
    morgueterug = true;
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function tweededeurkey(){
    title.textContent = "De Deur"
    achtergrondmenu.style.backgroundImage ="url(./images/Deur.jpg)"
    description.innerHTML = "De sleutel past in het slot"
    button1.innerHTML ="Open de deur"
    button2.style.display = "none"
    button3.style.display = "none"
    button1.onclick = function(){victorie()}
}
function tweededeurzaag(){
    title.textContent = "De Deur"
    achtergrondmenu.style.backgroundImage ="url(./images/Deur.jpg)"
    description.innerHTML = "Je zaag het slot door"
    button1.innerHTML ="Open de deur"
    button2.style.display = "none"
    button3.style.display = "none"
    button1.onclick = function(){victorie()}
}
function mesinv(){
    inv.mes = true;
    inventoryItem.style.display= "none";
    console.log("Je hebt nu messie gepekt");
}
function zaaginv(){
    inv.zaag = true;
    morgueterug = true;
    inventoryItem.style.display= "none";
    console.log("Je hebt nu zaagie gepekt");
}
function keyinv(){
    inv.key = true;
    inventoryItem.style.display ="none"
    console.log("Je hebt nu een key gepekt");
}
function victorie(){
    achtergrondmenu.style.backgroundImage ="url(./images/Menu.jpg)"
    title.textContent = "Epische victorie"
    description.innerHTML = "Je bent buiten gekomen hoezee"
    button1.style.display = "none"
    button2.style.display = "none"
    button3.style.display = "none"
    console.log(title.innerHTML)
    console.log(description.innerHTML)
}
function restart(){
    document.location.reload()
}