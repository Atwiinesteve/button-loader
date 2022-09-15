( function() {

 const btn = document.querySelector('#search-button');
 const loader = document.querySelector('#search-button div');

 btn.addEventListener('click', runLoader);

 function runLoader() {
  loader.classList.toggle('loading')
 }

} ());