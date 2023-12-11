

// let a = "what is up brother"

// let  c = a.split("")
// .map(parseInt)
// console.log(c)

// let b = e
// let v = parseInt(b)

// console.log(v)

// Throttle function
// function throttle(func, delay) {
//   let lastCall = 0;

//   return function() {
//     const now = Date.now();

//     if (now - lastCall >= delay) {
//       func.apply(this, arguments);
//       lastCall = now;
//     }
//   };
// }

// // Example function to be throttled
// function handleScroll() {
//   console.log('Scrolled!');
//   // Your actual code to handle the scroll event goes here
// }

// // Throttle the function using the throttle utility
// const throttledHandleScroll = throttle(handleScroll, 1000); // 1000ms (1 second) delay

// // Attach the throttled function to the scroll event
// window.addEventListener('scroll', throttledHandleScroll);


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
 
function handleInput() {
  console.log('Input event handled!');
  
}

const debouncedHandleInput = debounce(handleInput, 1000);
document.querySelector('#user-input')
.addEventListener('input', debouncedHandleInput);