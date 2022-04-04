
function getRandomInt(min, max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



function griglia() {
     let container = document.querySelector('main');
     container.setAttribute('class', 'container');
     let row = document.createElement('div');
     row.setAttribute('class', 'row');
     let colsCreate = creaColonne();
     console.log(colsCreate);
     row.innerHTML = colsCreate;
     container.append(row);
     console.log(row);
}

griglia()


const colEasy = 100


 function creaColonne() {
   let cols = '';
   let numeriusati = [];
   for(let i = 0; i <= colEasy.length; i++){ 
      cols += `
     <div class="col"> ${1}</div>
     `;
    }
 }

 document.getElementById('generate').addEventListener('click', griglia);
 