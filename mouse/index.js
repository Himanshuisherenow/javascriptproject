const cursor = document.querySelector('.cursor');
var random ;

const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];

document.addEventListener('mousemove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.right = `${event.clientY}px`;

  console.log(event);

  cursor.animate(
    {  
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
    },
    {
      duration: 1000,
      fill: 'both',
    }
  );
  cursor.style.backgroundColor = colors[random];
});
