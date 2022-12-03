


let dark = false
let a = document.body;
let p = document.getElementById("buttonTheme")
{/* <p id="select" onclick="darkLight()" style="cursor: help;">Включить тёмную тему</p> */}
let buttonTheme = document.createElement('p')
buttonTheme.innerHTML = "Включить тёмную тему"
buttonTheme.id = "buttonTheme"
buttonTheme.addEventListener("click", function darkLight() {
    if (!dark) {
     dark = true
     a.style.backgroundColor = "black";
     a.style.color = "white"
     header.style.backgroundColor = "blue"
     mainHead.style.backgroundColor = "blue"
     contentMainHead.style.backgroundColor = "darkred"
     contentMain.style.backgroundColor = "darkred"
     realfooter.style.backgroundColor = "blue"
     p.innerHTML = "Включить светлую тему";
    } 
    else {
     dark = false
     a.style.backgroundColor = "#D3D4D9";
     a.style.color = "black"
     header.style.backgroundColor = "#4B88A2"
     mainHead.style.backgroundColor = "#4B88A2"
     contentMainHead.style.backgroundColor = "#BB0A21"
     contentMain.style.backgroundColor = "#BB0A21"
     realfooter.style.backgroundColor = "#4B88A2"
     p.innerHTML = "Включить тёмную тему";
    }
}, false);
document.body.prepend(buttonTheme);


let absoluteMoveToTop = document.createElement('div')
absoluteMoveToTop.style.top = "53em"
absoluteMoveToTop.style.left = "109em"
absoluteMoveToTop.style.height = "0px";
absoluteMoveToTop.style.width = "0px";
absoluteMoveToTop.style.position = "sticky"
absoluteMoveToTop.id = "absoluteMoveToTop"
document.body.prepend(absoluteMoveToTop);

let buttonMoveToTop = document.createElement('img')
buttonMoveToTop.style.height = "100px";
buttonMoveToTop.style.width = "100px";
buttonMoveToTop.style.backgroundColor = "#BB0A21"
buttonMoveToTop.src = "./img/logoalt.png";
buttonMoveToTop.id = "buttonMoveToTop";
document.querySelector("#absoluteMoveToTop").append(buttonMoveToTop);

let element = document.querySelector('#buttonMoveToTop');

element.addEventListener("click", function moveToTop(){
    window.scrollTo(0, 0);
}, false);

let header = document.createElement('div');
header.style.height = "5em";
header.style.width = "100%";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.border = "1px solid black";
header.style.backgroundColor = "#4B88A2"
header.id = "header";
document.body.append(header);

let headerElement1 = document.createElement('img');
headerElement1.style.height = "65px";
headerElement1.style.width = "65px";
headerElement1.style.border = "1px solid black";
headerElement1.style.backgroundColor = "#BB0A21"
headerElement1.src = "./img/logoalt.png";
headerElement1.style.marginLeft = "0.4em"
headerElement1.style.marginRight = "0.6em"
document.querySelector("#header").append(headerElement1);

let headerElement2 = document.createElement('div');
headerElement2.style.height = "4em";
headerElement2.style.width = "6em";
headerElement2.style.display = "flex";
headerElement2.style.alignItems = "center";
headerElement2.style.fontSize = "1.5em";
headerElement2.innerHTML = "<strong>KnittyKnitt</strong>"
document.querySelector("#header").append(headerElement2);

let mainHead = document.createElement('div');
mainHead.style.width = "100%";
mainHead.style.height = "600px";
mainHead.style.backgroundColor = "#4B88A2"
mainHead.style.display = "flex";
mainHead.style.justifyContent = "center";
mainHead.id = "mainHead";
document.body.append(mainHead);

let contentSizeHeadMain = document.createElement('div');
contentSizeHeadMain.style.width = "1140px";
contentSizeHeadMain.style.display = "flex";
contentSizeHeadMain.id = "contentSizeHeadMain";
contentSizeHeadMain.style.margin = "auto";
document.querySelector("#mainHead").append(contentSizeHeadMain);

let contentMainHead = document.createElement('div');
contentMainHead.style.width = "100%";
contentMainHead.style.height = "598px";
contentMainHead.style.backgroundColor = "#BB0A21"
// contentMainHead.style.display = "flex";
// contentMainHead.style.justifyContent = "center";
contentMainHead.id = "contentMainHead";
document.querySelector("#contentSizeHeadMain").append(contentMainHead);

let contentMainHeadElement1 = document.createElement('div');
contentMainHeadElement1.style.width = "550px";
contentMainHeadElement1.style.height = "120px";
contentMainHeadElement1.style.marginTop = "20px";
contentMainHeadElement1.style.fontSize = "3em"
contentMainHeadElement1.innerHTML = "<strong>Уроки вязания онлайн от 490 руб.</strong>"
// contentMainHead.style.display = "flex";
// contentMainHead.style.justifyContent = "center";
contentMainHeadElement1.id = "contentMainHeadElement1";
document.querySelector("#contentMainHead").append(contentMainHeadElement1);

let contentMainHeadElement2 = document.createElement('div');
contentMainHeadElement2.style.width = "550px";
contentMainHeadElement2.style.height = "120px";
contentMainHeadElement2.style.fontSize = "2.4em"
contentMainHeadElement2.innerHTML = "<strong>Запишитесь на уроки прямо сейчас</strong>"
// contentMainHead.style.display = "flex";
// contentMainHead.style.justifyContent = "center";
contentMainHeadElement2.id = "contentMainHeadElement2";
document.querySelector("#contentMainHead").append(contentMainHeadElement2);

let contentMainHeadElement3 = document.createElement('ul');
contentMainHeadElement3.style.width = "550px";
contentMainHeadElement3.style.height = "120px";
// contentMainHead.style.display = "flex";
// contentMainHead.style.justifyContent = "center";
contentMainHeadElement3.id = "contentMainHeadElement3";
document.querySelector("#contentMainHead").append(contentMainHeadElement3);

let contentMainHeadElement4 = document.createElement('li');
contentMainHeadElement4.style.width = "550px";
contentMainHeadElement4.style.fontSize = "2em"
contentMainHeadElement4.innerHTML = "✓  Лучшие специалисты своего дела"
// contentMainHead.style.display = "flex";
// contentMainHead.style.justifyContent = "center";
contentMainHeadElement4.id = "contentMainHeadElement4";
document.querySelector("#contentMainHeadElement3").append(contentMainHeadElement4);

let contentMainHeadElement5 = document.createElement('li');
contentMainHeadElement5.style.width = "550px";
contentMainHeadElement5.style.fontSize = "2em"
contentMainHeadElement5.innerHTML = "✓  Лучшие специалисты своего дела"
// contentMainHead.style.display = "flex";
// contentMainHead.style.justifyContent = "center";
contentMainHeadElement5.id = "contentMainHeadElement5";
document.querySelector("#contentMainHeadElement3").append(contentMainHeadElement5);

let contentMainHeadElement6 = document.createElement('li');
contentMainHeadElement6.style.width = "550px";
contentMainHeadElement6.style.fontSize = "2em"
contentMainHeadElement6.innerHTML = "✓  Лучшие специалисты своего дела"
// contentMainHead.style.display = "flex";
// contentMainHead.style.justifyContent = "center";
contentMainHeadElement6.id = "contentMainHeadElement6";
document.querySelector("#contentMainHeadElement3").append(contentMainHeadElement6);

let contentMainHeadElement7 = document.createElement('input');
contentMainHeadElement7.type = "button"
contentMainHeadElement7.style.width = "300px";
contentMainHeadElement7.style.height = "40px";
// contentMainHead.style.display = "flex";
// contentMainHead.style.justifyContent = "center";
contentMainHeadElement7.id = "contentMainHeadElement7";
document.querySelector("#contentMainHead").append(contentMainHeadElement7);

let contentSize = document.createElement('div');
contentSize.style.width = "1140px";
contentSize.id = "contentSize";
contentSize.style.margin = "auto";
document.body.append(contentSize);

let contentMain = document.createElement('div');
contentMain.style.width = "100%";
contentMain.style.backgroundColor = "#BB0A21"
contentMain.id = "contentMain";
document.querySelector("#contentSize").append(contentMain);

let contentMainElement0 = document.createElement('div');
contentMainElement0.id = "contentMainElement0";
contentMainElement0.style.display = "flex"
document.querySelector("#contentMain").append(contentMainElement0);

let contentMainElement1 = document.createElement('img');
contentMainElement1.style.width = "40%";
contentMainElement1.style.height = "450px";
contentMainElement1.style.marginTop = "50px"
contentMainElement1.style.marginLeft = "50px"
contentMainElement1.src = "./img/logoalt.png";
contentMainElement1.id = "contentMainElement1";
document.querySelector("#contentMainElement0").append(contentMainElement1);

let contentMainElement2 = document.createElement('div');
contentMainElement2.style.width = "50%";
contentMainElement2.style.height = "450px";
contentMainElement2.style.marginTop = "50px"
contentMainElement2.style.marginLeft = "50px"
contentMainElement2.id = "contentMainElement2";
document.querySelector("#contentMainElement0").append(contentMainElement2);

let contentMainElement3 = document.createElement('div');
contentMainElement3.style.width = "100%";
contentMainElement3.innerHTML = "<strong>Lorem ipsum dolor sit amet</strong>"
contentMainElement3.style.fontSize = "2em";
contentMainElement3.id = "contentMainElement3";
document.querySelector("#contentMainElement2").append(contentMainElement3);

let contentMainElement4 = document.createElement('div');
contentMainElement4.style.width = "100%";
contentMainElement4.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
contentMainElement4.style.fontSize = "1.8em";
contentMainElement4.style.marginTop = "20px"
contentMainElement4.id = "contentMainElement4";
document.querySelector("#contentMainElement2").append(contentMainElement4);



let contentMainElement5 = document.createElement('div');
contentMainElement5.id = "contentMainElement5";
contentMainElement5.style.marginTop = "50px"
contentMainElement5.style.display = "flex"
contentMainElement5.style.justifyContent = "center"
contentMainElement5.style.flexWrap = "wrap"
document.querySelector("#contentMain").append(contentMainElement5);

// 1
let contentMainElement6 = document.createElement('div');
contentMainElement6.id = "contentMainElement6";
contentMainElement6.style.width = "32%"
document.querySelector("#contentMainElement5").append(contentMainElement6);

let contentMainElement7 = document.createElement('img');
contentMainElement7.style.height = "150px";
contentMainElement7.src = "./img/logoalt.png";
contentMainElement7.style.display = "block"
contentMainElement7.style.margin = "auto"
contentMainElement7.id = "contentMainElement7";
document.querySelector("#contentMainElement6").append(contentMainElement7);

let contentMainElement8 = document.createElement('div');
contentMainElement8.innerHTML = "<strong>Lorem ipsum dolor sit amet</strong>"
contentMainElement8.style.fontSize = "2em";
contentMainElement8.style.textAlign = "center   "
contentMainElement8.id = "contentMainElement8";
document.querySelector("#contentMainElement6").append(contentMainElement8);
// 1
// 2
let contentMainElement9 = document.createElement('div');
contentMainElement9.id = "contentMainElement9";
contentMainElement9.style.width = "32%"
document.querySelector("#contentMainElement5").append(contentMainElement9);

let contentMainElement10 = document.createElement('img');
contentMainElement10.style.height = "150px";
contentMainElement10.src = "./img/logoalt.png";
contentMainElement10.style.display = "block"
contentMainElement10.style.margin = "auto"
contentMainElement10.id = "contentMainElement10";
document.querySelector("#contentMainElement9").append(contentMainElement10);

let contentMainElement11 = document.createElement('div');
contentMainElement11.innerHTML = "<strong>Lorem ipsum dolor sit amet</strong>"
contentMainElement11.style.fontSize = "2em";
contentMainElement11.style.textAlign = "center   "
contentMainElement11.id = "contentMainElement11";
document.querySelector("#contentMainElement9").append(contentMainElement11);
// 2
// 3
let contentMainElement12 = document.createElement('div');
contentMainElement12.id = "contentMainElement12";
contentMainElement12.style.width = "32%"
document.querySelector("#contentMainElement5").append(contentMainElement12);

let contentMainElement13 = document.createElement('img');
contentMainElement13.style.height = "150px";
contentMainElement13.src = "./img/logoalt.png";
contentMainElement13.style.display = "block"
contentMainElement13.style.margin = "auto"
contentMainElement13.id = "contentMainElement13";
document.querySelector("#contentMainElement12").append(contentMainElement13);

let contentMainElement14 = document.createElement('div');
contentMainElement14.innerHTML = "<strong>Lorem ipsum dolor sit amet</strong>"
contentMainElement14.style.fontSize = "2em";
contentMainElement14.style.textAlign = "center   "
contentMainElement14.id = "contentMainElement14";
document.querySelector("#contentMainElement12").append(contentMainElement14);
// 3
// 4
let contentMainElement15 = document.createElement('div');
contentMainElement15.id = "contentMainElement15";
contentMainElement15.style.width = "32%"
document.querySelector("#contentMainElement5").append(contentMainElement15);

let contentMainElement16 = document.createElement('img');
contentMainElement16.style.height = "150px";
contentMainElement16.src = "./img/logoalt.png";
contentMainElement16.style.display = "block"
contentMainElement16.style.margin = "auto"
contentMainElement16.id = "contentMainElement16";
document.querySelector("#contentMainElement15").append(contentMainElement16);

let contentMainElement17 = document.createElement('div');
contentMainElement17.innerHTML = "<strong>Lorem ipsum dolor sit amet</strong>"
contentMainElement17.style.fontSize = "2em";
contentMainElement17.style.textAlign = "center   "
contentMainElement17.id = "contentMainElement17";
document.querySelector("#contentMainElement15").append(contentMainElement17);
// 4
// 5
let contentMainElement18 = document.createElement('div');
contentMainElement18.id = "contentMainElement18";
contentMainElement18.style.width = "32%"
document.querySelector("#contentMainElement5").append(contentMainElement18);

let contentMainElement19 = document.createElement('img');
contentMainElement19.style.height = "150px";
contentMainElement19.src = "./img/logoalt.png";
contentMainElement19.style.display = "block"
contentMainElement19.style.margin = "auto"
contentMainElement19.id = "contentMainElement19";
document.querySelector("#contentMainElement18").append(contentMainElement19);

let contentMainElement20 = document.createElement('div');
contentMainElement20.innerHTML = "<strong>Lorem ipsum dolor sit amet</strong>"
contentMainElement20.style.fontSize = "2em";
contentMainElement20.style.textAlign = "center   "
contentMainElement20.id = "contentMainElement20";
document.querySelector("#contentMainElement18").append(contentMainElement20);
// 5
// 6
let contentMainElement21 = document.createElement('div');
contentMainElement21.id = "contentMainElement21";
contentMainElement21.style.width = "32%"
document.querySelector("#contentMainElement5").append(contentMainElement21);

let contentMainElement22 = document.createElement('img');
contentMainElement22.style.height = "150px";
contentMainElement22.src = "./img/logoalt.png";
contentMainElement22.style.display = "block"
contentMainElement22.style.margin = "auto"
contentMainElement22.id = "contentMainElement22";
document.querySelector("#contentMainElement21").append(contentMainElement22);

let contentMainElement23 = document.createElement('div');
contentMainElement23.innerHTML = "<strong>Lorem ipsum dolor sit amet</strong>"
contentMainElement23.style.fontSize = "2em";
contentMainElement23.style.textAlign = "center   "
contentMainElement23.id = "contentMainElement23";
document.querySelector("#contentMainElement21").append(contentMainElement23);
// 6
// 1
let element1 = document.querySelector('#contentMainElement21');

element1.addEventListener("mouseover", function (){
    contentMainElement21.style.backgroundColor = "purple";
}, false);
element1.addEventListener("mouseleave", function (){   
    contentMainElement21.style.backgroundColor = "#BB0A21";
}, false)
// 1
// 2
let element2 = document.querySelector('#contentMainElement18');

element2.addEventListener("mouseover", function (){
    contentMainElement18.style.backgroundColor = "purple";
}, false);
element2.addEventListener("mouseleave", function (){   
    contentMainElement18.style.backgroundColor = "#BB0A21";
}, false)
// 2
// 3
let element3 = document.querySelector('#contentMainElement15');

element3.addEventListener("mouseover", function (){
    contentMainElement15.style.backgroundColor = "purple";
}, false);
element3.addEventListener("mouseleave", function (){   
    contentMainElement15.style.backgroundColor = "#BB0A21";
}, false)
// 3
// 4
let element4 = document.querySelector('#contentMainElement12');

element4.addEventListener("mouseover", function (){
    contentMainElement12.style.backgroundColor = "purple";
}, false);
element4.addEventListener("mouseleave", function (){   
    contentMainElement12.style.backgroundColor = "#BB0A21";
}, false)
// 4
// 5
let element5 = document.querySelector('#contentMainElement9');

element5.addEventListener("mouseover", function (){
    contentMainElement9.style.backgroundColor = "purple";
}, false);
element5.addEventListener("mouseleave", function (){   
    contentMainElement9.style.backgroundColor = "#BB0A21";
}, false)
// 5
// 6
let element6 = document.querySelector('#contentMainElement6');

element6.addEventListener("mouseover", function (){
    contentMainElement6.style.backgroundColor = "purple";
}, false);
element6.addEventListener("mouseleave", function (){   
    contentMainElement6.style.backgroundColor = "#BB0A21";
}, false);
// 6



let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");
  for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr");
    
    for (let j = 0; j < 5; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(`lorem ipsum`);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cell.style.border = "solid 1px";
      cell.style.padding = "10px";
      cell.addEventListener("mousedown", function (){
        cell.style.backgroundColor = "cyan";
      }, false)
      cell.addEventListener("mouseup", function (){
        cell.style.backgroundColor = "#4B88A2";
      }, false)
    }
    tbl.style.margin = "auto"
    tblBody.appendChild(row);
  }
  tbl.style.border = "solid 1px";
  tbl.style.fontSize = "1.3em";
  tbl.style.marginTop = "50px";
  tbl.style.backgroundColor = "#4B88A2";
  tbl.appendChild(tblBody);



  
  document.querySelector("#contentMain").appendChild(tbl);
  
  









//   width: 100%;
//   height: 300px;
//   margin: auto;
//   /* background-color: rgb(62 131 248) */
//   background-color: violet;
//   let footer = document.createElement("div");
//   footer.style.width = "100%";
//   footer.style.height = "300px";
//   footer.style.margin = "auto";
//   footer.backgroundColor = "green";
//   document.body.append(footer);
  
  
      let forma =  document.createElement("form")
  forma.style.border = "solid 1px"
  forma.style.width = "600px"
  forma.style.height = "280px"
  forma.style.margin = "auto";
  forma.style.marginTop = "50px";
  forma.style.backgroundColor = "#4B88A2";
  document.querySelector("#contentMain").append(forma)
  



  
      let forma1 = document.createElement("form")
      forma1.style.margin = "auto";
  forma1.style.width = "400px";
  forma1.style.height = "35px";
  forma1.style.marginTop = "10px";
  forma.prepend(forma1)
  

      let forma11 = document.createElement("input")
      forma11.style.margin = "auto";
  forma11.style.width = "400px";
  forma11.style.height = "35px";
  forma11.style.marginTop = "10px";
  forma11.setAttribute  ("value", "Name ")
  forma1.prepend(forma11)
  
      let forma2 = document.createElement("form")
      forma2.style.margin = "auto";
  forma2.style.width = "400px";
  forma2.style.height = "35px";
  forma2.style.marginTop = "10px";
  forma.prepend(forma2)  
  
  
  
      let forma22 = document.createElement("input")
      forma22.style.margin = "auto";
  forma22.style.width = "400px";
  forma22.style.height = "35px";
  forma22.style.marginTop = "10px";
  forma22.setAttribute  ("value", "SurName ")
  forma2.prepend(forma22);
  
  
      let forma3 = document.createElement("form")
      forma3.style.margin = "auto";
  forma3.style.width = "400px";
  forma3.style.height = "35px";
  forma3.style.marginTop = "10px";
  forma.prepend(forma3)  
  
  
  
      let forma33 = document.createElement("input")
      forma33.style.margin = "auto";
  forma33.style.width = "400px";
  forma33.style.height = "35px";
  forma33.style.marginTop = "10px";
  forma33.setAttribute ("value", "E-Mail ")
  
  forma3.prepend(forma33);
  
  
      
  
  
  let forma4 = document.createElement("form")
  forma4.style.margin = "auto";
  forma4.style.width = "400px";
  forma4.style.height = "35px";
  forma4.style.marginTop = "10px";
  forma.prepend(forma4)  
  
  
  
      let forma44 = document.createElement("input")
      forma44.style.margin = "auto";
  forma44.style.width = "400px";
  forma44.style.height = "35px";
  forma44.style.marginTop = "10px";
  forma44.setAttribute ("value", "Password ")
  forma44.setAttribute ("type" , "Password ")
  
  forma4.prepend(forma44);

  let forma0 = document.createElement("div")
  forma0.style.margin = "auto";
  forma0.style.width = "400px";
  forma0.style.height = "35px";
  forma0.style.fontSize = "1.4em"
  forma0.style.marginTop = "10px";
forma0.innerHTML = "<strong>Запишитесь на нашу консультацию</strong>"
forma.prepend(forma0)
// let showbutton = document.createElement('button');
// showbutton.style.display = "none";
// showbutton.onclick = show;
// showbutton.id = "show";
// showbutton.innerHTML = "Показать";
// document.body.append(showbutton);

let realfooter = document.createElement("div")
realfooter.style.width = "100%"
realfooter.style.height = "80px"
realfooter.style.backgroundColor = "#4B88A2"
document.body.append(realfooter)







































































// let z = 1234

// let x1
// x1 = z / 1000
// x1 = Math.floor(x1)

// let x2
// x2 = z / 100
// x2 = x2 % 10
// x2 = Math.floor(x2)


// let sum1 = x1 + x2
// console.log(sum1)

// let x3
// x3 = z / 10
// x3 = x3 % 10
// x3 = Math.floor(x3)

// let x4
// x4 = z / 1
// x4 = x4 % 10
// x4 = Math.floor(x4)

// let sum2 = x3 + x4
// console.log(sum2)


























// DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY 
// let z = prompt("Введите текущий год")
// // z++
// if(z % 4 == 0){
//     if(z % 100 == 0){
//         if(z % 400 == 0){
//             alert("високосный год")
//         }
//         else{
//             alert("не високосный год")
//         }
//     }
//     else{
//         alert("не високосный год")
//     }
// }
// else{
//     alert("не високосный год")
// }
// DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY DESTROY 































let min = 10;
let max = 99;

let z = Math.floor(Math.random() * (max - min + 1)) + min
console.log(z)
let x = Math.floor(z / 10)
let c = z % 10
console.log(x + c)
console.log(x * c)