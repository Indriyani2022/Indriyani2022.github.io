document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const books = document.querySelectorAll('.book');

    function filterBooks() {
        const query = searchInput.value.toLowerCase();
        books.forEach(function (book) {
            const title = book.querySelector('.card-title').textContent.toLowerCase();
            const description = book.querySelector('.card-text').textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', function () {
        filterBooks();
    });

    document.getElementById('book-image-1').addEventListener('click', function() {
  var shortDesc = document.querySelector('.short-desc');
  var fullDesc = document.querySelector('.full-desc');
  
  // Toggle visibility of the short and full descriptions
  if (fullDesc.style.display === 'none') {
    fullDesc.style.display = 'block';
    shortDesc.style.display = 'none';
  } else {
    fullDesc.style.display = 'none';
    shortDesc.style.display = 'block';
  }
});
    searchInput.addEventListener('input', function () {
        filterBooks();
    });
});
