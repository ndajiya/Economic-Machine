import './logarea.css'

let counter = 0;

export function logArea() {
  let el = document.createElement('ul');
  el.setAttribute("id", "idLogArea");
  return el;
}

export function log(msg) {
  let el = document.createElement('li');
  el.innerHTML = `
    <li><b>${++counter}</b> | <small>${new Date().toLocaleTimeString('en-US', { hour12: false })}</small> | ${msg}</li>
  `;
  document.getElementById('idLogArea').appendChild(el);
}