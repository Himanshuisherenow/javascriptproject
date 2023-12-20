


function debounce(func, delay) {
  let timeoutId;

  return function() {
    const context = this;
    const args = arguments;

      
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
   

   
  };
} 
 
function handleInput(){
  console.log('Input event handled!');
}

const debouncedHandleInput = debounce(handleInput, 1000);

document.querySelector('#user-input')
.addEventListener('input', debouncedHandleInput);