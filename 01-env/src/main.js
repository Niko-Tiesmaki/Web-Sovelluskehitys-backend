import './style.css'
import {patJeff} from './pat.js'
import jeffLogo from '/jeff.png'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://marvelrivals.fandom.com/wiki/Jeff_the_Land_Shark" target="_blank">
      <img id = "jeffMain" src="${jeffLogo}" class="logo" alt="Jeff logo" />
    </a>
    <h1>This is Jeff</h1>
    <div class="card">
      <button id="counter" type="button">Pat Jeff</button>
    </div>
    <p class="read-the-docs">
      Beloved Jeff
    </p>
  </div>
`

patJeff(document.querySelector('#counter'))