

// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

let cityInput = document.getElementById("cityName");
let search = document.getElementById("searchBtn");
let result = document.getElementById("result");

const options = {
	method: 'GET',
	headers: {'X-Api-Key': ''}
};

search.addEventListener('click',()=>{
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityInput.value+"&appid=4d8fb5b93d4af21d66a2948710284366&units=metric")
	.then(response => response.json())
	.then(response => {console.log(response)
    result.textContent = JSON.stringify(response);}
    )
	.catch(err => console.error(err));
}
)
