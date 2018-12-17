
// The main button that will have  button that will have an ajax accounts
const mainBtn = document.getElementById('mainBtn');

// It will display the  the joke
const result = document.getElementById('result');


const img = document.getElementById('img');


mainBtn.addEventListener('click', function(){
    // creates an instantc
     const ajax = new XMLHttpRequest();

     ajax.onerror = function(){
         console.log('there was an error');
     }

     ajax.send();
})