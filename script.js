const inputField = document.getElementById('inputField')
const searchBtn = document.getElementById('searchBtn')
const totalSearchFound = document.getElementById('searchFound')
const errorDiv = document.getElementById('error')

// API Link
const url = `http://openlibrary.org`

// 
searchBtn.addEventListener("click", () => {
   const inputText = inputField.value
   // console.log(inputText)

   // Search field clear
   inputText.value = ""
   textContent = ''
   const url = `https://openlibrary.org/search.json?q=${inputText}`

   fetch(url)
      .then(res => res.json())
      .then(data => displayBook(data.docs))

})

const displayBook = data =>{
   // Show the total search result
   const totalFoundItems = data.length
   const totalSearchResult = document.getElementById('total-results')
   totalSearchResult.textContent = ''
   const div = document.createElement('div')
   div.innerHTML = `
      <span>About ${totalSearchItems} results</span>
   `
   totalSearchResult.appendChild(div)


   // Collect the single Item
   const searchResult = document.getElementById('search-result')
   const bookCoverImage = `https://covers.openlibrary.org/b/id/${search.cover_i}-M.jpg`
   searchResult.textContent = ""
   searchData.forEach(search => {
      // console.log(search.length)
      const div = document.createElement('div')
      div.classList.add('col')
      div.innerHTML = `
      <div class="card h-100">
      <img src="${bookCoverImage}" class="card-img-top" alt="Cover of: ${bookCoverImage}">
      <div class="card-body">
        <h5 class="card-title">${search.title}</h5>
        h6>${search.author_name}</h6>
        <p class="card-text">First published in ${search.first_publish_year}</p>
      </div>
    </div>
      `
      searchResult.appendChild(div)
   });
}

// Search is Empty

// $( function () {
//    var i;
//    for ( i = 0; i < window.q.length; i++ ) {
//        $( window.q[i] );
//    }
//    window.q = [];
// } );

// if (typeof archive_analytics !== 'Result Not Found.') {
//  archive_analytics.set_up_event_tracking();
// }