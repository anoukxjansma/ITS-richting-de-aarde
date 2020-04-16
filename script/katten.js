
fetch('https://aws.random.cat/meow')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.file);
  })


var pussyUrl = 'https://api.thecatapi.com/v1/images/search?limit=1&page=1&api_key=f975e25b-7234-4126-8039-b4388912bbcb';
var pussyImg = document.querySelector(".background");
var button = document.getElementById('change');

function setup(){
loadJSON(pussyUrl, getPussy);

button.addEventListener('click', ()=>{
  loadJSON(pussyUrl, getPussy);
});


}

function getPussy(pussy){
  console.log(pussy);
  console.log(pussy[0].url);
  var achtergrond = "url('"+pussy[0].url+"')";

  pussyImg.style.background = achtergrond;
  pussyImg.style.backgroundRepeat = "no-repeat";
  pussyImg.style.backgroundSize = "cover";
  pussyImg.style.backgroundPosition = "center";




}
