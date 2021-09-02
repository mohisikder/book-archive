const searchField = document.getElementById('search-field')
const searchBtn = document.getElementById('search-btn')

// API Link
const url = `http://openlibrary.org`

// 
searchBtn.addEventListener("click", () => {
   const searchText = searchField.value
   // Search field clear
   searchField.value = ""
   textContent = ''
   const url = `https://openlibrary.org/search.json?q=${searchText}`

   fetch(url)
      .then(res => res.json())
      .then(data => getSearchResult(data.docs))
})

const getSearchResult = searchData =>{
   // Show the total search result
   const totalSearchItems = searchData.length
   const totalSearchResult = document.getElementById('total-results')
   totalSearchResult.textContent = ''
   const div = document.createElement('div')
   div.innerHTML = `
      <span>About ${totalSearchItems} results</span>
   `
   totalSearchResult.appendChild(div)


   // Collect the single Item
   const searchResult = document.getElementById('search-result')
   searchResult.textContent = ""
   searchData.forEach(search => {
      // console.log(search.length)
      const div = document.createElement('div')
      div.classList.add('col-md-6')
      div.classList.add('d-flex')

      div.innerHTML = `
      <div class="me-4 my-4">
      <img class="img-fluid" src="https://covers.openlibrary.org/b/id/${search.cover_i}-M.jpg" alt="" srcset="">
   </div>
   <div class="my-4">
      <h4>${search.title}</h4>
      <h6>${search.author_name}</h6>
      <p>First published in ${search.first_publish_year}</p>
   </div>
      `
      searchResult.appendChild(div)
   });
}