
function getRandomInt(min, max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



function griglia() {
     let container = document.querySelector('main');
     

     let row = document.createElement('div');
     row.setAttribute('class', 'row');
     console.log(row)

     let colsCreate = creaColonne();
     console.log(colsCreate);
     row.innerHTML = colsCreate;
     container.append(row);
     console.log(row);
}




const colEasy = 100


 function creaColonne() {
   let cols = '';
   let numeriusati = [];
   for(let i = 1; i <= colEasy; i++){ 
      cols += `
     <div class="col"> ${i}</div>
     `;
    }
  return cols
 }

 document.getElementById('generate').addEventListener('click', griglia);
 