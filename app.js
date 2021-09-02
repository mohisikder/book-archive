const inputField = document.getElementById('inputField')
const totalFoundItems = document.getElementById('searchFound')
const bookList = document.getElementById('bookList')
const errorDiv = document.getElementById('error')
const inputEmpty = document.getElementById('inputEmpty')

// spinner function
loadingSpinner = (property) => {
   const loadingSpinner = document.getElementById("loadingSpinner");
   loadingSpinner.style.visibility = property;
 };

// Input Field
searchBtn = () =>{
   const inputValue = inputField.value
   bookList.textContent = "";
  totalFoundItems.innerText = "";

      if (inputValue === "") {
         loadingSpinner('hidden')
         inputEmpty.style.display = "block";
         errorDiv.style.display = "none";
         totalFoundItems.innerText = "";
         bookList.textContent = "";
      } else {
         loadingSpinner('visible')
         inputEmpty.style.display = "none";
      
   //  book url
   const url = `http://openlibrary.org/search.json?q=${inputValue}`;

   fetch(url)
      .then(res => res.json())
      .then(data => bookListDisplay(data))
      }
      inputField.value = ''
   }

bookListDisplay = data =>{
   totalFoundItems.innerText = `About ${data.numFound} results`

   if(data.numFound === 0){
      totalFoundItems.innerText = ''
      errorDiv.style.display = "block"
      loadingSpinner('hidden')
   }else{
      errorDiv.style.display("none")
      const bookList = document.getElementById("bookList")

   data.docs.forEach(item => {
      console.log(item)
      const div = document.createElement('div')
      // Image Show
      item?.cover_i ? (imgUrl = `https://covers.openlibrary.org/b/id/${item?.cover_i}-M.jpg`)
        : (imgUrl = "images/no-image-available.jpg");

      // Author
      item?.author_name ? (author = item?.author_name.join()) : (author = "not available");
      // Publisher
      item?.publisher[0] ? (publisher = item?.publisher[0]) : (publisher = "not available");
      // Publish date
      item?.publish_date[0] ? (publishDate = item?.publish_date[0]) : (publishDate = "not available");
      //First Published Year
      item?.publish_year[0] ? (firstPublishYear = item?.publish_year[0]) : (firstPublishYear = "not available");

      div.innerHTML = `
      <div class="col">
          <div class="card shadow">
               <img src=${imgUrl}  class="card-img-top" height='400px' alt="...">
              <div class="card-body">
                  <h4 id="author" class="card-title">${item?.title}</h4>
                  <p class="card-text">Author:  <span class ="text-secondary"> ${author} </span></p>
                  <p class="card-text">Publisher: <span class ="text-secondary"> ${publisher} </span> </p>
                  <p class="card-text">Published: <span class ="text-secondary">  ${publishDate} </span> </p>
                  <p class="card-text">First published in <span class ="text-secondary">  ${firstPublishYear} </span> </p>
              </div>
          </div>
      </div>
      `
      bookList.appendChild(div)
      loadingSpinner('hidden')
   });
   }
}



 