
// let str = `${name1} ${middleName} ${lastName}`;

document.getElementById('btn').addEventListener('click', showHere);
function showHere(){
    let name1 = document.getElementById('Name').value;
   let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value;


  let value =  document.querySelector('#heading');
  value.setAttribute('class="heyy"');
  value.innerHTML = `${name1} ${middleName} ${lastName}`;
 

}

let chars = document.getElementById('btnf');
chars.addEventListener('click', count);
function count(){
  let ccount = document.getElementById('namechars').value;

  alert(ccount.trim().length);
}