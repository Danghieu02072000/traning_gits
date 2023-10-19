const root = document.querySelector('.root')
const h1 = document.createElement('h1')

root.appendChild(h1);
h1.innerText = 'Hello Word';
h1.id = 'hello';
h1.className = 'hi';

console.log (Object.assign(h1.style, {
  color: 'red',
  backgroundColor: 'blue'
}))