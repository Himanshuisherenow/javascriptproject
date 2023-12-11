const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  
  e.preventDefault()

 const info = {

   "title" : title.value,
   "author":author.value,
   "year" : year.value
 }
 
 if (info.title && info.author && info.year) {
  

  
    // Create a new entry
    const newEntry = document.createElement('tr');
    
      newEntry.innerHTML += `<th>${info.title}</th>`;
      newEntry.innerHTML += `<th>${info.author}</th>`;
      newEntry.innerHTML += `<th>${info.year}</th>`;
    console.log(newEntry.value)


    

    // Append the new entry to th e book list section
    bookList.appendChild(newEntry);

    // Clear input values
    title.value = '';
    author.value = '';
    year.value = '';
  }
});
