
function getRandomInt(min, max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// function active() {
//      let bgBlue = document.querySelectorAll(".col");
//      bgBlue.classList.add("active");
   
//  }

  

function easy() {
     let container = document.querySelector('main');
     

     let row = document.createElement('div');
     row.setAttribute('class', 'row');
     console.log(row)

     let colsCreate = colonneEasy();
     console.log(colsCreate);
     row.innerHTML = colsCreate;
     container.append(row);
     console.log(row);
     return container
}




const colEasy = 100


 function colonneEasy() {
   let cols = '';
   let numeriusati = [];
   for(let i = 1; i <= colEasy; i++){ 
      cols += `
     <div class="col"> ${i}</div>
     `;
    }
  return cols
 }

 document.getElementById('generate').addEventListener('click', easy);
//  document.getElementsByClassName("col").addEventListener("click", active);
 
 function hard() {
    let container = document.querySelector('main');
    

    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    console.log(row)

    let colsCreate = colonneHard();
    console.log(colsCreate);
    row.innerHTML = colsCreate;
    container.append(row);
    console.log(row);
    return container
}




const colHard = 81


function colonneHard() {
  let cols = '';
  let numeriusati = [];
  for(let i = 1; i <= colHard; i++){ 
     cols += `
    <div class="col-1"> ${i}</div>
    `;
   }
 return cols
}

function crazy() {
    let container = document.querySelector('main');
    

    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    console.log(row)

    let colsCreate = colonneCrazy();
    console.log(colsCreate);
    row.innerHTML = colsCreate;
    container.append(row);
    console.log(row);
    return container
}




const colCrazy = 49


function colonneCrazy() {
  let cols = '';
  let numeriusati = [];
  for(let i = 1; i <= colCrazy; i++){ 
     cols += `
    <div class="col-"> ${i}</div>
    `;
   }
 return cols
}





//  const casella = document.querySelectorAll('.col')
//  for(i=0; i < casella.length; c++){
//      let a = i
//      casella[i].addEventListener('click', function(){
//         casella[a].classList.add('active')
//          console.log(casella[d])
//      })
//      console.log(a)
//  }

function coloraSfondo(){
  const coloraCelle = document.querySelectorAll(".col");
  return coloraCelle;
}
let colora = coloraSfondo();
console.log(colora);

for(let i = 0; i < colora.length; i++){
  colora[i].addEventListener('click', function(){
     colora[i].classList.add('active');
  })
} 
