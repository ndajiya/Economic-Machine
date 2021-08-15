import './style.less'
import startSim from './sim/start.js'
import { logArea, log } from './logging/logarea.js'

document.getElementById('app').innerHTML = `
  <h1>Economic Machine</h1>
  <br/>
  <button id="btn_start_sim" class="button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Start Sim
  </button>
  <div id="log_area"></div>
`

document.getElementById('btn_start_sim').addEventListener('click', startSim)

document.getElementById('log_area').appendChild(logArea());

log("call log('message') to display here");
