var svg = document.createElementNS('https://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';

text.textContent = 'Hello World!';

svg.appendChild(text);
document.body.appendChild(svg);