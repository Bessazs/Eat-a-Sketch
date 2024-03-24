let opaci = false;
let blackWhite =  false;
let raibown = false;


let grid = document.querySelector('#rangegrid');
let btnTen = document.querySelector('.btn-ten');
let btnClear = document.querySelector('.btn-clear');
let inputColor = document.querySelector('#chossecolor');
let btnBlackWithe = document.querySelector('.blackwhite')
let btnRaibown =  document.querySelector('.raibown');



btnRaibown.addEventListener('click', ()=>{
    if (raibown==false) {
        raibown = true
        blackWhite = false
    }else{
        raibown = false
    }   
});

btnBlackWithe.addEventListener('click', ()=>{
    if (blackWhite==false) {
        blackWhite = true
        raibown = false
    }else{
        blackWhite = false
    }   
});


btnClear.addEventListener('click', ()=>{
    cleanGrid()});

btnTen.addEventListener('click',()=>{
    if (opaci==false) {
        opaci = true
    }else{
        opaci = false
    }
})


grid.addEventListener('input',()=>{
    removeGrid();
    apllyGrid(grid);
    colorTen(inputColor);        

});




function colorTen(inputColor) {   
    let hoverDivs = document.querySelectorAll('.div-child');
 
    hoverDivs.forEach(divs => divs.style.opacity = 0.1);
    hoverDivs.forEach(divs =>{  
        divs.addEventListener('mouseover', ()=>{
        let color = inputColor.value;
        if (blackWhite == true) {
            divs.style.backgroundColor = 'black';
    
        } else if (raibown == true) {
            divs.style.backgroundColor = '#'+Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
          
            
        }else{
            divs.style.backgroundColor = color
            

        }
            
        
        
        if (opaci == true) {
            divs.style.opacity = parseFloat(divs.style.opacity) + 0.1;
        }else{
            divs.style.opacity = 1;      
        }
        })});
    }



function apllyGrid(grid) {
    let valor = grid.value;
    for (let index = 0; index < (valor*valor); index++) {
        let div = document.querySelector('.main-div');
        let childDiv = document.createElement('div');
        childDiv.classList.add('div-child');
        childDiv.style.flexBasis= 100/valor+'%'
        childDiv.style.height= 100/valor+'%'
        div.appendChild(childDiv);
    }

}


function removeGrid() {
    let  divs = document.querySelectorAll('.div-child');
    divs.forEach(div => div.remove());
}

function cleanGrid(){
    let  divs = document.querySelectorAll('.div-child');
    divs.forEach(div=>{
    div.style.backgroundColor = 'white';
    div.style.opacity = 0.1});

}

